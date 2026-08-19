"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FileText, ArrowRight, X, Trash2, CheckCircle2, ShoppingBag } from "lucide-react";
import QuoteModal from "@/components/QuoteModal";
import { PRODUCTS } from "@/lib/products";

interface QuoteContextType {
  isQuoteModalOpen: boolean;
  selectedProducts: string[];
  addToQuote: (productName: string) => void;
  removeFromQuote: (productName: string) => void;
  toggleQuoteItem: (productName: string) => void;
  clearQuote: () => void;
  isItemInQuote: (productName: string) => boolean;
  openQuoteModal: (initialProductOrCategory?: string) => void;
  closeQuoteModal: () => void;
}

const QuoteContext = createContext<QuoteContextType | undefined>(undefined);

export function QuoteProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProducts, setSelectedProducts] = useState<string[]>([]);
  const [defaultCategory, setDefaultCategory] = useState<string>("");

  const addToQuote = (productName: string) => {
    if (!productName) return;
    setSelectedProducts((prev) =>
      prev.includes(productName) ? prev : [...prev, productName]
    );
  };

  const removeFromQuote = (productName: string) => {
    setSelectedProducts((prev) => prev.filter((p) => p !== productName));
  };

  const toggleQuoteItem = (productName: string) => {
    if (!productName) return;
    setSelectedProducts((prev) =>
      prev.includes(productName)
        ? prev.filter((p) => p !== productName)
        : [...prev, productName]
    );
  };

  const clearQuote = () => {
    setSelectedProducts([]);
  };

  const isItemInQuote = (productName: string) => {
    return selectedProducts.includes(productName);
  };

  const openQuoteModal = (productOrCategory?: string) => {
    if (productOrCategory) {
      // Check if it's an exact or partial product name in the catalog
      const foundProduct = PRODUCTS.find(
        (p) => p.name.toLowerCase() === productOrCategory.toLowerCase()
      );

      if (foundProduct) {
        if (!selectedProducts.includes(foundProduct.name)) {
          setSelectedProducts((prev) => [...prev, foundProduct.name]);
        }
      } else {
        // Could be a category or custom string
        setDefaultCategory(productOrCategory);
      }
    }
    setIsOpen(true);
  };

  const closeQuoteModal = () => {
    setIsOpen(false);
  };

  return (
    <QuoteContext.Provider
      value={{
        isQuoteModalOpen: isOpen,
        selectedProducts,
        addToQuote,
        removeFromQuote,
        toggleQuoteItem,
        clearQuote,
        isItemInQuote,
        openQuoteModal,
        closeQuoteModal,
      }}
    >
      {children}

      {/* Floating Multi-Product RFQ Dock */}
      <AnimatePresence>
        {selectedProducts.length > 0 && !isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.95 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[94%] max-w-xl bg-[#091D33] border-2 border-white/20 text-white rounded-full shadow-[0_20px_60px_rgba(0,0,0,0.6)] px-4 py-3 sm:px-5 sm:py-3 flex items-center justify-between gap-3"
          >
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-burgundy border border-white/30 flex items-center justify-center font-black text-xs sm:text-sm shrink-0 text-white shadow-md">
                {selectedProducts.length}
              </div>
              <div className="min-w-0">
                <div className="text-xs sm:text-sm font-bold text-white truncate">
                  {selectedProducts.length === 1
                    ? selectedProducts[0]
                    : `${selectedProducts.length} Medical Products Selected`}
                </div>
                <div className="text-[10px] sm:text-[11px] text-slate-300 truncate hidden sm:block">
                  Ready for factory unit price &amp; RFQ documentation
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <button
                type="button"
                onClick={clearQuote}
                className="p-2 rounded-full bg-white/10 hover:bg-red-500/20 text-white/80 hover:text-red-300 transition-colors cursor-pointer"
                title="Clear RFQ list"
                aria-label="Clear RFQ list"
              >
                <Trash2 className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={() => setIsOpen(true)}
                className="inline-flex items-center gap-1.5 py-2.5 px-4 sm:px-5 rounded-full bg-burgundy-gradient text-white text-xs sm:text-sm font-bold shadow-md hover:shadow-lg hover:scale-102 active:scale-98 transition-all cursor-pointer"
              >
                <span>Request Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Quote Modal */}
      <QuoteModal
        isOpen={isOpen}
        onClose={closeQuoteModal}
        selectedProducts={selectedProducts}
        onRemoveProduct={removeFromQuote}
        onAddProduct={addToQuote}
        onClearProducts={clearQuote}
        defaultCategory={defaultCategory}
      />
    </QuoteContext.Provider>
  );
}

export function useQuoteModal() {
  const context = useContext(QuoteContext);
  if (!context) {
    throw new Error("useQuoteModal must be used within a QuoteProvider");
  }
  return context;
}

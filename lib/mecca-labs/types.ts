export type ProductStatus =
  | "Available"
  | "Under Development"
  | "ACTD"
  | "ACTD / CTD / NON-CTD"
  | "ACTD / NON-CTD"
  | "NON-CTD"
  | string;

export interface Product {
  sr?: number | string;
  name: string;
  strength?: string;
  pack?: string;
  use?: string;
  status?: ProductStatus;
  detail?: string;
}

export interface SubCategory {
  title?: string;
  columns?: Array<"strength" | "pack" | "use" | "status">;
  products: Product[];
}

export interface Category {
  id: string;
  number: string;
  title: string;
  subtitle?: string;
  description: string;
  subgroups: SubCategory[];
}

export interface Catalogue {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  badge: string;
  compliance: string[];
  heroImage: string;
  pdfUrl: string;
  pdfFileName: string;
  categories: Category[];
}

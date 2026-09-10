import subprocess, os

edge = r'C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe'

tests = [
    ('products_mecca_labs', 'http://localhost:3000/products/mecca-labs', 'C:\\Users\\Dhanvi\\.gemini\\antigravity-ide\\brain\\f5ead33b-4e8e-4c11-83b7-393c332665bc\\products_mecca_labs_v2.png', '1280,2400'),
    ('original_pharma_detail', 'http://localhost:3000/products/pharmaceutical-product-list', 'C:\\Users\\Dhanvi\\.gemini\\antigravity-ide\\brain\\f5ead33b-4e8e-4c11-83b7-393c332665bc\\original_pharma_detail.png', '1280,2400'),
    ('coded_pharma', 'http://localhost:3000/mecca-labs/pharmaceutical', 'C:\\Users\\Dhanvi\\.gemini\\antigravity-ide\\brain\\f5ead33b-4e8e-4c11-83b7-393c332665bc\\coded_pharma_v2.png', '1280,2400'),
    ('coded_milk', 'http://localhost:3000/mecca-labs/milk', 'C:\\Users\\Dhanvi\\.gemini\\antigravity-ide\\brain\\f5ead33b-4e8e-4c11-83b7-393c332665bc\\coded_milk_v2.png', '1280,2400'),
    ('coded_cosme', 'http://localhost:3000/mecca-labs/cosmeceutical', 'C:\\Users\\Dhanvi\\.gemini\\antigravity-ide\\brain\\f5ead33b-4e8e-4c11-83b7-393c332665bc\\coded_cosme_v2.png', '1280,2400'),
    ('coded_domestic', 'http://localhost:3000/mecca-labs/domestic', 'C:\\Users\\Dhanvi\\.gemini\\antigravity-ide\\brain\\f5ead33b-4e8e-4c11-83b7-393c332665bc\\coded_domestic_v2.png', '1280,2400'),
    ('coded_export', 'http://localhost:3000/mecca-labs/export', 'C:\\Users\\Dhanvi\\.gemini\\antigravity-ide\\brain\\f5ead33b-4e8e-4c11-83b7-393c332665bc\\coded_export_v2.png', '1280,2400'),
]

for name, url, out, size in tests:
    cmd = [edge, '--headless', '--disable-gpu', '--virtual-time-budget=3000', f'--window-size={size}', f'--screenshot={out}', url]
    print(f'Testing {name}: {url}')
    res = subprocess.run(cmd, capture_output=True, text=True)
    if os.path.exists(out):
        print(f'  [OK] {name} OK ({os.path.getsize(out)} bytes)')
    else:
        print(f'  [FAILED] {name} failed')

print('Verification script finished!')

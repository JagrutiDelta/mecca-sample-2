import subprocess, os, time

routes = [
    ('mecca-labs', 'http://localhost:3000/mecca-labs', 'C:\\Users\\Dhanvi\\.gemini\\antigravity-ide\\brain\\f5ead33b-4e8e-4c11-83b7-393c332665bc\\page_mecca_labs.png', '1280,2500'),
    ('pharmaceutical', 'http://localhost:3000/mecca-labs/pharmaceutical', 'C:\\Users\\Dhanvi\\.gemini\\antigravity-ide\\brain\\f5ead33b-4e8e-4c11-83b7-393c332665bc\\page_pharmaceutical.png', '1280,3000'),
    ('milk', 'http://localhost:3000/mecca-labs/milk', 'C:\\Users\\Dhanvi\\.gemini\\antigravity-ide\\brain\\f5ead33b-4e8e-4c11-83b7-393c332665bc\\page_milk.png', '1280,3000'),
    ('cosmeceutical', 'http://localhost:3000/mecca-labs/cosmeceutical', 'C:\\Users\\Dhanvi\\.gemini\\antigravity-ide\\brain\\f5ead33b-4e8e-4c11-83b7-393c332665bc\\page_cosmeceutical.png', '1280,3000'),
    ('domestic', 'http://localhost:3000/mecca-labs/domestic', 'C:\\Users\\Dhanvi\\.gemini\\antigravity-ide\\brain\\f5ead33b-4e8e-4c11-83b7-393c332665bc\\page_domestic.png', '1280,3000'),
    ('export', 'http://localhost:3000/mecca-labs/export', 'C:\\Users\\Dhanvi\\.gemini\\antigravity-ide\\brain\\f5ead33b-4e8e-4c11-83b7-393c332665bc\\page_export.png', '1280,3000'),
]

edge = r'C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe'

for name, url, out, size in routes:
    cmd = [edge, '--headless', '--disable-gpu', f'--window-size={size}', f'--screenshot={out}', url]
    print(f'Capturing {name} from {url}...')
    res = subprocess.run(cmd, capture_output=True, text=True)
    if os.path.exists(out):
        print(f'  ✓ {name}: {os.path.getsize(out)} bytes')
    else:
        print(f'  ✗ Failed {name}')

print('All captures complete!')

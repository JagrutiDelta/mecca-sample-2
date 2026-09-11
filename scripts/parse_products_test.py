import json, re

with open('scripts/domestic_raw.json', 'r', encoding='utf-8') as f:
    pages = json.load(f)

# Let's inspect 10 raw products
content = ''
for p in pages[3:]:
    lines = p['text'].split('\n')
    filtered = [l for l in lines if not ('MECCA LABS' in l and ('NUTRACEUTICAL' in l or 'Catalogue' in l or 'www.mhplindia.in' in l))]
    content += '\n' + '\n'.join(filtered)

pattern = r'(?:^|\n)\s*(\d{2})\s*\n+([A-Z0-9\s/&()\-–]+?)\n+([^\n]+?)\n+\s*S\.N\.\s+BRAND\s+NAME'
splits = list(re.finditer(pattern, content))

for i, m in enumerate(splits[:3]):
    sec_num = m.group(1).strip()
    sec_title = m.group(2).strip()
    start_pos = m.end()
    end_pos = splits[i+1].start() if i + 1 < len(splits) else len(content)
    sec_body = content[start_pos:end_pos]
    
    prod_matches = list(re.finditer(r'(?:^|\n)\s*(\d+)\s+([A-Za-z0-9])', sec_body))
    for pi, pm in enumerate(prod_matches[:3]):
        p_num = int(pm.group(1))
        p_start = pm.start() + (1 if sec_body[pm.start()] == '\n' else 0)
        p_end = prod_matches[pi+1].start() if pi + 1 < len(prod_matches) else len(sec_body)
        raw_p = sec_body[p_start:p_end].strip()
        lines = [l.strip() for l in raw_p.split('\n') if l.strip()]
        print(f"--- P#{p_num} in Sec {sec_num} (lines: {len(lines)}) ---")
        for li, l in enumerate(lines):
            print(f"  [{li}] {l[:80]}")

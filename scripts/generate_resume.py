"""Generate a selectable-text, single-column resume. Requires reportlab."""
from pathlib import Path
import json, html, shutil
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, PageBreak
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib import colors
from reportlab.lib.enums import TA_LEFT
ROOT = Path(__file__).resolve().parents[1]
d = json.loads((ROOT / 'src/data/resume.json').read_text(encoding='utf-8'))
styles = getSampleStyleSheet()
styles.add(ParagraphStyle(name='NameLine',fontName='Helvetica-Bold',fontSize=23,leading=27,spaceAfter=5))
styles.add(ParagraphStyle(name='RoleLine',fontName='Helvetica-Bold',fontSize=11,leading=15,spaceAfter=6))
styles.add(ParagraphStyle(name='SectionLine',fontName='Helvetica-Bold',fontSize=10,leading=14,spaceBefore=12,spaceAfter=6,textColor=colors.HexColor('#17345b')))
styles.add(ParagraphStyle(name='CopyLine',fontName='Helvetica',fontSize=9.5,leading=13,spaceAfter=4))
styles.add(ParagraphStyle(name='BulletLine',parent=styles['CopyLine'],leftIndent=10,firstLineIndent=-8,spaceAfter=3))
styles.add(ParagraphStyle(name='SmallLine',fontName='Helvetica',fontSize=8.5,leading=11,spaceAfter=4))
story=[]; md=[]
def p(text,style='CopyLine'):
    story.append(Paragraph(text,styles[style]))
def section(title):
    p(title.upper(),'SectionLine');md.append('\n## '+title+'\n')
def bullet(text):
    p('- '+html.escape(text),'BulletLine');md.append('- '+text)
p(d['name'],'NameLine');p(html.escape(d['title']),'RoleLine')
md.extend(['# '+d['name'],d['title'],' | '.join(d['contact'])])
p(' | '.join(map(html.escape,d['contact'][:3])),'SmallLine')
for url in d['contact'][3:]:
    p('<link href="https://'+url+'">'+url+'</link>','SmallLine')
section('Professional Summary');p(html.escape(d['summary']));md.append(d['summary'])
section('Technical Skills')
for label,value in d['skills']:
    p('<b>'+label+':</b> '+html.escape(value));md.append(label+': '+value)
section('Professional Experience')
for exp in d['experiences']:
    p('<b>'+html.escape(exp['role'])+' | '+html.escape(exp['company'])+'</b>')
    p(exp['period']+' | '+exp['location'],'SmallLine')
    md.extend(['\n### '+exp['role']+' | '+exp['company'],exp['period']+' | '+exp['location']])
    for point in exp['achievements']:bullet(point)
    story.append(Spacer(1,4))
story.append(PageBreak())
p(d['name']+' | Selected Projects','RoleLine')
section('Selected Engineering Projects')
for project in d['projects']:
    p('<b>'+html.escape(project['name'])+'</b> | '+html.escape(project['status']))
    p(html.escape(project['stack']),'SmallLine')
    md.extend(['\n### '+project['name']+' | '+project['status'],project['stack']])
    for point in project['points']:bullet(point)
    story.append(Spacer(1,3))
section('Independent Product Launches - CompileCraft')
md.append('https://compilecraft.in')
for name,desc,url in d['launches']:
    p('<b>'+name+':</b> '+html.escape(desc))
    p('<link href="'+url+'">'+url+'</link>','SmallLine')
    md.append('- '+name+': '+desc+' '+url)
section('Education')
for degree in d['education']:p(degree);md.append(degree)
output=ROOT/'public/Raj_Kumar_Resume.pdf'
SimpleDocTemplate(str(output),pagesize=(595.28,841.89),leftMargin=43,rightMargin=43,topMargin=34,bottomMargin=34,title='Raj Kumar - Backend Engineer Resume',author='Raj Kumar').build(story)
shutil.copyfile(output,ROOT/'src/Assets/Raj_Kumar_Resume.pdf')
(ROOT/'Resume.md').write_text('\n\n'.join(md)+'\n',encoding='utf-8')
# Preserve an editable HTML version with ordinary headings and paragraphs.
parts=['<!doctype html><html lang="en"><meta charset="utf-8"><title>Raj Kumar Resume</title><style>body{max-width:780px;margin:40px auto;padding:20px;font:15px/1.5 Arial;color:#111}h1,h2,h3{line-height:1.2}h2{border-bottom:1px solid #aaa;padding-bottom:6px}a{color:#17345b}</style><body>']
for line in md:
    for para in line.strip().split('\n'):
        tag='h1' if para.startswith('# ') else 'h2' if para.startswith('## ') else 'h3' if para.startswith('### ') else 'p'
        parts.append('<'+tag+'>'+html.escape(para.lstrip('# ').strip())+'</'+tag+'>')
parts.append('</body></html>')
(ROOT/'public/Raj_Kumar_Resume.html').write_text('\n'.join(parts),encoding='utf-8')
print(output)

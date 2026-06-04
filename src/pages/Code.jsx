import { templates } from '../data/templates.js';
import { Card } from '../components/Card.jsx';

const modules = ['Editor', 'Snippets', 'Templates', 'AI Coding'];

export function CodePage() {
  return (
    <section className="page-grid">
      <div className="hero-panel"><span className="eyebrow">Code Studio</span><h1>Editor, snippet, template và AI coding.</h1></div>
      {modules.map((module) => <Card key={module} title={module} meta="Code"><p>Khu vực {module} cho lập trình nhanh trong RKIX3.</p></Card>)}
      {templates.map((template) => <Card key={template.name} title={template.name} meta={template.stack}><p>{template.prompt}</p></Card>)}
    </section>
  );
}

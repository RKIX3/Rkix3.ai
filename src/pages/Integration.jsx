import { integrations } from '../data/integrations.js';
import { Card } from '../components/Card.jsx';
import { createGitHubChecklist } from '../services/github.js';

export function IntegrationPage() {
  return (
    <section className="page-grid">
      <div className="hero-panel"><span className="eyebrow">Integration Center</span><h1>Kết nối GitHub, Vercel, Railway, Netlify và Supabase.</h1></div>
      {integrations.map((integration) => <Card key={integration.name} title={integration.name} meta={integration.status}><p>{integration.description}</p></Card>)}
      <Card title="GitHub Pages Checklist" meta="deploy"><ol>{createGitHubChecklist().map((step) => <li key={step}>{step}</li>)}</ol></Card>
    </section>
  );
}

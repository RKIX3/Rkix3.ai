import { useAI } from '../hooks/useAI.js';
import { PromptBox } from '../components/PromptBox.jsx';
import { ChatBox } from '../components/ChatBox.jsx';
import { Card } from '../components/Card.jsx';

const modules = ['Chat', 'AI Agent', 'Workflow Builder', 'App Builder', 'Code Generator'];

export function AIPage() {
  const ai = useAI();

  return (
    <section className="page-grid">
      <div className="hero-panel">
        <span className="eyebrow">AI Workspace</span>
        <h1>Trung tâm AI tạo blueprint, app và code RKIX3.</h1>
        <PromptBox onRun={ai.run} />
      </div>
      <ChatBox result={ai.result} />
      {modules.map((module) => <Card key={module} title={module} meta="AI"><p>Module {module} đã được tạo theo tài liệu dự án RKIX3.</p></Card>)}
    </section>
  );
}

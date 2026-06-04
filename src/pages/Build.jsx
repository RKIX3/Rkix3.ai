import { Card } from '../components/Card.jsx';

const stacks = ['React', 'NextJS', 'NodeJS', 'Flutter', 'Export ZIP', 'Deploy'];

export function BuildPage() {
  return (
    <section className="page-grid">
      <div className="hero-panel"><span className="eyebrow">Build Center</span><h1>Chọn stack, build app và chuẩn bị deploy.</h1></div>
      {stacks.map((stack) => <Card key={stack} title={stack} meta="Build"><p>Pipeline {stack} được tách thành module riêng theo tài liệu.</p></Card>)}
    </section>
  );
}

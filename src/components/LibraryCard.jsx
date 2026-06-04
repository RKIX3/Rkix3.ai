import { Card } from './Card.jsx';

export function LibraryCard({ group }) {
  return (
    <Card title={group.group} meta={`${group.items.length} mục`}>
      <div className="tag-list">
        {group.items.map((item) => <span key={item}>{item}</span>)}
      </div>
    </Card>
  );
}

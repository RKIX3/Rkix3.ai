import { Card } from './Card.jsx';
import { formatStatus } from '../utils/format.js';

export function ProjectCard({ project }) {
  return (
    <Card title={project.title} meta={formatStatus(project.status)}>
      <p>{project.summary}</p>
    </Card>
  );
}

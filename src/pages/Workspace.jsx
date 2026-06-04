import { ProjectCard } from '../components/ProjectCard.jsx';
import { Card } from '../components/Card.jsx';
import { useProjects } from '../hooks/useProjects.js';
import { useTasks } from '../hooks/useTasks.js';

const workspaceModules = ['Projects', 'Tasks', 'Roadmap', 'Project Memory'];

export function WorkspacePage() {
  const projects = useProjects();
  const tasks = useTasks();

  return (
    <section className="page-grid">
      <div className="hero-panel">
        <span className="eyebrow">Workspace</span>
        <h1>Quản lý project, task, roadmap và bộ nhớ dự án.</h1>
      </div>
      {projects.map((project) => <ProjectCard key={project.slug} project={project} />)}
      {workspaceModules.map((module) => <Card key={module} title={module} meta="Workspace"><p>{module} sẵn sàng mở rộng dữ liệu thật.</p></Card>)}
      <Card title="Tasks" meta={`${tasks.length} việc`}><ul>{tasks.map((task) => <li key={task.id}>{task.title} — {task.status}</li>)}</ul></Card>
    </section>
  );
}

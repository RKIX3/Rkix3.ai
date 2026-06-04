export function createExportManifest(projects, tasks) {
  return {
    generatedAt: new Date().toISOString(),
    projects: projects.map((project) => project.slug),
    tasks: tasks.map((task) => task.id)
  };
}

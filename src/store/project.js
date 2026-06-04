import { projects } from '../data/projects.js';

export const projectStore = {
  all: projects,
  find(slug) {
    return projects.find((project) => project.slug === slug);
  }
};

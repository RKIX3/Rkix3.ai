import { useMemo } from 'react';
import { projects } from '../data/projects.js';

export function useProjects() {
  return useMemo(() => projects, []);
}

import { useMemo } from 'react';
import { tasks } from '../data/tasks.js';

export function useTasks() {
  return useMemo(() => tasks, []);
}

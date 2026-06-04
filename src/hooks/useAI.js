import { useState } from 'react';
import { generateOfflineBlueprint } from '../services/apiService.js';

export function useAI() {
  const [result, setResult] = useState(null);

  async function run(prompt) {
    const output = await generateOfflineBlueprint(prompt);
    setResult(output);
    return output;
  }

  return { result, run };
}

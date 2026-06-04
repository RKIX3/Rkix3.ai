import { useState } from 'react';

export function PromptBox({ onRun }) {
  const [prompt, setPrompt] = useState('Tạo blueprint triển khai RKIX3 từ tài liệu dự án.');

  function submit(event) {
    event.preventDefault();
    onRun(prompt);
  }

  return (
    <form className="prompt-box" onSubmit={submit}>
      <textarea value={prompt} onChange={(event) => setPrompt(event.target.value)} aria-label="Prompt RKIX3" />
      <div className="prompt-box__actions">
        <span>AI-first • Mobile-first • Deploy-ready</span>
        <button type="submit">Chạy AI</button>
      </div>
    </form>
  );
}

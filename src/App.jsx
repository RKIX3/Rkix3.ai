import { useMemo, useState } from 'react';
import { BottomNav } from './components/BottomNav.jsx';
import { Card } from './components/Card.jsx';
import { TopBar } from './components/TopBar.jsx';
import { AIPage } from './pages/AI.jsx';
import { WorkspacePage } from './pages/Workspace.jsx';
import { CodePage } from './pages/Code.jsx';
import { BuildPage } from './pages/Build.jsx';
import { LibraryPage } from './pages/Library.jsx';
import { IntegrationPage } from './pages/Integration.jsx';
import { ProfilePage } from './pages/Profile.jsx';
import { NAV_ITEMS, DOCUMENT_FILE } from './utils/constants.js';
import { parseProjectDocumentOutline } from './utils/parser.js';
import { useTheme } from './hooks/useTheme.js';
import './App.css';

const pages = {
  ai: AIPage,
  workspace: WorkspacePage,
  code: CodePage,
  build: BuildPage,
  library: LibraryPage,
  integration: IntegrationPage,
  profile: ProfilePage
};

export default function App() {
  const [activePage, setActivePage] = useState('ai');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const ActivePage = pages[activePage];
  const currentLabel = NAV_ITEMS.find((item) => item.id === activePage)?.label ?? 'RKIX3';
  const outline = useMemo(() => parseProjectDocumentOutline(), []);

  function navigate(pageId) {
    setActivePage(pageId);
    setSidebarOpen(false);
  }

  return (
    <div className="app-shell">
      <aside className={`sidebar ${sidebarOpen ? 'is-open' : ''}`}>
        <div className="sidebar__head">
          <strong>RKIX3</strong>
          <span>Project pages</span>
        </div>
        <nav className="sidebar__nav">
          {NAV_ITEMS.map((item) => (
            <button className={activePage === item.id ? 'is-active' : ''} key={item.id} type="button" onClick={() => navigate(item.id)}>
              <span>{item.icon}</span>
              {item.label}
            </button>
          ))}
        </nav>
        <a className="document-mini" href={DOCUMENT_FILE} target="_blank" rel="noreferrer">
          <img src={DOCUMENT_FILE} alt="Tài liệu dự án RKIX3" />
          <span>Mở file tài liệu gốc</span>
        </a>
      </aside>

      <main className="main-area">
        <TopBar currentPage={currentLabel} onMenu={() => setSidebarOpen(true)} onToggleTheme={toggleTheme} />
        <section className="document-banner">
          <div>
            <span className="eyebrow">Triển khai dự án RKIX3</span>
            <h1>Đã tạo các file và các trang theo tài liệu của bạn.</h1>
            <p>Cây source React/Vite bên dưới bám theo file JPG: components, pages, data, services, hooks, store và utils.</p>
            <div className="outline-list">
              {outline.map((item) => <span key={item}>{item}</span>)}
            </div>
          </div>
          <a href={DOCUMENT_FILE} target="_blank" rel="noreferrer" className="document-preview">
            <img src={DOCUMENT_FILE} alt="Preview tài liệu RKIX3" />
          </a>
        </section>
        <ActivePage theme={theme} onToggleTheme={toggleTheme} />
        <section className="page-grid final-grid">
          <Card title="Repo-ready" meta="GitHub Pages">
            <p>Workflow build chạy `npm run build`, copy tài liệu JPG vào `_site` và deploy Pages.</p>
          </Card>
          <Card title="Document-driven" meta="RKIX3">
            <p>Trang, component và data được tách thành file thật thay vì chỉ preview ảnh tài liệu.</p>
          </Card>
        </section>
      </main>
      <BottomNav active={activePage} onNavigate={navigate} />
    </div>
  );
}

import { DOCUMENT_FILE, LOGO_FILE } from '../utils/constants.js';

export function TopBar({ currentPage, onMenu, onToggleTheme }) {
  return (
    <header className="topbar">
      <button className="icon-button mobile-only" type="button" onClick={onMenu} aria-label="Mở menu">☰</button>
      <img src={LOGO_FILE} alt="RKIX3 Logo" className="topbar__logo" />
      <div className="topbar__spacer" />
      <span className="topbar__page">{currentPage}</span>
      <a className="topbar__link" href={DOCUMENT_FILE} target="_blank" rel="noreferrer">Tài liệu</a>
      <button className="topbar__button" type="button" onClick={onToggleTheme}>Theme</button>
    </header>
  );
}

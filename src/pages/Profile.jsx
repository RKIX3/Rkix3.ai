import { Card } from '../components/Card.jsx';
import { ThemeSwitch } from '../components/ThemeSwitch.jsx';

const sections = ['User', 'Theme', 'Settings', 'Security'];

export function ProfilePage({ theme, onToggleTheme }) {
  return (
    <section className="page-grid">
      <div className="hero-panel"><span className="eyebrow">Profile</span><h1>Hồ sơ, giao diện, cài đặt và bảo mật.</h1><ThemeSwitch theme={theme} onToggle={onToggleTheme} /></div>
      {sections.map((section) => <Card key={section} title={section} meta="Profile"><p>Khu vực {section} đã được scaffold để nối backend/auth sau.</p></Card>)}
    </section>
  );
}

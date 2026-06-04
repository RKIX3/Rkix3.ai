export function ThemeSwitch({ theme, onToggle }) {
  return <button className="theme-switch" type="button" onClick={onToggle}>Theme: {theme}</button>;
}

import { NAV_ITEMS } from '../utils/constants.js';

export function BottomNav({ active, onNavigate }) {
  return (
    <nav className="bottom-nav" aria-label="Điều hướng mobile">
      {NAV_ITEMS.slice(0, 5).map((item) => (
        <button className={active === item.id ? 'is-active' : ''} key={item.id} type="button" onClick={() => onNavigate(item.id)}>
          <span>{item.icon}</span>
          <small>{item.label.split(' ')[0]}</small>
        </button>
      ))}
    </nav>
  );
}

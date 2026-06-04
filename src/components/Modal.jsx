export function Modal({ open, title, children, onClose }) {
  if (!open) return null;

  return (
    <div className="modal" role="dialog" aria-modal="true">
      <div className="modal__panel">
        <button className="modal__close" type="button" onClick={onClose}>×</button>
        <h2>{title}</h2>
        {children}
      </div>
    </div>
  );
}

export function Card({ title, children, accent = '#00d2ff', meta }) {
  return (
    <article className="rk-card" style={{ '--accent': accent }}>
      {meta ? <span className="rk-card__meta">{meta}</span> : null}
      <h3>{title}</h3>
      <div>{children}</div>
    </article>
  );
}

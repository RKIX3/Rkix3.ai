import { libraries } from '../data/libraries.js';
import { LibraryCard } from '../components/LibraryCard.jsx';

export function LibraryPage() {
  return (
    <section className="page-grid">
      <div className="hero-panel"><span className="eyebrow">Library Hub</span><h1>Kho framework, database, API và documentation.</h1></div>
      {libraries.map((group) => <LibraryCard key={group.group} group={group} />)}
    </section>
  );
}

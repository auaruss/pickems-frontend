import './ExistingGameCard.css';

export default function ExistingGameCard({ home, away, className='' }) {
  return (
    <div className={className}>
      <p className="away">{away}</p>
      <p className="at">@</p>
      <p className="home">{home}</p>
    </div>
  );
}



export const Card=({ suit, rank })=> {
  return (
    <div className='card'>
      <div className={`card-${suit}`}>{rank}</div>
    </div>
  );
}
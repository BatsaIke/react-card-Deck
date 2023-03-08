

export const Card=({ suit, rank })=> {
  return (
    <div className='card'>
      <div className={`top-left ${suit}`}>{rank}</div>
      <div className={`center ${suit}`}>{suit}</div>
      <div className={`bottom-right ${suit}`}>{rank}</div>
    </div>
  );
}
import './FlashCard.css';

const FlashCard = ({character, showRoman}) => {
  return <div className="cheat-sheet-tile">
  <div className="text-6xl">{character.hangul}</div>
  {showRoman && <div className="text-xl pt-2 font-bold">{character.roman}</div> }
</div>;
};

export default FlashCard;

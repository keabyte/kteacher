import { Character } from '../../types/Character';
import './FlashCard.css';

const FlashCard = ({ character, showRoman = false }: { character: Character; showRoman?: boolean }) => {
	return (
		<div className="flash-card-tile">
			<div className="text-6xl">{character.hangul}</div>
			{showRoman && <div className="text-xl pt-2 font-bold">{character.roman}</div>}
		</div>
	);
};

export default FlashCard;

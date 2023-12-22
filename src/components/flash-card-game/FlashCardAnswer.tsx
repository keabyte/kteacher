import { Character } from '../../types/Character';
import './FlashCardAnswer.css';

const FlashCardAnswer = ({
	onClick,
	selected,
	character
}: {
	onClick: any;
	selected: boolean;
	character: Character;
}) => {
	return (
		<div onClick={onClick} className={`mb-2 ${selected ? 'selected-answer' : 'flash-card-answer'}`}>
			{character.roman}
		</div>
	);
};

export default FlashCardAnswer;

import './FlashCardAnswer.css';

export const FlashCardAnswer = props => {
	return (
		<div className="flash-card-answer mb-2" onClick={props.onClick}>
			{props.character.roman}
		</div>
	);
};

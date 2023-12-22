import { useState } from 'react';
import { FaCircleCheck, FaCircleXmark } from 'react-icons/fa6';
import hangul from '../../hangul.json';
import { Character } from '../../types/Character';
import FlashCard from './FlashCard';
import FlashCardAnswer from './FlashCardAnswer';
import './FlashCardGame.css';

const MIN_QUESTION_POOL_SIZE = 5;
const ANSWER_OPTION_COUNT = 4;

function getRandomElement<T>(array: T[]): T {
	return array[Math.floor(Math.random() * array.length)];
}

declare type FlashCardGameModel = {
	questionPool: Character[];
	currentCharacter: Character;
	answerOptions: Character[];
	answerStatus: AnswerStatus;
	answerOptionSelectedIndex: null | number;
};

declare type AnswerStatus = 'PENDING' | 'CORRECT' | 'INCORRECT';

const FlashCardGame = () => {
	function resetModel(): FlashCardGameModel {
		const currentCharacter = getRandomElement(allCharacters);
		return {
			questionPool: allCharacters,
			currentCharacter,
			answerOptions: generateAnswerOptions(currentCharacter),
			answerStatus: 'PENDING',
			answerOptionSelectedIndex: null
		};
	}

	function generateAnswerOptions(currentCharacter: Character) {
		const answerOptionIndex = Math.floor(Math.random() * ANSWER_OPTION_COUNT);
		const answerOptionPool = allCharacters.filter(it => it.hangul !== currentCharacter.hangul);
		const options = [];

		for (let i = 0; i < ANSWER_OPTION_COUNT; i++) {
			if (i === answerOptionIndex) {
				options.push(currentCharacter);
			} else {
				const optionPoolIndex = Math.floor(Math.random() * answerOptionPool.length);
				options.push(answerOptionPool[optionPoolIndex]);
				answerOptionPool.splice(optionPoolIndex, 1);
			}
		}

		return options;
	}

	function checkAnswer(character: Character, index: number) {
		if (model.answerStatus !== 'PENDING') {
			return;
		}

		console.log('Clicked answer', character);

		model.answerOptionSelectedIndex = index;
		if (character.hangul === model.currentCharacter.hangul) {
			model.answerStatus = 'CORRECT';
		} else {
			model.answerStatus = 'INCORRECT';
		}
		setModel({ ...model });
	}

	function nextQuestion() {
		model.answerOptionSelectedIndex = null;
		model.answerStatus = 'PENDING';
		if (model.questionPool.length < MIN_QUESTION_POOL_SIZE) {
			model.questionPool = allCharacters;
		}
		model.questionPool = model.questionPool.filter(it => it.hangul !== model.currentCharacter.hangul);
		model.currentCharacter = getRandomElement(model.questionPool);
		model.answerOptions = generateAnswerOptions(model.currentCharacter);
		setModel({ ...model });
	}

	const onKeyDown = (e: any) => {
		if (e.key === ' ') {
			if (model.answerStatus === 'CORRECT' || model.answerStatus === 'INCORRECT') {
				window.removeEventListener('keydown', onKeyDown);
				nextQuestion();
			}
		}
	};

	window.addEventListener('keydown', onKeyDown);

	const allCharacters = [...hangul.simple_consonants, ...hangul.simple_vowels];
	const [model, setModel] = useState(resetModel());

	return (
		<div className="flex flex-col items-center gap-5">
			<div className="text-xl">What sound does this make?</div>
			<div>
				<FlashCard character={model.currentCharacter}></FlashCard>
			</div>
			<div>
				{model.answerOptions.map((it, i) => (
					<FlashCardAnswer
						onClick={() => checkAnswer(it, i)}
						key={i}
						character={it}
						selected={model.answerOptionSelectedIndex === i}
					></FlashCardAnswer>
				))}
			</div>

			<div>
				{model.answerStatus}
				{model.answerStatus === 'PENDING' && <div className="font-light text-sm">Click on your answer</div>}
				{model.answerStatus === 'CORRECT' && (
					<div className="items-start">
						<div className="correct-section">
							<div className="font-bold text-xl mb-2">
								<FaCircleCheck className="inline-block" /> Correct!
							</div>
						</div>
						<div onClick={nextQuestion} className="next-button correct-next-button">
							Next question
						</div>
					</div>
				)}
				{model.answerStatus === 'INCORRECT' && (
					<div className="items-start">
						<div className="incorrect-section mb-2">
							<div className="font-bold text-xl">
								<FaCircleXmark className="inline-block" /> Incorrect
							</div>
							<div>
								<span className="font-bold">Correct answer:</span>
								<div>{model.currentCharacter.roman}</div>
							</div>
						</div>
						<div onClick={nextQuestion} className="next-button incorrect-next-button">
							Next question
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default FlashCardGame;

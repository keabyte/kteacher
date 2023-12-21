import { useState } from 'react';
import hangul from '../../hangul.json';
import FlashCard from './FlashCard';
import { FlashCardAnswer } from './FlashCardAnswer';

const MIN_QUESTION_POOL_SIZE = 3;
const ANSWER_OPTION_COUNT = 4;

const getRandomElement = array => {
	return array[Math.floor(Math.random() * array.length)];
};

const FlashCardGame = () => {
	function resetModel() {
		const currentCharacter = getRandomElement(allCharacters);
		return {
			questionPool: allCharacters,
			correctAnswers: [],
			incorrectAnswers: [],
			currentCharacter,
			answerOptions: generateAnswerOptions(currentCharacter)
		};
	}

	function generateAnswerOptions(currentCharacter) {
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

	function checkAnswer(character) {
		if (character.hangul === model.currentCharacter.hangul) {
			model.correctAnswers.push(model.currentCharacter);
		} else {
			model.incorrectAnswers.push(model.currentCharacter);
		}

		nextQuestion();
	}

	function nextQuestion() {
		if (model.questionPool.length < MIN_QUESTION_POOL_SIZE) {
			model.questionPool = allCharacters;
		}
		model.questionPool = model.questionPool.filter(it => it.hangul !== model.currentCharacter.hangul);
		model.currentCharacter = getRandomElement(model.questionPool);
		model.answerOptions = generateAnswerOptions(model.currentCharacter);
		setModel({ ...model });
	}

	const allCharacters = [...hangul.simple_consonants, ...hangul.simple_vowels];
	const [model, setModel] = useState(resetModel());

	return (
		<div>
			FlashCardGame
			<FlashCard character={model.currentCharacter}></FlashCard>
			<div>
				{model.answerOptions.map((it, i) => (
					<FlashCardAnswer onClick={() => checkAnswer(it)} key={i} character={it}></FlashCardAnswer>
				))}
			</div>
			{!!model.currentCharacter && process.env.NODE_ENV === 'development' && (
				<div>
					<div>
						Answer {model.currentCharacter.roman} {model.currentCharacter.hangul}
					</div>
					Question pool ({model.questionPool.length})
					<div>
						{model.questionPool.map((it, i) => (
							<span key={i}>{it.hangul}</span>
						))}
					</div>
					Correct answers ({model.correctAnswers.length})
					<div>
						{model.correctAnswers.map((it, i) => (
							<span key={i}>{it.hangul}</span>
						))}
					</div>
					Incorrect answers ({model.incorrectAnswers.length})
					<div>
						{model.incorrectAnswers.map((it, i) => (
							<span key={i}>{it.hangul}</span>
						))}
					</div>
				</div>
			)}
		</div>
	);
};

export default FlashCardGame;

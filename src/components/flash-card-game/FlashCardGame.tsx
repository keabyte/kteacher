import { useState } from 'react';
import hangul from '../../hangul.json';
import { Character } from '../../types/Character';
import FlashCard from './FlashCard';
import { FlashCardAnswer } from './FlashCardAnswer';

const MIN_QUESTION_POOL_SIZE = 3;
const ANSWER_OPTION_COUNT = 4;

function getRandomElement(array: any[]) {
	return array[Math.floor(Math.random() * array.length)];
}

declare type FlashCardGameModel = {
	questionPool: Character[];
	currentCharacter: Character;
	answerOptions: Character[];
};

const FlashCardGame = (): FlashCardGameModel => {
	function resetModel() {
		const currentCharacter = getRandomElement(allCharacters);
		return {
			questionPool: allCharacters,
			currentCharacter,
			answerOptions: generateAnswerOptions(currentCharacter)
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

	function checkAnswer(character: Character) {
		console.log('Clicked answer', character);
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
		</div>
	);
};

export default FlashCardGame;

import { useState } from 'react';
import hangul from '../../hangul.json';
import FlashCard from "./FlashCard";
import { FlashCardAnswer } from './FlashCardAnswer';

const getRandomElement = (array) => {
  return array[Math.floor(Math.random() * array.length)]
}

const FlashCardGame = () => {
  function nextQuestion() {
    setCurrentCharacter(getRandomElement(allCharacters))
  }

  function checkAnswer(character) {
    if (character.hangul === currentCharacter.hangul) {
      setCorrectAnswers(correctAnswers.concat([character]))
    } else {
      setIncorrectAnswers(incorrectAnswers.concat([character]))
    }
    nextQuestion()
  }

  const allCharacters = [...hangul.simple_consonants, ...hangul.simple_vowels]
  const [correctAnswers, setCorrectAnswers] = useState([])
  const [incorrectAnswers, setIncorrectAnswers] = useState([])
  let [currentCharacter, setCurrentCharacter] = useState(getRandomElement(allCharacters))
  const options = [currentCharacter, getRandomElement(allCharacters), getRandomElement(allCharacters), getRandomElement(allCharacters)]

  return (
    <div>
      FlashCardGame
      <FlashCard character={currentCharacter}></FlashCard>

      <div>
      {
        options.map((it, i) => <FlashCardAnswer onClick={() => checkAnswer(it)} key={i} character={it}></FlashCardAnswer>)
      }
      </div>
    </div>
  );
};

export default FlashCardGame;

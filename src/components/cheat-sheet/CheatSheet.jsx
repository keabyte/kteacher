import hangul from '../../hangul.json';
import CheatSheetCharacterSet from "./CheatSheetCharacterSet";

const CheatSheet = () => {
  return (
    <div className="p-4">
      <CheatSheetCharacterSet characters={hangul.simple_vowels} title="Simple vowels"></CheatSheetCharacterSet>
      <CheatSheetCharacterSet characters={hangul.simple_consonants} title="Simple consonants"></CheatSheetCharacterSet>
      <CheatSheetCharacterSet characters={hangul.complex_vowels} title="Complex vowels"></CheatSheetCharacterSet>
      <CheatSheetCharacterSet characters={hangul.double_consonants} title="Double consonants"></CheatSheetCharacterSet>
    </div>
  );
};

export default CheatSheet;

import React from "react";
import hangul from "../../hangul.json";
import CheatSheetTile from "./CheatSheetTile";

const CheatSheet = () => {
  return (
    <>
      <div>
        <div className="text-3xl font-bold underline">Simple vowels</div>
        {hangul.simple_vowels.map((it) => (
          <CheatSheetTile key={it.hangul} character={it}></CheatSheetTile>
        ))}
      </div>

      <div>
        <h4>Simple consonants</h4>
        {hangul.simple_consonants.map((it) => (
          <CheatSheetTile key={it.hangul} character={it}></CheatSheetTile>
        ))}
      </div>

      <div>
        <h4>Double consonants</h4>
        {hangul.double_consonants.map((it) => (
          <CheatSheetTile key={it.hangul} character={it}></CheatSheetTile>
        ))}
      </div>

      <div>
        <h4>Complex vowels</h4>
        {hangul.complex_vowels.map((it) => (
          <CheatSheetTile key={it.hangul} character={it}></CheatSheetTile>
        ))}
      </div>
    </>
  );
};

export default CheatSheet;

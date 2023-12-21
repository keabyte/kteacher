import { Character } from '../../types/Character';
import './CheatSheetTile.css';

const CheatSheetTile = ({ character }: { character: Character }) => {
	return (
		<div className="cheat-sheet-tile">
			<div className="text-6xl">{character.hangul}</div>
			<div className="text-xl pt-2 font-bold">{character.roman}</div>
		</div>
	);
};

export default CheatSheetTile;

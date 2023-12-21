import CheatSheetTile from './CheatSheetTile';

const CheatSheetCharacterSet = ({ characters, title }) => {
	return (
		<div className="pb-6">
			<div className="text-2xl mb-1">{title}</div>
			<div className="grid grid-cols-10 gap-4">
				{characters.map(it => (
					<CheatSheetTile key={it.hangul} character={it}></CheatSheetTile>
				))}
			</div>
		</div>
	);
};

export default CheatSheetCharacterSet;

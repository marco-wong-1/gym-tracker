interface DropDownItemProps {
	text: string;
	handleClick: () => void;
}

export const DropDownItem = ({ text, handleClick }: DropDownItemProps) => {
	return (
		<li className='hover:text-indigo-500'>
			<button onClick={handleClick} className='w-full block px-4 py-2'>
				{text}
			</button>
		</li>
	);
};

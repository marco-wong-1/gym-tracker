export const DropdownList = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className='relative'>
			<div className='absolute right-0 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700'>
				<ul
					className='py-2 text-sm text-gray-700 dark:text-gray-200'
					aria-labelledby='dropdownMenuButton'
				>
					{children}
				</ul>
			</div>
		</div>
	);
};

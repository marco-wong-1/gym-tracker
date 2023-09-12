const dates = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];

type EventsProps = {
	id: string;
	date: Date;
};

type CalendarProps = {
	events: EventsProps;
};

export function Calendar({ events: EventsProps }: CalendarProps) {
	return (
		<div className='flex bg-white justify-start md:justify-center overflow-x-scroll mx-auto py-4 px-2 '>
			{dates.map(date => (
				<div
					className='flex group hover:bg-sky-500 hover:shadow-lg hover-dark-shadow rounded-lg mx-1 transition-all	duration-300	 cursor-pointer justify-center w-16'
					key={date}
				>
					<div className='flex items-center px-4 py-4'>
						<div className='text-center'>
							<p className='text-gray-900 group-hover:text-gray-100 text-sm transition-all	duration-300'>
								{date}
							</p>
							<p className='text-gray-900 group-hover:text-gray-100 mt-3 group-hover:font-bold transition-all	duration-300'></p>
						</div>
					</div>
				</div>
			))}
		</div>
	);
}
type TodoItemProps = {
	id: string;
	title: string;
	complete: boolean;
	toggleTodo: (id: string, complete: boolean) => void;
};

export function TodoItem({ id, title, complete, toggleTodo }: TodoItemProps) {
	return (
		<li className='flex gap-1 items-center'>
			<input
				id={id}
				type='checkbox'
				className='cursor-pointer peer'
				defaultChecked={complete}
				onChange={e => toggleTodo(id, e.target.checked)}
			/>
			<label
				htmlFor={id}
				className='cursor-pointer peer-checked:line-through peer-checked:text-slate-500'
			>
				{title}
			</label>
		</li>
	);
}

export const WorkoutHistory = () => {
	return (
		<div className='flex justify-center'>
			<div className='w-full xl:w-8/12 px-4'>
				<div className='flex flex-col min-w-0 break-words w-full mb-8 shadow-lg rounded-lg bg-indigo-800'>
					<div className='rounded-t mb-0 px-4 py-3 bg-transparent'>
						<div className='flex flex-wrap items-center'>
							<div className='w-full max-w-full flex-grow flex-1'>
								<h6 className='uppercase mb-1 text-xs font-semibold text-white'>
									Overview
								</h6>
								<h2 className='text-xl font-semibold text-white'>
									Past Workouts
								</h2>
							</div>
						</div>
					</div>
					<div className='p-4 flex-auto'>
						<div className='relative h-350-px'>
							{/* <canvas
							width='496'
							height='291'
							className='
										display: block;
										box-sizing: border-box;
										height: 350px;
										width: 595.5px;
									'
							id='line-chart'
						></canvas> */}
							workouts lists
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

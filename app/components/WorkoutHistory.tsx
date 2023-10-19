import { AuthContext } from '@/context/AuthContext';
import { WorkoutContext } from '@/context/WorkoutContext';
import { useRouter } from 'next/navigation';
import { useContext, useEffect, useState } from 'react';

export const WorkoutHistory = () => {
  const userCtx = useContext(AuthContext);
  const workoutCtx = useContext(WorkoutContext);
  const router = useRouter();

  const [workoutKeys, setWorkoutKeys] = useState<string[]>([]);

  useEffect(() => {
    workoutCtx && setWorkoutKeys(Object.keys(workoutCtx));
  }, [userCtx, workoutCtx]);

  const handleClick = async (workoutId: string) => {
    router.push(`/workout/${workoutId}`);
  };

  return (
    <div className='w-full'>
      {workoutKeys.length > 0 ? (
        workoutKeys.map((woId, index) => (
          <div
            className='rounded-md px-3 cursor-pointer hocus:bg-white hocus:text-indigo-600'
            key={index}
            onClick={() => handleClick(woId)}
          >
            <div className='flex justify-between'>
              <span className=''>{workoutCtx[woId].workoutName}</span>
              <span className='font-light'>{workoutCtx[woId].date.toDateString()}</span>
            </div>
          </div>
        ))
      ) : (
        <div className='w-full'>No workouts yet</div>
      )}
    </div>
  );
};

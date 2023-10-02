import { AuthContext } from '@/context/AuthContext';
import { getUserDoc } from '@/firebase/firestoreDB';
import { useRouter } from 'next/navigation';
import { useContext, useEffect, useState } from 'react';

interface WorkoutFields {
  reps: number;
  weight: number;
}

export const WorkoutHistory = () => {
  const userCtx = useContext(AuthContext);
  const router = useRouter();

  const [workouts, setWorkouts] = useState<any[]>([]);

  useEffect(() => {
    const fetchWorkouts = async () => {
      const querySnapshot = await getUserDoc(userCtx, 'routine');
      const docs = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
      setWorkouts(docs);
    };
    userCtx && fetchWorkouts();
  }, [userCtx]);

  const handleClick = (workoutId: string) => {
    console.log(workoutId);
    router.push(`workout/${workoutId}`);
  };

  return (
    <div className='w-full'>
      {workouts.length > 0 ? (
        workouts.map((workout, index) => (
          <div
            className='rounded-md px-3 cursor-pointer hocus:bg-white hocus:text-indigo-600'
            key={index}
            onClick={() => handleClick(workout.id)}
          >
            <span>{workout.workoutName}</span>
          </div>
        ))
      ) : (
        <div className='w-full'>No workouts yet</div>
      )}
    </div>
  );
};

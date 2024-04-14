'use client';
import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
  useCallback,
} from 'react';
import { WorkoutFormFieldsWithIDs } from '@/types';
import { AuthContext } from './AuthContext';
import { getUserDoc } from '@/firebase/firestoreDB';
import { Loading } from '@/app/components/Loading';

export const WorkoutContext = createContext<WorkoutFormFieldsWithIDs>(null);

export const WorkoutContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const userCtx = useContext(AuthContext);
  const [workouts, setWorkouts] = useState<WorkoutFormFieldsWithIDs>(null);
  useEffect(() => {
    const fetchWorkouts = async () => {
      const docsSnap = await getUserDoc(userCtx);
      const docs = docsSnap.reduce(
        (acc, cur) => ({
          ...acc,
          [cur.id]: {
            date: new Date(cur.data().date.seconds * 1000),
            workoutName: cur.data().workoutName,
            exerciseFields: cur.data().workout,
          },
        }),
        {}
      );
      setWorkouts(docs);
    };
    userCtx && fetchWorkouts();
  }, [userCtx]);
  return (
    <WorkoutContext.Provider value={workouts}>
      {children}
    </WorkoutContext.Provider>
  );
};

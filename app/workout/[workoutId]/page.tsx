'use client';
import React, { useContext } from 'react';
import { WorkoutPage } from '@/app/workout/WorkoutPage';
import { WorkoutContext } from '@/context/WorkoutContext';

export default function Page({ params }: { params: { workoutId: string } }) {
  const workoutCtx = useContext(WorkoutContext);
  const workout = workoutCtx && workoutCtx[params.workoutId];

  return (
    <>
      <div>{workout && <WorkoutPage workoutFormFields={workout} />}</div>
    </>
  );
}

import { ExerciseFormFields, RepsAndWeights, WorkoutFormFields } from '@/types';
import { SimplePage } from '../components/SimplePage';

interface WorkoutPageProps {
  workoutFormFields: WorkoutFormFields;
}

export const WorkoutPage = ({ workoutFormFields }: WorkoutPageProps) => {
  const content = (
    <>
      {workoutFormFields.exerciseFields.map(
        (exerciseFields: ExerciseFormFields, eIndex: number) => (
          <div key={eIndex}>
            <span className='font-bold tracking-wide'>
              {exerciseFields.exerciseName}
            </span>
            <>
              {exerciseFields.repsAndWeights.map(
                (repsAndWeights: RepsAndWeights, rIndex: number) => (
                  <div key={rIndex}>
                    <span className='font-bold uppercase tracking-wide text-xs text-gray-400 sm:px-3'>
                      set {rIndex + 1}{' '}
                    </span>
                    {repsAndWeights.weight > 0 && (
                      <>
                        <span className='tracking-wide text-sm'>
                          {repsAndWeights.weight}
                        </span>
                        <span className='tracking-wide text-xs text-gray-400 sm:px-3'>
                          {' '}lbs for{' '}
                        </span>
                      </>
                    )}
                    <span className='tracking-wide text-sm'>
                      {repsAndWeights.reps}
                    </span>
                  </div>
                )
              )}
            </>
          </div>
        )
      )}
    </>
  );
  return (
    <SimplePage
      title={
        workoutFormFields.workoutName +
        (workoutFormFields.date &&
          ` on ${workoutFormFields.date.toDateString()}`)
      }
      node={content}
    />
  );
};

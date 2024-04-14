import { useContext, useState } from 'react';
import { AuthContext } from '@/context/AuthContext';
import { setUserDoc } from '@/firebase/firestoreDB';
import { useRouter } from 'next/navigation';
import { ExerciseFormFields, RepsAndWeights, WorkoutFormFields } from '@/types';
import { NameField } from './NameField';
import { NumberField } from './NumberField';
import { SetFields } from './SetFields';
import { ExerciseFields } from './ExerciseFields';

export const WorkoutForm = () => {
  const userCtx = useContext(AuthContext);

  const [workoutName, setWorkoutName] = useState<string>('');
  const [formFields, setFormFields] = useState<ExerciseFormFields[]>([
    {
      exerciseName: '',
      repsAndWeights: [
        {
          reps: 0,
          weight: 0,
        },
      ],
    },
  ]);
  const router = useRouter();

  const handleFormChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number,
    rIndex: number
  ) => {
    let oldFields = [...formFields];
    oldFields[index].repsAndWeights[rIndex][
      event.target.name as keyof RepsAndWeights
    ] = +event.target.value;
    setFormFields(oldFields);
  };

  const handleFormRemove = (eIndex: number, rIndex: number) => {
    let oldFields = [...formFields];
    oldFields[eIndex].repsAndWeights.splice(rIndex, 1);
    setFormFields(oldFields);
  };

  const setExerciseName = (exerciseName: string, index: number) => {
    let data: ExerciseFormFields[] = [...formFields];
    data[index].exerciseName = exerciseName;
    setFormFields(data);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // const stripZeros: ExerciseFormFields[] = formFields.forEach(exerciseForm =>
    //   exerciseForm.repsAndWeights.filter(
    //     setForm => !(setForm.reps === 0 && setForm.weight === 0)
    //   )
    // );

    // const checkZeros: boolean = stripZeros.reduce(
    //   (acc, curr) => acc && curr.reps > 0 && curr.weight > 0,
    //   true
    // );

    if (
      userCtx &&
      workoutName.length > 0
      // stripZeros.length > 0 &&
      // checkZeros
    ) {
      setUserDoc(userCtx, workoutName, formFields);
      router.push('/');
      // TODO: GET NEW WORKOUT
    }
  };

  return (
    <>
      <div className='grid place-items-center w-full px-2 pb-5 sm:px-12 sm:pb-12'>
        <div className='bg-white mx-2 rounded-lg shadow dark:border md:mt-0 w-full dark:bg-gray-800 dark:border-gray-700'>
          <div className='px-1 py-6 space-y-4 sm:space-y-6 sm:p-8'>
            <form className='group' onSubmit={e => handleSubmit(e)} noValidate>
              <div className='flex justify-between mb-1 mx-5'>
                <div className='w-5/6'>
                  <NameField
                    fieldName='Workout Name'
                    fieldValue=''
                    htmlFor='workout-name'
                    handleChange={e => setWorkoutName(e.target.value)}
                  />
                </div>
                <div className='w-1/6 group-invalid:pointer-events-none group-invalid:opacity-30'>
                  <button type='submit' tabIndex={-1}>
                    Submit
                  </button>
                </div>
              </div>
              <div className='grid'>
                {formFields.map((exerciseForm, index) => {
                  return (
                    <ExerciseFields
                      key={index}
                      exerciseIndex={index}
                      exerciseForm={exerciseForm}
                      handleNameChange={e =>
                        setExerciseName(e.target.value, index)
                      }
                      handleSetFieldsChange={handleFormChange}
                      handleSetFieldsRemove={handleFormRemove}
                      handleAdd={() => {
                        let newFields = { reps: 0, weight: 0 };
                        let oldFields = [...formFields];
                        oldFields[index].repsAndWeights.push(newFields);
                        setFormFields(oldFields);
                      }}
                    />
                  );
                })}
              </div>
              <div className='flex justify-center'>
                <button
                  className='flex rounded-md shadow-sm ring-1 items-center ring-inset text-gray-300 ring-gray-300 stroke-gray-300 hocus:stroke-indigo-600 hocus:ring-indigo-600 hocus:text-indigo-600 hocus:ring-inset hocus:outline-none py-1 px-2'
                  onClick={() => {
                    setFormFields([
                      ...formFields,
                      {
                        exerciseName: '',
                        repsAndWeights: [
                          {
                            reps: 0,
                            weight: 0,
                          },
                        ],
                      },
                    ]);
                  }}
                  type='button'
                >
                  <span className='sm:text-sm'>Add Exercise</span>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    strokeLinecap='round'
                    stroke-linejoin='round'
                    className='plus-icon fill-none'
                  >
                    <line x1='12' y1='5' x2='12' y2='19'></line>
                    <line x1='5' y1='12' x2='19' y2='12'></line>
                  </svg>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

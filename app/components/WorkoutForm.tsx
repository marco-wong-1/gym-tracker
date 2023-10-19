import { useContext, useState } from 'react';
import { AuthContext } from '@/context/AuthContext';
import { setUserDoc } from '@/firebase/firestoreDB';
import { useRouter } from 'next/navigation';
import { ExerciseFormFields, RepsAndWeights, WorkoutFormFields } from '@/types';

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
      setUserDoc(userCtx, 'routine', workoutName, formFields);
      router.push('/');
    }
  };

  return (
    <>
      <div className='grid place-items-center w-full'>
        <div className='bg-white mx-2 rounded-lg shadow dark:border md:mt-0 max-w-full dark:bg-gray-800 dark:border-gray-700'>
          <div className='px-1 py-6 space-y-4 sm:space-y-6 sm:p-8'>
            <form className='group' onSubmit={e => handleSubmit(e)} noValidate>
              <div className='flex justify-center mb-1'>
                <div className='w-1/2'>
                  <label className='sr-only' htmlFor={`workout-name`}>
                    Workout Name
                  </label>
                  <input
                    type='text'
                    className='peer block w-4/5 px-1 border-b invalid:[&:not(:focus)]:border-red-600 invalid:[&:not(:focus)]:dark:border-red-500 bg-transparent outline-none focus:bg-transparent dark:autofill:shadow-[inset_0_0_0px_1000px_rgba(0,0,0,0)] autofill:shadow-[inset_0_0_0px_1000px_rgba(0,0,0,0)]'
                    id={`workout-name`}
                    placeholder={`workout name`}
                    onChange={e => setWorkoutName(e.target.value)}
                    required
                  />
                  <span className='invisible peer-[&:not(:focus):invalid]:visible text-sm px-1 text-red-600 dark:text-red-500'>
                    Cannot be empty
                  </span>
                </div>
                <div className='mr-8 group-invalid:pointer-events-none group-invalid:opacity-30'>
                  <button type='submit' tabIndex={-1}>
                    Submit
                  </button>
                </div>
              </div>
              <div className='grid'>
                {formFields.map((exerciseForm, index) => {
                  return (
                    <div key={index} className='grid place-items-center w-full'>
                      {/* <div className='bg-white mx-2 rounded-lg shadow dark:border md:mt-0 max-w-full dark:bg-gray-800 dark:border-gray-700'> */}
                      <div className='px-1 py-6 space-y-4 sm:space-y-6 sm:p-8'>
                        <div className='flex justify-center mb-1'>
                          <div className='w-1/2'>
                            <label
                              className='sr-only'
                              htmlFor={`${index}-exercise-name`}
                            >
                              Exercise Name
                            </label>
                            <input
                              type='text'
                              className='peer block w-4/5 px-1 border-b invalid:[&:not(:focus)]:border-red-600 invalid:[&:not(:focus)]:dark:border-red-500 bg-transparent outline-none focus:bg-transparent dark:autofill:shadow-[inset_0_0_0px_1000px_rgba(0,0,0,0)] autofill:shadow-[inset_0_0_0px_1000px_rgba(0,0,0,0)]'
                              id={`${index}-exercise-name`}
                              placeholder={`exercise name`}
                              onChange={e =>
                                setExerciseName(e.target.value, index)
                              }
                              value={exerciseForm.exerciseName}
                              required
                            />
                            <span className='invisible peer-[&:not(:focus):invalid]:visible text-sm px-1 text-red-600 dark:text-red-500'>
                              Cannot be empty
                            </span>
                          </div>
                        </div>
                        <div className='grid'>
                          {exerciseForm.repsAndWeights.map(
                            (repsForm, rIndex) => {
                              return (
                                <div
                                  key={rIndex}
                                  className='inline-grid grid-cols-2 sm:-mx-3 sm:mb-3 mb-1'
                                >
                                  <div className='flex justify-end'>
                                    <span className='uppercase tracking-wide text-gray-700 text-xs sm:px-3 sm:-ml-3 my-auto font-bold'>
                                      <span className='hidden sm:inline'>
                                        Set{' '}
                                      </span>
                                      <span className='mx-1 sm:mx-0'>
                                        {rIndex + 1}
                                      </span>
                                    </span>
                                    <div className='rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 w-2/3 sm:w-auto sm:max-w-md px-1 sm:px-3 py-3 ml-1'>
                                      <label
                                        className='sr-only'
                                        htmlFor={`${index}-set-${
                                          rIndex + 1
                                        }-reps`}
                                      >
                                        reps
                                      </label>
                                      <input
                                        className='border-0 bg-transparent ring-0 focus:ring-0 w-2/3 sm:w-auto sm:text-sm sm:leading-6 !outline-none'
                                        id={`${index}-set-${rIndex + 1}-reps`}
                                        type='number'
                                        min='0'
                                        name='reps'
                                        onChange={e =>
                                          handleFormChange(e, index, rIndex)
                                        }
                                        placeholder='number'
                                        required
                                      />
                                      <span className='select-none items-center sm:pl-3 text-gray-500 sm:text-sm font-bold'>
                                        reps
                                      </span>
                                    </div>
                                  </div>
                                  <div className='flex'>
                                    <div className='rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 w-2/3 sm:w-auto sm:max-w-md px-1 sm:px-3 py-3 ml-1 sm:ml-3'>
                                      <label
                                        className='sr-only'
                                        htmlFor={`${index}-set-${
                                          rIndex + 1
                                        }-reps`}
                                      >
                                        weight
                                      </label>
                                      <input
                                        className='border-0 bg-transparent ring-0 focus:ring-0 w-2/3 sm:w-auto sm:text-sm sm:leading-6 !outline-none '
                                        id={`${index}-set-${rIndex + 1}-weight`}
                                        type='number'
                                        min='0'
                                        name='weight'
                                        onChange={e =>
                                          handleFormChange(e, index, rIndex)
                                        }
                                        placeholder='weight'
                                        required
                                      />
                                      <span className='select-none items-center sm:pl-3 text-gray-500 sm:text-sm font-bold'>
                                        lbs
                                      </span>
                                    </div>
                                    <button
                                      className='block sm:ml-3 stroke-gray-300 hover:stroke-indigo-600'
                                      onClick={() => {
                                        let oldFields = [...formFields];
                                        oldFields[index].repsAndWeights.splice(
                                          rIndex,
                                          1
                                        );
                                        setFormFields(oldFields);
                                      }}
                                      type='button'
                                      tabIndex={-1}
                                    >
                                      <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        width='24'
                                        height='24'
                                        viewBox='0 0 24 24'
                                        stroke-width='1'
                                        stroke-linecap='round'
                                        stroke-linejoin='round'
                                        className='minus-icon fill-none'
                                      >
                                        <rect
                                          x='3'
                                          y='3'
                                          width='18'
                                          height='18'
                                          rx='2'
                                          ry='2'
                                        ></rect>
                                        <line
                                          x1='8'
                                          y1='12'
                                          x2='16'
                                          y2='12'
                                        ></line>
                                      </svg>
                                    </button>
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>

                        <div className='flex justify-center'>
                          <button
                            className='flex rounded-md shadow-sm ring-1 items-center ring-inset text-gray-300 ring-gray-300 stroke-gray-300 hocus:stroke-indigo-600 hocus:ring-indigo-600 hocus:text-indigo-600 hocus:ring-inset hocus:outline-none py-1 px-2'
                            onClick={() => {
                              let newFields = { reps: 0, weight: 0 };
                              let oldFields = [...formFields];
                              oldFields[index].repsAndWeights.push(newFields);
                              setFormFields(oldFields);
                            }}
                            type='button'
                          >
                            <span className='sm:text-sm'>Add Set</span>
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              width='24'
                              height='24'
                              viewBox='0 0 24 24'
                              fill='none'
                              stroke-linecap='round'
                              stroke-linejoin='round'
                              className='plus-icon fill-none'
                            >
                              <line x1='12' y1='5' x2='12' y2='19'></line>
                              <line x1='5' y1='12' x2='19' y2='12'></line>
                            </svg>
                          </button>
                        </div>
                      </div>
                      {/* </div> */}
                    </div>
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
                    stroke-linecap='round'
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

import { ExerciseFormFields } from '@/types';
import { NameField } from './NameField';
import { NumberField } from './NumberField';
import { SetFields } from './SetFields';

interface ExerciseFieldsProps {
  exerciseIndex: number;
  exerciseForm: ExerciseFormFields;
  handleNameChange: (...args: any[]) => void;
  handleSetFieldsChange: (...args: any[]) => void;
  handleSetFieldsRemove: (...args: any[]) => void;
  handleAdd: (...args: any[]) => void;
}

export const ExerciseFields = ({
  exerciseIndex,
  exerciseForm,
  handleNameChange,
  handleSetFieldsChange,
  handleSetFieldsRemove,
  handleAdd,
}: ExerciseFieldsProps) => {
  return (
    <>
      <div className='grid place-items-center w-full'>
        <div className='px-1 py-6 space-y-4 sm:space-y-6 sm:p-8 w-full'>
          <hr className='h-px my-2 bg-gray-200 border-0 dark:bg-gray-700' />
          <div className='flex justify-start mb-1 mx-4'>
            <NameField
              fieldName='Exercise Name'
              fieldValue=''
              htmlFor={`${exerciseIndex}-exercise-name`}
              handleChange={handleNameChange}
            />
          </div>
          <div className=''>
            {exerciseForm.repsAndWeights.map((repsForm, rIndex) => {
              return (
                <SetFields
                  key={`${exerciseIndex}${exerciseForm.exerciseName}${rIndex}`}
                  exerciseIndex={exerciseIndex}
                  setIndex={rIndex}
                  handleChange={handleSetFieldsChange}
                  handleRemove={handleSetFieldsRemove}
                />
              );
            })}
          </div>

          <div className='flex justify-center'>
            <button
              className='flex rounded-md shadow-sm ring-1 items-center ring-inset text-gray-300 ring-gray-300 stroke-gray-300 hocus:stroke-indigo-600 hocus:ring-indigo-600 hocus:text-indigo-600 hocus:ring-inset hocus:outline-none py-1 px-2'
              onClick={handleAdd}
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
      </div>
    </>
  );
};

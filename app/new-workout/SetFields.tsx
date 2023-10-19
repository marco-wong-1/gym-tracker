import { NumberField } from './NumberField';

interface SetFieldsProps {
  exerciseIndex: number;
  setIndex: number;
  handleChange: (...args: any[]) => void;
  handleRemove: (...args: any[]) => void;
}

export const SetFields = ({
  exerciseIndex,
  setIndex,
  handleChange,
  handleRemove,
}: SetFieldsProps) => {
  return (
    <div className=''>
      <div className='flex flex-row sm:-mx-3 sm:mb-3 mb-1'>
        <div className='basis-1/2 flex flex-row'>
          <div className='w-5 sm:w-12 uppercase tracking-wide text-gray-700 text-xs my-auto font-bold'>
            <span className='inline-block'>
              <span className='hidden sm:inline'>Set </span>
              <span className='mx-1 sm:mx-0'>{setIndex + 1}</span>
            </span>
          </div>
          <NumberField
            fieldName='reps'
            fieldValue=''
            htmlFor={`${exerciseIndex}-set${setIndex + 1}-reps`}
            handleChange={e => handleChange(e, exerciseIndex, setIndex)}
            placeHolderText='number'
          />
        </div>
        <div className='basis-1/2 flex flex-row'>
          <NumberField
            fieldName='weights'
            fieldValue=''
            htmlFor={`${exerciseIndex}-set${setIndex + 1}-weights`}
            handleChange={e => handleChange(e, exerciseIndex, setIndex)}
            placeHolderText='number'
            units='lbs'
          />
          <div className='w-8 my-auto'>
            {setIndex > 0 && (
              <button
                className='block sm:ml-3 stroke-gray-300 hover:stroke-indigo-600'
                onClick={() => handleRemove(exerciseIndex, setIndex)}
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
                  <rect x='3' y='3' width='18' height='18' rx='2' ry='2'></rect>
                  <line x1='8' y1='12' x2='16' y2='12'></line>
                </svg>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

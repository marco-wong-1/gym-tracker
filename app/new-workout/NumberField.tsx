interface NumberFieldProps {
  fieldName: string;
  fieldValue: string;
  htmlFor: string;
  handleChange: (...args: any[]) => void;
  placeHolderText?: string;
  units?: string;
}

export const NumberField = ({
  fieldName,
  fieldValue,
  htmlFor,
  handleChange,
  placeHolderText,
  units,
}: NumberFieldProps) => {
  return (
    <>
      <div className='w-full flex flex-row rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:w-max sm:max-w-md px-1 sm:px-3 py-3 ml-1'>
        <label className='sr-only' htmlFor={htmlFor}>
          {fieldName}
        </label>
        <input
          className='border-0 bg-transparent w-5/6 ring-0 focus:ring-0 sm:text-sm sm:leading-6 !outline-none'
          id={`htmlFor`}
          type='number'
          min='0'
          name='reps'
          onChange={handleChange}
          placeholder={placeHolderText || fieldValue || fieldName || htmlFor}
          required
        />
        <span className='select-none text-gray-500 my-auto px-1 sm:text-sm font-bold'>
          {units || fieldName}
        </span>
      </div>
    </>
  );
};

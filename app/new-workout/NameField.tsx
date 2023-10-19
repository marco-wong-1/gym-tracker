interface NameFieldProps {
  fieldName: string;
  fieldValue: string;
  htmlFor: string;
  handleChange: (...args: any[]) => void;
}

export const NameField = ({
  fieldName,
  fieldValue,
  htmlFor,
  handleChange,
}: NameFieldProps) => {
  return (
    <>
      <div className='w-full'>
        <label className='sr-only' htmlFor={htmlFor}>
          {fieldName}
        </label>
        <input
          type='text'
          className='rounded-none peer block w-4/5 px-1 border-b invalid:[&:not(:focus)]:border-red-600 invalid:[&:not(:focus)]:dark:border-red-500 bg-transparent outline-none focus:bg-transparent dark:autofill:shadow-[inset_0_0_0px_1000px_rgba(0,0,0,0)] autofill:shadow-[inset_0_0_0px_1000px_rgba(0,0,0,0)]'
          id={htmlFor}
          placeholder={fieldValue || fieldName || htmlFor}
          onChange={handleChange}
          required
        />
        <span className='invisible peer-[&:not(:focus):invalid]:visible text-sm px-1 text-red-600 dark:text-red-500'>
          Cannot be empty
        </span>
      </div>
    </>
  );
};

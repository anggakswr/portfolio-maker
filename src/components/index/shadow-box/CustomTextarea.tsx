const CustomTextarea = ({
  placeholder,
  value,
  onChange,
  aErrors,
}: {
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  aErrors?: string[];
}) => {
  return (
    <div className="mb-6 last:mb-0">
      <textarea
        cols={30}
        rows={5}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`${
          aErrors?.length ? "border-red-500" : "border-gray-400"
        } outline-none w-full py-4 px-3.5 relative rounded-lg border border-gray-400 border-opacity-30 placeholder-gray-400 font-normal font-public-sans leading-normal`}
      />

      {aErrors?.map((sError) => (
        <p key={sError} className="mt-2 text-sm text-red-500">
          {sError}
        </p>
      ))}
    </div>
  );
};

export default CustomTextarea;

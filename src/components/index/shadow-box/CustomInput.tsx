const CustomInput = ({
  placeholder,
  value,
  onChange,
  aErrors,
  type = "text",
}: {
  type?: "text" | "date";
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  aErrors?: string[];
}) => {
  return (
    <div className="mb-6 last:mb-0">
      <input
        type={type}
        placeholder={placeholder}
        className={`input1 ${
          aErrors?.length ? "border-red-500" : "border-gray-400"
        }`}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />

      {aErrors?.map((sError) => (
        <p key={sError} className="mt-2 text-sm text-red-500">
          {sError}
        </p>
      ))}
    </div>
  );
};

export default CustomInput;

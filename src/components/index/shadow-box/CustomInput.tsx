const CustomInput = ({
  placeholder,
  value,
  onChange,
}: {
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
}) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className="mb-6 last:mb-0 input1"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

export default CustomInput;

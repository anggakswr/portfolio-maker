const CustomTextarea = ({ placeholder }: { placeholder: string }) => {
  return (
    <textarea
      cols={30}
      rows={5}
      placeholder={placeholder}
      className="mb-6 last:mb-0 outline-none w-full py-4 px-3.5 relative rounded-lg border border-gray-400 border-opacity-30 placeholder-gray-400 font-normal font-public-sans leading-normal"
    />
  );
};

export default CustomTextarea;

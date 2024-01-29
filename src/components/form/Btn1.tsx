const Btn1 = ({ onClick, text }: { onClick: () => void; text: string }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="px-[22px] py-[11px] rounded-lg bg-cyan-600"
    >
      <span className="text-white text-[15px] font-bold leading-relaxed">
        {text}
      </span>
    </button>
  );
};

export default Btn1;

const CustomDate = ({
  startDate,
  endDate,
  startDateChange,
  endDateChange,
}: {
  startDate: string;
  endDate: string;
  startDateChange: (value: string) => void;
  endDateChange: (value: string) => void;
}) => {
  return (
    <div className="mb-6 last:mb-0 grid grid-cols-2 gap-x-3.5">
      <input
        type="date"
        className="input1"
        value={startDate}
        onChange={(e) => startDateChange(e.target.value)}
      />

      <input
        type="date"
        className="input1"
        value={endDate}
        onChange={(e) => endDateChange(e.target.value)}
      />
    </div>
  );
};

export default CustomDate;

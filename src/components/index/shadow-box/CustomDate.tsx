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
      <div>
        <div className="mb-1 text-sm text-gray-800 font-semibold leading-normal">
          Start Date
        </div>

        <input
          type="date"
          className="input1"
          value={startDate}
          onChange={(e) => startDateChange(e.target.value)}
        />
      </div>

      <div>
        <div className="mb-1 text-sm text-gray-800 font-semibold leading-normal">
          End Date
        </div>

        <input
          type="date"
          className="input1"
          value={endDate}
          onChange={(e) => endDateChange(e.target.value)}
        />
      </div>
    </div>
  );
};

export default CustomDate;

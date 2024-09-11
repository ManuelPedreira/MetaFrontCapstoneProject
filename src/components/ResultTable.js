const ResultTable = ({storedData}) => {

  return (
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Hour</th>
          <th>Guests</th>
          <th>Occcasion</th>
        </tr>
      </thead>
      <tbody>
        {storedData?.map((item, index) => (
          <tr key={index}>
            <th>{item.date}</th>
            <th>{item.time}</th>
            <th>{item.guests}</th>
            <th>{item.occasion}</th>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ResultTable;

import "./ResultTable.css"

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
            <td>{item.date}</td>
            <td>{item.time}</td>
            <td>{item.guests}</td>
            <td>{item.occasion}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ResultTable;

const SopoeaTable = ({ data }) => {
    return (
      <table>
        <thead>
          <tr>
            <th>Year</th>
            <th>Amount ($M)</th>
            <th>Increase ($M)</th>
            <th>Increase (%)</th>
          </tr>
        </thead>
        <tbody>
          {data.map((d, i) => {
            const prevAmount = i > 0 ? data[i - 1].amount : null;
            const increase = prevAmount ? (d.amount - prevAmount).toFixed(1) : '-';
            const percentIncrease = prevAmount ? ((increase / prevAmount) * 100).toFixed(1) : '-';
            return (
              <tr key={d.year}>
                <td>{d.year}{d.isRequested ? ' (req)' : ''}</td>
                <td>{d.amount}</td>
                <td>{increase}</td>
                <td>{percentIncrease}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  };
  
  export default SopoeaTable;
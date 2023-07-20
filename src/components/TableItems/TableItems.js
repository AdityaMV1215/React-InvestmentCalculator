import React from 'react';
import './TableItems.css';
import TableItem from './TableItem';

function TableItems(props) {
    return(
        <table className="result">
        <thead>
          <tr>
            <th>Year</th>
            <th>Total Savings</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody>
          {props.yearlyData.map((perYearData) => {
            return <TableItem data={perYearData}></TableItem>
          })}
        </tbody>
      </table>
    );
}

export default TableItems;
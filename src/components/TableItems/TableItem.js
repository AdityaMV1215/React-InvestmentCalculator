import React from 'react';
import './TableItem.css';

const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

function TableItem(props) {
    return(
        <tr key={props.data.year}>
            <td>{props.data.year}</td>
            <td>{formatter.format(props.data.savingsEndOfYear)}</td>
            <td>{formatter.format(props.data.yearlyInterest)}</td>
            <td>{formatter.format(props.data.totalInterestGained)}</td>
            <td>{formatter.format(props.data.totalInvestedCapital)}</td>
          </tr>
    );
}

export default TableItem;
import React from 'react';
import { connect } from 'react-redux';
import selectExpenses from '../selectors/expenses';
import expensesTotal from '../utils/expensesTotal';
import numeral from 'numeral';

export class ExpenseSummary extends React.Component {
  render() {
    return (
      <div>
        <h1>
          {`Viewing ${this.props.expenseCount} 
          expense${this.props.expenseCount === 1 ? '' : 's'} 
          totalling ${numeral(this.props.expensesTotal / 100).format('$0,0.00')}`}
        </h1>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const visibleExpenses = selectExpenses(state.expenses, state.filters);
  return {
    expensesTotal: expensesTotal(visibleExpenses),
    expenseCount: visibleExpenses.length
  }
}

export default connect(mapStateToProps)(ExpenseSummary);
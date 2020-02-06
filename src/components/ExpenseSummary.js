import React from 'react';
import { connect } from 'react-redux';
import selectExpenses from '../selectors/expenses';
import expensesTotal from '../utils/expensesTotal';
import numeral from 'numeral';

export class ExpenseSummary extends React.Component {
  render() {
    return (
      <div>
        {`Showing ${this.props.expenses.length} 
        expense${this.props.expenses.length === 1 ? '' : 's'} 
        totalling ${numeral(expensesTotal(this.props.expenses) / 100).format('$0,0.00')}`}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    expenses: selectExpenses(state.expenses, state.filters)
  }
}

export default connect(mapStateToProps)(ExpenseSummary);
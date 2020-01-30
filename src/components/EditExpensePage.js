import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense, removeExpense } from '../actions/expenses';

export class EditExpensePage extends React.Component {
  onSubmit = (id, expense) => {
    this.props.editExpense(id, expense);
    this.props.history.push('/');
  }
  onClick = ({ id }) => {
    this.props.removeExpense( { id } );
    this.props.history.push('/');
  }
  render() {
    const id = this.props.match.params.id;
    return (
      <div>
        Editing the expense with id of {this.props.match.params.id}:
        <ExpenseForm
          expense={this.props.expense}
          onSubmit={this.onSubmit}
        />
        <button 
          onClick={this.onClick}
        >
        Remove
        </button>
      </div>
    );
  }
  
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    editExpense: (id, expense) => dispatch(editExpense(id, expense)),
    removeExpense: (data) => dispatch(removeExpense( data ))
  }
}

const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find((expense) => expense.id === props.match.params.id)
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);

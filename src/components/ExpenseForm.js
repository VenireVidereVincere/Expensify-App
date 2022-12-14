import 'react-dates/initialize';
import React from "react";
import moment from "moment";
import { SingleDatePicker } from "react-dates";
import 'react-dates/lib/css/_datepicker.css';

export default class ExpenseForm extends React.Component {        
    constructor(props){
        super(props)
    this.state = {
        description: !props.expense.description ? '' : props.expense.description,
        note: !props.expense.note ? '' : props.expense.note,
        amount: !props.expense.amount ? '' : (props.expense.amount / 100).toString(),
        createdAt: !props.expense.createdAt ? moment() : moment(props.expense.createdAt),
        calendarFocused:false,
        selectedDate:undefined,
        error:undefined
    }        
    }
    onDescriptionChange = (e) => {
        const description = e.target.value
        this.setState(()=> ({description}))
    }
    onNoteChange = (e) => {
        const note = e.target.value
        this.setState(() => ({note}))
    }
    onAmountChange = (e) => {
        const amount = e.target.value
        if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState(() => ({amount}))
        }
    }
    onDateChange = (createdAt) => {
        if(createdAt) {
            this.setState(() => ({createdAt}))
        }        
    }
    onFocusChange = ({focused}) => {
        this.setState(() => ({calendarFocused: focused}))
    }
    onSubmit = (e) => {
        e.preventDefault()
        if (!this.state.description || !this.state.amount) {
            this.setState(() => ({error: "Description and amount must have a value to submit."}))
        } else {
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount,10) * 100,
                note: this.state.note,
                createdAt: this.state.createdAt.valueOf()
            })
            this.setState(() => ({
                description:'',
                note:'',
                amount:'',
                calendarFocused:false,
                selectedDate:undefined,
                error:undefined
            }))
        }
    }
    render() {
        return (
                <form className='form' onSubmit={this.onSubmit}>
                    {this.state.error && <p className='form__error'>{this.state.error}</p>}
                    <input 
                        type='text'
                        className='text-input'
                        placeholder="Description"
                        autoFocus
                        value={this.state.description}
                        onChange={this.onDescriptionChange}
                    />
                    <input 
                        className='text-input'
                        type="text"
                        placeholder="Amount"
                        value={this.state.amount}
                        onChange={this.onAmountChange}
                    />
                    <SingleDatePicker 
                        date={this.state.createdAt}
                        onDateChange={this.onDateChange}
                        focused={this.state.calendarFocused}
                        onFocusChange={this.onFocusChange}
                        numberOfMonths={1}
                        isOutsideRange={(day) => {
                            return false
                        }}
                        id="calendar"
                    />
                    <textarea
                        className='textarea'
                        value={this.state.note}
                        onChange={this.onNoteChange}
                        placeholder="Add a note for your expense (optional)"
                    />
                    <div>
                        <button  className='button'> {this.props.url.includes("create") ? "Add Expense" : "Save Changes"} </button>
                    </div>
                </form>
        )
    }
}
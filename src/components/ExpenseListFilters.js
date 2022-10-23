import React from "react";
import { setTextFilter, sortBy, setEndDate,setStartDate } from "../actions/filters";
import { DateRangePicker } from "react-dates";
import moment from "moment";

export default class ExpenseListFilters extends React.Component {
    state = {
            calendarFocused: null
    }
    onDatesChange = ({startDate, endDate}) => {
        this.props.dispatch(setStartDate(startDate))
        this.props.dispatch(setEndDate(endDate))
    }
    onFocusChange = (calendarFocused) => {
        this.setState(() => ({calendarFocused}))
    }
    render() {
    return (
        <div className="content-container">
            <div className="input-group">
                <div className="input-group__item">
                    <input placeholder="Search Expense" className="text-input" type='text' value={this.props.filters.text} onChange={(e) => {
                        this.props.dispatch(setTextFilter(e.target.value))
                    }}/>
                </div>
                <div className="input-group__item">
                    <select className="select" onChange={(e) => {
                        this.props.dispatch(sortBy(e.target.value))
                    }}>
                        <option value="date">Date</option>
                        <option value="smallToLarge">Smallest</option>
                        <option value="largeToSmall">Largest</option>
                    </select>
                </div>
                <div className="input-group__item">
                    <DateRangePicker 
                        startDate= {this.props.filters.startDate}
                        startDateId= "datePickerStartDate"
                        endDate= {this.props.filters.endDate}
                        endDateId= "datePickerEndDate"
                        onDatesChange= {this.onDatesChange}
                        focusedInput= {this.state.calendarFocused}
                        onFocusChange= {this.onFocusChange}
                        showClearDates={true}
                        numberOfMonths= {1}
                        isOutsideRange= {() => false}
                    />
                </div>
            </div>


        
    </div>
    )
   }
    
}




    
    
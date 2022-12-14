import moment from "moment"

const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
}

export default function filtersReducer (state = filtersReducerDefaultState, action) {
    switch(action.type) {
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text
            }
        case 'SORT_BY':
            return {
                ...state,
                sortBy: action.sortBy
            }
        case 'SET_DATE':
            return {
                ...state,
                ...action.updates
            }
        default:
            return state;
    }
}
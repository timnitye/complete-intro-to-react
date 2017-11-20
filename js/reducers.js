import { SET_SEARCH_TERM, CLEAR_SEARCH_TERM } from './actions';

const DEFAULT_STATE = {
	searchTerm: '',
	otherStuff: 'more stuff'
};

const setSearchTerm = (state, action) => Object.assign({}, state, { searchTerm: action.payload });
const clearSearchTerm = (state, action) => Object.assign({}, state, { searchTerm: action.payload });

const rootReducer = (state = DEFAULT_STATE, action) => {
	switch (action.type) {
		case SET_SEARCH_TERM:
			return setSearchTerm(state, action);
		case CLEAR_SEARCH_TERM:
			return clearSearchTerm(state, action);
		default:
			return state;
	}
};

export default rootReducer;

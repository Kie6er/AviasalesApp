// eslint-disable-next-line import/namespace
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	filterBy: [0, 1, 2, 3, 4],
};

const filterSlice = createSlice({
	name: 'filter',
	initialState,
	reducers: {
		setFilter(state, action) {
			const { id } = action.payload;

			if (id === 0) {
				if (state.filterBy.includes(0)) {
					state.filterBy = [];
				} else {
					state.filterBy = [0, 1, 2, 3, 4];
				}
			} else {
				if (state.filterBy.includes(id)) {
					state.filterBy = state.filterBy.filter(item => item !== id && item !== 0);
				} else {
					state.filterBy = [...state.filterBy, id];

					const containsAllNumbers = [1, 2, 3, 4].every(num => state.filterBy.includes(num));
					if (containsAllNumbers && !state.filterBy.includes(0)) {
						state.filterBy = [...state.filterBy, 0];
					}
				}
			}
		},
	},
});
export const { setFilter } = filterSlice.actions;
export default filterSlice.reducer;

// if (id === 0) {
// 	const allCheckbox = state.filterBy.find(item => item.id === 0);
// 	allCheckbox.active = !allCheckbox.active;

// 	state.filterBy.forEach(item => {
// 		if (item.id !== 0) {
// 			item.active = allCheckbox.active;
// 		}
// 	});
// } else {
// 	const selectedCheckbox = state.filterBy.find(item => item.id === id);
// 	selectedCheckbox.active = !selectedCheckbox.active;

// 	const allOtherCheckboxesSelected = state.filterBy.filter(item => item.id !== 0).every(item => item.active);
// 	const allCheckbox = state.filterBy.find(item => item.id === 0);
// 	allCheckbox.active = allOtherCheckboxesSelected;
// }

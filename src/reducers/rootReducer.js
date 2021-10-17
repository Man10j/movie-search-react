const initialState = {
	data: [],
	wishlist:"yes"
}

const rootReducer = (state= initialState, action) =>{
	switch(action.type){
		case "UPDATE_ENTRY":
			return {
				...state,
				data : action.payload,
			}
		default:
			return state;
	}


}

export default rootReducer;
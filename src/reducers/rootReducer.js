const initialState = {
	data: [{
		entry:"yes",
		result:[]
	}],
	wishlist:[]
}

const rootReducer = (state= initialState, action) =>{
	switch(action.type){
		case "UPDATE_DATA":
			return {
				...state,
				data : action.payload,
			}
		case "UPDATE_WISHLIST":
			return{
				...state,
				wishlist: [
					...state.wishlist,
					action.payload
				]
			}
		default:
			return state;
	}


}

export default rootReducer;
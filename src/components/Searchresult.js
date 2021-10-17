import React from 'react';
import './Searchresult.css';
import { connect } from 'react-redux';
const Searchresult = (props) =>{
	let movielist = props.state.data.result ? props.state.data.result.map((movie) =>{
		return(
			<div key={movie.id} className='movie_list' onClick={()=>{handlemovieClick(movie)}}>
				<div>{movie.title}</div>
				<div>{movie.release_date}</div>
			</div>
		)
	}) : "no";

	function handlemovieClick(value) {
		
		let found = props.state.wishlist.some(el => el.id === value.id);
 		!found && props.updateWishlist(value);
		console.log(props.state)
	}

	return(	
		<div>
		srch
		{movielist}
		</div>
	)
}
const mapStoreToProps = (state) =>{
	return{
		state:state,
	}
}

const mapDispatchToProps = (dispatch) =>{
	return{
		updateWishlist : (wishlistmovie) => {dispatch({"type":"UPDATE_WISHLIST", "payload": wishlistmovie})}
	}
}

export default connect(mapStoreToProps, mapDispatchToProps)(Searchresult);
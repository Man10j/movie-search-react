
import React, { useState,useEffect }from 'react';
import { connect } from 'react-redux';
import { useHistory } from "react-router-dom";

const Card = (props) =>{

	let history = useHistory();
	const [values, setValues] = useState();
	 useEffect(()=>{
	let movielist = props.mvlist.map((movie) =>{
			return(
				<div key={movie.id} className='movie_list'  onClick={()=>{handlemovieClick(movie)}}>
					<div>{movie.title}</div>
					<div>{movie.release_date}</div>
					<img src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`} />
				</div>
			)
		})
		setValues(movielist)
	},[]);
		
	function handlemovieClick(value) {
		history.push("/Preview", {data:value})
		
	}

	return(	

		<div>{values}</div>

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

export default connect(mapStoreToProps , mapDispatchToProps)(Card);;
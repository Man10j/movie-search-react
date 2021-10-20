
import React, { useState,useEffect }from 'react';
import { connect } from 'react-redux';
import { useHistory } from "react-router-dom";
import './Card.css';

const Card = (props) =>{
	console.log(props)
	let history = useHistory();
	const [values, setValues] = useState();
	 useEffect(()=>{
	let movielist = props.mvlist.map((movie) =>{
			return(
				<div key={movie.id}  className='movie_list_card' onClick={()=>{handlemovieClick(movie)}}>
					<img src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`} />
					<div className="card_movie_title">{movie.title}</div>
				</div>
			)
		})
		setValues(movielist)
	},[]);
		
	function handlemovieClick(value) {
		console.log(value.title)
		history.push(`/Preview/${props.state.data.entry}/${value.title}/`, {data:value})
		
	}

	return(	

		<div className="card_list">{values}</div>

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
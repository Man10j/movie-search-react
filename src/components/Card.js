import React, { useState,useEffect }from 'react';
import { connect } from 'react-redux';
import { useHistory } from "react-router-dom";
import Noimg from './media/no_img.png';
import './Card.css';

const Card = (props) =>{
	let history = useHistory();
	const [values, setValues] = useState();
	 useEffect(()=>{
	let movielist = props.mvlist.map((movie) =>{
			return(
				<div key={movie.id}  className='movie_list_card'>
					{movie.poster_path ? <img src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}  alt="movieposter"/> : <img src={Noimg} className='noimg'  alt="movieposter"/>}
					<div className="card_movie_title">{movie.title}</div>
					<div className="card_btns">
						<button className="preview_btn" onClick={()=>{handlemovieClick(movie)}}>Preview</button>
						<button className="wishlist_btn" onClick={()=>{addtowishlist(movie)}}>Wishlist</button>
					</div>
					
				</div>
			)
		})
		function handlemovieClick(value) {
			history.push(`/Preview/${props.state.data.entry}/${value.title}/`, {data:value})
			
		}
		function addtowishlist(value) {
			props.updateWishlist(value)
		}
	
		setValues(movielist)
	},[props,history]);
		

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
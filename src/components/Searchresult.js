import React, {useState, useEffect  }from 'react';
import './Searchresult.css';
import { connect } from 'react-redux';
import HomeIcon from '@material-ui/icons/Home';
import {NavLink,Link} from 'react-router-dom';
import BookmarkIcon from '@material-ui/icons/Bookmark';
const Searchresult = (props) =>{
	const [values, setValues] = useState();
	useEffect(()=>{
		let movielist = Array.isArray(props.state.data.result) && props.state.data.result.length ? props.state.data.result.map((movie) =>{
			return(
				<div key={movie.id} className='movie_list' onClick={()=>{handlemovieClick(movie)}}>
					<div>{movie.title}</div>
					<div>{movie.release_date}</div>
					<img src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`} />
				</div>
			)
		}) : "No movies";

		setValues(movielist)
	},[]);

	function handlemovieClick(value) {
			props.updateWishlist(value);
	}

	return(	
		<div>
			<NavLink to='/home'><HomeIcon id="home_icon"/></NavLink>
			<NavLink to='/wishlist'><BookmarkIcon id="wishlisticon" /></NavLink>
			<div className="srchresult">{values}</div>
			
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
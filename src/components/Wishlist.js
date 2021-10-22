
import React, { useState,useEffect }from 'react';
import { connect } from 'react-redux';
import Card from './Card';
import { useHistory } from "react-router-dom";
import HomeIcon from '@material-ui/icons/Home';
import {NavLink,Link} from 'react-router-dom';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import ImageSearchIcon from '@material-ui/icons/ImageSearch';
import Noresult from './media/noresult.jpg';
import './Wishlist.css';
import './Card.css';

const Wishlist = (props) =>{
	let history = useHistory();
	let movie_wishlist = props.state.wishlist.filter((v,i,a)=>a.findIndex(t=>(t.id === v.id))===i)
	const [values, setValues] = useState();
 	useEffect(()=>{
	let movielist = movie_wishlist.map((movie) =>{
			return(
				<div key={movie.id}  className='movie_list_card'>
					<img src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`} />
					<div className="card_movie_title">{movie.title}</div>
					<div className="card_btns">
						<button className="preview_btn" onClick={()=>{handlemovieClick(movie)}}>Preview</button>
					</div>
					
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
		<div>
			<NavLink to='/home'><HomeIcon id="home_icon"/></NavLink>
			<NavLink to='/searchresult'><ImageSearchIcon id="wishlisticon"/></NavLink>
			{
				Array.isArray(values) && values.length ? 
				<div className="card_list">{values}</div>
				: 
				<div className="nosrch"><img className='nosrch_img' src={Noresult} alt='noresult img' /> 
				<p>wishlist Empty</p>
				</div>
			}
			
		</div>
	)
}

const mapStoreToProps = (state) =>{
	return{
		state:state
	}
}

export default connect(mapStoreToProps)(Wishlist);
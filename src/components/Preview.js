import React, { useState,useEffect } from 'react';
import './Preview.css';
import HomeIcon from '@material-ui/icons/Home';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import {NavLink} from 'react-router-dom';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import { useHistory } from "react-router-dom";
import Noimg from './media/no_img.png';

const Preview = (props) =>{

	let history = useHistory();
	const [values, setValues] = useState({});
	useEffect(()=>{
		let movie = props.location.state.data;
		let movieposter = movie.poster_path ? `https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}` : Noimg;
		setValues({
			moviename: movie.title,
			movieposter: movieposter,
			movieoverview: movie.overview,
			movierelease: movie.release_date

		});
	},[props,history])
	
	return(
		<div>
			<NavLink to="/home"><HomeIcon id="home_icon"/></NavLink>
			<ArrowBackIosIcon id="back_icon" onClick={()=>{history.goBack();}} />
			<NavLink to='/wishlist'><BookmarkIcon id="wishlisticon"/></NavLink>
			<div className="preview_container">
				<div><img src={values.movieposter} alt="movie_poster" className="movie_poster"/></div>
				<div><span className="preview_data">Title :</span> {values.moviename}</div>
				<div><span className="preview_data">ReleaseDate :</span> {values.movierelease}</div>
				<div><span className="preview_data">Overview :</span> {values.movieoverview}</div>
				
			</div>
		</div>
	)
}

export default Preview;
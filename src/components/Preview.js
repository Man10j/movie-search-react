import React, { useState } from 'react';
import './Preview.css';
import HomeIcon from '@material-ui/icons/Home';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import {NavLink,Link} from 'react-router-dom';

const Preview = (props) =>{
	console.log(props.location.state.data)
	let movie = props.location.state.data;
	const [values, setValues] = useState({
		moviename : movie.title,
		movieposter: `https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`,
		movieoverview: movie.overview,
		movierelease: movie.release_date,
	});
	console.log(values)

	return(
		<div>
			<NavLink to="/home"><HomeIcon id="home_icon"/></NavLink>
			<NavLink to="/searchresult"><ArrowBackIosIcon id="back_icon"/></NavLink>
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
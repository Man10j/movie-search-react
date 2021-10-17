import React from 'react';
import './Searchresult.css';
import { connect } from 'react-redux';
const Searchresult = (props) =>{
	console.log(props.state.data.result)
	let movielist =props.state.data.result ? props.state.data.result.map((movie) =>{
		return(
			<div key={movie.id} className='movie_list' onClick={()=>{handlemovieClick(movie)}}>
				<div>{movie.title}</div>
				<div>{movie.release_date}</div>
			</div>
		)
	}) : "no";

	function handlemovieClick(value) {
		console.log(value)
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

export default connect(mapStoreToProps)(Searchresult);
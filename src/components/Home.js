import React,{useState} from 'react';
import ReactDOM from 'react-dom';
import {NavLink,Link} from 'react-router-dom';
import './Home.css';
import { connect } from 'react-redux';

const Home = (props) =>{
	const [values,setValues] = useState(
		{	
			srchentry: "mnj"
		}
	);

	function handleChange(e) {
		setValues({
			srchentry: e.target.value
		})
	}

	function handleClick(e){
			e.preventDefault();
		   	const url = `https://api.themoviedb.org/3/search/movie?api_key=5dcf7f28a88be0edc01bbbde06f024ab&language=en-US&query=${values.srchentry}&page=1&include_adult=true`;
		  	fetch(url)
		     .then((response) => {
		        return response.json();
		     })
		     .then((data) => {
		      props.updatestate({"entry": values.srchentry,"result": data.results});
		     })
		     .then(()=>{
		     	props.history.push('/searchresult')
		     });
	}

	return(
		<div>
			<input placeholder='enter search' onChange={handleChange} value={values.srchentry}/>
			<button onClick={handleClick}>click me</button>
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
		updatestate : (req_data) => {dispatch({type:'UPDATE_ENTRY',payload:req_data})},
	}
}

export default connect(mapStoreToProps,mapDispatchToProps)(Home);
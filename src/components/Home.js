import React,{useState} from 'react';
import ReactDOM from 'react-dom';
import {NavLink,Link} from 'react-router-dom';
import './Home.css';
import { connect } from 'react-redux';
import SearchIcon from "@material-ui/icons/Search";
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import Bannerimg from './media/banner.jpg';
import BookmarkIcon from '@material-ui/icons/Bookmark';

const Home = (props) =>{

	const [values,setValues] = useState("");

	function handleClick(e){
			e.preventDefault();
			
				if(values){
					const url = `https://api.themoviedb.org/3/search/movie?api_key=5dcf7f28a88be0edc01bbbde06f024ab&language=en-US&query=${values}&page=1&include_adult=false`;
					  
						  	fetch(url)
						     .then((response) => {
						     	if(response.ok){
						     		return response.json();
						     	}
						     	else{
						     		throw new Error('Something went wrong');
						     	}
						       
						     })
						     .then((data) => {
						      props.updatedata({"entry": values,"result": data.results});
						     })
						     .then(()=>{
						     	props.history.push(`/searchresult/${values}`)
						     })
						     .catch((error) => {
							  	console.log(error)
							});						
				}

				else{
					props.updatedata({"entry": "","result": []});
					props.history.push('/searchresult')
				}
				  
				  
			}
			
			
	return(
		<div>
		<NavLink to='/wishlist'><BookmarkIcon id="home_wishlisticon"/></NavLink>
			<div className="home_pg_cont">
				<form onSubmit={handleClick} className="form">
					<SearchIcon id="srch_icon" />
					<input placeholder='Search here....' className='search_input' onChange={e=> setValues(e.target.value)} value={values}/>
					
					<button type="submit" className="srch_btn"><ArrowForwardIcon id='arrow_btn'/></button>
				</form>
			</div>
			<div className="banner_container"><img src={Bannerimg} alt="banner" className="bannerimg" /></div>
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
		updatedata : (req_data) => {dispatch({type:'UPDATE_DATA',payload:req_data})},
	}
}

export default connect(mapStoreToProps,mapDispatchToProps)(Home);
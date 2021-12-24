import React from 'react';
import './Searchresult.css';
import { connect } from 'react-redux';
import HomeIcon from '@material-ui/icons/Home';
import {NavLink} from 'react-router-dom';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import Noresult from './media/noresult.jpg';
import Card from './Card';
const Searchresult = (props) =>{

	return(	
		<div>
			<NavLink to='/home'><HomeIcon id="home_icon"/></NavLink>
			<NavLink to='/wishlist'><BookmarkIcon id="wishlisticon"/></NavLink>
			{
				Array.isArray(props.state.data.result) && props.state.data.result.length ? 
				<div className='srchresult'><Card mvlist={props.state.data.result} /></div> : <div className="nosrch"><img className='nosrch_img' src={Noresult} alt='noresult img' /> 
				 <p>Search list Empty</p>
	
			</div>
			}
			
		</div>
	)
}
const mapStoreToProps = (state) =>{
	return{
		state:state,
	}
}


export default connect(mapStoreToProps)(Searchresult);
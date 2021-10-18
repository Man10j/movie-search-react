

import { connect } from 'react-redux';
const Wishlist = (props) =>{
	let wish = props.state.wishlist.filter((v,i,a)=>a.findIndex(t=>(t.id === v.id))===i)
	console.log(wish)
	return(
		<div>Wishlist</div>
	)
}

const mapStoreToProps = (state) =>{
	return{
		state:state
	}
}

export default connect(mapStoreToProps)(Wishlist);
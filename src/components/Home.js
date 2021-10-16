import React,{useState} from 'react';
import ReactDOM from 'react-dom';
import {NavLink,Link} from 'react-router-dom';
import './Home.css';

const Home = () =>{
	const [values,setValues] = useState(
		{	
			count:0,
			res : [
				{
					"res": "0"
				}
			]	
		}
	);

	function handleClick(){
		
		setValues({
			...values,
			res:[
				...values.res,
				{"res": "1"}
				]
			
		})
		console.log(values)
	}

	return(
		<div>
			Home
			<button onClick={handleClick}>click me</button>
		</div>
	)
}

export default Home;
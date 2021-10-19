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



	{Array.isArray(props.state.data.result) && props.state.data.result.length ?
			<div className='nosrch'>
			<img className='nosrch_img' src={Noresult} alt='noresult img' /> 
			{
				props.state.data.entry==="" ? "Please enter Something" : 
				<p>Sorry, we couldn't find any match for "{props.state.data.entry}"</p>
			}
			</div> 
			:
			 <div className='srchresult'><Card mv_res={props.state.data} /></div>}
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
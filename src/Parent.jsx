import {useState} from 'react';
import ChildComponent from './ChildComponent.jsx';
function Parent()
{
	const [result,setResult] = useState(0);
	// function to get data from Child Component and setting it into state variable result
	function sendSum(sum)
	{
		setResult(sum); // to set sum into the state variable
	}
	
	//UI designing
	return (
		<div>
			<h2> Adding two numbers </h2>
			<ChildComponent sendSum={sendSum} />
			<br/>
			<p> Sum : {result} </p> 
		</div>
	);
}
export default Parent;
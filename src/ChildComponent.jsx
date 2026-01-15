import {useState} from 'react';
function ChildComponent({sendSum})
{
	const [num1 ,setNum1] = useState(0);//state variable to store value of first number
	const [num2,setNum2] = useState(0); //state variable to store value of second number
	//function to add two numbers stored in state variable and to be displayed in Parent component
	function addNumbers()
	{
		const sum = Number(num1) + Number(num2);
		sendSum(sum);//to send sum into parent
	}
	return(
		<div>
			First Number : <input type="number" value={num1} onChange={(e)=>setNum1(e.target.value)} />
			<br/>
			Second Number : <input type="number" value={num2} onChange={(e)=>setNum2(e.target.value)}/>
			<br/>
			<br/>
			<button onClick={addNumbers}> Add Numbers </button>
		</div>
	);
}
export default ChildComponent;
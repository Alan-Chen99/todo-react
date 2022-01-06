
import React, {useState} from "react";


const Inputbox = (props) => {
	
	const [curinput, setcurinput] = useState("");
	const onchangefunc = (event) => {
		setcurinput(event.target.value);
	};
	const addinput = ()=>{
		props.appender(curinput);
		setcurinput("");
	};
	const addinput_enter = (event)=>{
		if(event.key === 'Enter')
			addinput();
	};
	return (
		<div>
			<div>
				input box
			</div>
			<input
				type="newtext"
				value={curinput}
				onChange={onchangefunc}
				onKeyDown={addinput_enter}
			/>
			<button type="button" onClick={addinput}>
				Click Me!
			</button>
		</div>
	);
};

export default Inputbox;

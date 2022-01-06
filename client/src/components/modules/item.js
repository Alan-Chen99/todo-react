
import React, {useState} from "react";

const Item = (props) => {

	const [ischeck, setischeck] = useState(false);
	
	return (
		<div>
			{props.keytmp}
			{/*
			   <input type="checkbox" onChange={()=>setischeck(true)} checked={ischeck}/>
			   <input type="checkbox" onChange={()=>setischeck(!ischeck)}/>
			 */}
			<input type="checkbox" onClick={()=>setischeck(!ischeck)}/>
			<span style={{"textDecoration": ischeck?"line-through":""}}>
				{props.content}
			</span>
			<button type="button" onClick={props.removecallback}>remove!</button>
		</div>
	);
};

export default Item;

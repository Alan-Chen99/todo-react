import React, {useState} from "react";
import Item from "./item.js";
import Inputbox from "./inputbox.js";


const Todolist = (props) => {
	const [idcounter, setidcounter] = useState(0);
	const [thelist, setlist] = useState([]);
	const appendlist = (newitem) =>{
		setlist(
			[
				...thelist,
				{
					content:newitem,
					itemid:idcounter
				}
			]
		);
		setidcounter(idcounter+1);
	};
	const deletefromlist = (itemid)=>{
		return () =>{
			setlist(thelist.filter((item)=>item.itemid!==itemid));
		};
	};
	const listbody=thelist.map(
		(listcontent)=>(
			<Item
				key={listcontent.itemid}
				keytmp={listcontent.itemid}
				content={listcontent.content}
				removecallback={deletefromlist(listcontent.itemid)}
			/>
		)
	);
	return (
		<div>
			{idcounter}
			<div>
				title
			</div>
			<div>
				{listbody}
			</div>
			<Inputbox appender={appendlist}/>
		</div>	
	);
};

export default Todolist;

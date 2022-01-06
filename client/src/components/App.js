import React, {useState} from "react";
import Todolist from "./modules/todolist.js";
/*
questions for TAs:

what does brace on import do

onchange vs onclick, apprently if while sing checkbox,
suppose one sets checked and uses onclick,
browser complains and makes the button readonly, but onclick still triggers

are files loaded seperately

pure java script imports (first? lab)

*/

/*
note to self:
reacts tracks child components with key.
new rendered child object with the same key will gain the old object state
*/



const App = (props) =>( 
	<div>
		<Todolist/>
	</div>
);

export default App;

import React,{useState} from 'react';
import "./Search.css";
// main css file
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import PeopleIcon from "@material-ui/icons/People"
import {Button} from "@material-ui/core";
import {useHistory} from "react-router-dom";


import {DateRangePicker} from "react-date-range";
function Search() {
	const history=useHistory();
	const [startDate,setstartDate]=useState(new Date());
	const [endDate ,setEndDate]=useState(new Date()); 

	const selectionRange={ 
		startDate:startDate,
		endDate:endDate,
		key:"selection",
	};

	function handleSelect(ranges){
		setstartDate(ranges.selection.startDate);
		setEndDate(ranges.selection.endDate);
	}
	return (
		<div class="search">
              <DateRangePicker ranges={[selectionRange]} onChange={handleSelect}/>
			<h2>Number of Guests
			<PeopleIcon/>
			<input min={0} defaultValue={2} type="number"/></h2>
			<Button onClick={()=>history.push('/search')}>Search Airbnb</Button> 
		</div>
	)
}

export default Search

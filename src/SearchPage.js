import React from 'react';
import "./SearchPage.css";
import {Button} from "@material-ui/core";
import SearchResult from "./SearchResult"
function SearchPage() {
	return (
		<div className="searchPage">
			<div className="searchPage_info">
			<p> 62 stays .6 august to 30 augu. 2 guest </p>
			<h1> Stay NearBy</h1>
			<Button variant="outlined">Cancellation Flexibility</Button>
			<Button variant="outlined">Type of place</Button>
			<Button variant="outlined">Price</Button>
			<Button variant="outlined">Rooms and beds</Button>
			<Button variant="outlined">More filters</Button>
			</div>
			<SearchResult 
			img="https://tse2.mm.bing.net/th?id=OIP.jyYK6ZNf3lhgLdEejvR7pgHaE8&pid=Api&P=0&w=269&h=180"
			location="Private room in center of london"
			title="5 Star Luxury Apartment"
			description="3 guest 1 bedroom 1 bed 1.5 shared bthrooms wifi kitchen Free parking Wshing Machine"
			star={3.5}
			price ="$90/night"
			total="$650 total"
			/>
			<SearchResult 
			img="https://tse2.mm.bing.net/th?id=OIP.jyYK6ZNf3lhgLdEejvR7pgHaE8&pid=Api&P=0&w=269&h=180"
			
		location="Private room in center of london"
			title="5 Star Luxury Apartment"
			description="3 guest 1 bedroom 1 bed 1.5 shared bthrooms wifi kitchen Free parking Wshing Machine"
			star={3.5}
			price ="$90/night"
			total="$650 total"
			/>
			<SearchResult 
			img="https://tse2.mm.bing.net/th?id=OIP.jyYK6ZNf3lhgLdEejvR7pgHaE8&pid=Api&P=0&w=269&h=180"
			
			location="Private room in center of london"
			title="5 Star Luxury Apartment"
			description="3 guest 1 bedroom 1 bed 1.5 shared bthrooms wifi kitchen Free parking Wshing Machine"
			star={3.5}
			price ="$90/night"
			total="$650 total"
			/>
			<SearchResult 
			img="https://tse2.mm.bing.net/th?id=OIP.jyYK6ZNf3lhgLdEejvR7pgHaE8&pid=Api&P=0&w=269&h=180"
			
		location="Private room in center of london"
			title="5 Star Luxury Apartment"
			description="3 guest 1 bedroom 1 bed 1.5 shared bthrooms wifi kitchen Free parking Wshing Machine"
			star={3.5}
			price ="$90/night"
			total="$650 total"
			/>
			<SearchResult 
			img="https://tse2.mm.bing.net/th?id=OIP.jyYK6ZNf3lhgLdEejvR7pgHaE8&pid=Api&P=0&w=269&h=180"
			
			location="Private room in center of london"
			title="5 Star Luxury Apartment"
			description="3 guest 1 bedroom 1 bed 1.5 shared bthrooms wifi kitchen Free parking Wshing Machine"
			star={3.5}
			price ="$90/night"
			total="$650 total"
			/>"
			
	
		</div>
	)
}

export default SearchPage;

import React from 'react';
import "./SearchResult.css";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import StarIcon from "@material-ui/icons/Star"

function SearchResult({
	img,
	location,
	title,
	description,
	star,
	price,
	total,})
	{
	return (
		<div className="searchResult">
			<img src={img} alt=""/>
			<FavoriteBorderIcon className="searchResult_heart"/>
			<div className="searchResult_info">
			     <div className="searchResult_infoTop">
			        <p>{location}</p>
			           <p >{title}</p>
			          <p>__</p>
			         <p>{description}</p>
			     </div>
			<div className="searchResults_infoBottom">
			    <StarIcon className="searchResult_star"/>
			        <p><strong>{star}</strong></p>
			</div>
			<div className="searchResult_price">
					 <p><strong>{price}</strong></p>
			</div>
			<div className="searchResult_total">
					 <p><strong>{total}</strong></p>
			</div>
			</div>
		</div>
	)
}

export default SearchResult;

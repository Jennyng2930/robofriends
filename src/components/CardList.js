import React from 'react';
import Card from './Card';

const CardList = ({robots}) => {
	// if (true){
	// 	throw new Error ('NOOOOOOO!');
	// }
	return (
		<div>
			{
		    	robots.map((user,i) => {
					return (
						<Card 
						key={robots[i].id} /*key nay de noi ve thu tu cua card*/
						id={robots[i].id}
						name={robots[i].name} 
						username={robots[i].username} 
						email={robots[i].email}
						/>
					);
				})
			}
	    </div>
	)
}

export default CardList;
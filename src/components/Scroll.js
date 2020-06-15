import React from 'react';

const Scroll = (props) => {
	return (
		<div style ={{overflow: 'scroll', border: '1px solid linear-gradient(to right, rgb(48, 198, 131), rgb(5, 79, 112))', height: '500px'}}>
			{props.children}
		</div>	
	)
};

export default Scroll;
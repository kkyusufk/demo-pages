import React from 'react';

const ColorbandMedia = ({
	outerWidth,
	outerHeight,
	backgroundColor,
	padding,
	innerWidth,
	innerHeight
}) => (
	<>
		<div style={{ backgroundColor, width: outerWidth, height: outerHeight }}>
			<div style={{ padding, width: innerWidth, height: innerHeight }}>
			</div>
		</div>
	</>
);

export { ColorbandMedia }
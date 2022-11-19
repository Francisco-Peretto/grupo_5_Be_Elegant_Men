import React from 'react';

import ContentRowProducts from './ContentRowProducts';
import ContentRowCenter from './ContentRowCenter';
import Chart from './Chart';

function ContentRowTop(){
    return(
        <React.Fragment>
				{/*<!-- Content Row Top -->*/}
				<div className="container-fluid">
					<div className="d-sm-flex aligns-items-center justify-content-between mb-4">
						<h1 className="h3 mb-0 text-gray-800">  </h1>
					</div>

					<ContentRowProducts />				
					<ContentRowCenter />
					<Chart />	
				</div>

        </React.Fragment>
    )

}
export default ContentRowTop;
import React from "react";

import './pageheader.scss'


const PageHeader = props => {
    return (
        <div className="page-header" style={{backgroundColor: `black`}} >
            <h2>{props.children}</h2>
        </div>
    )
}

export default PageHeader
import React from "react";
function Header({blogName="Underreacted"}){
    return(
        <header>
            <h1>{blogName}</h1>
        </header>
    );
}
export default Header
import React from "react";
import "./NoMatch.scss"
import {useLocation,Link} from "react-router-dom";

function NoMatch() {
    let location = useLocation();

    return (
        <div className="noMatch">
            <h3>
            Nothing to see here! <code>{location.pathname}</code>
            </h3>
            <Link to="/">Go to the home page of the app</Link>
        </div>
    );
}
export default NoMatch

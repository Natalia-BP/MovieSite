import React, { useContext } from 'react';
import { Context } from "../store/Context";
import { BrowserRouter as Route, Link } from "react-router-dom";
import TextTruncate from 'react-text-truncate';

function TopRated() {
    
    const { store, actions } = useContext(Context);

    return store.top_rated.map((e,i) => {

    })
}

export default TopRated;
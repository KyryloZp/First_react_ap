import React from 'react';
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";



export const withSuspense = (Component) => {
    return (props) => {
        return <React.Suspense fallback={<div>Завантаження...</div>}>< Component {...props} /> </React.Suspense>
    }
}


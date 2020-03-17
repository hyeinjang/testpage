import React from 'react';
import {withContext} from "context-q";
import styled from 'styled-components';
import Sidemenu from './Sidemenu';




let EventView = props => {
    // console.log(props.context);

    const toggleMenu = () => {
        props.context.update({
            isAsideOpen: !props.context.isAsideOpen
        })
    }

    return (
        <>
            <h1>Event test</h1>
            <button
                className={"bg-blue-300 p-5"}
                onClick={toggleMenu}
            >menu</button>
            <Sidemenu/>
        </>

    )
}

EventView = withContext(EventView);

export default EventView;
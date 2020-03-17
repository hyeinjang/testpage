import React from 'react';
import styled, {css} from 'styled-components';
import {withContext} from "context-q/dist/ContextQ";


//TODO: body(sidemenu 제외) 클릭했을 때 context update
// sidemenu motion 추가 (스르륵 나오게)

const SidemenuWrapper = styled.div`


    position: fixed;
    min-width: 300px;
    width: 30%;
    height: 100%;
    background-color: powderblue;
    top:0;
    right: 0;
    
`

let Sidemenu = props => {
    console.log(props.context);




    if(!props.context.isAsideOpen){
        return <></>
    }
    return (
        <SidemenuWrapper>
            side menu
        </SidemenuWrapper>
    )
}

Sidemenu = withContext(Sidemenu);

export default Sidemenu;
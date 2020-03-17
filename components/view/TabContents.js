import React from 'react';

const TabContents = props => {
    const onClick = () => {
        const {label, onClick} = props;
        onClick(label);
    }


    return (
        <>
            <li
                className={'inline-block mr-5'}
                onClick={onClick}
            >
                {props.label}
            </li>
        </>
    )
}

export default TabContents;
import React from 'react';

const Image = (props) => {
    return (
    <img className={props.selected ? "activeImgTile" : ""} src={props.src} alt={props.alt} onClick={() => props.handleImgTile(props.tile)} />
    )
}

export default Image;
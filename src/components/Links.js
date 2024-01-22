import React from 'react';

export default function CustomLink(props) {
    const { href, id, text } = props;
    return (
        <a href={href} id={id}>{text}</a>
    );
};
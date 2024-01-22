import React from 'react';
import userIcon from '../img/user-icon.png';

export default function CreateUserPost(props) {
    const { color, name, element, content } = props;
    const DynamicElement = ({ element, content }) => {
        const CustomElement = element || 'div';
      
        return <CustomElement>{content}</CustomElement>;
    }
    return (
        <div class="post user">
            <div class="user-icon" id={color}>
                <img src={userIcon} alt="user" />
            </div>
            <div class="post-content contact-btn">
                <h3>{name}</h3>
                <DynamicElement element={element} content={content} />
            </div>
        </div>
    );
};
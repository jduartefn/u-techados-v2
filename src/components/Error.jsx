import React from 'react';

import errorStyle from '../breadcumbs/css/error.css';
import { BsFillEmojiDizzyFill } from 'react-icons/bs'


const error = () => {
    return (
        <div className="error-component">
            <div className="error-info">
                <div className="ico">
                <BsFillEmojiDizzyFill/>
                </div>
                <h2>Pagina no encontrada error (404) </h2>
            </div>

        </div>
    );

}


export default error;
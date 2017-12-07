import React from 'react'
const uuidv4 = require('uuid/v4');
import PropTypes from 'prop-types';

const RenderChoice = ({ values , addValue , active }) => {
    return values.map((value) => {
        const classname = `input ${active === value ? 'active' : ''}`
        return ( 
        <div className={classname}  key={uuidv4()} onClick={() => addValue(value)}>
            <p className="text">{value}</p>
            <style jsx>{` 
                .input{
                    text-align: center;
                    width: 12%;
                    border-left: 1px solid #aaa;
                }
                .input:hover{
                    cursor: pointer;
                }
                `}
            </style>
        </div>
        )
    })
}

RenderChoice.propTypes = {
    values: PropTypes.array.isRequired,
    addValue: PropTypes.func.isRequired,
}

export default RenderChoice
import React from 'react';
import PropTypes from 'prop-types';
import RenderChoice from './RenderChoice'

const SelectPlan = (props) => {
    
    const { values , content , image , addValue , active , validate , name} = props;
    return (
        <div>
            <div className="flex">
                <div className="flex-item img">
                    <img src={image} alt="img" />
                </div>
                <div className="flex-item content">
                    <p className="content">{content}</p>
                </div> 
                <RenderChoice values={values} addValue={addValue} active={active}/>
            </div>
            {validate ? <div className="warning flex-item">pls select {name}</div> : ''}
            <style jsx>{`
                .flex{
                    display: flex;
                    border-bottom: 1px solid #aaa;
                    width: 100%;
                    background-color: white;
                    color: black;
                    justify-content: left;
                    margin: auto;
                    margin-bottom: 8px;
                }   
                .flex-item {
                    margin: auto;
                    text-align: center;
                }

                div.flex div.img {
                    margin : 0;
                    padding: 0;
                }
                .radio-input{
                    width: 12%;
                    border-left: 1px solid #aaa;
                    padding: 8px;
                    padding-left: 10px;
                    padding-right: 0;
                }
                .content {
                    padding-left: 10px;
                }
                `}
            </style>
        </div>
    )
}

SelectPlan.propTypes = {
    values: PropTypes.array.isRequired,
    content: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    addValue: PropTypes.func.isRequired
}

export default SelectPlan;

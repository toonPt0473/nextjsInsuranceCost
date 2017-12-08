import React, { Component } from 'react'

export class InsuranceDetail extends Component {
    renderDetail(){
        const left = this.props.index%2 === 0 ? "1500px" : "-1500px"
        return (
            <div className={"is-showing"}>
                <p>สัญญาเพิ่มเติม : <strong>{this.props.name}</strong> ความคุ้มครอง :{this.props.coverage} บาท</p>
                <h5>{this.props.detail}</h5>
                
                <style jsx>{`
                .is-showing{
                    position: relative;
                    max-width:100%;
                    margin: 10px 0px;
                    padding: 3px 30px;
                    background: #3b5998;
                    color: white;
                    animation-name: moving;
                    animation-duration: 1.5s;
                    animation-timing-function: ease-in-out;
                }
            
                @keyframes moving {
                    0%   {background-color: rgba(255, 255, 255, 0.9); left:${left};}
                    100% {background-color: #3b5998 ; left:0px;}
                }
                .hidden{
                    display: none
                }
                `}</style>
            </div>
        )
    }
    render() {
        const changeClassName =  this.props.coverage ? "is-showing" : "hidden";
        
        return (
            <div>
                {this.props.coverage && this.renderDetail()}
            </div>
            
          )
  }
}

export default InsuranceDetail

export default () => {
    return (
        <div className="wrapper">
            <div className="bouncing_ball">
                <div className="ball"></div>
            </div>
            
            <h1 className="loading">LOADING<span className="dot_one"> .</span><span className="dot_two"> .</span><span className="dot_three"> .</span></h1>
            <style jsx>{`
                  h1.loading {
                    position: relative;
                    top: 28%;
                    transform: translateY(-50%);
                    font-size: 3em;
                    font-weight: 400;
                    margin-left: 3rem;
                  }
                  span[class^='dot_'] {
                    opacity: 0;
                  }
                  .dot_one {
                    animation: dot_one 2s infinite linear;
                  }
                  .dot_two {
                    animation: dot_two 2s infinite linear;
                  }
                  .dot_three {
                    animation: dot_three 2s infinite linear;
                  }
                  .wrapper {
                    position: absolute;
                    left: 0;
                    top: 0;
                    font-family: Palanquin;
                    line-height: 1.618em;
                    background: rgba(49, 49, 49, 0.85);
                    color: #fff;
                    width: 100%;
                    height: 100%;
                    text-align: center;
                    z-index :1;
                    overflow: hidden;
                  }
                  .bouncing_ball {
                    position: relative;
                    top: 28%;
                    transform: translateY(-50%);
                    width: 4rem;
                    margin: 0 auto;
                    height: 12rem;
                  }
                  .ball {
                    width: 4rem;
                    height: 4rem;
                    border-radius: 50%;
                    background: #fff;
                    position: absolute;
                    top: 0;
                    animation: bounce 1s infinite;
                  }
                  @keyframes dot_one {
                    0% {
                      opacity: 0;
                    }
                    15% {
                      opacity: 0;
                    }
                    25% {
                      opacity: 1;
                    }
                    100% {
                      opacity: 1;
                    }
                  }
                  @keyframes dot_two {
                    0% {
                      opacity: 0;
                    }
                    40% {
                      opacity: 0;
                    }
                    50% {
                      opacity: 1;
                    }
                    100% {
                      opacity: 1;
                    }
                  }
                  @keyframes dot_three {
                    0% {
                      opacity: 0;
                    }
                    65% {
                      opacity: 0;
                    }
                    75% {
                      opacity: 1;
                    }
                    100% {
                      opacity: 1;
                    }
                  }
                  @keyframes bounce {
                    0% {
                      top: 0;
                      animation-timing-function: ease-in;
                    }
                    34% {
                      height: 4rem;
                      width: 4rem;
                    }
                    35% {
                      top: 8rem;
                      height: 3rem;
                      width: 4.3rem;
                      animation-timing-function: ease-out;
                    }
                    45% {
                      height: 4rem;
                      width: 4rem;
                    }
                    90% {
                      top: 0;
                    }
                    100% {
                      top: 0;
                    }
                  }
            `}
            </style>
        </div>
    )
}
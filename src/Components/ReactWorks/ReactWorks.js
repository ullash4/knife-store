import React from 'react';

const ReactWorks = () => {
    return (
        <div className='my-5'>
            <div className="row">
                <div className="col-md-5">
                    <img className='img-fluid' src="https://i.ibb.co/4N40Qx0/6329.jpg" alt="" />
                </div>
                <div className="col-md-7">
                    <h1>How reactJs Works ?</h1>
                    <p>ReactJs was created by Jordan Walke. Now it's maintained by Facebook. ReactJs is a component-based front-endlibrary. It's an Open source javascript library. React create a virtual dom to compare real dom. If youmake any changes to your code. ReactJs compare real dom and its own make virtual dom, which thing  did you change React only change that you changed on your code. You don't need to create same code for your website. Because React gives you a component that is rewritable. One time you write your code anduse it as your wish. React's main purpose is to make developer experience better than better.</p>
                </div>
            </div>
        </div>
    );
};

export default ReactWorks;
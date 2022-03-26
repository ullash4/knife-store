import React from 'react';

const PropsState = () => {
    return (
        <div className='my-5'>
            <div className="row">
                <div className="col-md-7">
                    <h1>Props vs State</h1>
                    <p>Props: Props are immutable and read only. Its allow to pass data from one component to other components
                    as an argument. Props are used to communicate between components. Props are external and controlled by
                    whatever renders the component</p>
                    <p>State: State is mutable and its changes can be asynchronous. State holds information about the componot
                    Its cant be accessed by child compononets. State cant make componets reusable.</p>
                </div>
                <div className="col-md-5">
                    <img className='img-fluid p-2' src='https://i.ibb.co/JtZPRWt/5283.jpg' alt="" />
                </div>
            </div>
        </div>
    );
};

export default PropsState;
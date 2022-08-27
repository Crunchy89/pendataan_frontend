import React from 'react';
import CostumH1 from '../../component/CostumH1';

const Login = () => {
    return (
        <div className='d-flex justify-content-center align-items-center' style={{height:"100vh"}}>
            <CostumH1 title='card1' text='text1' button='next 1' />
            <CostumH1 title='card2' text='text2' button='next 2' />
        </div>
    );
};

export default Login;
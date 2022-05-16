import React from 'react';
import   "./navbar.css"
import Button from './Button';
function Navbar(){
    return (
        <>
        <div className='NavDiv'>
            <div>logo</div>
            <div className='NavDiv_1'>
                <div>Services</div>
                <div>Project</div>
                <div>About</div>

            </div>
            <Button/>
        </div>
        </>
    )
}

export default Navbar ;
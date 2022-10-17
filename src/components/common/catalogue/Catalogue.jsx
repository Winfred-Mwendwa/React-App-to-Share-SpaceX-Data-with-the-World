import React from 'react';
import './Catagoue.css'

function Catalogue () {
    return (
        <div className='catalogue-wrapper'>
            
            <div>
                <div className='image'>
                    <img src="/src/undefined - Imgur (1).jpg" alt="falcon 1" />
                </div>
                <div className='name hover:text-cyan-300'>
                    <a href="#"><h2>Falcon 1</h2></a>  
                </div>  
            </div>
            <div className='image'>
                <img src="/src/falcon 9.jpg" alt="Falcon 9" />
            </div>
            <div className='name hover:text-cyan-300'>
                <a href="#"><h2>Falcon 9</h2></a>
            </div>
            <div className='image'>
                <img src="/src/falcon heavy.jpg" alt="falcon heavy" />
            </div>
            <div className='name hover:text-cyan-300'>
                <a href="#"><h2>Falcon Heavy</h2></a>
            </div>
            <div className='image'>
                <img src="/src/starship2.jpg" alt="starship" />
            </div>
            <div className='name hover:text-cyan-300'>
                <a href="#"><h2>Starship</h2></a>
            </div>

        </div>
        
    )
}

export default Catalogue;
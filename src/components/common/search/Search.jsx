import React from 'react';
import './Search.css';

function Search () {
    return (
        <div className='form-wrapper'>
            <form id="search-form ">
                    <div className='search-fields grid gap-4 '>
                    
                        <label id="" > <input id="" type="text" placeholder="Mission" /> </label>
                        <label id=""> <input  id= "" type="text" placeholder="Rocket-id" /> </label>
                        <label id=""> <input id="" type="text"  placeholder="Launch-year" /> </label>
                        <button type='submit'><i class="fa-solid fa-magnifying-glass"></i></button>
                    </div>
                    
                    
                        

                        
                    
            </form>

            
            
        </div>
        
    )
}

export default Search;
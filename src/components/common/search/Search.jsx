import React from 'react';
import './Search.css';
import { useState } from 'react';
import { useEffect } from 'react';
import Pagination from '../pagination';
import Popup from '../popup';


function Search () {
    
    const [error, setError] = useState(null);
    const [loaded, setLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const [query, setQuery] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [recordsPerPage] = useState(1);
    

     useEffect(() => {
      const request_headers = new Headers();
      
      request_headers.append("Content-Type", "application/json");
  
      const request_options = {
        method: "GET",
        headers: request_headers,
      };
  
      fetch("https://api.spacexdata.com/v3/rockets", request_options)
        .then((res) => res.json())
        .then(
          (result) => {
            setLoaded(true);
            setItems(result);
          },
          (error) => {
            setLoaded(true);
            setError(error);
          }
        );
    }, []);
    const data = Object.values(items);
    const indexOfLastRecord = currentPage * recordsPerPage;
    const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
    const currentRecords = data.slice(indexOfFirstRecord, indexOfLastRecord);
    const nPages = Math.ceil(data.length / recordsPerPage)
    
    
    
    const search_parameters = Object.keys(Object.assign({}, ...data));


    function search(items) {
        return items.filter((item) =>
            search_parameters.some((parameter) =>
                item[parameter].toString().toLowerCase().includes(query)
            )
        );
    }

    if (error) {
        return <>{error.message}</>;
    } else if (!loaded) {
        return <>loading...</>;
    } else {
        return (
            <div className='content-search grid gap-1 place-content-center justify-items-stretch text-black'>
                <div className='search-wrapper'>
                    

                        <input type="search" 
                        
                        name='search-form'
                        id='search-form'
                        className='search-input'
                        placeholder='search by rocket name...'
                        onChange={(e) => setQuery(e.target.value)}
                        />
                        
                        <span className='visually-hidden'>search by rocket name</span>
                    

                </div>
                <div className='search-wrapper'>
                    
                        <input type="search" 
                        name='search-form'
                        id='search-form'
                        className='search-input'
                        placeholder='search by launch year...'
                        onChange={(e) => setQuery(e.target.value)}
                        />
                        <span className='visually-hidden'>search by launch year</span>
                    

                </div>
                <div className='search-wrapper'>
                    
                        <input type="search" 
                        name='search-form'
                        id='search-form'
                        className='search-input'
                        placeholder='search by payload...'
                        onChange={(e) => setQuery(e.target.value)}
                        />
                        <span className='visually-hidden'>search by payload</span>
                    

                </div>
                <div className="wrapper">
                    <ul className="card-grid">
                        {search(currentRecords).slice(0, currentPage).map((item) => (
                        <li key={item.id}>
                            
                                <div className="card-image">
                                    <img src={item.flickr_images[0]} alt={item.rocket_name} />
                                    
                                </div>
                                
                                    <h2 className=" hover:text-cyan-300 py-10 text-white">{item.rocket_name}</h2>

                        </li>

                        ))}
                
                    </ul>
                    <Popup />
                    
                    <Pagination
                nPages={nPages}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
            />
            
                </div>
                

            </div>
            
            
        );
        
    }
            

}
export default Search;
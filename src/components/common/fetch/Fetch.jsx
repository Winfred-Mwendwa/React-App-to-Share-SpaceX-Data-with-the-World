import { data } from "autoprefixer";
import { useState, useEffect } from "react";
import './Fetch.css'


function Fetch() {
  const [error, setError] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [items, setItems] = useState([]);
  
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
  
  console.log(items);
  const data = Object.values(items);

  if (error) {
    return <>{error.message}</>
  } else if (!loaded) {
    return <>loading...</>
  } else {
    return (
        <div className="wrapper">
            <ul className="card-grid">
                {data.map((item) => (
                    <li key={item.id}>
                        <article className="card">
                            <div className="card-image">
                                <img src={item.flickr_images[0]} alt={item.rocket_name} />
                                
                            </div>
                            <div className="card-content">
                                <h2 className="card-name hover:text-cyan-300">{item.rocket_name}</h2>
                                
                            </div>
                            
                        </article>

                    </li>

                ))}
                
            </ul>
            
        </div>
    )
  }
}

export default Fetch;
import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Popup () {
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
                const [show, setShow] = useState(false);
              
                const handleClose = () => setShow(false);
                const handleShow = () => setShow(true);
                const data = Object.values(items);
                let nextId = 0;
      if (error) {
        return <>{error.message}</>;
    } else if (!loaded) {
        return <>loading...</>;
    } else {
        return (
                  <>
                    <Button variant="primary" onClick={handleShow}>
                     Learn more
                    </Button>
              
                    <Modal show={show} onHide={handleClose} animation={false} size="md" centered>
                      <Modal.Header closeButton>
                        <Modal.Title></Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                      <ul>
                            {data.map((item) => (
            
                            <li key={item.id}>{item.description}</li>
          
                            ))}
                        </ul>

                      </Modal.Body>
                      <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                          Close
                        </Button>
                      </Modal.Footer>
                    </Modal>
                  </>
                );
              }
       

}

export default Popup;
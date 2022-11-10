import React from 'react'
//import './popup.css'
import Modal from "react-bootstrap/Modal";
function Popup({modelName, imageUrl,cost, show, setShow }) {
    const handleClose = () =>setShow(false);
    return (
        <>
        <Modal show={show} onHide={handleClose} animation={false}>
            <Modal.Header closeButton>
                <Modal.Title>{modelName}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div style={{ display : "flex" ,  gap : "20px" }}>
                  <div className="img" >
                     <img src={imageUrl} width = "300px" height="200px" alt="product" />
                  </div>
                  <div className="desc" style={{fontSize:"1vw", fontWeight:"bolder"}}>PRICE :
                    {cost}
                  </div>
                </div>
            </Modal.Body>
        </Modal>
        </>
  )
}

export default Popup

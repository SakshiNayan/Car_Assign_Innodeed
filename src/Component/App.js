import React, { useState } from "react";
import Record from '../Mock/cars.json'
import Pagination from "./pagination";
import Popup from "./popUp";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
function App() {
  const [show, setShow] = useState(false);
  const [tempData, settempData] = useState([]);
  const showperPg  = 4;
    const [pagination, setpagination] = useState({
        start :0,
        end: showperPg
    })
    const onPaginationChange = (start,end)=>{
        setpagination({start : start,end : end})
    }
    const handleModal = (modelName, imageUrl,cost) => {
      let tempData = [modelName, imageUrl,cost];
      settempData(item => [1, ...tempData]);
      setShow(true);
  }

  return (
    <>
    <div id ='main-body'>
    {
      Record.slice(pagination.start, pagination.end).map(data =>{
        return(
          <div className="container" key={data.id}>
            <p className="body-type">{data.bodyType}</p>
            <div className="model">
              <span className="modelName">{data.modelName}</span>&nbsp; &nbsp;
              <span  style={{color:"grey", fontSize:"1vw"}}>{data.modelType}</span>
            </div>
              <div className="Car">
                  <img src={data.imageUrl} alt="imgCar" className="carImg"/>
              </div>
              <div className="pop-container">
                <span 
                  style={{color:"#56baed", fontSize:"1.2vw", fontWeight:"bolder"}}
                    onClick={() => handleModal(data.modelName, data.imageUrl, data.cost)}
                   
                  >LEARN&nbsp;
                  <svg  width="10" height="15" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1.56379 0L0.000244141 1.56355L5.07901 6.6534L0.000244141 11.7433L1.56379 13.3068L8.21719 6.6534L1.56379 0Z" fill="#56baed" />
                  </svg>
                </span>&nbsp; &nbsp; &nbsp;
                <span style={{color:"#56baed", fontSize:"1.2vw", fontWeight:"bolder"}}>SHOP&nbsp;
                  <svg  width="10" height="15" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1.56379 0L0.000244141 1.56355L5.07901 6.6534L0.000244141 11.7433L1.56379 13.3068L8.21719 6.6534L1.56379 0Z" fill="#56baed" />
                  </svg>
                </span>
              </div>
          </div>
        )
      })
    }
    </div>
    <div>
            <Pagination  showperPg={showperPg}  total ={Record.length} onPaginationChange = {onPaginationChange}/>
    </div>
    {
                show === true ? <Popup imageUrl={tempData[2]} modelName={tempData[1]} cost={tempData[3]} show={show} setShow={setShow} /> : ""
            }
    </>
  );
}

export default App;

import { useEffect, useState } from "react"
import {objData} from "../utils/constantData"
import { Link } from "react-router-dom";

const Main=()=>{
    const [restList,setList]=useState(objData);
    const [filterRes,setfilterRes]=useState(objData);
    const [Search,Setsearch]=useState("");
    return(
      <div className="main-con">
        <div className="filter-b">
          <div className="search-b">

            <input type="text" className="sc-box" value={Search} onChange={(e)=>{Setsearch(e.target.value )}}/>

            <button onClick={()=>{console.log(Search);
            const filteredRes=restList.filter((res)=>res.rest.toLowerCase().includes(Search.toLowerCase()));
            setfilterRes(filteredRes);
            }}>Search</button>



          </div>
         <button className="filter-btn"
            onClick={()=>{
                const sd=restList.filter((rs)=>rs.rate>=4);
                setfilterRes(sd);
            }}>
            Top rated </button>
        </div>
        <div className="card-box">
          {
            filterRes.map((it)=>(
            <Link key={it.id} to={"/Restaurant/"+it.id}> <Card  key={it.id} foodpic={it.img} resName={it.rest} type={it.type} rate={it.rate}/></Link> 
            ))
          }  
        </div>
      </div>
    )
  }
  const Card=({foodpic,resName,type,rate})=>{
    return( <div className="cont">
     <div className="f-img">
       <img src={foodpic}/>
     </div>
       <h3>{resName} Restaurent</h3>
       <p>{type}</p>
       <h4 className="rating">{rate}⭐</h4>
     </div>
    )
 }

  export default Main;
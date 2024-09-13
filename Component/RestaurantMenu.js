import { useState } from "react";
import { objData } from "../utils/constantData";
RestaurantMenu=()=>{
    const [info,setinfo]=useState(objData);
    
    return(
        <div>
            <h1>{info.rest}</h1>
            <p>menu</p>
            
                {
             info.map((ite)=>(
                
             <li>
                {ite.info.menu.join(", ")} - Rs.:{ite.info.price}
             </li>))
                }
            
        </div>
    )
}
export default RestaurantMenu;
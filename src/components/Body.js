import RestrauntCard from "./RestrauntCard";
import resObj from "../utils/mockdata"
import { useState } from "react";


const Body = () => {
    const [listOfRestro, setListOfRestro] = useState(resObj);
    return (
            <div className="body">
              <div className="filter">
                <button className="filter-btn" onClick={() => {
                    const filterData = listOfRestro.filter((res) => res.info.avgRating >= 4.5);
                setListOfRestro(filterData);
                }}>Top Rated Restaurant</button>
              </div>
              <div className="res-container">
                {listOfRestro.map((restaurant) =><RestrauntCard key={restaurant.info.id} resData = {restaurant}/>) }                   
              </div>
            </div>
            
    )
};

export default Body;
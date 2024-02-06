import RestrauntCard from "./RestrauntCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";



const Body = () => {
    const [listOfRestro, setListOfRestro] = useState([]);
    const [filterRestaurant, setFilterRestaurant] = useState([]);
    const [searchText, setSearchText] = useState('')

    const filterTopratedRes = () => {
        const filterData = listOfRestro.filter((res) => res.info.avgRating >= 4.5);
        setFilterRestaurant(filterData);                    
    }

    const reset = () => {
        setFilterRestaurant(listOfRestro);    
    }

    // const filterByKeyword = (event) => {
    //     const keyword = event.target.value.toLowerCase(); 
    //     console.log(keyword);
    
    //     const filterData = listOfRestro.filter((ele) => ele.info.name.toLowerCase().includes(keyword));
    //     setFilterRestaurant(filterData);    
    //     console.log(filterData); 
      
    // };

    const filterRestrurantData = () => {
        // const filterList = listOfRestro.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
        //                 setFilterRestaurant(filterList);

        const filterData = listOfRestro.filter((ele) => ele.info.name.toLowerCase().includes(searchText.toLowerCase()));
        setFilterRestaurant(filterData); 
    }

    const fetchData = async() => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        console.log(json);
        setListOfRestro(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilterRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }

    useEffect(() => {
        fetchData();
    }, []);

    const onlineStatus = useOnlineStatus();

    if(onlineStatus === false) return <h1>Loole Like you are offline</h1>

    // consitional rendering
    
    // if(listOfRestro.length === 0){
    //     return <Shimmer />
    // }

    return listOfRestro.length === 0 ? (<Shimmer />) :(
            <div className="body">
              <div className="filter">
                <div className="search px-2 m-2 flex">
                    <input className="px-4 py-2 m-2 border border-solid border-black bg-slate-100" 
                    value={searchText}
                    onChange={(e) => {
                        setSearchText(e.target.value);
                    }}
                    />
                    <button className="px-4 py-2 bg-green-100 m-4 rounded-lg"
                    onClick={filterRestrurantData}
                    >
                        Search
                    </button>
                    <button className="px-4 py-2 m-2 bg-gray-100 rounded-lg" onClick={filterTopratedRes}>Top Rated Restaurant</button>
                    <button className="px-4 py-2 m-2 bg-gray-100 rounded-lg"
                    onClick={reset}
                    >Reset</button>
                </div>
                {/* <div className="m-4 p-4">
                <button className="px-4 py-2 bg-gray-100 rounded-lg" onClick={filterTopratedRes}>Top Rated Restaurant</button>
                </div> */}
                {/* <button className="reset"
                 onClick={reset}
                 >Reset</button> */}
                {/* <input type="text"
                name=""
                onChange={filterByKeyword}
                /> */}
              </div>
              <div className="flex flex-wrap">
                {filterRestaurant.map((restaurant) =>(
                <Link
                key={restaurant.info.id}
                to={"/restaurants/"+ restaurant.info.id}><RestrauntCard  resData={restaurant} /></Link>
                )) }                   
              </div>
            </div>
            
    )
};

export default Body;
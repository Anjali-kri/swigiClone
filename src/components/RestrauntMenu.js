import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCatagory from "./RestaurantCatagory";

const RestrauntMenu = () => {  
  const {resId} = useParams();
  const {restaurant, recomendedRestro, allData } = useRestaurantMenu(resId);  
  const [showIndex, setShowIndex] = useState(0);
  if (!restaurant) return <Shimmer />;

  // Check if allData.cards has at least 3 elements
  if (!allData.cards || allData.cards.length < 3) {
    console.error("Insufficient cards data in allData");
    return null; // You can return something meaningful here
  }

  const catagory = allData.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter((c) => { 
    return c?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory";
  });
  console.log(catagory, "recommended data");

  return (
    <div className="text-center">
      <h1 className="text-2xl font-bold items-center m-6">{restaurant.name}</h1> 
      <p className="font-bold text-lg">{restaurant.cuisines} - {restaurant.costForTwoMessage}</p>    
      
      {catagory.map((catagory, index) => {return <RestaurantCatagory 
      key={catagory?.card?.title} 
      data={catagory?.card?.card}
      showItems={index === showIndex ? true : false}
      setShowIndex={() => setShowIndex(index)}
      />})}

    </div>
  );
};

export default RestrauntMenu;

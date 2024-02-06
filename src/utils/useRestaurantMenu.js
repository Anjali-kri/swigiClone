import { useEffect, useState } from "react";

const useRestaurantMenu = (resId) => {
  const [restaurant, setRestaurant] = useState([]);
  const [recomendedRestro, setRecomendedRestro] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId="+resId+"&catalog_qa=undefined&submitAction=ENTER"
    );
    const json = await data.json();
    console.log("carddata",json );
    setRestaurant(json?.data?.cards[0]?.card?.card?.info);
    setRecomendedRestro(
      json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card
        .itemCards
        
    );
  };

  return {restaurant,recomendedRestro };
};

export default useRestaurantMenu;

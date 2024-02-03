import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestrauntMenu = () => {
  const [restaurant, setRestaurant] = useState([]);
  const [recomendedRestro, setRecomendedRestro] = useState([]);

  const param = useParams();
  console.log(param.resId);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId=" +
        param.resId +
        "&catalog_qa=undefined&submitAction=ENTER"
    );
    const json = await data.json();
    console.log(json);
    setRestaurant(json?.data.cards[0]?.card?.card?.info);
    setRecomendedRestro(
      json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card
        .itemCards
    );
    console.log(recomendedRestro, "recomend");
  };
  console.log(recomendedRestro, "recomend2");

  if (!restaurant) return <Shimmer />;

  return (
    <div className="menu">
      {/* <h1>{menuData?.cards[0]?.card?.card?.info?.name}</h1> */}
      <h1>{restaurant.name}</h1>
      {/* <h5>{cuisines}- {costForTwoMessage}</h5>
        <p>{avgRating}</p> */}
      <ul>
        {recomendedRestro && recomendedRestro.map((item) => (
          <li key={item.card.info.id}>{item.card.info.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default RestrauntMenu;

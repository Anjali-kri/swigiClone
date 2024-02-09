import React from "react";
import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/CartSlice";

const ItemList = ({ items }) => {
  // console.log(items, "items");

  const dispatch = useDispatch();

  const handleAddItem = (ele) => {
    // dispatch an action
    dispatch(
      addItem(ele)
    );
  }
  return (
    <div>
      {items.map((ele) => (
        <div
          className="p-2 m-2  border-gray-200 border-b-2 text-left flex justify-between"
          key={ele.card.info.id}
        >
          <div className="w-9/12">
            <div className="p-2">
              <span>{ele?.card?.info?.name}</span>
              <span> - ₹ {ele?.card?.info?.price / 100}</span>
            </div>
            <p className="text-xs">{ele?.card?.info?.description}</p>
          </div>         
         
          <div className="w-3/12 p-4">
          <div>
            <button 
            onClick={() => handleAddItem(ele)}
            className="p-2 bg-black text-white shadow-lg rounded-md absolute mx-14">Add</button>
            </div>
            <img src={CDN_URL + ele?.card?.info?.imageId} />
            
          </div>
        </div>
      ))}
      
    </div>
  );
};

export default ItemList;

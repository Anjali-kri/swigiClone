import React, { useState } from 'react';
import ItemList from './ItemList';

const RestaurantCatagory = ({data, showItems, setShowIndex}) => {
    // console.log(data, "catagorydata")
    // const [drawerOpen, setDrawerOpen] = useState(false);

    const handleClick = () => {
        // return setDrawerOpen(!drawerOpen);
        setShowIndex();
    }
  return (
    <div>
        {/* header */}
        <div className='w-6/12 via-gray-50 shadow-lg p-4 mx-auto my-6 '>
            <div  className='flex justify-between' onClick={handleClick}>
                <span className='font-bold text-lg'>{data.title} ({data.itemCards.length})</span>
                <span><img className='h-5 w-4' src='https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png' /></span>
            </div>
            {showItems && <ItemList items={data?.itemCards} />}
            
        </div>
       
       
    </div>
  )
}

export default RestaurantCatagory;

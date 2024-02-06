import { CDN_URL } from "../utils/constants";

const RestrauntCard = (props) => {
    const {resData} = props;
    const {cloudinaryImageId, name,cuisines,avgRating,sla} = resData?.info;
    return (
      <div className="m-4 p-4 w-52 rounded-lg" style={{background: "#f0f0f0"}}>
        <img className="rounded-lg"
        alt="res-logo" 
        src={CDN_URL+ cloudinaryImageId} />
        <h3 className="font-bold py-2 text-lg">{name}</h3>
        <h4 className="flex-wrap">{cuisines.join(",")}</h4>
        <h4>{avgRating} star</h4>
        <h4>{sla.slaString}</h4>

      </div>
    )
  }

  export default RestrauntCard;
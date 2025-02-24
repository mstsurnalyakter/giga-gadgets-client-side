import "./Card.css";

const BrandCard = ({brand}) => {
    const {brandName, imageURL} = brand || {};
  return (
    <div  className=" w-full group  ">
        <div className="cardShadow p-5 w-full bg-white dark:bg-[#1a2641d5] rounded">
      <img
        className="w-full h-[150px] object-contain rounded-md"
        src={imageURL}
        alt=""
      />
      <div className=" w-full group-hover:bg-[#ab3154] rounded h-10 mt-2 bg-[#FF497C] flex justify-center items-center">
        <p className="text-center font-bold text-white">{brandName}</p>
      </div>
      </div>
    </div>
  );
};

export default BrandCard;

import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { faStar as faStarSolid } from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarRegular } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons";
import { faEye as faEyeRegular } from "@fortawesome/free-regular-svg-icons";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { ShoppingCart } from "lucide-react";
import { faEye } from "@fortawesome/free-solid-svg-icons";

export default function ProductDetail(props) {
  const productDetails = useSelector(
    (state) => state.productDetail.productDetails
  );
  const [selectedImage, setSelectedImage] = useState(productDetails[0].image);
  const { productName, setProductName } = props;

  function handleSelectImage() {
    if (selectedImage === productDetails[0].image) {
      setSelectedImage(productDetails[1].image);
    } else {
      setSelectedImage(productDetails[0].image);
    }
  }

  useEffect(() => {
    setProductName(
      selectedImage === productDetails[0].image
        ? productDetails[0].title
        : productDetails[1].title
    );
  }, [selectedImage, productDetails, setProductName]);

  return (
    <div className="w-[90%] mx-auto font-montserrat">
      <div className="flex flex-col gap-y-8 ">
        <section
          className="w-full h-[277px] bg-cover flex justify-between bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${selectedImage})` }}
        >
          <button
            onClick={handleSelectImage}
            className="text-[70px] h-full text-[#FFFFFF]"
          >
            {"<"}
          </button>
          <button
            onClick={handleSelectImage}
            className="text-[70px] h-full text-[#FFFFFF]"
          >
            {">"}
          </button>
        </section>

        <section className="flex gap-x-4">
          {productDetails.map((product) => (
            <div key={product.id}>
              <img
                className="w-[100px] h-[75px] object-cover object-center object-no-repeat"
                src={product.image}
                alt={product.title}
              />
            </div>
          ))}
        </section>
      </div>
      <section className="flex flex-col gap-y-8">
        <h1>{productName}</h1>
        <nav className="flex items-center gap-x-2">
          <div className="flex gap-x-1 text-[#F3CD03]">
            <FontAwesomeIcon icon={faStarSolid} />
            <FontAwesomeIcon icon={faStarSolid} />
            <FontAwesomeIcon icon={faStarSolid} />
            <FontAwesomeIcon icon={faStarSolid} />
            <FontAwesomeIcon icon={faStarRegular} />
            
          </div>
          <p className="font-bold text-[14px] text-[#737373]">
            {selectedImage === productDetails[0].image
              ? productDetails[0].comment
              : productDetails[1].comment}
          </p>
        </nav>
        <nav>
          <p className="text-[#252B42] font-bold text-[24px]">
            {selectedImage === productDetails[0].image
              ? productDetails[0].price
              : productDetails[1].price}
          </p>
          <div className="flex items-center gap-x-2">
            <span className="font-bold text-[14px] text-[#737373]">
              Availability :
            </span>
            <p className="text-[#23A6F0] font-bold text-[14px] ">
              {selectedImage === productDetails[0].image
                ? productDetails[0].stockStatus
                : productDetails[1].stockStatus}
            </p>
          </div>
        </nav>
        <p className="text-[#858585] text-[14px] w-[251px] ">
          {selectedImage === productDetails[0].image
            ? productDetails[0].description
            : productDetails[1].description}
        </p>
        <div className="flex mt-[-15px] justify-center">
          <div className="w-[283px] items-center flex h-[1px] bg-[#BDBDBD]"></div>
        </div>
        <section className="flex gap-x-2 mt-[-15px]">
          <div className="w-[30px] h-[30px] rounded-full bg-[#23A6F0]"></div>
          <div className="w-[30px] h-[30px] rounded-full bg-[#23856D]"></div>
          <div className="w-[30px] h-[30px] rounded-full bg-[#E77C40]"></div>
          <div className="w-[30px] h-[30px] rounded-full bg-[#252B42]"></div>
        </section>
        <nav className="flex gap-x-4">
          <button className="bg-[#23A6F0] text-[#FFFFFF] w-[148px] h-[44px] text-[14px] font-bold px-4 py-2 rounded-[5px]">
            Select Options
          </button>
         <button className="w-[40px] h-[40px] rounded-full bg-[#FFFFFF] border flex items-center justify-center border-[#E8E8E8]"><FontAwesomeIcon icon={faHeartRegular} className="text-[#000000]" /></button>
           <button className="w-[40px] h-[40px] rounded-full bg-[#FFFFFF] border flex items-center justify-center text-[#000000] border-[#E8E8E8]"><ShoppingCart /></button>
            <button className="w-[40px] h-[40px] rounded-full bg-[#FFFFFF] border border-[#E8E8E8] text-[#000000]"><FontAwesomeIcon icon={faEye} /> </button>
        </nav>
      </section>
    </div>
  );
}

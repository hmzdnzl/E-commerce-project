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
    <div className="w-full mx-auto font-montserrat md:w-[100%] ">
      <div className="bg-[#FAFAFA]  mb-1 pb-1">
      <div className="md:flex md:justify-center md:gap-x-10">
      <div className="flex flex-col gap-y-8 ">
        <section className="w-[90%] flex flex-col mx-auto">
        <section
          className="md:w-[506px] md:h-[450px] w-full h-[277px] bg-cover flex justify-between bg-center bg-no-repeat"
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
</section>
        <section className="flex pl-6 gap-x-4">
          {productDetails.map((product) => ( product.id !== 3) && (
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
      <section className="flex flex-col pl-5 mt-5 gap-y-9 mb-[100px]">
        <h1 className="text-[20px] text-[#252B42]">{productName}</h1>
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
        <p className="text-[#858585] text-[14px] w-[271px] md:w-[464px] ">
          {selectedImage === productDetails[0].image
            ? productDetails[0].description
            : productDetails[1].description}
        </p>
        <div className="flex pl-3 mt-[-15px] justify-start">
          <div className="md:w-[445px] w-[283px] md:flex md:items-center flex h-[1px] bg-[#BDBDBD]"></div>
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
          <button className="w-[40px] h-[40px] rounded-full bg-[#FFFFFF] border flex items-center justify-center border-[#E8E8E8]">
            <FontAwesomeIcon icon={faHeartRegular} className="text-[#000000]" />
          </button>
          <button className="w-[40px] h-[40px] rounded-full bg-[#FFFFFF] border flex items-center justify-center text-[#000000] border-[#E8E8E8]">
            <ShoppingCart />
          </button>
          <button className="w-[40px] h-[40px] rounded-full bg-[#FFFFFF] border border-[#E8E8E8] text-[#000000]">
            <FontAwesomeIcon icon={faEye} />{" "}
          </button>
        </nav>
      </section>
      </div>
      </div>
      <section className=" md:w-[53%] mx-auto flex flex-col gap-y-8">
        <nav className="flex gap justify-around md:flex md:justify-center mt-5 md:gap-x-10">
          <a className="text-[#737373] font-[600] underline text-[14px]" href="">
            Description
          </a>
          <a className="text-[#737373] font-bold  text-[14px]" href="">
            Additional Information
          </a>
          <a className="text-[#737373] font-bold  text-[14px]" href="">
            Reviews <span className="text-[#23856D]">(0)</span>
          </a>
        </nav>
        <div className="w-[100%] hidden md:flex  h-[1px] mx-auto bg-[#ECECEC]"></div>
        <section className="md:flex ">
        <div className="w-[90%] md:w-[39%] md:flex mx-auto  md:mx-4 ">
          <img className="md:w-[316px] rounded-[6px] md:h-[372px] md:object-cover md:object-center md:object-no-repeat" src={productDetails[2].image} alt="" />
        </div>
        <div className="flex flex-col w-[100%] md:w-[50%] items-center">
        <h1 className="text-[24px] font-bold text-[#252B42]">
          {productDetails[2].title}          
        </h1>
        <nav className="flex flex-col w-[85%] text-left  md:flex md:flex-col md:w-[320px] gap-y-6 text-[#737373] text-[14px] font-[400]">
          <p>{productDetails[2].description}</p>
           <p>{productDetails[2].description}</p>
            <p>{productDetails[2].description}</p>          
        </nav>
        </div>
        <section className="md:flex md:flex-col md:gap-y-10 md:w-[50%] ">
        <div className="flex flex-col gap-y-4 items-center">
          <h2 className="text-[24px] font-bold text-[#252B42]">{productDetails[2].title2}</h2>
          <ul className="flex flex-col gap-y-2">
           {productDetails[2].list1.map((item, index) => (
            <li key={index} className="flex items-center text-[#737373] text-[14px] leading-[24px] tracking-[0.2px] font-bold gap-x-2">
              <span className="text-[#737373] font-normal mr-3">{'>'}</span>
              {item}
            </li>
           ))}
          </ul>
          </div>
           <div className="flex flex-col gap-y-4 items-center">
          <h2 className="text-[24px] font-bold text-[#252B42]">{productDetails[2].title3}</h2>
          <ul className="flex flex-col gap-y-2">
           {productDetails[2].list2.map((item, index) => (
            <li key={index} className="flex items-center text-[#737373] text-[14px] leading-[24px] tracking-[0.2px] font-bold gap-x-2">
              <span className="text-[#737373] font-normal mr-3">{'>'}</span>
              {item}
            </li>
           ))}
          </ul>
          </div>
          </section>
</section>
      </section>
    </div>
  );
}

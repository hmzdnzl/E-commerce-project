import { useSelector } from "react-redux";

export default function BestSeller() {
  const bestSellers = useSelector((state) => state.bestSellers.bestSellers);

    return (
        <section>
            <div className="flex flex-col justify-center items-center">
                <h1 className="text-[24px] font-bold text-[#252B42] text-center mt-10 mb-5">BESTSELLER PRODUCTS</h1>
            </div>
            <div>
                {bestSellers.map((product) => (
                    <div key={product.id} className="md:flex md:justify-center  flex flex-col items-center">
                        <img className="md:w-[239px] md:h-[280px] w-[348px] h-[427px] object-cover object-center object-no-repeat" src={product.image} alt={product.title} />
                        <h2 className="text-[16px] font-bold text-[#252B42] mt-5">{product.name}</h2>
                        <p className="text-[#737373] font-bold text-[14px] w-[271px] md:w-[464px] text-center mt-2">{product.name2}</p>
                        <div>
                            <span className="text-[#BDBDBD] font-bold text-[16px] mt-2">{product.price1}</span>
                            <span className="text-[#23856D] text-[16px]  ml-2">{product.price2}</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
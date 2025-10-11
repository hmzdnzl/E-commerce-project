import { useSelector } from "react-redux";

export default function BestSeller() {
  const bestSellers = useSelector((state) => state.bestSellers.bestSellers);

    return (
        <section className="md:w-[55%] items-center justify-center mx-auto">
            <div className=" flex flex-col justify-center items-center md:items-start md:w-[92%] md:mx-auto">
                <h1 className="text-[24px] font-bold text-[#252B42] text-center mt-10 mb-5">BESTSELLER PRODUCTS</h1>
            </div>
            <div className="bg-[#ECECEC] h-[1px] mx-auto w-[94%] mb-7"></div>
            <div className="flex flex-col gap-y-14 md:flex md:flex-row md:flex-wrap gap-x-5">
                {bestSellers.map((product) => (
                    <div key={product.id} className="md:flex flex flex-col items-center w-full md:w-[23%]">
                        <section className="flex flex-col items-center ">
                        <img className="md:w-[239px] md:h-[280px] w-[348px] h-[427px] object-cover object-center object-no-repeat" src={product.image} alt={product.title} />
                        <section className="flex flex-col gap-y-3 md:w-[75%]">
                        <h2 className="text-[16px] font-bold text-[#252B42] mt-5">{product.name}</h2>
                        <p className="text-[#737373] font-bold text-[14px] w-[271px] ">{product.name2}</p>
                        <div>
                            <span className="text-[#BDBDBD] font-bold text-[16px] mt-2">{product.price1}</span>
                            <span className="text-[#23856D] text-[16px] font-bold ml-2">{product.price2}</span>
                        </div>
                        </section>
                        </section>
                    </div>
                ))}
            </div>
        </section>
    );
}
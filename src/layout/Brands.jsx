import React from 'react';
import { useSelector } from 'react-redux';

export default function Brands() {
    const { brands } = useSelector((state) => state.brands);
    return (
    <div className="md:flex md:flex-row md:justify-between md:items-center md:w-[100%] md:px-[15%] flex flex-col items-center mt-20 py-14 gap-y-10 bg-[#FAFAFA] w-[414px] ">
        {brands.map((brand) => (
            <img className='w-[35%] md:w-[100px] py-5' key={brand.id} src={brand.image} alt={`Brand ${brand.id}`} />
        ))}
        </div>);
}
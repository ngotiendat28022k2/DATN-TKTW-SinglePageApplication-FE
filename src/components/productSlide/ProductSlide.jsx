import React, { useState } from "react";
import helper from "../../utiliti/helper/helper";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const ProductSlide = ({ products }) => {
    const [startIndex, setStartIndex] = useState(0);
    const [endIndex, setEndIndex] = useState(5);
    const handleNext = () => {
        if (endIndex < products.length) {
            setStartIndex(startIndex + 5);
            setEndIndex(endIndex + 5);
        }
    };

    const handlePrev = () => {
        if (startIndex >= 5) {
            setStartIndex(startIndex - 5);
            setEndIndex(endIndex - 5);
        }
    };

    return (
        <>
            <div className="bg-white p-2">
                <div className="grid md:grid-cols-5 grid-cols-3 gap-2 md:mx-2">
                    {products &&
                        products
                            .slice(startIndex, endIndex)
                            .map((product, index) => (
                                <div
                                    key={index}
                                    className="relative hover:border-2 hover:shadow-md"
                                >
                                    <div className="md:m-2 m-2">
                                        <Link to={`/detail/${product._id}`}>
                                            <img
                                                src={product.productImage[0]}
                                                alt={product.name}
                                            />
                                        </Link>
                                    </div>
                                    <div className="mb-3">
                                        <Link to={`/detail/${product._id}`}>
                                            <h4 className="text-[#333333] md:text-lg text-base md:px-5 px-3">
                                                {helper.truncateString(
                                                    product.name,
                                                    40
                                                )}
                                            </h4>
                                            <span className="block md:px-5 px-3 text-base md:text-xl text-[#F7941E] font-semibold">
                                                {helper.maskValuePrice(
                                                    product.sale
                                                )}
                                            </span>
                                            <span className="block md:px-5 px-3 text-sm md:text-base text-[#888888] line-through">
                                                {helper.maskValuePrice(
                                                    product.price
                                                )}
                                            </span>
                                            <span className="block md:px-5 px-3 text-sm md:text-xs">
                                                {" "}
                                                Số lượng còn lại:{" "}
                                                {product.quantity}
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            ))}
                    <div className="relative md:hidden block py-[100%] px-5">
                        <div className="border-2 rounded-2xl text-center p-1 border-teal-400">
                            <button className="text-teal-500 hover:text-orange-400">
                                Xem Thêm
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {products.length > 5 && (
                <div className="relative my-5">
                    {startIndex > 0 && (
                        <button
                            className="absolute left-[10px] top-[-300px] text-slate-400 hover:text-slate-600 mr-5 border-[2px] w-[35px] h-[35px] flex justify-center items-center rounded-[50%] border-[#bbbbbb]"
                            onClick={handlePrev}
                        >
                            <FaArrowLeft className="text-[20px]" />
                        </button>
                    )}
                    {endIndex < products.length && (
                        <button
                            className="absolute right-[10px] top-[-300px]  text-slate-400 hover:text-slate-600 border-[2px] w-[35px] h-[35px] flex justify-center items-center rounded-[50%] border-[#bbbbbb]"
                            onClick={handleNext}
                        >
                            <FaArrowRight className="text-[20px]" />
                        </button>
                    )}
                </div>
            )}
        </>
    );
};

export default ProductSlide;

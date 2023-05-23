import React, { useState, useEffect, useCallback } from "react";
import helper from "../../utiliti/helper/helper";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const ProductSlide = ({ products }) => {
    const [startIndex, setStartIndex] = useState(0);
    const [endIndex, setEndIndex] = useState(5);
    const [endIndexMobile, setEndIndexMobile] = useState(2);
    const desktopSize = 1024;
    const [isDesktop, setIsDesktop] = useState(window.innerWidth >= desktopSize);

    // Cập nhật isDesktop khi kích thước cửa sổ thay đổi
    const handleResize = useCallback(() => {
        setIsDesktop(window.innerWidth >= desktopSize);
    }, [desktopSize]);

    useEffect(() => {
        // Đăng ký sự kiện resize
        window.addEventListener("resize", handleResize);

        // Hủy đăng ký sự kiện khi component bị huỷ
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [handleResize]);

    useEffect(() => {
        // Cập nhật lại các chỉ số khi products thay đổi
        setStartIndex(0);
        setEndIndex(isDesktop ? 5 : 2);
        setEndIndexMobile(2);
    }, [products, isDesktop]);

    const handleNext = () => {
        if (endIndex < products.length) {
            setStartIndex(startIndex + (isDesktop ? 5 : 2));
            setEndIndex(endIndex + (isDesktop ? 5 : 2));
            setEndIndexMobile(endIndexMobile + 2);
        }
    };

    const handlePrev = () => {
        if (startIndex >= (isDesktop ? 5 : 2)) {
            setStartIndex(startIndex - (isDesktop ? 5 : 2));
            setEndIndex(endIndex - (isDesktop ? 5 : 2));
            setEndIndexMobile(endIndexMobile - 2);
        }
    };

    return (
        <>
            <div className="bg-white p-2 relative">
                <div className="grid md:grid-cols-5 gap-2 md:mx-2 grid-cols-2">
                    {products &&
                        products.slice(
                            startIndex,
                            isDesktop ? endIndex : endIndexMobile
                        ).map((product) => (
                            <div className="relative hover:border-2 hover:shadow-md">
                                <div className="md:m-2 m-2">
                                    <Link to={`/detail/${product._id}`}>
                                        <img src={product.productImage[0]} alt={product.name} />
                                    </Link>
                                </div>
                                <div className="flex bg-[#F7941E] md:w-[44px] md:h-[44px] w-12 h-12 md:rounded-3xl rounded-[22px] justify-center items-center absolute top-[10px] right-[10px]">
                                    <span className="text-white font-semibold">
                                        {helper.calculatePercentage(
                                            product.price,
                                            product.sale
                                        )}
                                        %
                                    </span>
                                </div>
                                <div className="mb-3">
                                    <Link to={`/detail/${product._id}`}>
                                        <h4 className="text-[#333333] md:text-lg text-base md:px-5 px-3">
                                            {helper.truncateString(product.name, 40)}
                                        </h4>
                                        {product.sale !== 0 || !product.sale || product.sale !== "0" ? (
                                            <>
                                                <div className="pr-[20px] md:px-5 px-3">
                                                    <span className="text-[15px] text-[#C92127] font-bold ">
                                                        {helper.maskValuePrice(product.sale)}
                                                    </span>
                                                </div>
                                                <div className="pr-[20px] md:px-5 px-3">
                                                    <span className="text-[12px] line-through">
                                                        {helper.maskValuePrice(product.price)}
                                                    </span>
                                                </div>
                                            </>
                                        ) : (
                                            <div className="pr-[20px] md:px-5 px-3">
                                                <span className="text-[15px] text-[#C92127] font-bold">
                                                    {helper.maskValuePrice(product?.price)}
                                                </span>
                                            </div>
                                        )}
                                        <span className="block md:px-5 px-3 text-sm md:text-xs">
                                            {" "}
                                            Số lượng còn lại: {product.quantity}
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        ))}
                </div>

                <div className="text-center bg-[#fff] mt-[60px] mb-[30px]">
                    <div className="text-center p-1 border-PK-client">
                        <Link to="">
                            <button className="text-PK-client hover:bg-[#2c6513] px-[30px] py-[10px] hover:text-[#fff] max-w-[220px] border-[1px] border-[#2c6513] rounded-[10px] ">
                                Xem Thêm
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
            {/* render product desktop */}
            {products.length > (isDesktop ? 5 : 2) && (
                <div className="relative">
                    {startIndex >= (isDesktop ? 5 : 2) && (
                        <button
                            className="absolute left-[10px] top-[-420px] md:top-[-340px] text-slate-400 hover:text-slate-600 mr-5 border-[2px] w-[35px] h-[35px] flex justify-center items-center rounded-[50%] border-[#bbbbbb]"
                            onClick={handlePrev}
                        >
                            <FaArrowLeft className="text-[20px]" />
                        </button>
                    )}
                    {endIndex < products.length && (
                        <button
                            className="absolute right-[10px] top-[-420px] md:top-[-340px] text-slate-400 hover:text-slate-600 border-[2px] w-[35px] h-[35px] flex justify-center items-center rounded-[50%] border-[#bbbbbb]"
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

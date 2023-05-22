import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getCategory } from "../../slice/categorySlice";
import helper from "../../utiliti/helper/helper";
const DealHot = () => {
    const [dealHot, setDealHot] = useState();
    const { id } = useParams();
    // console.log("id", id);
    const dispatch = useDispatch();
    useEffect(() => {
        (async () => {
            const { payload } = await dispatch(getCategory(id));
            // console.log("hieu", payload);
            setDealHot(payload);
        })();
    }, []);
    // console.log("hhh", dealHot?.data);
    return (
        <div>
            <div className="my-5">
                <div className="bg-[#FCDDEF]">
                    <div className="flex md:py-5 py-3 px-3">
                        <div className="mr-3">
                            <img
                                src="https://i.imgur.com/0CjYZ5d.png"
                                className="w-6 h-6"
                                alt=""
                            />
                        </div>
                        <div className="font-bold text-lg">
                            {dealHot?.data.name}
                        </div>
                    </div>
                </div>
                <div className="bg-white py-10">
                    <div className="grid md:grid-cols-5 grid-cols-3 gap-2 md:mx-2">
                        {dealHot?.product.map((product, index) => (
                            <div
                                key={index}
                                className="relative hover:border-2 hover:shadow-md"
                            >
                                <div className="flex bg-[#F7941E] md:w-[44px] md:h-[44px] w-12 h-12 md:rounded-3xl rounded-[22px] justify-center items-center absolute top-[10px] right-[10px]">
                                    <span className="text-white font-semibold">
                                        {helper.calculatePercentage(
                                            product.price,
                                            product.sale
                                        )}
                                        %
                                    </span>
                                </div>
                                <div className="md:m-2 m-2">
                                    <Link to={`/detail/${product._id}`}>
                                        <img
                                            src={product.productImage[0]}
                                            alt=""
                                        />
                                    </Link>
                                </div>
                                <div className="mb-3">
                                    <Link to={`/detail/${product._id}`}>
                                        <h4 className="text-[#333333] md:text-lg text-base md:px-5 px-3">
                                            {product.name}
                                        </h4>
                                        <span className="block md:px-5 px-3 text-base md:text-xl text-[#F7941E] font-semibold">
                                            {product.sale}
                                        </span>
                                        <span className="block md:px-5 px-3 text-sm md:text-base text-[#888888] line-through">
                                            {product.price}
                                        </span>
                                        <span className="block md:px-5 px-3 text-sm md:text-xs">
                                            Đã bán: {product.quantity}
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>{" "}
                    {/* <div className="mt-5 text-center">
                        <span className="border-[1px] border-inherit py-3 px-7 hover:text-PK-client hover:border-green-500">
                            Xem Thêm
                        </span>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default DealHot;

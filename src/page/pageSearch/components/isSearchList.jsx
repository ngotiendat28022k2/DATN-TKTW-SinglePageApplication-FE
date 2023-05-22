import React from "react";
import { Link } from "react-router-dom";

export default function IsSearchList({ data }) {
    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {data?.map((value, index) => (
                    <div
                        key={index.toString()}
                        className="relative hover:border-2 hover:shadow-md"
                    >
                        <div className="md:m-2 m-2">
                            <Link to={`/detail/${value._id}`}>
                                <img src={value?.productImage[0]} alt="" />
                            </Link>
                        </div>
                        <div className="mb-3">
                            <Link to={`/detail/${value._id}`}>
                                <h4 className="text-[#333333] md:text-lg text-base md:px-5 px-3">
                                    {value?.name}
                                </h4>
                                <span className="block md:px-5 px-3 text-base md:text-xl text-[#F7941E] font-semibold">
                                    {value?.sale?.toLocaleString("vi", {
                                        style: "currency",
                                        currency: "VND",
                                    })}
                                </span>
                                <span className="block md:px-5 px-3 text-sm md:text-base text-[#888888] line-through">
                                    {value?.price?.toLocaleString("vi", {
                                        style: "currency",
                                        currency: "VND",
                                    })}
                                </span>
                                <span className="block md:px-5 px-3 text-sm md:text-xs">
                                    Đã bán: {value?.view}
                                </span>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

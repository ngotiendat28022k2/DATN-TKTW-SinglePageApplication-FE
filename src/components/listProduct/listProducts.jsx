import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCategory } from "../../slice/categorySlice";
import { Link } from "react-router-dom";

import helper from "../../utiliti/helper/helper";

export default function ListProduct({ list }) {
    const [products, setProducts] = useState([]);
    const [moreBook, setMoreBook] = useState(false);
    const dispatch = useDispatch();
    useEffect(() => {
        (async () => {
            const { payload } = await dispatch(getCategory(list._id));
            if (payload.product.length > 5) {
                setMoreBook(true);
            }
            setProducts(payload.product.slice(0, 5));
        })();
    }, []);

    return (
        <>
            {products.length != 0 && (
                <div className="my-5">
                    <div className="bg-[#FFFFFF]">
                        <div className="flex md:py-5 py-3 px-3">
                            <div className="mx-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="30"
                                    height="30"
                                    fill="currentColor"
                                    class="bi bi-book"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811V2.828zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z" />
                                </svg>
                            </div>
                            <div className="font-bold text-lg">{list.name}</div>
                        </div>
                    </div>
                    <div className="bg-white p-2">
                        <div className="grid md:grid-cols-5 grid-cols-2 gap-2 md:mx-2">
                            {products &&
                                products?.map((product) => (
                                    <div className="relative hover:border-2 hover:shadow-md">
                                        <div className="md:m-2 m-2">
                                            <Link to={`/detail/${product._id}`}>
                                                <img
                                                    src={
                                                        product.productImage[0]
                                                    }
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
                        </div>
                        {moreBook ? (
                            <div className="my-8 text-center">
                                <a
                                    href={`/deal-hot/${list._id}`}
                                    className="border-[1px] border-inherit py-3 px-5 hover:text-PK-client hover:border-green-500"
                                >
                                    Xem thêm
                                </a>
                            </div>
                        ) : null}
                    </div>
                </div>
            )}
        </>
    );
}

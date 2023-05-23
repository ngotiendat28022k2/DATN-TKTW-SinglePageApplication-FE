import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllProductClient } from "../../slice/productsSlice";
import { getAllCategory } from "../../slice/categorySlice";
import helper from "../../utiliti/helper/helper";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import ProductSlide from "../../components/productSlide/ProductSlide";
import ListProduct from "../../components/listProduct/listProducts";
const HomePage = () => {
    const [show, setShow] = useState(6);
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [startIndex, setStartIndex] = useState(0);
    const [endIndex, setEndIndex] = useState(5);
    const dispatch = useDispatch();
    const product = useSelector((state) => state.product.value);
    const category = useSelector((state) => state.category.value);
    console.log("category", categories);
    console.log("products", products);

    useEffect(() => {
        (async () => {
            try {
                const productss = await dispatch(getAllProductClient());
                const category = await dispatch(getAllCategory());
                if (productss.payload?.successCode) {
                    setProducts(productss.payload.data);
                }
                if (productss.payload?.errorCode) {
                    helper.toast("error", productss.payload.message);
                }
                if (category.payload.data?.successCode) {
                    setCategories(category.payload.data.data);
                }
                if (category.payload.data?.errorCode) {
                    helper.toast("error", category.payload.data.message);
                }
            } catch (error) {
                console.log(error);
            }
        })();
    }, []);

    useEffect(() => {
        setProducts(product);
        setCategories(category);
    }, [product, category]);

    const handleNext = () => {
        setStartIndex(startIndex + 5);
        setEndIndex(endIndex + 5);
    };

    const handlePrev = () => {
        if (startIndex >= 5) {
            setStartIndex(startIndex - 5);
            setEndIndex(endIndex - 5);
        }
    };

    return (
        <div>
            {/* <SlideShow /> */}
            <div className="my-5">
                <div className="">
                    <div className="bg-[#FCDAB0]">
                        <div className="flex md:py-5 py-3 px-3">
                            <div className="mr-3">
                                <img
                                    className="w-6 h-6"
                                    src="https://i.imgur.com/H63fkyZ.png"
                                    alt=""
                                />
                            </div>
                            <div className="font-bold text-lg">FLASH SALE</div>
                        </div>
                    </div>
                    <ProductSlide {...{ products }} />
                </div>
            </div>
            <div className="my-5">
                <div className="md:mt-5 md:3 md:block rounded-3xl hidden">
                    <div className="bg-[#FFFFFF]">
                        <div className="flex md:py-5 py-3 px-3">
                            <div className="mr-3">
                                <img
                                    className="w-8 h-8"
                                    src="https://cdn0.fahasa.com/skin/frontend/ma_vanese/fahasa/images/ico_menu.svg"
                                    alt=""
                                />
                            </div>
                            <div className="font-bold text-lg">
                                Danh mục sản phẩm
                            </div>
                        </div>
                    </div>
                    <div className="grid md:grid-cols-10 md:gap-2 grid-cols-5 gap-3 bg-white pb-4 px-[20px]">
                        {categories?.map((itemCategory, index) => (
                            <div
                                key={index}
                                className="col-span-1 p-[5px] overflow-hidden rounded-md transition duration-300 ease-in-out hover:scale-110 hover:shadow-md dark:hover:shadow-black/30"
                                title={itemCategory.name}
                            >
                                <Link to={`/series-book/${itemCategory._id}`}>
                                    <div className="">
                                        <img
                                            className="md:w-[100px] md:h-[100px] w-11 h-11 m-auto "
                                            src={itemCategory.image}
                                            alt=""
                                        />
                                    </div>
                                    <div className="md:text-sm text-xs text-center pt-3">
                                        {itemCategory.name}
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="my-5">
            <div className="">
                <div className="bg-[#FFFFFF]">
                    <div className="flex md:py-5 py-3 px-3">
                        <div className="font-bold text-lg">SẢN PHẨM MỚI</div>
                    </div>
                </div>
                <ProductSlide {...{ products }} />
                </div>
            </div>
            {categories?.map((list, index) => (
                <>
                    {index <= show ? (
                        <ListProduct key={list._id} list={list} />
                    ) : null}
                </>
            ))}
            {show < categories.length ? (
                <div className="my-8 text-center">
                    <span
                        onClick={() => setShow(categories.length)}
                        className="border-[1px] border-slate-900 py-3 px-6 hover:text-PK-client hover:border-green-500"
                    >
                        Xem thêm
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-chevron-down inline text-black ml-1 hover:text-green-500"
                            viewBox="0 0 16 16"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                            />
                        </svg>
                    </span>
                </div>
            ) : (
                <div className="my-8 text-center">
                    <span
                        onClick={() => setShow(6)}
                        className="border-[1px] border-slate-900 py-3 px-6 hover:text-PK-client hover:border-green-500"
                    >
                        Rút gọn
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-chevron-up inline text-black ml-1 hover:text-green-500"
                            viewBox="0 0 16 16"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
                            />
                        </svg>
                    </span>
                </div>
            )}
        </div>
    );
};
export default HomePage;

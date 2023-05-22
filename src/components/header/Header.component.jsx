import { useEffect, useState, useRef } from "react";
import ClientMenu from "../menu/MenuClient.component";
import local from "../../utiliti/local/localSesion";
import { Link, useNavigate } from "react-router-dom";
import SidebarProfile from "../sidebar-profile/sidebar_profile";
import "./headerClient.model.css";
import getOverlappingDaysInIntervals from "date-fns/esm/fp/getOverlappingDaysInIntervals/index.js";
import { searchProduct } from "../../slice/productsSlice";
import { useDispatch, useSelector } from "react-redux";
import PageSearch from "../../page/pageSearch";
import helper from "../../utiliti/helper/helper";
import TableSearch from "./tablesearch";
import { getCartToDatabase } from "../../slice/cartSlice";

const Header = () => {
    const [showProfile, setShowProfile] = useState(false);
    const [showSidebar, setShowSidebar] = useState(false);
    const ref = useRef();

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (ref.current && !ref.current.contains(event.target)) {
                setShowSidebar(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref]);

    const [user, setUser] = useState(local.get("user") || null);
    const [open, setOpen] = useState(false);
    const [dataSearch, setDataSearch] = useState([]);
    const [historySearch, setHistorySearch] = useState([]);
    const [cartLength, setCartLength] = useState(null);
    const [objSearch, setObjSearch] = useState({
        search: "",
        price: "",
        authors: "",
        formbooks: "",
        supplieres: "",
    });
    const cartStore = useSelector((state) => state.cart.value);
    const dispatch = useDispatch();

    const navigate = useNavigate();
    const onHandleSearch = async (valueInput) => {
        console.log("valueInput", valueInput);

        try {
            if (valueInput.length > 0) {
                setObjSearch((prev) => ({
                    // ...prev, "search": e.target.value
                    ...prev,
                    search: valueInput,
                }));
                const { payload } = await dispatch(searchProduct(objSearch));
                setDataSearch(payload?.data?.data);
            } else {
                setDataSearch([]);
            }
            window.onkeydown = (e) => {
                if (valueInput.length > 0) {
                    if (e.key === "Enter") {
                        e.preventDefault();
                        navigate(`/search?q=${valueInput}`);
                        const search_list =
                            JSON.parse(
                                window.localStorage.getItem("search_list")
                            ) || [];

                        const filteredSearchList = search_list.filter(
                            (item) => item.name == valueInput
                        );

                        if (filteredSearchList?.length == 0) {
                            search_list.push({
                                name: valueInput,
                            });

                            window.localStorage.setItem(
                                "search_list",
                                JSON.stringify(search_list)
                            );
                        }
                    }
                }
            };
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        const search_list =
            JSON.parse(window.localStorage.getItem("search_list")) || [];
        setHistorySearch(search_list.slice(0, 8));
        setUser(local.get("user"));
    }, [window.localStorage.getItem("search_list")]);

    useEffect(() => {
        (async () => {
            if (user) {
                try {
                    const { payload } = await dispatch(
                        getCartToDatabase(user._id)
                    );
                    // console.log("payload header cart", payload)
                    if (payload?.successCode) {
                        setCartLength(payload.data.length);
                    }
                } catch (error) {
                    console.log("error", error);
                }
            }
        })();
    }, []);
    useEffect(() => {
        setCartLength(cartStore.length);
    }, [cartStore]);

    return (
        <div className="md:flex md:m-auto md:w-[1280px] bg-PK-client md:bg-[#fff] justify-between w-[100%] md:py-[20px]">
            <div className="flex justify-center md:py-0 md:w-[20%]">
                <Link className="flex justify-center items-center" to="/home">
                    <img
                        className="md:h-[36px] h-[20px] hidden md:block"
                        src="https://i.imgur.com/SmXRS7C.png"
                        alt=""
                    />
                    <img
                        className="w-full max-w-[70px] block md:hidden"
                        src="https://logos.textgiraffe.com/logos/logo-name/Niki-designstyle-smoothie-m.png"
                        alt=""
                    />
                </Link>
            </div>
            <div className="flex justify-start items-center md:justify-start md:items-center px-[20px] md:px-0 pb-[20px] md:pb-0 md:w-[80%]">
                <div className="relative dropdown w-[12%] md:w-auto md:pr-[10px]">
                    <div className="flex ">
                        <div>
                            <img
                                className="md:h-[36px] h-[36px] hidden md:block"
                                src="https://cdn0.fahasa.com/skin/frontend/ma_vanese/fahasa/images/ico_menu.svg"
                                alt=""
                            />
                            <img
                                className="md:h-[36px] h-[36px] md:hidden"
                                src="https://cdn0.fahasa.com/skin/frontend/ma_vanese/fahasa/images/ico_menu_white.svg"
                                alt=""
                            />
                        </div>
                        <div className="m-0 pt-3 pl-1 md:block hidden">
                            <svg
                                // className="text-gray-600"
                                xmlns="http://www.w3.org/2000/svg"
                                width="18"
                                height="18"
                                fill="currentColor"
                                className="bi bi-chevron-down text-gray-600"
                                viewBox="0 0 16 16"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                                />
                            </svg>
                        </div>
                    </div>
                    <div className="absolute w-[450px] md:w-auto z-10 md:top-[40px] md:left-[-256px] dropdown-menu hidden pt-[20px]">
                        <ClientMenu />
                    </div>
                </div>
                <div className="flex w-[88%] justify-between">
                    <div className="flex w-[100%]">
                        <div className="flex items-center justify-start dropdowns w-[100%]">
                            <div className="test-1 flex border-2 rounded-xl ">
                                <input
                                    onChange={(e) => onHandleSearch(e.target.value)}
                                    type="text"
                                    className="px-4 py-2 md:w-[500px] w-full outline-none focus:bg-slate-100 rounded-l-[10px]"
                                    placeholder="Tìm kiếm sản phẩm mong muốn..."
                                />

                                {dataSearch?.length > 0 ? (
                                    <div className="hidden absolute z-10 mt-10 dropdown-menus">
                                        <TableSearch dataSearch={dataSearch} />
                                    </div>
                                ) : historySearch?.length > 0 ? (
                                    <div className="hidden absolute z-10 mt-10 dropdown-menus">
                                        <div className="bg-amber-50 w-[500px] mt-5 rounded-md">
                                            <nav>
                                                <p className="px-5 pt-3 text-base font-medium">
                                                    Lịch sử tìm kiếm
                                                </p>
                                                <ul className="px-5 py-3">
                                                    {historySearch?.map(
                                                        (item, index) => (
                                                            <Link
                                                                to={`/search?q=${item?.name}`}
                                                                key={index.toString()}
                                                                className="flex justify-between"
                                                            >
                                                                <li className="py-1 font-normal text-sm hover:text-orange-300">
                                                                    {item?.name}
                                                                </li>
                                                                <span
                                                                    className="hover:text-red-400"
                                                                    onClick={(e) => {
                                                                        const filteredSearchList =
                                                                            historySearch.filter(
                                                                                (
                                                                                    item1
                                                                                ) =>
                                                                                    item1.name !==
                                                                                    item?.name
                                                                            );
                                                                        window.localStorage.setItem(
                                                                            "search_list",
                                                                            JSON.stringify(
                                                                                filteredSearchList
                                                                            )
                                                                        );
                                                                        setHistorySearch(
                                                                            filteredSearchList
                                                                        );
                                                                        e.preventDefault();
                                                                    }}
                                                                >
                                                                    xóa
                                                                </span>
                                                            </Link>
                                                        )
                                                    )}
                                                </ul>
                                            </nav>
                                        </div>
                                    </div>
                                ) : null}

                                <button className="flex items-center justify-center px-4 border-l">
                                    <svg
                                        className="w-6 h-6 text-white md:text-gray-600"
                                        fill="currentColor"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                    </div>
                    <div className="flex justify-start items-center pl-[10px]">
                        <Link className=" cursor-pointer relative w-[50px] md:w-[80px] items-center flex justify-center" to="/checkout/cart">
                            <div className="">
                                <div className="flex justify-center">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        className="bi bi-cart2 md:w-[19px] md:h-[19px] w-[30px] h-[30px] z-10 text-white md:text-gray-600"
                                        viewBox="0 0 16 16"
                                    >
                                        <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
                                    </svg>
                                </div>
                                <div className="text-center hidden md:block h-[25px]">
                                    Giỏ hàng
                                </div>
                                {cartLength ? (
                                    <div className=" absolute top-[-17px] left-[50%] bg-slate-200 w-[30px] p-[5px] text-[15px] md:text-[10px] text-center rounded-[50%]">
                                        {cartLength}
                                    </div>
                                ) : null}
                            </div>
                        </Link>
                        <div className="">
                            {!user ? (
                                <div className="w-[50px] md:w-[80px]">
                                    <div className="flex justify-center items-center">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="currentColor"
                                            className="bi bi-person md:w-[19px] md:h-[19px] w-[30px] h-[30px] md:text-gray-600 text-white"
                                            viewBox="0 0 16 16"
                                        >
                                            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
                                        </svg>
                                    </div>
                                    <div className="relative text-center md:block cursor-pointer account">
                                        <span className="hidden md:block h-[25px]">Tài khoản</span>
                                        <div className="absolute capitalize bg-neutral-50 top-[25px] right-[0px] hidden menu-account rounded-[5px] shadow-2xl">
                                            <div className="py-[10px]">
                                            <div className="px-[15px] py-[5px] ">
                                            <Link
                                                className="w-[240px] block py-[10px] bg-PK-client text-white rounded-[15px]"
                                                to="/login"
                                            >
                                                Đăng nhập
                                            </Link>
                                            </div>
                                            <div className="px-[15px] py-[5px] ">
                                            <Link
                                                className="w-[240px] block py-[10px] border-[2px] border-PK-client text-PK-client rounded-[15px]"
                                                to="/register"
                                            >
                                                Đăng ký
                                            </Link>
                                            </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <div className="relative droplog">
                                    <div
                                        className="rounded-[50%] overflow-hidden ml-[15px] max-w-[40px] cursor-pointer"
                                        onClick={() => setShowSidebar(true)}
                                    >
                                        <img src={user.avatar} className="w-full" />
                                    </div>
                                    {showSidebar && (
                                        <div
                                            ref={ref}
                                            className="absolute top-[35px] right-0 mt-[17px] droplog-dow"
                                            onClick={() => setShowSidebar(false)}
                                        >
                                            <SidebarProfile user={user} />
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Header;

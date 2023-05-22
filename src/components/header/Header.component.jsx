import { useEffect, useState, useRef } from "react";
import ClientMenu from "../menu/MenuClient.component";
import local from "../../utiliti/local/localSesion";
import { Link, useNavigate, useLocation } from "react-router-dom";
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
    const location = useLocation();
    const [showSidebar, setShowSidebar] = useState(false);
    const [onSearch, setOnSearch] = useState({
        dataSearch: false,
        historySearch: false,
    });
    const ref = useRef();
    // Listen Event Navigate Page Start Section
    useEffect(() => {
        setOnSearch({ historySearch: false, dataSearch: false });
    }, [location]);

    // Listen Event Navigate Page End Section
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
    async function callbackSetData() {
        const { payload } = await dispatch(searchProduct(objSearch));
        setDataSearch(payload?.data?.data);
    }
    const onHandleSearch = async (valueInput) => {
        if (!valueInput) {
            setOnSearch({ historySearch: true, dataSearch: false });
        }
        try {
            if (valueInput.length > 0) {
                setOnSearch({ historySearch: false, dataSearch: true });

                setObjSearch((prev) => ({
                    // ...prev, "search": e.target.value
                    ...prev,
                    search: valueInput,
                }));
                callbackSetData();
                /*  ban đầu  const { payload } = await dispatch(searchProduct(objSearch));
                setDataSearch(payload?.data?.data)*/
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
    //focus vào tài khoản
    const [showAccountMenu, setShowAccountMenu] = useState(false);
    const accountRef = useRef(null);

    const handleClickOutside = (event) => {
        if (accountRef.current && !accountRef.current.contains(event.target)) {
            setShowAccountMenu(false);
        }
    };

    useEffect(() => {
        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);

    const handleAccountClick = () => {
        setShowAccountMenu(!showAccountMenu);
    };
    return (
        <div className="md:flex md:m-auto md:justify-between md:w-[1280px] md:h-16 bg-[#fff]">
            <div className="mt-3 mr-8 flex justify-center">
                <Link to="/home">
                    <img
                        className="md:h-[36px] h-[20px] "
                        src="https://i.imgur.com/SmXRS7C.png"
                        alt=""
                    />
                </Link>
            </div>
            <div className="relative dropdown">
                <div className="flex md:mt-3 mt-4 float-left md:float-none pr-5 md:pr-0">
                    <div>
                        <img
                            className="md:h-[36px] h-[36px]"
                            src="https://cdn0.fahasa.com/skin/frontend/ma_vanese/fahasa/images/ico_menu.svg"
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
                <div className="absolute z-10 md:top-[40px] md:left-[-238px] dropdown-menu hidden pt-[30px]">
                    <ClientMenu />
                </div>
            </div>
            <div className="flex md:mt-0 mt-3">
                <div className="flex items-center justify-center md:mr-28 mr-12 dropdowns">
                    <div className="test-1 flex border-2 rounded-xl w-[100%]">
                        <input
                            onChange={(e) => {
                                onHandleSearch(e.target.value);
                            }}
                            onFocus={() =>
                                setOnSearch({
                                    historySearch: true,
                                    dataSearch: false,
                                })
                            }
                            type="text"
                            className="px-4 py-2 md:w-[500px] sm:w-[490px] w-[270px] outline-none focus:bg-slate-100 "
                            placeholder="Tìm kiếm sản phẩm mong muốn..."
                        />

                        {onSearch.dataSearch || onSearch.historySearch ? (
                            <div
                                onClick={() =>
                                    setOnSearch({
                                        historySearch: false,
                                        dataSearch: false,
                                    })
                                }
                                className="absolute overlay z-10"
                            ></div>
                        ) : null}

                        {onSearch.dataSearch ? (
                            <div
                                onClick={() =>
                                    setOnSearch({
                                        historySearch: false,
                                        dataSearch: false,
                                    })
                                }
                                className={`absolute z-20 mt-10 dropdown-menus`}
                            >
                                <TableSearch dataSearch={dataSearch} />
                            </div>
                        ) : onSearch.historySearch ? (
                            <div className="absolute z-20 mt-10 dropdown-menus">
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
                                className="w-6 h-6 text-gray-600"
                                fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                            >
                                <path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
                            </svg>
                        </button>
                    </div>
                </div>
                <div className="md:mt-3 md:w-24 hidden md:block cursor-pointer">
                    <div className="flex justify-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="19"
                            height="19"
                            fill="currentColor"
                            className="bi bi-bell"
                            viewBox="0 0 16 16"
                        >
                            <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z" />
                        </svg>
                    </div>
                    <div className="text-center">Thông báo</div>
                </div>
                <Link to="/checkout/cart">
                    <div className="md:mt-3 md:w-24 w-24 cursor-pointer relative">
                        <div className="flex justify-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                className="bi bi-cart2 md:w-[19px] md:h-[19px] w-[24px] h-[24px] mt-2 md:mt-0 z-10"
                                viewBox="0 0 16 16"
                            >
                                <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
                            </svg>
                        </div>
                        <div className="text-center hidden md:block">
                            Giỏ hàng
                        </div>
                        {cartLength ? (
                            <div className=" absolute top-[-10px] left-[55%] bg-slate-200 p-[5px] text-[10px] text-center rounded-[50%]">
                                {cartLength}
                            </div>
                        ) : null}
                    </div>
                </Link>
            </div>
            <div className="md:mt-3 md:w-24 w-20">
                {!user ? (
                    <div>
                        <div className="flex justify-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                className="bi bi-person md:w-[19px] md:h-[19px] w-[24px] h-[24px] mt-2 md:mt-0"
                                viewBox="0 0 16 16"
                            >
                                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
                            </svg>
                        </div>
                        <div
                            className="relative text-center md:block cursor-pointer account"
                            ref={accountRef}
                        >
                            <span onClick={handleAccountClick}>Tài khoản</span>
                            {showAccountMenu && (
                                <div className="absolute rounded capitalize w-[150px] bg-slate-100 top-[33px] right-0">
                                    <Link
                                        className="py-[5px] px-[20px] hover:bg-red-600 hover:text-white rounded block"
                                        to="/register"
                                    >
                                        register
                                    </Link>
                                    <Link
                                        className="py-[5px] px-[20px] hover:bg-red-600 hover:text-white rounded block"
                                        to="/login"
                                    >
                                        login
                                    </Link>
                                </div>
                            )}
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
                                className="absolute top-[35px] right-0 mt-[17px] droplog-dow z-10"
                                onClick={() => setShowSidebar(false)}
                            >
                                <SidebarProfile user={user} />
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Header;

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllInformationPage } from "../../slice/infomationPage";
import { Link } from "react-router-dom";
import { getAllCategoryInfor } from "../../slice/categoryInformation";
import ListCategoryInfor from "../ListCategoryInfor";
const Footer = () => {
    const [informationPage, setInformationPage] = useState([]);
    const [cateInfor, setCateInfor] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        (async () => {
            try {
                const { payload } = await dispatch(getAllCategoryInfor());
                setCateInfor(payload.data);
            } catch (error) {}
        })();
    }, []);

    useEffect(() => {
        (async () => {
            try {
                const { payload } = await dispatch(getAllInformationPage());
                // console.log("payload", payload.data);
                if (payload?.successCode) {
                    setInformationPage(payload.data);
                }
                if (payload?.errorCode) {
                    helper.toast("error", payload.message);
                }
            } catch (error) {
                console.log(error);
            }
        })();
    }, []);

    /*  useEffect(() => {
        setInformationPage([]);
    }, [information]); */

    return (
        <>
            <footer className="max-w-[1280px] w-full m-auto bg-[#fff]">
                <div className="bg-PK-client p-[20px] lg:flex lg:justify-center lg:items-center text-center">
                    <div className="flex items-center justify-between max-w-[230px] w-full m-auto text-[#e9e9e9]">
                        <i className="fa-solid fa-envelope text-[20px]"></i>
                        <h2 className="capitalize text-[20px]">
                            {" "}
                            đăng ký nhập bản tin
                        </h2>
                    </div>
                    <div className="mt-[20px] lg:mt-0 bg-[#fff] flex justify-between items-center w-full lg:max-w-[650px]">
                        <div className="w-[80%] ]">
                            <input
                                type="email"
                                className=" pl-[20px] w-full py-[5px] outline-none"
                            />
                        </div>
                        <div className="w-[20%]">
                            <button className="bg-yellow-500 uppercase text-[16px] w-full text-[#efefef] py-[5px]">
                                đăng ký
                            </button>
                        </div>
                    </div>
                </div>

                <div className="px-[20px] mt-[20px] lg:flex lg:justify-between lg:items-start">
                    <div className="lg:max-w-[30%]">
                        <ul>
                            <li>
                                <img
                                    src="https://i.imgur.com/SmXRS7C.png"
                                    alt=""
                                    className="max-w-[250px]"
                                />
                            </li>
                            <li className="mt-[10px] lg:mt-[20px]">
                                <p className="text-[14px] lg:text-[16px]">
                                    Lầu 5, 387-389 Hai Bà Trưng Quận 3 TP
                                    HCMCông Ty Cổ Phần Phát Hành Sách TP HCM -
                                    NIKI60 - 62 Lê Lợi, Quận 1, TP. HCM, Việt
                                    Nam
                                </p>
                            </li>
                            <li>
                                <p className="text-[14px] lg:text-[16px] mt-[10px]">
                                    Niki.com nhận đặt hàng trực tuyến và giao
                                    hàng tận nơi. KHÔNG hỗ trợ đặt mua và nhận
                                    hàng trực tiếp tại văn phòng cũng như tất cả
                                    Hệ Thống Niki trên toàn quốc.
                                </p>
                            </li>
                            <li>
                                <img
                                    src="https://cdn0.fahasa.com/media/wysiwyg/Logo-NCC/logo-bo-cong-thuong-da-thong-bao1.png"
                                    alt=""
                                    className="max-w-[150px] lg:max-w-[200px] mt-[10px]"
                                />
                            </li>
                            <li>
                                <ul className="lg:mt-[10px] mt-[5px]">
                                    <li className="inline-block ml-[5px]">
                                        <img
                                            src="https://cdn0.fahasa.com/skin/frontend/ma_vanese/fahasa/images//footer/Insta-on.png"
                                            alt=""
                                        />
                                    </li>
                                    <li className="inline-block ml-[5px]">
                                        <img
                                            src="https://cdn0.fahasa.com/skin/frontend/ma_vanese/fahasa/images//footer/Insta-on.png"
                                            alt=""
                                        />
                                    </li>
                                    <li className="inline-block ml-[5px]">
                                        <img
                                            src="https://cdn0.fahasa.com/skin/frontend/ma_vanese/fahasa/images//footer/Insta-on.png"
                                            alt=""
                                        />
                                    </li>
                                    <li className="inline-block ml-[5px]">
                                        <img
                                            src="https://cdn0.fahasa.com/skin/frontend/ma_vanese/fahasa/images//footer/Insta-on.png"
                                            alt=""
                                        />
                                    </li>
                                    <li className="inline-block ml-[5px]">
                                        <img
                                            src="https://cdn0.fahasa.com/skin/frontend/ma_vanese/fahasa/images//footer/Insta-on.png"
                                            alt=""
                                        />
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <div className="flex justify-start lg:justify-between items-center mt-[10px] lg:justify-start">
                                    <img
                                        className="max-w-[100px] lg:max-w-[150px] w-full"
                                        src="https://cdn0.fahasa.com/media/wysiwyg/Logo-NCC/android1.png"
                                        alt=""
                                    />
                                    <img
                                        className="max-w-[100px] lg:max-w-[150px] w-full lg:ml-[10px]"
                                        src="https://cdn0.fahasa.com/media/wysiwyg/Logo-NCC/appstore1.png"
                                        alt=""
                                    />
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div className="lg:max-w-[68%] lg:w-full mt-[20px] lg:mt-0">
                        <div className="lg:flex lg:justify-around lg:items-start lg:flex-wrap">
                            {cateInfor.map((eCate) => (
                                <div
                                    key={eCate._id}
                                    className="mt-[10px] lg:mt-[20px]"
                                >
                                    <h2 className="uppercase text-[#333] text-[18px] font-medium tracking-wide">
                                        {eCate.name}
                                    </h2>
                                    <ListCategoryInfor id={eCate._id} />
                                </div>
                            ))}
                        </div>
                        <div>
                            <div>
                                <h2 className="text-[20px] uppercase mt-[20px] font-medium">
                                    liên hệ
                                </h2>
                            </div>
                            <div className="mt-[10px]">
                                <ul className="lg:flex lg:justify-around lg:items-center">
                                    <li className="mb-[10px] lg:mb-0">
                                        <i className="fa-sharp fa-solid fa-map-location"></i>{" "}
                                        <span className="text-[#333 lg:text-[16px]">
                                            60-62 Lê Lợi, Q.1, TP. HCM
                                        </span>
                                    </li>
                                    <li className="mb-[10px] lg:mb-0">
                                        <i className="fa-solid fa-envelope"></i>{" "}
                                        <span className="text-[#333 lg:text-[16px]">
                                            60-62 Lê Lợi, Q.1, TP. HCM
                                        </span>
                                    </li>
                                    <li className="mb-[10px] lg:mb-0">
                                        <i className="fa-solid fa-phone"></i>{" "}
                                        <span className="text-[#333 lg:text-[16px]">
                                            1900636467
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="hidden lg:block lg:flex lg:justify-between lg:items-center lg:flex-wrap lg:mt-[20px]">
                            <img
                                className="w-full max-w-[130px] mt-[10px]"
                                src="https://cdn0.fahasa.com/media/wysiwyg/Logo-NCC/vnpost1.png"
                                alt=""
                            />
                            <img
                                className="w-full max-w-[130px] mt-[10px]"
                                src="https://cdn0.fahasa.com/media/wysiwyg/Logo-NCC/vnpost1.png"
                                alt=""
                            />
                            <img
                                className="w-full max-w-[130px] mt-[10px]"
                                src="https://cdn0.fahasa.com/media/wysiwyg/Logo-NCC/vnpost1.png"
                                alt=""
                            />
                            <img
                                className="w-full max-w-[130px] mt-[10px]"
                                src="https://cdn0.fahasa.com/media/wysiwyg/Logo-NCC/vnpost1.png"
                                alt=""
                            />
                            <img
                                className="w-full max-w-[130px] mt-[10px]"
                                src="https://cdn0.fahasa.com/media/wysiwyg/Logo-NCC/vnpost1.png"
                                alt=""
                            />
                            <img
                                className="w-full max-w-[130px] mt-[10px]"
                                src="https://cdn0.fahasa.com/media/wysiwyg/Logo-NCC/vnpost1.png"
                                alt=""
                            />
                        </div>
                    </div>
                </div>

                <div className="py-[20px] px-[10px] text-[#6e6e6e] text-center font-medium">
                    <p>
                        Giấy chứng nhận Đăng ký Kinh doanh số 0304132047 do Sở
                        Kế hoạch và Đầu tư Thành phố Hồ Chí Minh cấp ngày
                        20/12/2005, đăng ký thay đổi lần thứ 10, ngày
                        20/05/2022.
                    </p>
                </div>
            </footer>
        </>
    );
};

export default Footer;

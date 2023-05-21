import React from "react";
import { Link } from "react-router-dom";
const SidebarProfile = (props) => {
    const { _id, email, role } = props.user;
    console.log(props.user.role);
    return (
        <div className="max-w-[280px] w-full border border-solid border-[#e6e6e6] rounded-[2px] bg-[white]">
            {role == 1 ? (
                <div className="">
                    <div className="px-[20px] pt-[18px] border-b-[2px] border-solid border-[#f6f6f6]">
                        <p className="uppercase text-[20px] text-[#C92127] font-bold pt-[10px] pr-[15px] pb-[10px]">
                            tài khoản
                        </p>
                        <p className="text-[13px] text-[#C92127] font-bold pt-[10px] pr-[15px] pb-[10px]">
                            {email}
                        </p>
                    </div>
                    <div className="px-[10px] p-[20px]">
                        <div className="border-b-[1px] border-solid border-[#f2f2f2] py-[5px]">
                            <Link
                                to={`/account/edit/${_id}`}
                                className="py-[5px] text-[#333333] text-[14px] font-normal"
                            >
                                Thông tin tài khoản
                            </Link>
                        </div>
                        <div className="border-b-[1px] border-solid border-[#f2f2f2] py-[5px]">
                            <Link
                                to="/admin"
                                className="py-[5px] text-[#333333] text-[14px] font-normal"
                            >
                                Quản trị viên
                            </Link>
                        </div>
                        <div className="border-b-[1px] border-solid border-[#f2f2f2] py-[5px]">
                            <Link
                                to="/login"
                                className="py-[5px] text-[#333333] text-[14px] font-normal"
                            >
                                Đăng xuất
                            </Link>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="">
                    <div className="px-[20px] pt-[18px] border-b-[2px] border-solid border-[#f6f6f6]">
                        <p className="uppercase text-[20px] text-[#C92127] font-bold pt-[10px] pr-[15px] pb-[10px]">
                            tài khoản
                        </p>
                        <p className="text-[13px] text-[#C92127] font-bold pt-[10px] pr-[15px] pb-[10px]">
                            {email}
                        </p>
                    </div>
                    <div className="px-[10px] p-[20px]">
                        <div className="border-b-[1px] border-solid border-[#f2f2f2] py-[5px]">
                            <Link
                                to={`/account/edit/${_id}`}
                                className="py-[5px] text-[#333333] text-[14px] font-normal"
                            >
                                Thông tin tài khoản
                            </Link>
                        </div>
                        <div className="border-b-[1px] border-solid border-[#f2f2f2] py-[5px]">
                            <Link
                                to={`/account/address/${_id}`}
                                className="py-[5px] text-[#333333] text-[14px] font-normal"
                            >
                                Sổ địa chỉ
                            </Link>
                        </div>
                        <div className="border-b-[1px] border-solid border-[#f2f2f2] py-[5px]">
                            <Link
                                to={`/account/order/${_id}`}
                                className="py-[5px] text-[#333333] text-[14px] font-normal"
                            >
                                Đơn hàng của tôi
                            </Link>
                        </div>
                        <div className="border-b-[1px] border-solid border-[#f2f2f2] py-[5px]">
                            <Link
                                to="/login"
                                className="py-[5px] text-[#333333] text-[14px] font-normal"
                            >
                                Đăng xuất
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SidebarProfile;

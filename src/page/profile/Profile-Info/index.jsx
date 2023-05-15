import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { UpdateUser, getUserClient } from "../../../slice/userSlice";
const ProfileInfo = () => {
    const [users, setUser] = useState();
    const [showChangePassword, setShowChangePassword] = useState(false);
    const { id } = useParams();
    // console.log("id", id);
    const user = useSelector((state) => state.user.value);
    // console.log("user", user);
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();
    const dispatch = useDispatch();

    const onSubmit = async (data) => {
        data._id = id;
        data.email = user.email;
        console.log("data", data);
        await dispatch(UpdateUser(data));
        alert("Cập nhật thành công");
    };

    useEffect(() => {
        (async () => {
            const { payload } = await dispatch(getUserClient(id));
            console.log("payload.data", payload.data);
            setUser(payload.data);
        })();
    }, [id]);
    // console.log("address", users);
    const handleChangePassword = () => {
        setShowChangePassword(!showChangePassword);
    };
    return (
        <div>
            <div className="container-profile border border-solid border-[#e6e6e6] rounded-[2px] bg-[white]">
                <div className="px-[15px] py-[20px]">
                    <div className="pb-[10px]">
                        <span className="md:text-[16px] text-[22px] uppercase font-bold">
                            Thông tin tài khoản
                        </span>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="py-[8px]">
                            <label
                                htmlFor="firstname"
                                className="md:float-left md:max-w-[20%] md:text-[14px] md:w-full md:font-normal p-[4px] text-[#555555] text-[16px] font-semibold"
                            >
                                Họ Tên<span className="text-[red]">*</span>
                            </label>
                            <div className="md:pt-0 pt-[7px]">
                                <div className="">
                                    <input
                                        {...register("name", {
                                            required: true,
                                        })}
                                        value={users?.name}
                                        onChange={(e) =>
                                            setUser({
                                                ...user,
                                                name: e.target.value,
                                            })
                                        }
                                        id="name"
                                        name="name"
                                        className="md:max-w-[40%] md:text-[15px] max-w[100%] w-full font-semibold text-[16px] px-[14px] py-[3px] border border-solid border-[#ced4da] rounded-[2px]
                     focus:outline-[2px] focus:outline focus:outline-[#8ed0f9] "
                                        maxLength={40}
                                        type="text"
                                        placeholder="Nhập Họ Tên"
                                    />
                                    {errors.name && (
                                        <span className="text-red-600 ml-3">
                                            Name is required
                                        </span>
                                    )}
                                </div>
                            </div>
                        </div>

                        <div className="py-[8px]">
                            <label
                                htmlFor="phoneNumber"
                                className="md:float-left md:max-w-[20%] md:text-[14px] md:w-full md:font-normal p-[4px] text-[#555555] text-[16px] font-semibold"
                            >
                                Số điện thoại
                            </label>
                            <div className="md:pt-0 pt-[7px]">
                                <div className="">
                                    <input
                                        {...register("phone", {
                                            required:
                                                "Số điện thoại không được để trống",
                                            pattern: {
                                                value: /^0[35789]\d{8}$/,
                                                message:
                                                    "Số điện thoại không hợp lệ",
                                            },
                                        })}
                                        value={users?.phone}
                                        onChange={(e) =>
                                            setUser({
                                                ...user,
                                                phone: e.target.value,
                                            })
                                        }
                                        id="phone"
                                        name="phone"
                                        className="md:max-w-[40%] md:text-[15px] max-w[100%] w-full font-semibold text-[16px] px-[14px] py-[3px] border border-solid border-[#ced4da] rounded-[2px]
                     focus:outline-[2px] focus:outline focus:outline-[#8ed0f9] "
                                        maxLength={11}
                                        type="text"
                                        placeholder="Nhập Số Điện Thoại"
                                    />
                                    {errors.phone && (
                                        <span className="text-red-600 ml-3">
                                            {errors.phone.message}
                                        </span>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="py-[8px]">
                            <label
                                htmlFor="email"
                                className="md:float-left md:max-w-[20%] md:text-[14px] md:w-full md:font-normal p-[4px] text-[#555555] text-[16px] font-semibold"
                            >
                                Email
                            </label>
                            <div className="md:pt-0 pt-[7px]">
                                <div className="">
                                    <input
                                        {...register("email")}
                                        value={users?.email}
                                        onChange={(e) =>
                                            setUser({
                                                ...user,
                                                email: e.target.value,
                                            })
                                        }
                                        name="email"
                                        id="email"
                                        className="disabled md:max-w-[40%] md:text-[15px] max-w[100%] w-full font-semibold text-[16px] px-[14px] py-[3px] border border-solid border-[#ced4da] rounded-[2px]
                     focus:outline-[2px] focus:outline focus:outline-[#8ed0f9] "
                                        type="email"
                                        disabled
                                        placeholder="Chưa có email"
                                    />
                                    {errors.email && (
                                        <span className="text-red-600 ml-3">
                                            Không được để trống trường này
                                        </span>
                                    )}
                                </div>
                            </div>
                        </div>

                        <div className="py-[8px]">
                            <label
                                htmlFor="email"
                                className="md:float-left md:max-w-[20%] md:text-[14px] md:w-full md:font-normal p-[4px] text-[#555555] text-[16px] font-semibold"
                            ></label>
                            <div className="flex md:pt-0 pt-[7px]">
                                <div className="flex justify-center items-center">
                                    <input
                                        id="changepassword"
                                        type="checkbox"
                                        onChange={handleChangePassword}
                                    />
                                    <span className="pl-[10px] md:text-[14px] text-[17px] font-semibold ">
                                        <label
                                            className="hover:cursor-pointer"
                                            htmlFor="changepassword"
                                        >
                                            Đổi mật khẩu
                                        </label>
                                    </span>
                                </div>
                                {showChangePassword && (
                                    <div>{/* Nội dung cần hiển thị */}</div>
                                )}
                            </div>
                        </div>
                        <div className="py-[20px]">
                            <div className="text-center flex justify-center items-center">
                                <div className="w-[220px] p-[8px] bg-[#C92127] rounded-[8px] hover:cursor-pointer">
                                    <button
                                        type="submit"
                                        className="text-[white] text-center text-[17px] font-bold"
                                    >
                                        Lưu thay đổi
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

            <div className="container-profile border border-solid border-[#e6e6e6] rounded-[2px] mt-[20px] bg-[white]">
                <div className="px-[30px] py-[40px]">
                    <div className="pb-[10px]">
                        <span className="md:text-[16px] text-[22px] uppercase font-bold">
                            THÔNG TIN XUẤT HÓA ĐƠN GTGT
                        </span>
                    </div>
                    <form action="">
                        <div className="py-[8px]">
                            <label
                                htmlFor=""
                                className="md:float-left md:max-w-[20%] md:text-[14px] md:w-full md:font-normal p-[4px] text-[#555555] text-[16px] font-semibold"
                            >
                                Họ tên người mua hàng
                            </label>
                            <div className="md:pt-0 pt-[7px]">
                                <div className="">
                                    <input
                                        id=""
                                        className="md:max-w-[40%] md:text-[15px] max-w[100%] w-full font-semibold text-[16px] px-[14px] py-[3px] border border-solid border-[#ced4da] rounded-[2px]
                    focus:outline-[2px] focus:outline focus:outline-[#8ed0f9] "
                                        maxLength={40}
                                        type="text"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="py-[8px]">
                            <label
                                htmlFor=""
                                className="md:float-left md:max-w-[20%] md:text-[14px] md:w-full md:font-normal p-[4px] text-[#555555] text-[16px] font-semibold"
                            >
                                Tên công ty
                            </label>
                            <div className="md:pt-0 pt-[7px]">
                                <div className="">
                                    <input
                                        id=""
                                        className="md:max-w-[40%] md:text-[15px] max-w[100%] w-full font-semibold text-[16px] px-[14px] py-[3px] border border-solid border-[#ced4da] rounded-[2px]
                    focus:outline-[2px] focus:outline focus:outline-[#8ed0f9] "
                                        maxLength={40}
                                        type="text"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="py-[8px]">
                            <label
                                htmlFor=""
                                className="md:float-left md:max-w-[20%] md:text-[14px] md:w-full md:font-normal p-[4px] text-[#555555] text-[16px] font-semibold"
                            >
                                Địa chỉ công ty
                            </label>
                            <div className="md:pt-0 pt-[7px]">
                                <div className="">
                                    <input
                                        id=""
                                        className="md:max-w-[40%] md:text-[15px] max-w[100%] w-full font-semibold text-[16px] px-[14px] py-[3px] border border-solid border-[#ced4da] rounded-[2px]
                    focus:outline-[2px] focus:outline focus:outline-[#8ed0f9] "
                                        maxLength={40}
                                        type="text"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="py-[8px]">
                            <label
                                htmlFor=""
                                className="md:float-left md:max-w-[20%] md:text-[14px] md:w-full md:font-normal p-[4px] text-[#555555] text-[16px] font-semibold"
                            >
                                Mã số thuế công ty
                            </label>
                            <div className="md:pt-0 pt-[7px]">
                                <div className="">
                                    <input
                                        id=""
                                        className="md:max-w-[40%] md:text-[15px] max-w[100%] w-full font-semibold text-[16px] px-[14px] py-[3px] border border-solid border-[#ced4da] rounded-[2px]
                    focus:outline-[2px] focus:outline focus:outline-[#8ed0f9] "
                                        maxLength={40}
                                        type="text"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="py-[8px]">
                            <label
                                htmlFor=""
                                className="md:float-left md:max-w-[20%] md:text-[14px] md:w-full md:font-normal p-[4px] text-[#555555] text-[16px] font-semibold"
                            >
                                Email nhận hóa đơn
                            </label>
                            <div className="md:pt-0 pt-[7px]">
                                <div className="">
                                    <input
                                        id=""
                                        className="md:max-w-[40%] md:text-[15px] max-w[100%] w-full font-semibold text-[16px] px-[14px] py-[3px] border border-solid border-[#ced4da] rounded-[2px]
                    focus:outline-[2px] focus:outline focus:outline-[#8ed0f9] "
                                        maxLength={40}
                                        type="text"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="py-[20px]">
                            <div className="text-center flex justify-center items-center">
                                <div className="w-[220px] p-[8px] bg-[#C92127] rounded-[8px] hover:cursor-pointer">
                                    <span className="text-[white] text-center text-[17px] font-bold">
                                        Lưu thay đổi
                                    </span>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ProfileInfo;

import React, { useState } from "react";
import local from "../../../utiliti/local/localSesion";

const ProfileAdmin = () => {
    const [user, setUser] = useState(local.get("user") || null);
    console.log("user0", user);
    return (
        <div className="ml-[60px]">
            <div className="flex justify-start items-start mt-[40px]">
                <div>
                    <img
                        src="https://khoinguonsangtao.vn/wp-content/uploads/2022/07/avatar-cute-2.jpg"
                        alt=""
                        className=" max-w-[150px] w-[100%] rounded-[50%]"
                    />
                </div>
                <div className="ml-[30px]">
                    <h3 className="font-semibold text-[18px] text-[#242424cd] leading-5 mb-[10px]">
                        ADMIN ROOT
                    </h3>
                    <span className="bg-PK-client py-[5px] px-[10px] rounded-sm text-[#fff]">
                        admin
                    </span>
                </div>
            </div>
            <div className="mt-[40px] flex justify-start items-start">
                <div className="max-w-[400px] w-full">
                    <h1 className="text-[18px] font-semibold">
                        Presonal infomation
                    </h1>
                    <div className="mt-[20px]">
                        <label htmlFor="" className="block font-medium">
                            Name:
                        </label>
                        <input
                            type="text"
                            className="w-full py-[7px] pl-[10px] mt-[5px] focus:border-[1px] border-PK-client rounded-sm outline-none"
                            value={user.name}
                        />
                    </div>
                    <div className="mt-[20px]">
                        <label htmlFor="" className="block font-medium">
                            Email:
                        </label>
                        <input
                            type="text"
                            className="w-full py-[7px] pl-[10px] mt-[5px] focus:border-[1px] border-PK-client rounded-sm outline-none"
                            value={user.email}
                        />
                    </div>
                </div>

                <div className="ml-[60px] max-w-[400px] w-full">
                    <h1 className="text-[18px] font-semibold">
                        Presonal infomation
                    </h1>
                    <div className="mt-[20px]">
                        <label htmlFor="" className="block font-medium">
                            Password:
                        </label>
                        <input
                            type="password"
                            className="w-full py-[7px] pl-[10px] mt-[5px] focus:border-[1px] border-PK-client rounded-sm outline-none"
                            value={user.password}
                        />
                    </div>
                    <div className="mt-[20px]">
                        <label htmlFor="" className="block font-medium">
                            Confirm password:
                        </label>
                        <input
                            type="password"
                            className="w-full py-[7px] pl-[10px] mt-[5px] focus:border-[1px] border-PK-client rounded-sm outline-none"
                            value="ConfirmPassword"
                        />
                    </div>
                </div>
            </div>

            <div className="mt-[40px]">
                <button className="bg-PK-client text-[#fff] py-[10px] px-[25px] rounded-md">
                    Submit
                </button>
            </div>
        </div>
    );
};

export default ProfileAdmin;

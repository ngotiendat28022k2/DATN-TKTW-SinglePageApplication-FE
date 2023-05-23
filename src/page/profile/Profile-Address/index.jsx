import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getUserClient } from "../../../slice/userSlice";
import AddressListUser from "../../../components/addressUser/addressUserList/AddressListUser";

const ProfileAddress = () => {
    const [users, setUsers] = useState();
    const { id } = useParams();
    console.log("id-add", id);
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user.value);

    useEffect(() => {
        (async () => {
            const { payload } = await dispatch(getUserClient(id));
            console.log("payload-add", payload.data);
            setUsers(payload.data);
        })();
    }, [id]);
    console.log("address", user);
    return (
        <>
            <div className="bg-[#fff] flex py-[20px]">
                <div className="mr-[20px]"></div>
                <AddressListUser/>
            </div>
        </>
    );
};

export default ProfileAddress;

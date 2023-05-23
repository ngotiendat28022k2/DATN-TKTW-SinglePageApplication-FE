import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import Popup from "../../AdminComponent/MyPopup/MyPopup";
import FormAddresUser from "../AddOrEdit";
import helper from "../../../utiliti/helper/helper";
import local from "../../../utiliti/local/localSesion";
import {
  AddNewAddressUser,
  UpdateAddressUser,
  getAllAddressUser,
} from "../../../slice/addressUserSlide";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import ActionDelete from "./ActionDelete";
import RequestLoading from "../../requestLoading/RequestLoading";

const AddressListUser = ({ setOpen }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [openPopup, setOpenPopup] = useState(false);
  const [recordForEdit, setRecordForEdit] = useState(null);
  const [user, setUser] = useState(local.get("user") || null);
  const infoUser = useSelector((state) => state.infoUser.value);
  const [infoUsers, setInfoUsers] = useState([]);
  const dispatch = useDispatch();
  const openInPopup = (item) => {
    setOpenPopup(true);
    setRecordForEdit(item);
  };

  useEffect(() => {
    (async () => {
      try {
        const { payload } = await dispatch(getAllAddressUser(user._id));
        if (payload?.successCode) {
          setInfoUsers(payload.data);
        }
      } catch (error) {
        console.log("error", error);
      }
    })();
  }, [user]);
  useEffect(() => {
    setInfoUsers(infoUser);
  }, [infoUser]);

  const addOrEdit = (values, resetForm) => {
    values.user = user._id;
    if (!values._id) {
      try {
        (async () => {
          console.log(values);
          const { payload } = await dispatch(AddNewAddressUser(values));
          console.log(payload);
          if (payload?.successCode) {
            helper.toast("success", "Add success");
          }
          if (payload?.errorCode) {
            helper.toast("error", "Add false");
          }
        })();
      } catch (error) {
        helper.toast("error", "fetching data false");
      }
    } else {
      try {
        (async () => {
          console.log("value update", values);
          const { payload } = await dispatch(UpdateAddressUser(values));
          if (payload?.successCode) {
            helper.toast("success", "Update success");
          }
          if (payload?.errorCode) {
            helper.toast("error", "Update false");
          }
        })();
      } catch (error) {
        helper.toast("error", "Edit data false");
      }
    }
    resetForm();
    setRecordForEdit(null);
    setOpenPopup(false);
  };

  function formatPhoneNumber(num) {
    const formatNum = num.replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3");

    return formatNum; // Trả về số điện thoại gốc nếu không phù hợp với định dạng
  }

  const handleupdate = (id) => {
    const item = infoUsers.filter((item) => item._id === id);
    setOpenPopup(true);
    setRecordForEdit(...item);
  };

  const handleIsActive = async (e, data) => {
    try {
      const isActive = e.target.value === "on" ? true : false;
      const newData = { ...data, isActive };
  
      const itemActiveFalse = infoUsers.find((item) => item.isActive);
      if (itemActiveFalse) {
        const updateItemOff = { ...itemActiveFalse, isActive: false };
        setIsLoading(true)
        await dispatch(UpdateAddressUser(updateItemOff));
      }
      await dispatch(UpdateAddressUser(newData));
      setIsLoading(false)
    } catch (error) {
      console.log("error", error);
      helper.toast("error", "Edit data false");
    }
  };
  
  
  return (
    <div className="w-[700px] h-[500px] relative">
      {isLoading && <RequestLoading />}

      <hr />
      {infoUsers &&
        infoUsers.map((infoUser) => (
          <div className="flex justify-between items-center mt-[20px] border-b-[1px] pb-[20px]" key={infoUser._id}>
            <div>
              <input
                type="radio"
                checked={infoUser.isActive}
                onChange={(e) => handleIsActive(e, infoUser)}
                name="isActive"
                className="w-[15px] h-[15px]"
              />
            </div>
            <div className="w-[80%]">
              <span className="capitalize">{infoUser.name}</span>
              <span className="ml-[5px]">
                {formatPhoneNumber(infoUser.numberPhone)}
              </span>
              <span className="text-[#333] capitalize block">
               address:{`${infoUser.specificAddress}, ${infoUser.wardName}, ${infoUser.districtName}, ${infoUser.provinceName}`}
              </span>

              <ActionDelete params={infoUser}/>
            </div>
            <div className="capitalize">
              <Button
                variant="contained"
                onClick={() => handleupdate(infoUser._id)}
              >
                cập nhật
              </Button>
            </div>
          </div>
        ))}

      <div className="mt-[40px]">
        <span
          onClick={() => {
            setRecordForEdit(null);
            setOpenPopup(true);
          }}
          className="border-[1px] border-[#d32f2f] text-[#d32f2f] capitalize py-[10px] px-[20px] cursor-pointer hover:bg-[#d32f2f22]"
        >
          <i className="fa-solid fa-plus"></i> thêm địa chỉ mới
        </span>
      </div>
      <div className="absolute bottom-0 right-0">
        <Button
          variant="outlined"
          sx={{ marginRight: "20px" }}
          color="error"
          onClick={() => setOpen(false)}
        >
          Hủy
        </Button>
        <Button variant="contained" color="error"
          onClick={() => setOpen(false)}
        >
          Xác Nhận
        </Button>
      </div>

      <Popup
        title={recordForEdit ? "Cập Nhật Địa Chỉ" : "Thêm Địa Chỉ Mới"}
        openPopup={openPopup}
        setOpenPopup={setOpenPopup}
      >
        <FormAddresUser recordForEdit={recordForEdit} addOrEdit={addOrEdit} />
      </Popup>
    </div>
  );
};

export default AddressListUser;

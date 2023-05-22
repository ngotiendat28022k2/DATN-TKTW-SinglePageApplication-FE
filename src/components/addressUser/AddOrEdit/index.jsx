import React, { useState, useEffect } from "react";
import { Button, Grid } from "@mui/material";
import Controls from "../../../components/AdminComponent/controls/Controls";
import { useForm, Form } from "../../../components/AdminComponent/useForm";
import Select from "react-select";

const initialFValues = {
  name: "",
  numberPhone: "",
  selectedProvince: undefined,
  selectedDistrict: undefined,
  selectedWard: undefined,
  specificAddress: "",
};

export default function FormAddresUser(props) {
  const { recordForEdit, addOrEdit } = props;
  useEffect(() => {
    if (recordForEdit != null) setValues(recordForEdit);
  }, [recordForEdit]);
  const validate = (fieldValues = values) => {
    let temp = { ...errors };
    const myPhoneRegex = /(84|0[3|5|7|8|9])+([0-9]{8})\b/g;
    const nameRegex =
      /^([a-vxyỳọáầảấờễàạằệếýộậốũứĩõúữịỗìềểẩớặòùồợãụủíỹắẫựỉỏừỷởóéửỵẳẹèẽổẵẻỡơôưăêâđ]+)((\s{1}[a-vxyỳọáầảấờễàạằệếýộậốũứĩõúữịỗìềểẩớặòùồợãụủíỹắẫựỉỏừỷởóéửỵẳẹèẽổẵẻỡơôưăêâđ]+){1,})$/;
    if ("name" in fieldValues) {
      if (fieldValues.name) {
        temp.name = nameRegex.test(fieldValues.name)
          ? ""
          : "Name is not in the correct format.";
      } else {
        temp.name = "Name is required.";
      }
    }
    if ("numberPhone" in fieldValues) {
      if (fieldValues.numberPhone) {
        temp.numberPhone = myPhoneRegex.test(fieldValues.numberPhone)
          ? ""
          : "Phone number is not in the correct format.";
      } else {
        temp.numberPhone = "Phone number is required.";
      }
    }
    if ("selectedProvince" in fieldValues)
      temp.selectedProvince = fieldValues.selectedProvince
        ? ""
        : "Province is required.";
    if ("selectedDistrict" in fieldValues)
      temp.selectedDistrict = fieldValues.selectedDistrict
        ? ""
        : "District is required.";
    if ("selectedWard" in fieldValues)
      temp.selectedWard = fieldValues.selectedWard ? "" : "Ward is required.";
    if ("specificAddress" in fieldValues)
      temp.specificAddress = fieldValues.specificAddress
        ? ""
        : "Specific Address is required.";

    // console.log(temp);
    setErrors({
      ...temp,
    });

    if (fieldValues == values) return Object.values(temp).every((x) => x == "");
  };

  const { values, setValues, errors, setErrors, handleInputChange, handleChange, resetForm } =
    useForm(initialFValues, true, validate);

    const [provinces, setProvinces] = useState([]);
    const [districts, setDistricts] = useState([]);
    const [wards, setWards] = useState([]);
    
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("value")
    // const provinceName =
    //   provinces.find((province) => province.code == values.selectedProvince)
    //     ?.name || "";
    // const districtName =
    //   districts.find((district) => district.code == values.selectedDistrict)
    //     ?.name || "";
    // const wardName =
    //   wards.find((ward) => ward.code == values.selectedWard)?.name || "";
    // const newValue = {
    //   ...values,
    //   selectedProvince: provinceName,
    //   selectedDistrict: districtName,
    //   selectedWard: wardName,
    // };
    if (validate()) {
      // addOrEdit(newValue, resetForm);
    }
  };

  useEffect(() => {
    // Lấy danh sách tỉnh/thành phố
    fetch('https://online-gateway.ghn.vn/shiip/public-api/master-data/province', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Token': '6918bfab-f625-11ed-a281-3aa62a37e0a5'
      },
    })
      .then(response => response.json())
      .then(data => setProvinces(data.data))
      .catch(error => console.error(error));
  }, []);

  useEffect(() => {
    if(values.selectedDistrictId !==){
      fetch(`https://online-gateway.ghn.vn/shiip/public-api/master-data/ward?district_id=${values.selectedDistrictId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Token': '6918bfab-f625-11ed-a281-3aa62a37e0a5'
        },
      })
        .then(response => response.json())
        .then(data => setWards(data.data))
        .catch(error => console.error(error));  
    }
  },[values.selectedDistrictId])

  useEffect(() => {
    if(values.selectedProvince !== ""){
      fetch(`https://online-gateway.ghn.vn/shiip/public-api/master-data/district?province_id=${selectedProvinceId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Token': '6918bfab-f625-11ed-a281-3aa62a37e0a5'
        },
      })
        .then(response => response.json())
        .then(data => setDistricts(data.data))
        .catch(error => console.error(error));
    }
  }, [values.selectedProvince])


  

  return (
    <Form onSubmit={handleSubmit}>
      <Grid container>
        <div className="md:flex md:my-2">
          <div className="md:w-52 p-1">
            <label className="">Họ và tên người nhận</label>
          </div>
          <div className="">
            <input
              name="name"
              value={values.name}
              onChange={handleInputChange}
              type="text"
              className="input-pay border border-inherit h-9 md:px-5 px-3 md:w-[500px] w-[420px] rounded-lg"
              placeholder="Nhập họ và tên người nhận"
            />
          </div>
        </div>
        <div className="md:flex md:my-2">
          <div className="md:w-52 p-1">
            <label className="">Số điện thoại</label>
          </div>
          <div className="">
            <input
              value={values.numberPhone}
              name="numberPhone"
              onChange={handleInputChange}
              type="text"
              className="input-pay border border-inherit h-9 md:px-5 px-3 md:w-[500px] w-[420px] rounded-lg"
              placeholder="Ví dụ: 0976890xxx (10 ký tự)"
            />
          </div>
        </div>
        <div className="md:flex md:my-2">
          <div className="md:w-52 p-1">
            <label className="">Quốc gia</label>
          </div>
          <div className="">
            <input
              type="text"
              disabled
              className="input-pay border border-inherit h-9 md:px-5 px-3 md:w-[500px] w-[420px] rounded-lg"
              value="Việt Nam"
            />
          </div>
        </div>
        <div className="md:flex md:my-2">
          <div className="md:w-52 p-1">
            <label className="">Tỉnh/Thành Phố</label>
          </div>
          <div className="">
            <select
              className="input-pay border border-inherit h-9 md:px-5 px-3 md:w-[500px] w-[420px] rounded-lg"
              id="selectedProvince"
              name="selectedProvince"
              value={values.selectedProvince}
              onChange={handleInputChange}
            >
              <option value="">Chọn tỉnh/thành phố</option>
              {provinces?.map((province) => (
                <option key={province.ProvinceID} value={province.ProvinceID}>
                  {province.ProvinceName}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="md:flex md:my-2">
          <div className="md:w-52 p-1">
            <label className="">Quận/Huyện</label>
          </div>
          <div className="">
            <select
              className="input-pay border border-inherit h-9 md:px-5 px-3 md:w-[500px] w-[420px] rounded-lg"
              id="district"
              name="selectedDistrict"
              value={values.selectedDistrict}
              onChange={handleInputChange}
            >
              <option value="">Chọn quận/huyện</option>
              {districts.map((district) => (
                <option key={district.DistrictID} value={district.DistrictID}>
                  {district.DistrictName}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="md:flex md:my-2">
          <div className="md:w-52 p-1">
            <label className="">Phường/Xã</label>
          </div>
          <div className="">
            <select
              className="input-pay border border-inherit h-9 md:px-5 px-3 md:w-[500px] w-[420px] rounded-lg"
              id="selectedWard"
              name="selectedWard"
              value={values.selectedWard}
              onChange={handleInputChange}
            >
              <option value="">Chọn phường/xã</option>
              {wards?.map((ward) => (
                <option key={ward.WardCode} value={ward.WardCode}>
                  {ward.WardName}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="md:flex md:my-2 my-2">
          <div className="md:w-52 p-1">
            <label className="">Địa chỉ nhận hàng</label>
          </div>
          <div className="">
            <input
              name="specificAddress"
              value={values.specificAddress}
              onChange={handleInputChange}
              type="text"
              className="input-pay border border-inherit h-9 md:px-5 px-3 md:w-[500px] w-[420px] rounded-lg"
            />
          </div>
        </div>
        <Grid item xs={12}>
          <div className="mt-[20px] text-right">
            <Button type="submit" variant="contained" color="error">Xác Nhận</Button>
          </div>
        </Grid>
      </Grid>
    </Form>
  );
}

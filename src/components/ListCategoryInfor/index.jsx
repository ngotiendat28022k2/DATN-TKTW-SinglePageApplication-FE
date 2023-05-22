import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getCategoryInfor } from "../../slice/categoryInformation";

export default function ListCategoryInfor({ id }) {
    const [eCate, setECate] = useState([]);
    const dispatch = useDispatch();
    useEffect(() => {
        (async () => {
            try {
                const { payload } = await dispatch(getCategoryInfor(id));
                setECate(payload.inforPage);
            } catch (error) {
                console.log(error);
            }
        })();
    }, []);
    return (
        <ul className="mt-[10px]">
            {eCate.map(({ title, _id }) => (
                <li
                    key={_id}
                    className="mt-[5px] hover:text-PK-client hover:list-disc transition ease-in-out delay-150 w-[270px]"
                >
                    <a href={`/infomation-page/${_id}`} className="text-[13px]">
                        {title}
                    </a>
                </li>
            ))}
        </ul>
    );
}

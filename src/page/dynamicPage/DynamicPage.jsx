import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useSearchParams } from "react-router-dom";
import { getInfomationPage } from "../../slice/infomationPage";

const DynamicPage = () => {
    let [searchParams, setSearchParams] = useSearchParams();
    // const id = searchParams.get("id");
    const { id } = useParams();
    console.log(id);
    const [page, setPage] = useState();
    const dispatch = useDispatch();
    useEffect(() => {
        (async () => {
            const { payload } = await dispatch(getInfomationPage(id));
            console.log("payload", payload);
            if (payload?.successCode) {
                setPage(payload.data);
            }
        })();
    }, [id]);
    return (
        <>
            <div className="bg-white my-5">
                <div>
                    <h2 className="text-center p-5 text-[20px] font-bold">
                        {page?.title}
                    </h2>
                </div>
                <div
                    className="px-[20px] pb-5"
                    dangerouslySetInnerHTML={{ __html: page?.html }}
                ></div>
            </div>
        </>
    );
};

export default DynamicPage;

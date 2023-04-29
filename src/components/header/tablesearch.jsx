import React from "react";
import { Link } from "react-router-dom";

const TableSearch = ({ dataSearch }) => {
    return (
        <div>
            <div className="bg-amber-50 w-[500px] mt-5 rounded-md">
                <nav>
                    <ul className="px-5 py-3">
                        {dataSearch?.map((item, index) => (
                            <Link
                                to={`/detail/${item?._id}`}
                                key={index.toString()}
                            >
                                <li className="py-1 font-normal text-sm hover:text-orange-300">
                                    {item?.name}
                                </li>
                            </Link>
                        ))}
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default TableSearch;

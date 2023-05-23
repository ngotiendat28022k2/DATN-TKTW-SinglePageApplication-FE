import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const RatingBar = ({ star, percentage }) => {
  return (
    <div className="flex w-[100%] justify-start items-center gap-[10px]">
      <div className="w-[70px] md:w-auto">
        <span className="text-[18px]">{star} sao</span>
      </div>
      <div className="max-w-[100px] md:max-w-[250px] max-h-[6px] h-full w-full bg-[#e6e6e6]">
        <span
          className="h-full block bg-[#1f9d55]"
          style={{ width: `${percentage}%` }}
        ></span>
      </div>
      <div className="text-[18px] max-w-[45px] w-full md:max-w-none">
        <span className="">{percentage.toFixed(0)}%</span>
      </div>
    </div>
  );
};

const AverageRating = () => {
  const [ratings, setRatings] = useState([]);
  const commentStore = useSelector(state => state.comment.value)
  const numRatings = commentStore.length;
  useEffect(() => {
    const countRatings = () => {
      const ratingCounts = { '1': 0, '2': 0, '3': 0, '4': 0, '5': 0 };
      commentStore.forEach((comment) => {
        const rating = comment.rating;
        if (rating >= 1 && rating <= 5) {
          ratingCounts[rating.toString()] += 1;
        }
      });
      const ratings = Object.keys(ratingCounts).map((key) => ({
        star: parseInt(key),
        count: ratingCounts[key],
      }));

      return ratings;
    };

    const updatedRatings = countRatings();
    setRatings(updatedRatings);
  }, [commentStore]);

  const totalRatings = commentStore.reduce((total, comment) => total + comment.rating, 0);
  const averageRating = numRatings > 0 ? totalRatings / numRatings : 0;

  return (
    <>
      <div className="w-[25%] md:w-[12%] float-left ">
        <div className="font-bold flex justify-center items-center">
          <span className="text-[53px]">{averageRating.toFixed(1)}</span>
          <span className="text-[27px]">/5</span>
        </div>
        <div className="flex justify-center items-center">
          <span className="text-[#7A7E7F] text-[14px]">
            ({numRatings} đánh giá)
          </span>
        </div>
      </div>
      <div className="grid grid-cols-1 pl-[26px] w-[65%] md:w-[35%]">
        {ratings.map((rating) => (
          <RatingBar
            key={rating.star}
            star={rating.star}
            percentage={numRatings > 0 ? (rating.count / numRatings) * 100 : 0}
          />
        ))}
      </div>
    </>
  );
};

export default AverageRating;
import React from "react";
import { removeLoading } from "../redux/twitSlice";
import { useDispatch, useSelector } from "react-redux";

const Loading = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    /* do not forget to add pharanthesis 
    at the end of dispatch action :) */
    dispatch(removeLoading());
  };

  const _loading = useSelector((state) => state.twit.loading);
  console.log("loading", _loading);
  return (
    <div>
      {_loading && "Loading..."}
      {_loading ? (
        <button onClick={handleClick}>anladım</button>
      ) : (
        "nö loading yet"
      )}
    </div>
  );
};

export default Loading;

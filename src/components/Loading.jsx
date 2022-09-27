import React, { useEffect } from "react";
import { removeLoading } from "../redux/twitSlice";
import { useDispatch, useSelector } from "react-redux";

const Loading = () => {
  const dispatch = useDispatch();

  // const handleClick = () => {
  //   /* do not forget to add pharanthesis
  //   at the end of dispatch action :) */
  //   dispatch(removeLoading());
  // };

  const data = useSelector((state) => state.twit.twits);
  const _loading = useSelector((state) => state.twit.loading);
  console.log("loading", _loading);

  useEffect(() => {
    const timer = () =>
      setTimeout(() => {
        dispatch(removeLoading());
      }, 2000);
    timer();

    return clearTimeout(timer);
  }, [data.length]);

  return (
    <div>
      {_loading && "Loading..."}
      {/* {_loading ? (
        <button onClick={handleClick}>anladım</button>
      ) : (
        "nö loading yet"
      )} */}
    </div>
  );
};

export default Loading;

import React, { useEffect } from "react";
import { removeLoading } from "../redux/twitSlice";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

const Loading = () => {
  const dispatch = useDispatch();
  // const [warn, setWarn] = useState(1);

  // const handleClick = () => {
  //   /* do not forget to add pharanthesis
  //    at the end of dispatch action :) */
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

    return () => clearTimeout(timer);
  }, [data.length]);

  return (
    <div>
      {_loading && "Loading..."}
    </div>
  );
};

export default Loading;

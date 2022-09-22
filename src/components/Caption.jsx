import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { findPerson } from "../redux/twitSlice.jsx";

const Caption = ({ person }) => {
  console.log("caption rendered");
  const arr = useSelector((state) => state.twit.twits);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   console.log("dispatch", dispatch(findPerson({ name: "asd" })));
  // }, [person]);

  const capti = useSelector((state) => state.twit.caption);
  console.log(
    "state twit",
    useSelector((state) => state.twit)
  );
  console.log("person", person);
  console.log("capti", capti);
  const prs = arr.find((t) => {
    return t.name === person;
  });

  console.log("prs", prs);

  return (
    <div>
      {prs?.name} adlı kişiyi caption tivit bu: "{prs?.twit} " your caption:
      {capti}
    </div>
  );
};

export default Caption;

import React, { useState } from "react";
import { findPerson } from "../redux/twitSlice";
import { useDispatch, useSelector } from "react-redux";

const Dene = () => {
  const dispatch = useDispatch();
  const [sta, setSta] = useState("");
  const [of, setOf] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const xy = dispatch(findPerson({ name: sta }));
    setOf(xy);
    // console.log("xy", xy);
  };
  const kisi = useSelector((state) => state.twit.obj);

  console.log("of", kisi);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={sta}
          onChange={(e) => setSta(e.target.value)}
          placeholder="tiviti gör"
        />
        <button>bas gör</button>
      </form>
    </div>
  );
};

export default Dene;

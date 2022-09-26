import React, { useState } from "react";
import { findPerson } from "../redux/twitSlice";
import { useDispatch, useSelector } from "react-redux";

const Dene = () => {
  const dispatch = useDispatch();
  const [sta, setSta] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(findPerson({ name: sta }));
  };
  const kisi = useSelector((state) => state.twit.obj);

  console.log("of", kisi);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={sta}
          onChange={(e) => setSta(e.target.value)}
          placeholder="kullanıcı adını yaz, mailini gör"
        />
        <button>bas gör</button>
        <br></br>
      </form>
      {kisi.mail === undefined
        ? "arama yapınız"
        : `kullanıcının maili ${kisi.mail}`}
    </div>
  );
};

export default Dene;

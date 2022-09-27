import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTwit, createTwit, makeCaption } from "../redux/twitSlice";
import Caption from "./Caption";

const Twit = () => {
  console.log("twit rendered");
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  const [person, setPerson] = useState(null);
  console.log("person", person);
  const [twt, setTwt] = useState({
    name: "",
    mail: "",
    twit: "",
    random: "",
    caption: "",
  });

  // const [caption, setCaption] = useState("");

  // burda "twit" storeun ismi
  const twtArray = useSelector((state) => state.twit.twits);
  console.log("twtArray", twtArray);

  const loading = useSelector((state) => state.twit.loading);

  console.log("tvt loading", loading);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTwt({ ...twt, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("twt:", twt);
    dispatch(createTwit({ name: twt.name, mail: twt.mail, twit: twt.twit }));
    dispatch(
      addTwit({
        name: twt.name,
        twit: twt.twit,
        random: twt.random,
        mail: twt.mail,
      })
    );
    dispatch(makeCaption({ caption: twt.caption }));
  };

  useEffect(() => {
    () => <Caption person={person} />;
  }, [person]);

  console.log(open);
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          value={twt.name}
          onChange={handleChange}
          placeholder="name"
        />
        <input
          name="mail"
          value={twt.mail}
          onChange={handleChange}
          placeholder="mail"
        />
        <input
          name="twit"
          value={twt.twit}
          onChange={handleChange}
          placeholder="twit"
        />
        <input
          name="random"
          value={twt.random}
          onChange={handleChange}
          placeholder="random"
        />
        <br></br>
        <input
          name="caption"
          value={twt.caption}
          onChange={handleChange}
          placeholder="write a caption"
        />
        <button>twit at</button>
      </form>
      <br></br>

      <br></br>
      {open === false ? (
        <button disabled={loading} onClick={() => setOpen(!open)}>
          {twtArray.length} adet tivit{" "}
        </button>
      ) : (
        twtArray.map((t) => {
          return (
            <div key={t.id}>
              <p>{t.name} </p>
              <p>{t.twit} </p>
              <p>this property doesnt exist in slice: {t.random} </p>
              <button onClick={() => setOpen(false)}>kapa</button>
              <button onClick={() => setPerson(t.name)}>make caption</button>
            </div>
          );
        })
      )}
      {person !== null && <Caption person={person} />}
    </div>
  );
};

export default Twit;

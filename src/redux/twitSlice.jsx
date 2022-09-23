import { createSlice } from "@reduxjs/toolkit";

export const twitSlice = createSlice({
  name: "twit",

  /* this is "state" */
  initialState: {
    twitInfo: { id: Math.random(), name: "", mail: "", twit: "" },
    twits: [{ id: 1, name: "asd", mail: "qwe", twit: "aaaxxx" }],
    caption: "",
    obj: {},
  },
  reducers: {
    createTwit: (state, action) => {
      state.twitInfo.name = action.payload.name;
      state.twitInfo.mail = action.payload.mail;
      state.twitInfo.twit = action.payload.twit;
      console.log("twitInfo:", JSON.stringify(state.twitInfo));
    },
    addTwit: (state, action) => {
      state.twits.push(action.payload);
    },
    makeCaption: (state, action) => {
      state.caption = action.payload.caption;
    },
    findPerson: (state, action) => {
      const { name } = action.payload;
      const tweeter = state.twits.find((p) => {
        return p.name === name;
      });
      console.log("tweeter", tweeter);
      console.log("state.twits", state.twits);
      state.obj = tweeter;
    },
  },
});

export const { createTwit, addTwit, makeCaption, findPerson } =
  twitSlice.actions;

export default twitSlice.reducer;

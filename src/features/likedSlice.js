import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  likedList: [],
  isLiked: false
};

const likedSlice = createSlice({
  name: "liked",
  initialState,
  reducers: {
    allLiked: (state, action) => {
    //   state.likedList.length > 0
    //     ? state.likedList.map((e) => {
    //         if(e.id === action.payload.id){
    //             alert("added0")
    //             return
    //         }
    //         else{
    //             state.likedList.push(action.payload);
    //             console.log("ye cha;la")
    //         }
    //       })
    //     : state.likedList.push(action.payload);

    state.likedList.push(action.payload)
    },
    addLiked: (state, action) => {
        state.isLiked = action.payload
    },
    removeLike: (state,action) => {
        state.likedList = state.likedList.filter(e => e.id !== action.payload.id)
    }
  },
});

export const { allLiked,addLiked,removeLike } = likedSlice.actions;

export default likedSlice.reducer;
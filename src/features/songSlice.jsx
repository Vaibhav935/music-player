import { createSlice, isPending } from "@reduxjs/toolkit";

const initialState = {
    isPlaying: false,
    currentSong: null,
}

export const songSlice = createSlice({
    name: "song",
    initialState,
    reducers:{
        addSong: (state, action) => {
            state.currentSong = action.payload;
            state.isPlaying = true;
        },
        PlayPause: (state) => {
            state.isPlaying ? state.isPlaying = false : state.isPlaying = true;
        //     if(state.isPlaying) {
        //         isPlaying = false;
        //         return;

        //     }
        //     isPlaying = true
        }
    }
})

export const {addSong, PlayPause} = songSlice.actions

export default songSlice.reducer
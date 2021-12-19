import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// thunk commands
export const fetchGames = createAsyncThunk(
    'games/fetchGames',
    async () => {
        const response = await fetch('https://serene-garden-71214.herokuapp.com/games').then(res => res.json())
        console.log(response);
        return response

    }
)

// main slice and reducers
const gameSlice = createSlice({
    name: 'game',
    initialState: {
        allitems: [{}],
        playList: [],
        status: 'idle'
    },
    reducers: {
        addToPlaylist: (state, { payload }) => {
            state.playList.push(payload)
        },
        removeFromPlaylist: (state, { payload }) => {
            state.playList = state.playList.filter(game => game.id !== payload.id);
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchGames.fulfilled, (state, action) => {
            state.allitems = action.payload;
            state.status = 'success'
        })
        builder.addCase(fetchGames.pending, (state, action) => {
            state.status = 'pending';
        })
    },
});

// Action creators are generated for each case reducer function
export const { addToPlaylist, removeFromPlaylist } = gameSlice.actions;

export default gameSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
interface ThemeState {
    value: boolean;
}

const initialState: ThemeState = {
    value: true,
}

const ThemeAction = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        toggleTheme: (state) => {
            state.value = !state.value;
        }
    }
});

export const { toggleTheme } = ThemeAction.actions;
export default ThemeAction.reducer;

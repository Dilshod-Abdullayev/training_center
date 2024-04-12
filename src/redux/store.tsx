import { configureStore } from "@reduxjs/toolkit";
import ThemeAction from "./action/ThemeAction";

const store = configureStore({
    reducer: {
        theme: ThemeAction,
    }
});

export type RootState = ReturnType<typeof store.getState>;
export default store;

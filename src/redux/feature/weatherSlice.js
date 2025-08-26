import { createSlice } from "@reduxjs/toolkit";
import fetchWeatherData from "../fetchWeatherData";

const initialState = {
    weather: [],
    loading: false,
    error: null,
}

const weatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducers: {
        clearWeatherData: (state, action) => {
            state.weather = [];
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchWeatherData.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchWeatherData.fulfilled, (state, action) => {
                state.loading = false;
                state.weather.push(action.payload);
            })
            .addCase(fetchWeatherData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
    }
})

export const { clearWeatherData } = weatherSlice.actions;
export default weatherSlice.reducer;
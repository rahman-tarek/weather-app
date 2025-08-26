import { configureStore } from "@reduxjs/toolkit"
import weatherReducer from "./feature/weatherSlice"
import { logger } from "./logger.js"

const store = configureStore({
    reducer: {
        weather: weatherReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})

export default store;
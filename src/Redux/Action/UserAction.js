import axios from "axios"
import { GET_ALL_AIRPORT_DETAILS_FAILS, GET_ALL_AIRPORT_DETAILS_REQUEST, GET_ALL_AIRPORT_DETAILS_SUCCESS, GET_FLIGHT_DETAILS_FAILS, GET_FLIGHT_DETAILS_REQUEST, GET_FLIGHT_DETAILS_SUCCESS, GET_WEEKLY_FLIGHT_DETAILS_FAILS, GET_WEEKLY_FLIGHT_DETAILS_REQUEST, GET_WEEKLY_FLIGHT_DETAILS_SUCCESS, PRE_FLIGHT_BOOKING_FAILS, PRE_FLIGHT_BOOKING_REQUEST, PRE_FLIGHT_BOOKING_SUCCESS } from "../Constants/UserConstance"

export const GetAllAirportDetailsAction = () => async (dispatch) => {
    try {
        dispatch({ type: GET_ALL_AIRPORT_DETAILS_REQUEST })
        const config = { headers: { "Content-Type": "application/json" } }
        const { data } = await axios.get('/user/', config)
        dispatch({ type: GET_ALL_AIRPORT_DETAILS_SUCCESS, payload: data })

    } catch (error) {
        dispatch({ type: GET_ALL_AIRPORT_DETAILS_FAILS, payload: error.response && error.response.data })
    }
}

export const GetFlightDetailsAction = (deta) => async (dispatch) => {
    try {
        dispatch({ type: GET_FLIGHT_DETAILS_REQUEST })
        const config = { headers: { "Content-Type": "application/json" } }
        const { data } = await axios.post('/user/flightdetails', deta, config)
        dispatch({ type: GET_FLIGHT_DETAILS_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: GET_FLIGHT_DETAILS_FAILS, payload: error.response && error.response.data })
    }
}

export const GetWeeklyFlightDetailsAction = () => async (dispatch) => {
    try {
        dispatch({ type: GET_WEEKLY_FLIGHT_DETAILS_REQUEST })
        const config = { headers: { "Content-Type": "application/json" } }
        const { data } = await axios.get('/user/weekflightdetails', config)
        dispatch({ type: GET_WEEKLY_FLIGHT_DETAILS_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: GET_WEEKLY_FLIGHT_DETAILS_FAILS, payload: error.response && error.response.data })
    }
}

export const PreflightbookingAction = (preflightformdetails) => async (dispatch) => {
    try {
        dispatch({ type: PRE_FLIGHT_BOOKING_REQUEST })
        const config = { headers: { "Content-Type": "application/json" } }
        const { data } = await axios.post('/user/preflightbooking', preflightformdetails, config)
        dispatch({ type: PRE_FLIGHT_BOOKING_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: PRE_FLIGHT_BOOKING_FAILS, payload: error.response && error.response.data })
    }
}
import { ADMIN_PRE_FLIGHT_BOOKING_REQUEST, ADMIN_PRE_FLIGHT_BOOKING_SUCCESS, AIRLINES_UPLOAD_FAILS, AIRLINES_UPLOAD_REQUEST, AIRLINES_UPLOAD_SUCCESS, FILE_UPLOAD_FAILS, FILE_UPLOAD_REQUEST, FILE_UPLOAD_SUCCESS, GET_ALL_AIRPORT_DETAILS_FAILS, GET_ALL_AIRPORT_DETAILS_REQUEST, GET_ALL_AIRPORT_DETAILS_SUCCESS, GET_ALL_FLIGHT_DETAILS_FAILS, GET_ALL_FLIGHT_DETAILS_REQUEST, GET_ALL_FLIGHT_DETAILS_SUCCESS } from "../Constants/AdminConstance"
import axios from 'axios'

export const GetAllFlightDetailsAction = () => async (dispatch, getState) => {
    try {
        dispatch({ type: GET_ALL_FLIGHT_DETAILS_REQUEST })
        const { userLogin: { userInfo } } = getState()
        const config = { headers: { "Content-Type": "application/json", "Authorization": `Bearer ${userInfo.token}` } }
        const { data } = await axios.get("/admin", config)
        dispatch({ type: GET_ALL_FLIGHT_DETAILS_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: GET_ALL_FLIGHT_DETAILS_FAILS, payload: error.response && error.response.data })
    }
}

export const FileUploadAction = (data) => async (dispatch, getState) => {
    try {
        dispatch({ type: FILE_UPLOAD_REQUEST })
        const { userLogin: { userInfo } } = getState()
        const config = { headers: { "Content-Type": "multipart/form-data", "Authorization": `Bearer ${userInfo.token}` } }
        const { deta } = await axios.post("/fileupload/", data, config)
        dispatch({ type: FILE_UPLOAD_SUCCESS, payload: deta });
        dispatch(GetAllFlightDetailsAction())
    } catch (error) {
        dispatch({ type: FILE_UPLOAD_FAILS, payload: error.response && error.response.data })
    }
}

export const AirlinsFileUploadAction = (Airlinsdata) => async (dispatch, getState) => {
    try {
        dispatch({ type: AIRLINES_UPLOAD_REQUEST })
        const { userLogin: { userInfo } } = getState()
        const config = { headers: { "Content-Type": "multipart/form-data", "Authorization": `Bearer ${userInfo.token}` } }
        const { data } = await axios.post("/fileupload/airportfileupload", Airlinsdata, config)
        dispatch({ type: AIRLINES_UPLOAD_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: AIRLINES_UPLOAD_FAILS, payload: error.response && error.response.data })
    }
}

export const AdminGetAllAirportDetailsAction = () => async (dispatch, getState) => {
    try {
        dispatch({ type: GET_ALL_AIRPORT_DETAILS_REQUEST })
        const { userLogin: { userInfo } } = getState()
        const config = { headers: { "Content-Type": "multipart/form-data", "Authorization": `Bearer ${userInfo.token}` } }
        const { data } = await axios.get('/admin/airportdetails', config)
        dispatch({ type: GET_ALL_AIRPORT_DETAILS_SUCCESS, payload: data })

    } catch (error) {
        dispatch({ type: GET_ALL_AIRPORT_DETAILS_FAILS, payload: error.response && error.response.data })
    }
}

export const AdminGetPreFlightBookingAction = () => async (dispatch, getState) => {
    try {
        dispatch({ type: ADMIN_PRE_FLIGHT_BOOKING_REQUEST })
        const { userLogin: { userInfo } } = getState()
        const config = { headers: { "Content-Type": "multipart/form-data", "Authorization": `Bearer ${userInfo.token}` } }
        const { data } = await axios.get('/admin/preflightbooking', config)
        dispatch({ type: ADMIN_PRE_FLIGHT_BOOKING_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: ADMIN_PRE_FLIGHT_BOOKING_REQUEST, payload: error.response && error.response.data })
    }
}
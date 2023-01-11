import { GET_ALL_AIRPORT_DETAILS_FAILS, GET_ALL_AIRPORT_DETAILS_REQUEST, GET_ALL_AIRPORT_DETAILS_SUCCESS, GET_FLIGHT_DETAILS_FAILS, GET_FLIGHT_DETAILS_REQUEST, GET_FLIGHT_DETAILS_SUCCESS, GET_WEEKLY_FLIGHT_DETAILS_FAILS, GET_WEEKLY_FLIGHT_DETAILS_REQUEST, GET_WEEKLY_FLIGHT_DETAILS_SUCCESS, PRE_FLIGHT_BOOKING_FAILS, PRE_FLIGHT_BOOKING_REQUEST, PRE_FLIGHT_BOOKING_SUCCESS } from "../Constants/UserConstance";

export const GetAllAirportDetailsReducer = (state = { Allairport: [] }, action) => {
    switch (action.type) {
        case GET_ALL_AIRPORT_DETAILS_REQUEST:
            return { loading: true, Allairport: [] };

        case GET_ALL_AIRPORT_DETAILS_SUCCESS:
            return { loading: false, Allairport: action.payload }

        case GET_ALL_AIRPORT_DETAILS_FAILS:
            return { loading: false, Allairporterror: action.payload };

        default:
            return state;
    }
}

export const GetFlightDetailsReducer = (state = { Flightdetails: [] }, action) => {
    switch (action.type) {
        case GET_FLIGHT_DETAILS_REQUEST:
            return { loading: true, Flightdetails: [] }

        case GET_FLIGHT_DETAILS_SUCCESS:
            return { loading: false, Flightdetails: action.payload }

        case GET_FLIGHT_DETAILS_FAILS:
            return { loading: false, Flightdetailserror: action.payload }

        default:
            return state;
    }
}

export const GetWeeklyFlightDetailsReducer = (state = { WeekFlightdetails: [] }, action) => {
    switch (action.type) {
        case GET_WEEKLY_FLIGHT_DETAILS_REQUEST:
            return { WeekFlightdetailsloading: true, WeekFlightdetails: [] }

        case GET_WEEKLY_FLIGHT_DETAILS_SUCCESS:
            return { WeekFlightdetailsloading: false, WeekFlightdetails: action.payload }

        case GET_WEEKLY_FLIGHT_DETAILS_FAILS:
            return { WeekFlightdetailsloading: false, WeekFlightdetailserror: action.payload }

        default:
            return state;
    }
}

export const PreflightbookingReducer = (state = {}, action) => {
    switch (action.type) {
        case PRE_FLIGHT_BOOKING_REQUEST:
            return { loading: true };

        case PRE_FLIGHT_BOOKING_SUCCESS:
            return { loading: false, preflightbooking: action.payload };

        case PRE_FLIGHT_BOOKING_FAILS:
            return { loading: false, preflightbookingerror: action.payload };

        default:
            return state;
    }
}
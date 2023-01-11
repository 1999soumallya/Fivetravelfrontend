import { ADMIN_PRE_FLIGHT_BOOKING_FAILS, ADMIN_PRE_FLIGHT_BOOKING_REQUEST, ADMIN_PRE_FLIGHT_BOOKING_SUCCESS, AIRLINES_UPLOAD_FAILS, AIRLINES_UPLOAD_REQUEST, AIRLINES_UPLOAD_SUCCESS, FILE_UPLOAD_FAILS, FILE_UPLOAD_REQUEST, FILE_UPLOAD_SUCCESS, GET_ALL_AIRPORT_DETAILS_FAILS, GET_ALL_AIRPORT_DETAILS_REQUEST, GET_ALL_AIRPORT_DETAILS_SUCCESS, GET_ALL_FLIGHT_DETAILS_FAILS, GET_ALL_FLIGHT_DETAILS_REQUEST, GET_ALL_FLIGHT_DETAILS_SUCCESS } from '../Constants/AdminConstance'

export const GetAllFlightDetailsReducer = (state = { allFlight: [] }, action) => {
    switch (action.type) {
        case GET_ALL_FLIGHT_DETAILS_REQUEST:
            return { loading: true, allFlight: [] }

        case GET_ALL_FLIGHT_DETAILS_SUCCESS:
            return { loading: false, allFlight: action.payload };

        case GET_ALL_FLIGHT_DETAILS_FAILS:
            return { loading: false, error: action.payload };

        default:
            return state;
    }
}

export const FileUploadReducer = (state = {}, action) => {
    switch (action.type) {
        case FILE_UPLOAD_REQUEST:
            return { loading: true };

        case FILE_UPLOAD_SUCCESS:
            return { loading: false, fileupload: action.payload };

        case FILE_UPLOAD_FAILS:
            return { loading: false, error: action.payload };

        default:
            return state;
    }
}

export const AirlinsFileUploadReducer = (state = {}, action) => {
    switch (action.type) {
        case AIRLINES_UPLOAD_REQUEST:
            return { loading: true };

        case AIRLINES_UPLOAD_SUCCESS:
            return { loading: false, AirlinsFile: action.payload }

        case AIRLINES_UPLOAD_FAILS:
            return { loading: false, AirlinsFileError: action.payload }

        default:
            return state;
    }
}

export const AdminGetAllAirportDetailsReducer = (state = { Allairport: [] }, action) => {
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

export const AdminGetPreFlightBookingReducer = (state = { PreFlightBooking: [] }, action) => {
    switch (action.type) {
        case ADMIN_PRE_FLIGHT_BOOKING_REQUEST:
            return { loading: true, PreFlightBooking: [] };

        case ADMIN_PRE_FLIGHT_BOOKING_SUCCESS:
            return { loading: false, PreFlightBooking: action.payload };

        case ADMIN_PRE_FLIGHT_BOOKING_FAILS:
            return { loading: false, PreFlightBookingError: action.payload };

        default:
            return state;
    }
}
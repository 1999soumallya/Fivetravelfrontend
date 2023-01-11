import { USER_LOGIN_FAIL, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGOUT, USER_REGISTER_FAIL, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS, VALIDATE_USER_FAILS, VALIDATE_USER_REQUEST, VALIDATE_USER_SUCCESS } from "../Constants/CommonConstants";

export const UserRegisterReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_REGISTER_REQUEST:
            return { loading: true }

        case USER_REGISTER_SUCCESS:
            return { loading: false, success: true, userInfo: action.payload }

        case USER_REGISTER_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state;
    }
}

export const UserLoginReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_LOGIN_REQUEST:
            return { loading: true }

        case USER_LOGIN_SUCCESS:
            return { loading: false, success: true, userInfo: action.payload }

        case USER_LOGIN_FAIL:
            return { loading: false, error: action.payload }

        case USER_LOGOUT:
            return {}

        default:
            return state;
    }
}

export const UserValidation = (state = {}, action) => {
    switch (action.type) {
        case VALIDATE_USER_REQUEST:
            return { validuserloading: true };

        case VALIDATE_USER_SUCCESS:
            return { validuserloading: false, validuser: action.payload };

        case VALIDATE_USER_FAILS:
            return { validuserloading: false, validuserError: action.payload }

        default:
            return state;
    }
}
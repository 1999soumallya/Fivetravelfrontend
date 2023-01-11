import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form'
import { ErrorMessage } from "@hookform/error-message";
import { useSelector, useDispatch } from 'react-redux'
import { UserLoginAction } from '../Redux/Action/CommonAction';
import { ToastContainer, toast } from "react-toastify";
import { CButton, CCard, CCardBody, CCardGroup, CCol, CContainer, CForm, CFormInput, CInputGroup, CInputGroupText, CRow, } from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'
import 'react-toastify/dist/ReactToastify.css';

export default function Login() {

    const { register, handleSubmit, formState: { errors } } = useForm()

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const userLogin = useSelector((state) => state.userLogin)

    const { userInfo, error } = userLogin

    useEffect(() => {
        if (error) {
            toast.error(error, { theme: 'dark', position: 'bottom-right', draggable: true, pauseOnHover: true })
        }
        if (userInfo) {
            if (userInfo.userType === 'user') {
                navigate('/admin')
            }
        }

    }, [error, navigate, userInfo])

    const OnSubmit = async (data) => {
        dispatch(UserLoginAction(data))
    }

    return (
        <>
            <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
                <CContainer>
                    <CRow className="justify-content-center">
                        <CCol md={8}>
                            <CCardGroup>
                                <CCard className="p-4">
                                    <CCardBody>
                                        <CForm onSubmit={handleSubmit(OnSubmit)} autoComplete="off">
                                            <h1>Login</h1>
                                            <p className="text-medium-emphasis">Sign In to your account</p>
                                            <CInputGroup className="mb-3">
                                                <CInputGroupText>
                                                    <CIcon icon={cilUser} width={20} height={20} />
                                                </CInputGroupText>
                                                <CFormInput placeholder="Username" autoComplete="username" name='username' {...register("username", { required: "User Name is Require can not blank It" })} />
                                                <ErrorMessage errors={errors} name="username" className='position-relative text-danger' as="p" />
                                            </CInputGroup>
                                            <CInputGroup className="mb-4">
                                                <CInputGroupText>
                                                    <CIcon icon={cilLockLocked} width={20} height={20} />
                                                </CInputGroupText>
                                                <CFormInput type="password" placeholder="Password" autoComplete="current-password" name='password' {...register("password", { required: "Password is Require can not blank It" })} />
                                                <ErrorMessage errors={errors} name="password" className='position-relative text-danger' as="p" />
                                            </CInputGroup>
                                            <CRow>
                                                <CCol xs={6}>
                                                    <CButton color="primary" className="px-4" type='submit'>
                                                        Login
                                                    </CButton>
                                                </CCol>
                                                <CCol xs={6} className="text-right">
                                                    <CButton color="link" className="px-0">
                                                        Forgot password?
                                                    </CButton>
                                                </CCol>
                                            </CRow>
                                        </CForm>
                                    </CCardBody>
                                </CCard>
                                <CCard className="text-white bg-primary py-5" style={{ width: '44%' }}>
                                    <CCardBody className="text-center">
                                        <div>
                                            <h2>Sign up</h2>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                                tempor incididunt ut labore et dolore magna aliqua.
                                            </p>
                                            <Link to="/register">
                                                <CButton color="primary" className="mt-3" active tabIndex={-1}>
                                                    Register Now!
                                                </CButton>
                                            </Link>
                                        </div>
                                    </CCardBody>
                                </CCard>
                            </CCardGroup>
                        </CCol>
                    </CRow>
                </CContainer>
            </div>
            <ToastContainer />
        </>
    )
}
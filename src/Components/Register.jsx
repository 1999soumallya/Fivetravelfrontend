import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form'
import { ErrorMessage } from "@hookform/error-message";
import { ToastContainer, toast } from "react-toastify";
import PhoneInputWithCountry from "react-phone-number-input/react-hook-form"
import { useDispatch, useSelector } from 'react-redux'
import Calendar from 'react-input-calendar'
import validator from 'validator';
import { CButton, CCard, CCardBody, CCardGroup, CCol, CContainer, CForm, CFormInput, CInputGroup, CInputGroupText, CRow, } from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cibMinutemailer, cilAnimal, cilCalendar, cilLockLocked, cilUser } from '@coreui/icons'
import { UserRegisterAction } from '../Redux/Action/CommonAction';
import 'react-phone-number-input/style.css'
import 'react-input-calendar/style/index.css'
import 'react-toastify/dist/ReactToastify.css';


export default function Register() {

    const { register, handleSubmit, formState: { errors }, control } = useForm()

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const userRegister = useSelector((state) => state.userRegister)

    const { userInfo, error } = userRegister

    useEffect(() => {
        if (error) {
            toast.error(error, { theme: 'dark', position: 'bottom-right', draggable: true, pauseOnHover: true })
        }
        if (userInfo) {
            navigate('/admin')
        }

    }, [error, navigate, userInfo])


    const validateEmail = (email) => {
        if (!validator.isEmail(email)) {
            return false
        }
    }


    const OnSubmit = async (data) => {
        if (data.password !== data.confirmPassword) {
            toast.error("Password & Confirm Password not matched", { theme: 'dark', position: 'bottom-right', draggable: true, pauseOnHover: true })
            return
        }
        if (validateEmail(data.email) === false) {
            toast.error("Enter a valid Email", { theme: 'dark', position: 'bottom-right', draggable: true, pauseOnHover: true })
            return
        }
        dispatch(UserRegisterAction(data))
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
                                                    <CIcon icon={cilAnimal} width={20} height={20} />
                                                </CInputGroupText>
                                                <CFormInput type="text" placeholder='Name' name='name' {...register("name", { required: "Name is Require can not blank It" })} />
                                                <ErrorMessage errors={errors} name="name" className='position-absolute' as="p" />
                                            </CInputGroup>
                                            <CInputGroup className="mb-3">
                                                <CInputGroupText>
                                                    <CIcon icon={cilCalendar} width={20} height={20} />
                                                </CInputGroupText>
                                                <Controller control={control} name="dob" rules={{ required: "Date Of Birth is Require can not blank It" }} render={({ field }) => (
                                                    <Calendar format='DD-MM-YYYY' date={new Date()} onChange={(date) => field.onChange(date)} />
                                                )} />
                                                <ErrorMessage errors={errors} name="dob" className='position-absolute' as="p" />
                                            </CInputGroup>
                                            <CInputGroup className="mb-3">
                                                <CInputGroupText>
                                                    <CIcon icon={cilUser} width={20} height={20} />
                                                </CInputGroupText>
                                                <CFormInput type="text" placeholder='UserName' name='userName' {...register("username", { required: "User Name is Require can not blank It" })} />
                                                <ErrorMessage errors={errors} name="userName" className='position-absolute' as="p" />
                                            </CInputGroup>
                                            <CInputGroup className="mb-3">
                                                <CInputGroupText>
                                                    <CIcon icon={cibMinutemailer} width={20} height={20} />
                                                </CInputGroupText>
                                                <CFormInput type="email" placeholder='Email' name='email' {...register("email", { required: "Email is Require can not blank It" })} />
                                                <ErrorMessage errors={errors} name="email" className='position-absolute' as="p" />
                                            </CInputGroup>
                                            <CInputGroup className="mb-3">
                                                <PhoneInputWithCountry name="phoneNo" defaultCountry='IN' control={control} rules={{ required: "Name is Require can not blank It" }} />
                                                <ErrorMessage errors={errors} name="phoneNo" className='position-absolute' as="p" />
                                            </CInputGroup>
                                            <CInputGroup className="mb-4">
                                                <CInputGroupText>
                                                    <CIcon icon={cilLockLocked} width={20} height={20} />
                                                </CInputGroupText>
                                                <CFormInput type="password" placeholder="Password" autoComplete="current-password" name='password' {...register("password", { required: "Password is Require can not blank It" })} />
                                                <ErrorMessage errors={errors} name="password" className='position-relative text-danger' as="p" />
                                            </CInputGroup>
                                            <CInputGroup className="mb-4">
                                                <CInputGroupText>
                                                    <CIcon icon={cilLockLocked} width={20} height={20} />
                                                </CInputGroupText>
                                                <CFormInput type="password" placeholder='Confirm Password' name='confirmPassword' {...register("confirmPassword", { required: "Confirm Password is Require can not blank It" })} />
                                                <ErrorMessage errors={errors} name="confirmPassword" className='position-absolute' as="p" />
                                            </CInputGroup>
                                            <CRow>
                                                <CCol xs={6}>
                                                    <CButton color="primary" className="px-4" type='submit'>
                                                        Register
                                                    </CButton>
                                                </CCol>
                                            </CRow>
                                        </CForm>
                                    </CCardBody>
                                </CCard>
                                <CCard className="text-white bg-primary py-5" style={{ width: '44%' }}>
                                    <CCardBody className="text-center">
                                        <div>
                                            <h2>Sign In</h2>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                                tempor incididunt ut labore et dolore magna aliqua.
                                            </p>
                                            <Link to="/login">
                                                <CButton color="primary" className="mt-3" active tabIndex={-1}>
                                                    Login
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
            {/* <FormContainer className='RegisterForm'>
                <form onSubmit={handleSubmit(OnSubmit)} autoComplete="off">
                    <Row>
                        <div className="brand">
                            <Image src={Logo} alt='Logo' />
                            <h1>5travellerss</h1>
                        </div>
                    </Row>
                    <Row>
                        <Col md={12} className="mb-3 mt-3">
                            <input type="text" placeholder='Name' name='name' {...register("name", { required: "Name is Require can not blank It" })} />
                            <ErrorMessage errors={errors} name="name" className='position-absolute' as="p" />
                        </Col>
                        <Col md={12} className="mb-3 mt-3">
                            <Controller control={control} name="dob" rules={{ required: "Date Of Birth is Require can not blank It" }} render={({ field }) => (
                                <Calendar format='DD-MM-YYYY' date={new Date()} onChange={(date) => field.onChange(date)} />
                            )} />
                            <ErrorMessage errors={errors} name="dob" className='position-absolute' as="p" />
                        </Col>
                        <Col md={12} className="mb-3 mt-3">
                            <input type="text" placeholder='UserName' name='userName' {...register("username", { required: "User Name is Require can not blank It" })} />
                            <ErrorMessage errors={errors} name="userName" className='position-absolute' as="p" />
                        </Col>
                        <Col md={12} className="mb-3 mt-3">
                            <input type="email" placeholder='Email' name='email' {...register("email", { required: "Email is Require can not blank It" })} />
                            <ErrorMessage errors={errors} name="email" className='position-absolute' as="p" />
                        </Col>
                        <Col md={12} className="mb-3 mt-3">
                            <PhoneInputWithCountry name="phoneNo" defaultCountry='IN' control={control} rules={{ required: "Name is Require can not blank It" }} />
                            <ErrorMessage errors={errors} name="phoneNo" className='position-absolute' as="p" />
                        </Col>
                        <Col md={6} className="mb-3 mt-3">
                            <input type="password" placeholder='Password' name='password' {...register("password", { required: "Password is Require can not blank It" })} />
                            <ErrorMessage errors={errors} name="password" className='position-absolute' as="p" />
                        </Col>
                        <Col md={6} className="mb-3 mt-3">
                            <input type="password" placeholder='Confirm Password' name='confirmPassword' {...register("confirmPassword", { required: "Confirm Password is Require can not blank It" })} />
                            <ErrorMessage errors={errors} name="confirmPassword" className='position-absolute' as="p" />
                        </Col>
                    </Row>
                    <Row>
                        <Col md={12} className="mb-3 mt-3 d-flex justify-content-between align-items-center">
                            <Button type='submit' className='mb-0'> Create User </Button>
                            <span className='message'>already have an account ? <Link to={"/login"}> Login </Link></span>
                        </Col>
                    </Row>
                </form>
            </FormContainer> */}
            <ToastContainer />
        </>
    )
}
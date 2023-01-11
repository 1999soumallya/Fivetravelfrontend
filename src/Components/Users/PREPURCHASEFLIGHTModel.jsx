import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import PhoneInputWithCountry from "react-phone-number-input/react-hook-form"
import { useDispatch, useSelector } from 'react-redux'
import validator from 'validator'
import { PreflightbookingAction } from '../../Redux/Action/UserAction'
import { MagnifineLoader } from '../../Shared/Loaders/Loader'
import ErrorAlert from '../../Shared/Alerts/CustomAlert'

export default function PREPURCHASEFLIGHTModel({ FlightDate }) {
    // , formState: { errors }
    const { handleSubmit, reset, register, clearErrors, control, setValue } = useForm()

    const PreFlightBooking = useSelector((state) => state.PreFlightBooking)

    const { loading, preflightbooking, preflightbookingerror } = PreFlightBooking

    const dispatch = useDispatch()

    const onFormSubmit = (deta) => {
        if (validateEmail(deta.emailid) === false) {
            return
        }
        dispatch(PreflightbookingAction(deta))
    }

    useEffect(() => {
        if (FlightDate) {
            setValue('flightDate', FlightDate.split("T")[0])
            setValue('flightdetails', FlightDate.split("Z")[1])
        }
    }, [FlightDate, setValue])


    const clearAll = () => {
        reset()
        clearErrors()
    }

    const validateEmail = (email) => {
        if (!validator.isEmail(email)) {
            return false
        } else {
            return true
        }
    }


    return (
        <>
            <div className="modal fade" id="PrePurchaseFlightModel" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">{FlightDate.split("Z")[1]}</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => clearAll()}></button>
                        </div>
                        <div className="modal-body" style={{ "minHeight": "279px"}}>
                            {
                                loading ? <MagnifineLoader /> : preflightbookingerror ? <ErrorAlert variant={"denger"} children={preflightbookingerror} /> : preflightbooking ?
                                    <ErrorAlert variant={"success"} children={preflightbooking} /> : (
                                        <form onSubmit={handleSubmit(onFormSubmit)}>
                                            <div className="row">
                                                <input type="text" {...register("flightdetails", { required: true })} hidden />
                                                <div className="col-6">
                                                    <div className="form-group">
                                                        <label htmlFor="">Name</label>
                                                        <input type="text" name="" placeholder="Name" className="form-control" {...register('name', { required: true })} />
                                                    </div>
                                                </div>
                                                <div className="col-6">
                                                    <div className="form-group">
                                                        <label htmlFor="">Email ID</label>
                                                        <input type="email" name="" placeholder="Email ID" className="form-control" {...register('emailid', { required: true })} />
                                                    </div>
                                                </div>

                                                <div className="col-6">
                                                    <div className="form-group">
                                                        <label htmlFor="">Contact Number</label>
                                                        <PhoneInputWithCountry name="phoneNo" defaultCountry='IN' control={control} rules={{ required: "Name is Require can not blank It" }} />
                                                    </div>
                                                </div>
                                                <div className="col-6">
                                                    <div className="form-group">
                                                        <label htmlFor="">Destination Date & Flight</label>
                                                        <input type="date" name="" id="" min={new Date().getFullYear() + '-' + String(new Date().getMonth() + 1).padStart(2, '0') + '-' + String(new Date().getDate()).padStart(2, '0')} className="form-control" {...register('flightDate', { required: true })} />
                                                    </div>
                                                </div>
                                                <div className="col-4">
                                                    <div className="form-group">
                                                        <label htmlFor="">Adults</label>
                                                        <select className="form-control" {...register("Adult", { required: true })}>
                                                            <option defaultValue="1">1</option>
                                                            <option value="1">2</option>
                                                            <option value="1">3</option>
                                                            <option value="1">4</option>
                                                            <option value="1">5</option>
                                                            <option value="1">6</option>
                                                            <option value="1">7</option>
                                                            <option value="1">8</option>
                                                            <option value="1">9</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-4">
                                                    <div className="form-group">
                                                        <label htmlFor="">Child</label>
                                                        <select className="form-control" {...register("Child", { required: true })}>
                                                            <option defaultValue="1">1</option>
                                                            <option value="1">2</option>
                                                            <option value="1">3</option>
                                                            <option value="1">4</option>
                                                            <option value="1">5</option>
                                                            <option value="1">6</option>
                                                            <option value="1">7</option>
                                                            <option value="1">8</option>
                                                            <option value="1">9</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-4">
                                                    <div className="form-group">
                                                        <label htmlFor="">Infant</label>
                                                        <select className="form-control" {...register("Infant", { required: true })}>
                                                            <option defaultValue="1">1</option>
                                                            <option value="1">2</option>
                                                            <option value="1">3</option>
                                                            <option value="1">4</option>
                                                            <option value="1">5</option>
                                                            <option value="1">6</option>
                                                            <option value="1">7</option>
                                                            <option value="1">8</option>
                                                            <option value="1">9</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="form-group d-flex gap-2">
                                                        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                                                        <label htmlFor="vehicle1"> I Accept Privacy Policy & Terms </label>
                                                    </div>
                                                </div>
                                            </div>
                                            <button type='submit' hidden id='submitbutton'>Submit</button>
                                        </form>
                                    )
                            }
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" >Close</button>
                            <button type="button" className="btn btn-primary" onClick={() => document.getElementById('submitbutton').click()}>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

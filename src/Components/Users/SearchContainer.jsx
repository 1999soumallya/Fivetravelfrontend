import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from 'react-hook-form'
import { Container, Form } from 'react-bootstrap'
import '../../Css/Search.css'
import { GetAllAirportDetailsAction, GetFlightDetailsAction } from '../../Redux/Action/UserAction'

export default function SearchContainer() {

    const [Origin, setOrigin] = useState("New Delhi")
    const [Destination, setDestination] = useState("Bangalore")

    const AllAirport = useSelector((state) => state.AllAirport)
    const { Allairport } = AllAirport

    const { register, handleSubmit, setValue } = useForm()

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(GetAllAirportDetailsAction())
        setValue('Depture_Date', new Date().toISOString().slice(0, 10))
    }, [dispatch, setValue])

    const FilterData = (data) => {
        setOrigin(data.Origin)
        setDestination(data.Destination)
        dispatch(GetFlightDetailsAction(data))
    }


    return (
        <Container>
            <Form onSubmit={handleSubmit(FilterData)}>
                <div className="select_box">
                    <div className="slect_items">
                        <div className="select_from">
                            <label htmlFor="">Origin</label>
                            <select name="cars" id="cars" className="form-control" {...register('Origin', { required: true })}>
                                <option value={'DELHI'} selected>New Delhi</option>
                                {
                                    Allairport?.map((Allairport) => (
                                        <option key={Allairport.City_Name} value={Allairport.City_Name}>{Allairport.City_Name}</option>
                                    ))
                                }
                            </select>
                        </div>
                    </div>
                    <div className="slect_items">
                        <div className="select_from">
                            <label htmlFor="">Destination</label>
                            <select name="cars" id="cars" className="form-control" {...register('Destination', { required: true })}>
                                <option value={'GOA'} selected>GOA</option>
                                {
                                    Allairport?.map((Allairport) => (
                                        <option key={Allairport.City_Name} value={Allairport.City_Name}>{Allairport.City_Name}</option>
                                    ))
                                }
                            </select>
                        </div>
                    </div>
                    <div className="slect_items">
                        <div className="select_from">
                            <label htmlFor="">Depture Date</label>
                            <input type="date" name="" id="" min={new Date().getFullYear() + '-' + String(new Date().getMonth() + 1).padStart(2, '0') + '-' + String(new Date().getDate()).padStart(2, '0')} className="form-control" {...register('Depture_Date', { required: true })} />
                        </div>
                    </div>
                    <div className="slect_items">
                        <div className="select_from">
                            <label htmlFor="">Adults</label>
                            <select name="" id="cars" className="form-control" {...register('Adults', { required: true })}>
                                <option value="1">1</option>
                                <option defaultValue="2" selected>2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                            </select>
                        </div>
                    </div>
                    <div className="slect_items">
                        <div className="select_from">
                            <label htmlFor="">Children</label>
                            <select name="" id="cars" className="form-control" value={""} {...register('Children', { required: true })}>
                                <option defaultValue="0" selected>0</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                            </select>
                        </div>
                    </div>
                    <div className="slect_items">
                        <div className="select_from">
                            <label htmlFor="">Infant</label>
                            <select name="cars" id="cars" className="form-control" {...register('Infant', { required: true })}>
                                <option defaultValue="volvo" selected>Volvo</option>
                                <option value="saab">Saab</option>
                                <option value="mercedes">Mercedes</option>
                                <option value="audi">Audi</option>
                            </select>
                        </div>
                    </div>
                    <div className="slect_items">
                        <button className="search_btn" type='submit'>search</button>
                    </div>
                </div>
            </Form>
            {/* <!-- Destination Area --> */}
            <div className="destination_area">
                <div className="middale_content">
                    <h2> Flights from {Origin} to {Destination} </h2>
                </div>
            </div>
            {/* <!-- Destination Area --> */}
        </Container>
    )
}

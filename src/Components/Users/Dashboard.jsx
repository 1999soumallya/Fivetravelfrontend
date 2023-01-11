import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import '../../Css/Dashboard.css'
import { useDispatch, useSelector } from 'react-redux'
import { MagnifineLoader } from '../../Shared/Loaders/Loader'
import ErrorAlert from '../../Shared/Alerts/CustomAlert'
import { GetWeeklyFlightDetailsAction } from '../../Redux/Action/UserAction'
import PREPURCHASEFLIGHTModel from './PREPURCHASEFLIGHTModel'

export default function Dashboard() {

    const [FlightDate, setFlightDate] = useState("")

    const GetFlightDetails = useSelector((state) => state.GetFlightDetails)
    const GetWeekFlight = useSelector((state) => state.GetWeekFlight)

    const { loading, Flightdetails, Flightdetailserror } = GetFlightDetails
    const { WeekFlightdetailsloading, WeekFlightdetails, WeekFlightdetailserror } = GetWeekFlight

    const dispatch = useDispatch()

    useEffect(() => {
        if (JSON.stringify(Flightdetails) === '[]') {
            dispatch(GetWeeklyFlightDetailsAction())
        }
    }, [Flightdetails, dispatch])


    return (
        <>
            <Container>
                {/* <!-- Destination Time table --> */}
                <div className="table_grid">
                    {
                        (JSON.stringify(Flightdetails) === '[]') ? WeekFlightdetailsloading ? <MagnifineLoader /> : WeekFlightdetailserror ? <ErrorAlert variant={"danger"} children={WeekFlightdetailserror} /> :
                            (
                                WeekFlightdetails.map((WeekFlightdetails) => (
                                    <div className="destime_table" key={WeekFlightdetails._id}>
                                        <div className="des_content">
                                            <img src={`https://imgak.mmtcdn.com/flights/assets/media/dt/common/icons/${WeekFlightdetails.LOGO}.png`} height={44} alt={WeekFlightdetails.LOGO} />
                                            <h4>{WeekFlightdetails.AIRLINE_LOGO}</h4>
                                        </div>
                                        <div className="des_title">
                                            <h3>{WeekFlightdetails.FORM}</h3>
                                            <h2>17:45</h2>
                                        </div>
                                        <div className="des_time">
                                            <h4>{WeekFlightdetails.FLIGHT_DERATION_AND_LAYOVER.split(':')[0]} hrs {WeekFlightdetails.FLIGHT_DERATION_AND_LAYOVER.split(':')[1].toLowerCase()}</h4>
                                            <span>Direct</span>
                                        </div>
                                        <div className="des_title">
                                            <h3>{WeekFlightdetails.SECTOR}</h3>
                                            <h2>17:45</h2>
                                        </div>
                                        <div className="des_price">
                                            <span> non refoundable</span>
                                            <h3><i className="fa-solid fa-indian-rupee-sign"></i>{WeekFlightdetails.PRICE}</h3>
                                        </div>
                                        <div className="des_bookbtn">
                                            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#PrePurchaseFlightModel" value={WeekFlightdetails.DEPARTURE_DATE + " " + WeekFlightdetails.AIRLINE_LOGO + " " + WeekFlightdetails.FORM + " To " + WeekFlightdetails.SECTOR} onClick={(e) => setFlightDate(e.target.value)}>
                                                ENQUIRE NOW
                                            </button>
                                            <p>Seats left : {WeekFlightdetails.SEATS_AVAILABLE}</p>
                                        </div>
                                    </div>
                                ))
                            )
                            :
                            loading ? <MagnifineLoader /> : Flightdetailserror ? <ErrorAlert variant={"danger"} children={Flightdetailserror} /> :
                                (
                                    Flightdetails.map((Flightdetails) => (
                                        <div className="destime_table" key={Flightdetails._id}>
                                            <div className="des_content">
                                                <img src={`https://imgak.mmtcdn.com/flights/assets/media/dt/common/icons/${Flightdetails.LOGO}.png`} height={44} alt={Flightdetails.LOGO} />
                                                <h4>{Flightdetails.AIRLINE_LOGO}</h4>
                                            </div>
                                            <div className="des_title">
                                                <h3>{Flightdetails.FORM}</h3>
                                                <h2>17:45</h2>
                                            </div>
                                            <div className="des_time">
                                                <h4>{Flightdetails.FLIGHT_DERATION_AND_LAYOVER.split(':')[0]} hrs {Flightdetails.FLIGHT_DERATION_AND_LAYOVER.split(':')[1].toLowerCase()}</h4>
                                                <span>Direct</span>
                                            </div>
                                            <div className="des_title">
                                                <h3>{Flightdetails.SECTOR}</h3>
                                                <h2>17:45</h2>
                                            </div>
                                            <div className="des_price">
                                                <span> non refoundable</span>
                                                <h3><i className="fa-solid fa-indian-rupee-sign"></i>{Flightdetails.PRICE}</h3>
                                            </div>
                                            <div className="des_bookbtn">
                                                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#PrePurchaseFlightModel" value={Flightdetails.DEPARTURE_DATE + " " + Flightdetails.AIRLINE_LOGO + " " + Flightdetails.FORM + " To " + Flightdetails.SECTOR} onClick={(e) => setFlightDate(e.target.value)}>
                                                    ENQUIRE NOW
                                                </button>
                                                <p>Seats left : {Flightdetails.SEATS_AVAILABLE}</p>
                                            </div>
                                        </div>
                                    ))
                                )
                    }
                </div>
                {/* <!-- Destination Time table --> */}
            </Container>
            <PREPURCHASEFLIGHTModel FlightDate={FlightDate} />
        </>
    )
}

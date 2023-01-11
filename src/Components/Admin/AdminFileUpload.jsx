import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import AdminFileUploadModal from './AdminFileUploadModal'
import { GetAllFlightDetailsAction } from '../../Redux/Action/AdminAction'
import { DnaLoader } from '../../Shared/Loaders/Loader'
import ErrorAlert from '../../Shared/Alerts/CustomAlert'
import DataTable from 'react-data-table-component'

export default function AdminFileUpload() {
    const userLogin = useSelector((state) => state.userLogin)
    const GetAllFlightDetails = useSelector((state) => state.GetAllFlightDetails)

    const { userInfo } = userLogin
    const { loading, allFlight, error } = GetAllFlightDetails

    const navigate = useNavigate()
    const dispatch = useDispatch()

    useEffect(() => {
        if (!userInfo) {
            navigate('/login')
        }
        dispatch(GetAllFlightDetailsAction())
    }, [dispatch, navigate, userInfo])


    const columns = [
        {
            id: 'AIRLINE_LOGO',
            selector: row => row.AIRLINE_LOGO,
            name: 'AIRLINE LOGO',
            sortable: true,
            grow: 2,
        },
        {
            id: 'FORM',
            selector: row => row.FORM,
            name: 'FORM',
            sortable: true,
            grow: 1,
        },
        {
            id: 'TO',
            selector: row => row.SECTOR,
            name: 'TO',
            sortable: true,
            grow: 1,
        },
        {
            id: 'DEPARTURE_DATE',
            selector: row => row.DEPARTURE_DATE,
            name: 'DEPARTURE DATE',
            sortable: true,
        },
        {
            id: 'DEPARTURE_TIME',
            selector: row => row.DEPARTURE_TIME,
            name: 'DEPARTURE TIME',
            sortable: true,
        },
        {
            id: 'FLIGHT_DERATION_AND_LAYOVER',
            selector: row => row.FLIGHT_DERATION_AND_LAYOVER,
            name: 'FLIGHT DERATION & LAYOVER',
            sortable: true,
            grow: 2,
        },
        {
            id: 'ARRIVAL_TIME',
            selector: row => row.ARRIVAL_TIME,
            name: 'ARRIVAL TIME',
            sortable: true,
        },
        {
            id: 'TOTAL_SEATS',
            selector: row => row.TOTAL_SEATS,
            name: 'TOTAL SEATS',
            sortable: true,
        },
        {
            id: 'SEATS_AVAILABLE',
            selector: row => row.SEATS_AVAILABLE,
            name: 'SEATS AVAILABLE',
            sortable: true,
        },
        {
            id: 'SEATS_SOLD',
            selector: row => row.SEATS_SOLD,
            name: 'SEATS SOLD',
            sortable: true,
        },
        {
            id: 'PRICE',
            selector: row => row.PRICE,
            name: 'PRICE',
            sortable: true,
        }
    ];

    return (
        <>
            <div className='d-flex justify-content-end'>
                <button type="button" className="btn btn-outline-primary block" data-bs-toggle="modal" data-bs-target="#fileuploadModal">
                    Upload File
                </button>
            </div>
            <div className='mt-3'>
                {
                    loading ? <DnaLoader /> : error ? <ErrorAlert variant={"danger"} children={error} /> : (JSON.stringify(allFlight) === '[]') ? <ErrorAlert variant={"success"} children={"No Air line Deta found"} /> : (
                        <DataTable keyField='id' title="Air Line Details" data={allFlight} columns={columns} pagination />
                    )
                }
            </div>
            <AdminFileUploadModal />
        </>
    )
}

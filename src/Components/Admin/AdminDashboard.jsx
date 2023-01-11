import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { AdminGetPreFlightBookingAction } from '../../Redux/Action/AdminAction'
import { DnaLoader } from '../../Shared/Loaders/Loader'
import ErrorAlert from '../../Shared/Alerts/CustomAlert'
import DataTable from 'react-data-table-component'
import { Tab, Tabs } from 'react-bootstrap'

export default function AdminDashboard() {
  const userLogin = useSelector((state) => state.userLogin)
  const AdminPreFlightBooking = useSelector((state) => state.AdminPreFlightBooking)

  const { userInfo } = userLogin
  const { loading, PreFlightBooking, PreFlightBookingError } = AdminPreFlightBooking

  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {
    if (!userInfo) {
      navigate('/login')
    }
    dispatch(AdminGetPreFlightBookingAction())
  }, [dispatch, navigate, userInfo])

  const Preflightbookingcolums = [
    {
      id: 'emailid',
      selector: row => row.emailid,
      name: 'Email Id',
      sortable: true,
      grow: 2,
    },
    {
      id: 'flightdetails',
      selector: row => row.flightdetails,
      name: 'Flight Details',
      sortable: true,
      grow: 2
    },
    {
      id: 'flightDate',
      selector: row => row.flightDate,
      name: 'Flight Date',
      sortable: true,
      grow: 2
    },
    {
      id: 'name',
      selector: row => row.name,
      name: 'Name',
      sortable: true,
      grow: 2
    },
    {
      id: 'phoneNo',
      selector: row => row.phoneNo,
      name: 'Phone No',
      sortable: true,
      grow: 2,
    },
    {
      id: 'Adult',
      selector: row => row.Adult,
      name: 'Adult',
      sortable: true,
    },
    {
      id: 'Child',
      selector: row => row.Child,
      name: 'Child',
      sortable: true,
    },
    {
      id: 'Infant',
      selector: row => row.Infant,
      name: 'Infant',
      sortable: true,
    },
  ]


  return (
    <>
      <div className='mt-3'>
        <Tabs defaultActiveKey="preflightbooking" id="noanim-tab-example" className="mb-3" fill>
          <Tab eventKey="preflightbooking" title="Pre Flight Booking">
            {
              loading ? <DnaLoader /> : PreFlightBookingError ? <ErrorAlert variant={"danger"} children={PreFlightBookingError} /> : (
                <DataTable keyField='id' title="Pre Flight Booking Details" data={PreFlightBooking} columns={Preflightbookingcolums} pagination />
              )
            }
          </Tab>
          <Tab eventKey="groupflightbooking" title="Group Flight Booking">
          </Tab>
        </Tabs>
      </div>
    </>
  )
}

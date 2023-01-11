import React, { useEffect } from 'react'
import AdminAirlinesDetailsUploadModal from './AdminAirlinesDetailsUploadModal'
import { useDispatch, useSelector } from 'react-redux'
import { AdminGetAllAirportDetailsAction } from '../../Redux/Action/AdminAction'
import { useNavigate } from 'react-router-dom'
import { DnaLoader } from '../../Shared/Loaders/Loader'
import ErrorAlert from '../../Shared/Alerts/CustomAlert'
import DataTable from 'react-data-table-component'

export default function AdminAirportList() {

  const userLogin = useSelector((state) => state.userLogin)
  const AdminAllAirportDetails = useSelector((state) => state.AdminAllAirportDetails)

  const { userInfo } = userLogin
  const { loading, Allairport, Allairporterror } = AdminAllAirportDetails

  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {
    if (!userInfo) {
      navigate('/login')
    }
    dispatch(AdminGetAllAirportDetailsAction())
  }, [dispatch, navigate, userInfo])

  const columns = [
    {
      id: 'City_Name',
      selector: row => row.City_Name,
      name: 'City Name',
      sortable: true,
      grow: 2,
    },
    {
      id: 'Airport_Code',
      selector: row => row.Airport_Code,
      name: 'Airport Code',
      sortable: true,
      grow: 1,
    },
    {
      id: 'Airport_Name',
      selector: row => row.Airport_Name,
      name: 'Airport Name',
      sortable: true,
      grow: 1,
    },
    {
      id: 'Country_Name',
      selector: row => row.Country_Name,
      name: 'Country Name',
      sortable: true,
    },
    {
      id: 'Country_Abbrev',
      selector: row => row.Country_Abbrev,
      name: 'Country Abbrev',
      sortable: true,
    },
    {
      id: 'World_Area_Code',
      selector: row => row.World_Area_Code,
      name: 'World Area Code',
      sortable: true,
      grow: 2,
    },
  ]


  return (
    <>
      <div className='d-flex justify-content-end'>
        <button type="button" className="btn btn-outline-primary block" data-bs-toggle="modal" data-bs-target="#AirlinesDetailsUpload">
          Upload File
        </button>
      </div>
      <div className='mt-3'>
        {
          loading ? <DnaLoader /> : Allairporterror ? <ErrorAlert variant={"danger"} children={Allairporterror} /> : (Allairport.length === 0) ? <ErrorAlert variant={"success"} children={"No Air line Deta found"} /> : (Allairport.length > 0) && (
            <DataTable keyField='id' title="Airport Details" data={Allairport} columns={columns} pagination />
          )
        }
      </div>
      <AdminAirlinesDetailsUploadModal />
    </>
  )
}

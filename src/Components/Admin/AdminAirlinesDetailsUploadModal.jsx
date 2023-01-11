import { faFileImport, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { AirlinsFileUploadAction } from '../../Redux/Action/AdminAction';

export default function AdminAirlinesDetailsUploadModal() {
    const [AirlineDetails, setAirlineDetails] = useState("")

    const disptch = useDispatch()

    const AirlinesDetailsUpload = (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append('fileupload', AirlineDetails)
        disptch(AirlinsFileUploadAction(formData))
    }
    return (
        <>
            <div className="modal fade text-left" id="AirlinesDetailsUpload" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel1" aria-hidden="true">
                <div className="modal-dialog modal-dialog-scrollable" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="myModalLabel1">Upload Excel File For Airport Details</h5>
                            <button type="button" className="close rounded-pill" data-bs-dismiss="modal" aria-label="Close">
                                <FontAwesomeIcon icon={faXmark} />
                            </button>
                        </div>
                        <div className="modal-body">
                            <form className="form form-horizontal" id='uploadform' onSubmit={AirlinesDetailsUpload}>
                                <div className="form-body">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <label>Upload File</label>
                                        </div>
                                        <div className="col-md-8">
                                            <div className="form-group has-icon-left">
                                                <div className="position-relative">
                                                    <input type="file" className="form-control" id="AirlineDetails" onChange={(e) => setAirlineDetails(e.target.files[0])} style={{ "border": "1px solid rgba(0, 0, 0, 0.34)" }} />
                                                    <div className="form-control-icon">
                                                        <FontAwesomeIcon icon={faFileImport} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 d-flex justify-content-end ">
                                            <button type="submit" id="submitBtn" className="btn btn-primary me-1 mb-1" hidden>Submit</button>
                                            <button type="reset" id="resetBtn" className="btn btn-light-secondary me-1 mb-1" hidden>Reset</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn" onClick={(e) => { e.preventDefault(); document.getElementById("resetBtn").click(); }}>
                                <i className="bx bx-x d-block d-sm-none"></i>
                                <span className="d-none d-sm-block">Reset</span>
                            </button>
                            <button type="button" className="btn btn-primary ml-1" onClick={(e) => { e.preventDefault(); document.getElementById("submitBtn").click(); }}>
                                <i className="bx bx-check d-block d-sm-none"></i>
                                <span className="d-none d-sm-block">Upload</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

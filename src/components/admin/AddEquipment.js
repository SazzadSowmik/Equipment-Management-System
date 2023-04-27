import React, {useState} from "react";
import TopBar from "./TopBar";
import SidebarAdmin from "./sidebarAdmin";
import Grid from "@mui/material/Grid";
import { Form, Button } from "react-bootstrap";
import UserData from "../../data/user.json";
import CabinetData from '../../data/cabinets.json';
import {useNavigate} from 'react-router-dom';
import 'react-bootstrap-icons'
import 'react-bootstrap'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

function AddEquipment() {
  const [users, setUsers] = useState(UserData);
  const addCabinetNav = useNavigate();
  const [assignedDate, setAssignedDate] = useState(null);
  const [purchasedDate, setPurchasedDate] = useState(null);

  
  return (
    <>
      <TopBar />
      <Grid container spacing={0}>
        <Grid item xs={2}>
          <SidebarAdmin />
        </Grid>
        <Grid item xs={10}>
          <div>
            <div className="col-md-3 mt-5" style={{display: 'flex', marginLeft: '2rem'}}>
                  <button type="button" className="form-control" style={{backgroundColor: 'orange', color: 'white'}}
                    onClick={()=>addCabinetNav("/equipments")}>
                      All Equipments
                  </button>
            </div>

            <h1 className="mt-5" style={{ color: "gray", textAlign: "center"}}>ADD Equipment</h1>
            <form className="m-5">
              <div className="row">
                <div className="col-md-12">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder="Equipment Name"
                    />
                  </div>
                </div>

                <div className="col-md-8">
                  <div className="form-group pl-0">
                    <input
                      type="text"
                      className="form-control"
                      id="category"
                      placeholder="Category Name"
                    />
                  </div>
                </div>
                
                <div className="col-md-4">
                  <div className="form-group">
                    <div className="pl-0">
                      <input
                        type="number"
                        className="form-control"
                        id="price"
                        placeholder="Price"
                      />
                    </div>
                  </div>  
                </div>

                <div className="col-md-8 form-group">
                  <select className="form-control" id="assigned_to">
                    <option value='0'> !-- Select Cabinet --! </option>
                    {Object(CabinetData)
                      .map(cab => 
                      <option key={cab.location+'-'+cab.row+'-'+cab.cabinet_no}  value={cab.location+'-'+cab.row+'-'+cab.cabinet_no}>
                        {cab.location+'-'+cab.row+'-'+cab.cabinet_no}
                      </option>)}
                  </select>
                </div>

                <div className="col-md-1" style={{color:'gray', left: '1.4rem'}}> or </div>

                <div className="col-md-3">
                  <button type="button" className="form-control" style={{backgroundColor: 'orange', color: 'white'}}
                    onClick={()=>addCabinetNav("/cabinets/addCabinets")}>
                      Add Cabinet
                  </button>
                </div>

                <div className="col-md-12 form-group">
                  <select className="form-control" id="assigned_to">
                    <option value='0'>Assigned To...</option>
                    {Object(UserData)
                      .map(user => 
                      <option key={user} value={user.name}>
                        {user.name}
                      </option>)}
                  </select>
                </div>

                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text" id="inputGroupFileAddon01">
                      Upload an Image
                    </span>
                  </div>
                  <div className="custom-file">
                    <input
                      type="file"
                      className="custom-file-input"
                      id="equipmentImage"
                    />
                    <label className="custom-file-label">
                      Choose file...
                    </label>
                  </div>
                </div>


                <div className="col-md-8 form-group mt-2"  style={{color: 'black'}} id="assigned_date">
                  <div className="input-group mb-3">
                      <p style={{color: 'gray', marginRight: '2em'}}>Assigned date</p>
                      <DatePicker dateFormat="dd/MM/yyyy" selected={assignedDate} onChange={date => setAssignedDate(date)}/>
                  </div>
                </div>
                
                <div className="col-md-4 form-group mt-2"  style={{color: 'black'}} id="purchased_date">
                  <div className="input-group mb-3">
                      <p style={{color: 'gray', marginRight: '2em'}}>Purchased date</p>
                      <DatePicker dateFormat="dd/MM/yyyy" selected={purchasedDate} onChange={date => setPurchasedDate(date)}/>
                  </div>
                </div>
                

                

                <div className="col-md-12">
                  <button type="submit" className="btn btn-primary">
                    ADD
                  </button>
                </div>
              </div>
            </form>
          </div>
        </Grid>
      </Grid>
    </>
  );
}

export default AddEquipment;

import React from 'react'
import SidebarAdmin from './sidebarAdmin'
import TopBar from './TopBar'
import Grid from "@mui/material/Grid";

function AddUser() {
  return (
    <div>
      <TopBar />
      <Grid container spacing={0}>
        <Grid item xs={2}>
          <SidebarAdmin />
        </Grid>
        <Grid item xs={10}>
        {/*starts here*/}
        <h1 className="mt-5" style={{ color: "gray", textAlign: "center"}}>ADD User</h1>


        <form className="m-5">
              <div className="row">

                <div className="col-md-6">
                  <div className="form-group pl-0">
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder="Name"
                    />
                  </div>
                </div>
                
                <div className="col-md-6">
                  <div className="form-group">
                    <div className="pl-0">
                      <input
                        type="text"
                        className="form-control"
                        id="email"
                        placeholder="Email"
                      />
                    </div>
                  </div>  
                </div>

                <div className='mt-1'>
                    <h6 style={{color: 'gray'}}>Select Role : </h6>
                </div>

                <div className="col-md-6">
                  <div className="form-group">
                    <div className="pl-0">
                    <select>
                        <option value="admin">Admin</option>
                        <option value="employee">Employee</option>
                        <option value="super_admin">Super Admin</option>
                    </select>
                    </div>
                  </div>  
                </div>


                <div className="col-md-12">
                  <button type="submit" className="btn btn-primary">
                    ADD
                  </button>
                </div>
              </div>
            </form>
        {/*ends here*/}
        </Grid>
      </Grid>
    </div>
  )
}

export default AddUser
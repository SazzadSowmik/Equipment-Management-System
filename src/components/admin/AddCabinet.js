import React from 'react'
import SidebarAdmin from './sidebarAdmin'
import TopBar from './TopBar'
import Grid from "@mui/material/Grid";



function AddCabinet() {
  return (
    <div>
      <TopBar />
      <Grid container spacing={0}>
        <Grid item xs={2}>
          <SidebarAdmin />
        </Grid>
        <Grid item xs={10}>
        {/*starts here*/}
        <h1 className="mt-5" style={{ color: "gray", textAlign: "center"}}>ADD Cabinet</h1>


        <form className="m-5">
              <div className="row">

                <div className="col-md-6">
                  <div className="form-group pl-0">
                    <input
                      type="text"
                      className="form-control"
                      id="location"
                      placeholder="Location"
                    />
                  </div>
                </div>
                
                <div className="col-md-6">
                  <div className="form-group">
                    <div className="pl-0">
                      <input
                        type="number"
                        className="form-control"
                        id="row"
                        placeholder="Row"
                      />
                    </div>
                  </div>  
                </div>

                <div className="col-md-6">
                  <div className="form-group">
                    <div className="pl-0">
                      <input
                        type="number"
                        className="form-control"
                        id="cabinet_no"
                        placeholder="Cabinet Number"
                      />
                    </div>
                  </div>  
                </div>

                <div className="col-md-6">
                  <div className="form-group">
                    <div className="pl-0">
                      <input
                        type="number"
                        className="form-control"
                        id="total_capacity"
                        placeholder="Total Capacity"
                      />
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

export default AddCabinet
import React from 'react'
import SidebarAdmin from "../components/admin/sidebarAdmin";
import TopBar from "../components/admin/TopBar";
import Grid from "@mui/material/Grid";

function Myequipments() {
  return (
    <div>
      <TopBar />
      <Grid container spacing={0}>
        <Grid item xs={2}>
          <SidebarAdmin />
        </Grid>
        <Grid item xs={10}>
          {/*starts here*/}
          <h1 className="mt-5" style={{ color: "gray", textAlign: "center"}}>Currently using items</h1>
          {/*ends here*/}
        </Grid>
      </Grid>
    </div>
  )
}

export default Myequipments
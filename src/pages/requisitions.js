import React from "react";
import "./dashboard.css";
import RequisitionData from "../data/requisitions.json";
import { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import SidebarAdmin from "../components/admin/sidebarAdmin";
import Topbar from "../components/admin/TopBar";
import "./requisition2.css";
import { Pagination } from "react-bootstrap";
import Grid from "@mui/material/Grid";
import ReactPaginate from "react-paginate";
import { useNavigate } from "react-router-dom";

const RequisitionDisplay = () => {
  // const DisplayData = RequisitionData.map((data) => {
  //   return (
  //     <tr>
  //       <td>{data.req_id}</td>
  //       <td>{data.name}</td>
  //       <td>{data.description}</td>
  //     </tr>
  //   );
  // });

  // console.log(DisplayData);

  const [currentPage, setCurrentPage] = useState(0);
  function handlePageClick({ selected: selectedPage }) {
    setCurrentPage(selectedPage);
  }

  const [data, setData] = useState(RequisitionData);
  const perPage = 5;
  const pageVisit = currentPage * perPage;
  const currentPageData = data
    .slice(pageVisit, pageVisit + perPage)
    .map((equipdata, i) => {
      return (
        <tr key={i}>
          <td>{equipdata.req_id}</td>
          <td>{equipdata.name}</td>
          <td>{equipdata.description}</td>
          <td>
            <button
              type="button"
              className="btn btn-danger"
              // onClick={() => deleteTableRows(i)}
            >
              <i class="bi bi-trash"></i>
            </button>
          </td>
        </tr>
      );
    });
  //console.log(currentPageData);
  const pageCount = Math.ceil(data.length / perPage);

  /* .....Redirect To LoginPage..... */
  const redirectBack = useNavigate();
  useEffect(()=>{
    
  
  const isLoggedIn = () => {
    let flag = false;

    flag = localStorage.length>0 ? true : false;
    //console.log(flag);
    return flag;
  }

  if (!isLoggedIn()){
    return(
      redirectBack('/login')
    )
  }
  },[]);
  

  /* .....**********************..... */

  return (
    <div>
      <Topbar />
      <Grid container spacing={0}>
        <Grid item xs={2}>
          <SidebarAdmin />
        </Grid>
        <Grid item xs={10}>
          <div className="table-responsive mt-5 ml-0">
            <Table className="table table-hover table-striped ">
              <thead>
                {/* <h4>{data}</h4> */}
                {/* <button
            type="button"
            className="btn delete"
            onClick={deleted}
          ></button> */}
              </thead>
              <tbody>
                {/* {DisplayData} */}
                <tr>
                  <th scope="col" style={{ width: "100px" }}>
                    req_id
                  </th>
                  {/* <th width="870">req_id</th> */}
                  <th scope="col">Name</th>
                  <th scope="col">Description</th>
                  <th scope="col">Action</th>
                </tr>
                {/* {RequisitionData.map((data, i) => (
                <tr key={i}>
                  <td>{data.req_id}</td>
                  <td>{data.name}</td>
                  <td>{data.description}</td>
                  <td>
                    <button
                      className="btn btn-outline-danger"
                      // onClick={() => deleteTableRows(i)}
                    >
                      <i class="bi bi-trash"></i>
                    </button>
                  </td>
                </tr>
              ))} */}

                {currentPageData}
                <ReactPaginate
                  previousLabel={"<<"}
                  nextLabel={">>"}
                  pageCount={pageCount}
                  onPageChange={handlePageClick}
                  containerClassName={"paginationBttns"}
                  previousLinkClassName={"previousBttn"}
                  nextLinkClassName={"nextBttn"}
                  disabledClassName={"paginationDisabled"}
                  activeClassName={"paginationActive"}
                />
              </tbody>
            </Table>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};
export default RequisitionDisplay;

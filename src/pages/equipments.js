import Grid from "@mui/material/Grid";
import React, { useState, useEffect } from "react";
import "react-bootstrap";
import ReactPaginate from "react-paginate";
import { useNavigate } from "react-router-dom";
import SidebarAdmin from "../components/admin/sidebarAdmin";
import TopBar from "../components/admin/TopBar";
import EquipmentData from "../data/equipments.json";
import "./equipments.css";
import Login from "../components/login";

const Equipments = ()=> {

  const [filter, setFilter] = useState("");
  const searchText = (event) => {
    setFilter(event.target.value);
  };
  //dataSearch is working...
  let dataSearch = EquipmentData.filter((item) => {
    return Object.keys(item).some((key) =>
      item[key]
        .toString()
        .toLowerCase(0)
        .includes(filter.toString().toLowerCase())
    );
  }, []);

  const addEquipmentNav = useNavigate();
  const updateEquipmentNav = useNavigate();

  const [pageNumber, setPageNumber] = useState(0);

  const equipmentPerPage = 5;
  const pageVisited = pageNumber * equipmentPerPage;

  const displayEquipments = dataSearch
    .slice(pageVisited, pageVisited + equipmentPerPage)
    .map((equipment) => {
      return (
        <tr>
          <td>{equipment.id}</td>
          <td>{equipment.name}</td>
          <td>{equipment.category}</td>
          <td>{equipment.price}</td>
          <td>{equipment.assigned_to}</td>
          <td>{equipment.assigned_date}</td>
          <td>
            <button
              type="button"
              className="btn btn-info mr-2"
              onClick={() => updateEquipmentNav("../equipments/addEqipments")}
            >
              <i class="bi bi-pencil-square"></i>
            </button>
            <button type="button" className="btn btn-danger">
              <i className="bi bi-trash"></i>
            </button>
          </td>
        </tr>
      );
    });

  const pageCount = Math.ceil(dataSearch.length / equipmentPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

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
      <TopBar />
      <Grid container spacing={0}>
        <Grid item xs={2}>
          <SidebarAdmin />
        </Grid>
        <Grid item xs={10}>
          <div className="col-md-4">
            <div className="mt-4">
              <input
                type="text"
                placeholder="Search"
                className="from-control"
                value={filter}
                onChange={searchText.bind(this)}
              />
            </div>
          </div>
          <div className="col-md-12">
            <button
              type="button"
              className="btn btn-primary"
              style={{
                display: "block",
                marginLeft: "auto",
                marginRight: "60px",
              }}
              onClick={() => addEquipmentNav("../equipments/addEqipments")}
            >
              Add Equipment
            </button>
          </div>

          <div className="mt-5 ml-0">
            <table className="table table-hover table-striped table-bordered">
              <thead>
                <tr>
                  <th scope="col" style={{ width: "100px" }}>
                    #
                  </th>
                  <th scope="col">Name</th>
                  <th scope="col">Category</th>
                  <th scope="col">Price</th>
                  <th scope="col">Assigned To</th>
                  <th scope="col">Assigned Date</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {displayEquipments}
                <ReactPaginate
                  card={"card"}
                  previousLabel={"<<"}
                  nextLabel={">>"}
                  pageCount={pageCount}
                  onPageChange={changePage}
                  containerClassName={"paginationBttns"}
                  previousLinkClassName={"previousBttn"}
                  nextLinkClassName={"nextBttn"}
                  disabledClassName={"paginationDisabled"}
                  activeClassName={"paginationActive"}
                />
              </tbody>
            </table>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default Equipments;

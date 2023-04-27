import React, { useState, useEffect } from "react";
import TopBar from "../components/admin/TopBar";
import SidebarAdmin from "../components/admin/sidebarAdmin";
import Grid from "@mui/material/Grid";
import ReactPaginate from "react-paginate";
import UserData from "../data/user.json";
import { useNavigate } from "react-router-dom";

function Profile() {
  const [filter, setFilter] = useState("");
  const searchText = (event) => {
    setFilter(event.target.value);
  };

  let dataSearch = UserData.filter((item) => {
    return Object.keys(item).some((key) =>
      item[key]
        .toString()
        .toLowerCase(0)
        .includes(filter.toString().toLowerCase())
    );
  }, []);

  const addUserNav = useNavigate();
  const updateUserNav = useNavigate();

  const [pageNumber, setPageNumber] = useState(0);

  const userPerPage = 5;
  const pageVisited = pageNumber * userPerPage;

  const displayUser = dataSearch
    .slice(pageVisited, pageVisited + userPerPage)
    .map((user) => {
      return (
        <tr>
          <td>{user.user_id}</td>
          <td>{user.name}</td>
          <td>{user.email}</td>
          <td>{user.role}</td>
          <td>
            <button
              type="button"
              className="btn btn-info mr-2"
              onClick={() => updateUserNav("/profile/addUser")}
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

  const pageCount = Math.ceil(dataSearch.length / userPerPage);
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
          {/*starts here*/}
          <h1 className="mt-5" style={{ color: "gray", textAlign: "center" }}>
            All users
          </h1>

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
              onClick={() => addUserNav("/profile/addUser")}
            >
              Add User
            </button>
          </div>
          <div className="mt-5 ml-0">
            <table className="table table-hover table-striped table-bordered">
              <thead>
                <tr>
                  <th scope="col" style={{ width: "100px" }}>
                    u_id
                  </th>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Role</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {displayUser}
                <ReactPaginate
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
          {/*ends here*/}
        </Grid>
      </Grid>
    </div>
  );
}

export default Profile;

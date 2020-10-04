import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Axios from "axios";

function UserTable(props) {
  const [user, setUser] = useState([]);

  const getUser = async () => {
    try {
      let response = await Axios.get("http://localhost:6600");
      setUser(response.data.response);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div>
      <div className="py-5">
        <div className="container">
          <div className="row">
            {user.map((data, index) => {
              return (
                <div className="col-md-4" key={index}>
                  <div className="card mb-4">
                    <div className="card-header">{data.name}</div>
                    <div className="card-body">{data.email}</div>
                    <div className="card-footer">
                      <NavLink
                        className="btn btn-primary"
                        to={`/admin/user/${data.id}`}
                      >
                        Edit
                      </NavLink>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
export default UserTable;

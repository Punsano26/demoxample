import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
const SubList = () => {
  const [stdData, setStdData] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    fetch("http://localhost:8000/subject")
      .then(
        // convert เป็น jason
        (res) => {
          return res.json();
        }
      )
      // เรียกใช้ State
      .then((response) => {
        setStdData(response);
      })
      // เปลี่ยนเป็น messsage
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  const loadEdit = (id) => {
    navigate("/subject/edit/" + id);
  };
  const loadDetail = (id) => {
    navigate("/subject/detail/" + id);
  };
  const removeSubject = (id) => {
    if (window.confirm("Do you want to remove?")) {
      fetch("http://localhost:8000/subject/" + id, {
        method: "DELETE",
      })
        .then((res) => {
          alert("remove successfully");
          window.location.reload();
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  return (
    <div className="container">
      <div className="card">
        <div className="card-title">
          <h2>subject List</h2>
        </div>
        <div className="card-body">
          <div className="divbtn">
            <Link to="/subject/create" className="btn btn-success">
              Add New (+)
            </Link>
          </div>
          <br />

          <table className="table table-bordered">
            <thead className="bg-dark text-white">
              <tr>
                <td>Id</td>
                <td>SubjectName</td>
                <td>Major</td>
                <td>Password</td>
                <td>Status</td>
                <td>Admission Year</td>
               
              </tr>
            </thead>
            <tbody>
              {stdData &&
                stdData.map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.subject}</td>
                    <td>{item.major}</td>
                    <td>{item.password}</td>
                    <td>{item.status}</td>
                    <td>{item.admissionYear}</td>
                    <td>
                      <a
                        className="btn btn-success"
                        onClick={() => {
                          loadEdit(item.id);
                        }}
                      >
                        Edit
                      </a>
                      <a
                        className="btn btn-danger"
                        onClick={() => {
                          removeSubject(item.id);
                        }}
                      >
                        Delete
                      </a>
                      <a
                        className="btn btn-primary"
                        onClick={() => {
                          loadDetail(item.id);
                        }}
                      >
                        Detail
                      </a>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SubList
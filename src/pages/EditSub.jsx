import { useEffect, useState } from "react";
import { useNavigate, Link, useParams } from "react-router-dom";
const EditSub = () => {
    const {id} = useParams();
  const [subject, setSubject] = useState({
    subject: "",
    major: "",
    password: "",
    status: "",
    photo: "https://source.unsplash.com/random/200x200/?portrait",
    financial: "",
    birthdaySub: "",
    admissionYear: "",
  });

  const navigate = useNavigate();
  useEffect(() => {
    fetch("http://localhost:8000/subject/" + id)
      .then((res) => res.json())
      .then((data) => {
        setStudent(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);
  const handleChange = (e) => {
    setSubject({ ...subject, [e.target.name]: e.target.value });
  };

  const handleSummit = (e) => {
    e.preventDefault();
    const subjectData = {
      subject: subject.subject,
      major: subject.major,
      password: subject.password,
      status: subject.status,
      photo: subject.photo,
      financial: subject.financial,
      birthdaySub: subject.birthdaySub,
      admissionYear: subject.admissionYear,
    };
    fetch("http://localhost:8000/subject", {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(subjectData),
    })
      .then((res) => {
        alert("save sucessfully");
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <div className="row">
        <div className="offset-lg-3 col-lg-6">
          <form className="container" onSubmit={handleSummit}>
            <div className="card">
              <div className="card-title">
                <h2>Add new Subject</h2>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label htmlFor="id">ID</label>
                      <input
                        type="text"
                        disabled
                        name="id"
                        value={id}
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label htmlFor="subject">Name subject</label>
                      <input
                        type="text"
                        required
                        name="subject"
                        id="subject"
                        value={subject.subject}
                        onChange={handleChange}
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label htmlFor="major">major</label>
                      <input
                        type="text"
                        required
                        name="major"
                        id="major"
                        value={subject.major}
                        onChange={handleChange}
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label htmlFor="password">Password</label>
                      <input
                        type="text"
                        required
                        name="password"
                        id="password"
                        value={subject.password}
                        onChange={handleChange}
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label htmlFor="status">Status</label>
                      <input
                        type="date"
                        required
                        name="status"
                        id="status"
                        value={subject.status}
                        onChange={handleChange}
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label htmlFor="photo">photo</label>
                      <input
                        type="text"
                        required
                        name="photo"
                        id="photo"
                        value={subject.photo}
                        onChange={handleChange}
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label htmlFor="financial">Financial</label>
                      <input
                        type="text"
                        required
                        name="financial"
                        id="financial"
                        value={subject.financial}
                        onChange={handleChange}
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label htmlFor="birthdaySub">birthdaySub</label>
                      <input
                        type="text"
                        required
                        name="birthdaySub"
                        id="birthdaySub"
                        value={subject.birthdaySub}
                        onChange={handleChange}
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label htmlFor="admissionYear">AdmissionYear</label>
                      <input
                        type="number"
                        placeholder="YYYY"
                        min="2000"
                        max="2024"
                        name="admissionYear"
                        id="admissionYear"
                        value={student.admissionYear}
                        onChange={handleChange}
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <button className="btn btn-success" type="submit">
                        Save
                      </button>
                      <Link to="/" className="btn btn-danger">
                        Back
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditSub;

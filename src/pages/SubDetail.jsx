import {useState, useEffect} from 'react'
import { Link, useParams } from 'react-router-dom'

const SubDetail = () => {
  const {id} = useParams();
  const [subData, setSubData] = useState({});
   useEffect(() => {
     fetch("http://localhost:8000/subject/" + id)
       .then((res) => res.json())
       .then((data) => {
         setSubData(data);
       })
       .catch((err) => {
         console.log(err);
       });
   }, [id]);
  return (
    <div className="row">
      <div className="offset-lg-3 col-lg-6">
        <div className="contianer">
          <div className="card row">
            <div className="card-title">
              <h2>Subject Detail</h2>
            </div>
            {subData && (
              <div className="card-body">
                <img src={subData.photo + "&" + subData.id} alt="Student" />
                <div className="card-text">
                  <h3>{subData.name} ({subData.id})</h3>
                  <h5>Contack Detail : </h5>
                  <h5>Subject : {subData.subject}</h5>
                  <h5>Major : {subData.major}</h5>
                  <h5>Password : {subData.password}</h5>
                  <h5>Status : {subData.status}</h5>
                  <h5>Financial : {subData.financial}</h5>
                  <h5>Birthday : {subData.birthdaySub}</h5>
                  <h5>Admission Year : {subData.admissionYear}</h5>
                </div>
                <div className="backTo">
                <Link className='btn btn-danger' to="/">
                  Back to  Listing
                </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SubDetail
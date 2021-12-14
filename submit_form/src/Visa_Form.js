import React, { useState, useEffect } from "react";
import "./Visa_Form.css";
import Axios from "axios";
import Dropdown from "./seminars";
import File_Upload from "./File_Upload";

const VisaForm = () => {
  //   const [name, setName] = useState("");
  //   const [email, setEmail] = useState("");
  //   const [telephone, setTelephone] = useState("");
  //   const [seminar, setSeminar] = useState("");
  //   const [attendance, setAttendance] = useState(0);

  const handleSubmit = (data) => {
    Axios.all([
      Axios.post("http://34.81.131.198:3306/submitForm", data),
      Axios.post("http://34.81.131.198:3306/picture", data.files, 
        {headers:{
          "Content-Type": "multipart/form-data"
        }
      })
    ]).then(Axios.spread((...responses) => {
      console.log(responses[0], responses[1], responses[2])
    })).catch(err => console.log(err))
  };
  //   const submitForm = () => {
  //       console.log(seminar);
  //       Axios.post('http://localhost:8000/submitform', {
  //           name: name,
  //           email: email,
  //           telephone: telephone,
  //           seminar: seminar,
  //           attendance: attendance
  //       }).then(() => {console.log('Success');
  //       }).catch(err => console.log(err))
  //   };
  const [contests, setContests] = useState([]);
  useEffect(() => {
    Axios.post("http://34.81.131.198:3306/fetchSeminarDates").then((response) => {
      setContests(response.data);
    });
  }, []);
  // const handleChange = (e) => {
  //     setSeminar(e.target.value);
  // };
  return (
    <div className="form">
      <form action="http://34.81.131.198:3306/submitform" method="post">
        <h2 className="form__title">講座報名表單</h2>
        <div className="form__body">
          <div className="name__div">
            <p>姓名</p>
            <input
              type="text"
              name="name"
              className="name text"
              placeholder="姓名"
            />
          </div>
          <div className="email__div">
            <p>Email</p>
            <input
              name="email"
              className="email text"
              type="email"
              placeholder="email"
            />
          </div>
          <div className="telephone__div">
            <p>電話</p>
            <input
              name="telephone"
              className="telephone text"
              type="tel"
              placeholder="聯絡電話"
            />
          </div>
          <div className="seminar__div">
            <p>場次</p>
            <select name="seminar" className="seminar">
              <Dropdown />
              {/* {contests.map((contest) => 
                            
                            { return (
                            <>
                                <option key={contest.id} value={contest.city + contest.date + contest.topic}>
                                {contest.date}
                                </option>
                            </>)}
                        )} */}
            </select>
          </div>
          <div className="attendance__div">
            <p>出席人數</p>
            <input
              name="attendance"
              className="attendance text"
              type="number"
              placeholder="人數"
            />
          </div>
          <div className="attachments">
            <p>附件</p>
            <input name="attachments" className="attachments" type="file" />
          </div>
          <div className="privacy__confirmation">
            <input className="checkbox" type="checkbox" />
            <p>
              我已詳細閱讀
              <a
                href="https://toyotomiholdings.com/privacy"
                target="_blank"
                rel="noreferrer noopener"
              >
                隱私權政策
              </a>
              及
              <a
                href="https://toyotomiholdings.com/privacy"
                target="_blank"
                rel="noreferrer noopenner"
              >
                服務條款
              </a>
            </p>
          </div>
          <button className="submit" type="submit" onClick={handleSubmit}>
            送出
          </button>

          <h1>hello</h1>
        </div>
      </form>
      <File_Upload />
    </div>
  );
};

export default VisaForm;

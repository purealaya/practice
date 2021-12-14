import React, {useState, useEffect} from 'react';
import Axios from 'axios';


const Dropdown = () => {
    const [contests, setContests] = useState([]);
    // const [seminar, setSeminar] = useState('');
    useEffect(() => {
        Axios.post(
            'http://34.81.131.198:3306/fetchSeminarDates').then((response) => {
                setContests(response.data);
            })}, []
    )
    // Axios.post(
    //     'http://localhost:8000/fetchSeminarDates').then((response) => {
    //         setContests(response.data);
    //     });
    return(
        <>
            <option value></option>
            {contests.map((item) => {
              const { id, date } = item;
              return <option value={date} key={id}>{date}</option>
            })}
       
        </>
    )
};

export default Dropdown
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Axios from 'axios';

function File_Upload() {
    const [uploadFile, setUploadFile] = useState([]); 
    
    const submitForm = (event) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append("picture", uploadFile[0]);
        Axios.post("http://localhost:8000/picture", formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        }).then((response) => {
            // console.log(response)
        }).catch((error) => console.log(error));
        
        // const formData = new FormData();
        // formData.append("picture", data.picture[0]);
        // await Axios.post('http://localhost:8000/picture', data, {
        //     headers: {
        //         "Content-Type": "multipart/form-data"
        //     }
        // }).then((response) => console.log(response)).catch((error) => console.log(error));
            
        // const res = await fetch('http://localhost:8000/picture', {
        //     method: "POST",
        //     body: data
        // }).then(res => res.json())
        // alert(JSON.stringify(res));
        }
    return (
         <form onSubmit={submitForm}>
            <input type="file" name="picture" onChange={e => setUploadFile(e.target.files)} />
            <button>Submit</button>
        </form>
    )
}

export default File_Upload

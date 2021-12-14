import React from 'react';
import Axios from 'axios';

function File_Upload_2() {
    const uploadFile = (data) => {
        
        Axios.post('http://localhost:8000/submitForm', req).then(response => console.log(response)).catch(err => console.log(err));
        Axios.post('http://localhost:8000/picture', req.files).then(response => console.log(response)).catch(err => console.log(err))
        
    }

    return (
        <>
        {/* <form action="/picture" method="post" enctype="multipart/file-data"> */}
            <input type="file" name="avatar"/>
            <button className="submit" onClick={uploadFile}>submit</button>
        {/* </form> */}
        </>
    )
}

export default File_Upload_2

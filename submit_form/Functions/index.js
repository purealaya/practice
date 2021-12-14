const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const app = express();
const fileUpload = require('express-fileupload');
const multer = require('multer');
const uuid = require('uuid').v4;


//Create connection 

const db = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'admin',
    password: 'Desmond1127!',
    database: 'test'
});


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads');
    },
    filename: (req, file, cb) => {
        const { originalname } = file;
        cb(null, `${uuid()}-${originalname}`);
    }
})
const upload = multer({ storage });

const PORT = process.env.PORT || 3306;
app.listen(PORT, (req, res) => {
    console.log('Server started at port 3306...');
});

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(express.static('public'));


//handel upload files
app.post('/picture', upload.single('attachments'), (req, res) => {
    res.send({
        status: 'OK',
        message: 'good',
        uploaded: req.files.length
    })
})
// app.post('/picture', async (req, res) => {
//     console.log(req.files);
//     try {
//         if(!req.files) {
//             res.send({
//                 status: false,
//                 message: "No files"
//             })
//         } else {
//             const { picture } = req.files

//             picture.mv('./uploads' + picture.name)

//             res.send({
//                 status: true,
//                 message: "File is uploaded"
//             })
//         }
//     } catch (e) {
//         res.status(500).send(e)
//     }
// })

//handle submitform request
app.post('/submitform', (req, res) => {
    console.log(req.body);
    const name = req.body.name;
    const email = req.body.email;
    const telephone = req.body.telephone;
    const seminar = req.body.seminar;
    const attendance = req.body.attendance;
    let sql = 'INSERT INTO form_seminar_tokyo_osaka (name, email, telephone, seminar, attendance) VALUES (?,?,?,?,?)';
    db.query(sql, [name, email, telephone, seminar, attendance], (err, result) => {
        if(err) {
            throw err;
        } console.log('Form submitted');
    })
});


//fetch seminar dates from database
app.post('/fetchSeminarDates', (req, res) => {
    let sql = 'SELECT * FROM seminars';
    db.query(sql, (err, result) => {
        if(err) {
            throw err;
        } 
        res.send(result);
    })
})
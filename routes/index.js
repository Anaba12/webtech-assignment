const router = require('express').Router();

const students = [
    {
        name: "Broni Kah",
        DOB: "19/12/2000",
        program: "BSC CS",
        level: "400",
        image:"/images/Broni.png"
    },
    {
        name: "Cersei Smith ",
        DOB: "14/03/2005",
        program: "BSC CS",
        level: "200",
        image:"/images/cersei.jpeg"
    },
    {
        name: "Deneries Anaba",
        DOB: "7/20/2002",
        program: "BSC IT",
        level: "300",
        image :"/images/Deneries.jpeg"
    },
    {
        name: "Bob Marley",
        DOB: "12/12/2001",
        program: "BSC MIS",
        level: "200",
        image:"/images/marley.png"
    },
    {
        name: "Young Thug",
        DOB: "12/11/1999",
        program: "BSC CS",
        level: "100",
        image:"/images/thug.png"
    }
]


router.get('/', (req, res)=>{
    res.render('home', {
        title:'Home',
        students
    })
});

router.get('/student/:id', (req, res)=>{
    const id = req.params.id;
    const student = students[id];
    res.render('student', {
        title: students[id].name,
        student
    })
});

module.exports = router;
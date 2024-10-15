import React, { useEffect, useState } from 'react'

const StudentTable = () => {
    const [student, setStudent] = useState([])

    const handleLoad = async () => {
        const response = await fetch("https://localhost:7046/api/Student/GetStudents")
        const data = await response.json()
        setStudent(data)
    }

    useEffect( () => {
        handleLoad();
    }, [])
  return (
    <div>
        <h1>This is Student Table</h1>
        <table style={{width: '100%', border: "1px solid black"}}>
            {student.map((student) => {
                return (
                    <div>
                        <tr style={{border: "1px solid black"}}>
                            <th style={{border: "1px solid black"}}>Id</th>
                            <th style={{border: "1px solid black"}}>First Name</th>
                            <th style={{border: "1px solid black"}}>Last Name</th>
                            <th style={{border: "1px solid black"}}>National Id</th>
                        </tr>

                        <tr style={{border: "1px solid black"}}>
                            <th style={{border: "1px solid black"}}>{student.studentId}</th>
                            <th style={{border: "1px solid black"}}>{student.firstName}</th>
                            <th style={{border: "1px solid black"}}>{student.lastName}</th>
                            <th style={{border: "1px solid black"}}>{student.nationalId}</th>
                        </tr>
                    </div>
                )
            })}
        </table>
    </div>
  )
}

export default StudentTable
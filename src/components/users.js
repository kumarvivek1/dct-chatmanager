import React, {useEffect,useState } from 'react'
import { Link } from 'react-router-dom'
import {useSelector} from "react-redux"
import Pagination from './pagination'
import StudentsChart from "./chart"

function Users() {
    const students = useSelector(state => state.students)
    const [input, setInput] = useState('')
    const [list, setList] = useState([])

    useEffect(() => {
        setList(students.filter((e,i)=>i<10))
    }, [])

    const handleChange = (e) => {
        const value=e.target.value
        setInput(value)
        const result = students.filter((ele) => {
            if (ele.studentName) {
               return ele.studentName.toLowerCase().includes(value.toLowerCase())
            } else {
               return false
            }
        })
        setList(result.filter((e,i)=>i<10))
    }

    const handlePage = (num) => {
        const result = students.filter((ele, i) => {
            return i>=(num*10-10) && i<num*10
        })
        setList(result)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

    }
    return (
        <div className="users">
            <div className="row">
                <div className="col mb-8">
                    <h2>List of Student appeared in class</h2>
                    <ul className="list-group users-list">
                    <li  className="list-group-item d-flex justify-content-between align-items-center">Name
                            <span className="badge badge-primary badge-pill">Replies</span>
                    </li>
                     {
                        list.map((student, i) => {
                            return <li key={i} className="list-group-item d-flex justify-content-between align-items-center"><Link to={`/users/${i}`}>{student.studentName}</Link>
                                <span className="badge badge-primary badge-pill">{student.chats.length}</span>
                            </li>
                        })
                    }
                    </ul> 
                </div>
                <div className="col mb-4 search">
                    <h2>Search Student</h2>
                    <form className="search" onSubmit={handleSubmit}>
                        <input type="text" className="searchinput" value={input} onChange={handleChange}/>
                    </form>
                    <div className="student-chart">
                        <StudentsChart data={students}/>
                    </div>
                </div>
            </div>
            <div className="pagination">
                <Pagination handlePage={handlePage} />
            </div>
        </div>
    )
}

export default Users

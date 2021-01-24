import React,{useState,useEffect} from 'react'
import { useSelector} from 'react-redux'
import Pagination from './pagination'


function UserChat(props) {
    const students = useSelector((state) => state.students)
    const {id} = props.match.params
    const [student, setstudent] = useState({})
    const [chats, setChats] = useState([])
    const [userid,setUserId]=useState(id)
    
    

    useEffect(() => {
        const result=students.filter((ele, i) => i === userid)
        setstudent(result)
        const chatresult = result[0].chats
        setChats(chatresult)
    }, [])
    useEffect(() => {
        console.log(id)
        const result=students.filter((ele, i) => i === userid)
        setstudent(result)
        const chatresult = result[0].chats
        setChats(chatresult)
    }, [userid])
    
    return (
        <div className="container">
            {
                (student) &&(
                    <div>
                        <h2>{`${student.studentName} Chat list`}</h2>
                        <table className='table'>
                            <thead className="header">
                                <tr>
                                    <th>messages</th>
                                    <th>Created At</th>
                                </tr>
                            </thead>
                            <tbody>
                              {
                                chats.map((chat, i) => {
                                    return <tr key={i}>
                                        <td>{chat.value}</td>
                                        <td>{chat.createdAt}</td>
                                    </tr>
                                })
                            }  
                            </tbody>
                        </table>
                    </div>
            )
            }
        </div>
    )
}
export default UserChat

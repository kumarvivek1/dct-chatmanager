import React, { useState } from 'react'
import { addStudents } from '../redux store/actions/add.action'
import {useDispatch} from "react-redux"

function Home(props) {
    const dispatch = useDispatch()
    const [rawdata, setRawData] = useState()
    const [isFilePiked,setIsFilePiked]=useState(false)

    const handleFile = (e) => {
       setIsFilePiked(true)
        let filereader = new FileReader()
        
        filereader.onload = (e) => {
            setRawData(e.target.result)
        }
         filereader.readAsText(e.target.files[0])
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()
        if (isFilePiked) {
             dispatch(addStudents(rawdata))
             props.history.push('/users')
        } else {
            alert("choose a filefirst")
        }
    
    }
    
    return (
        <div className="home">
            <form onSubmit={handleSubmit} className="form">
                <input type="file" onChange={handleFile} accept="text/plain"/>
                <input type="submit" className="btn btn-primary" value="upload"/>
            </form>
        </div>
    )
}

export default Home

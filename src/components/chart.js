import React from 'react'
import { Chart } from 'react-google-charts'

const StudentsChart = (props) => {
    const {data}=props

    const chartData = [
        ['Student Name', 'Chats Count']
    ]

    for(const key of data) {
        chartData.push([key.studentName,key.chats.length])
    }

    return (
        <div className="chart">
            <Chart 
                width={'700px'} 
                height={'400px'} 
                chartType="PieChart" 
                loader={<div>Loading Charts</div>} 
                data={chartData}
                options={{
                    title: 'Students chat Distribution'
                }}
             />
        </div>
    )
}

export default StudentsChart
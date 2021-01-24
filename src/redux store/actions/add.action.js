const calculatedData = (students) => {
    return {type:'ADD_STUDENTS', payload:students}
}

export const addStudents = (rawdata) => {
    return (dispatch) => {
        const result = []
        let flag = false
        //step - 1
        const array1 = rawdata.split('\n').map((str) => { return str.split("\t From ") })
        //step - 2
        const array2 = array1.map((ele,i) => {
            return ele.map((el, i) => {
               if (i === 0) {
                   return el
               } else {
                   const array = el.split(" : ")
                   return { studentName: array[0], chat: array[1] }
               }
            })
        })
        //step - 3
        
        const students = array2.map((ele) => {
            return {createdAt:ele[0],...ele[1]}
        })
    
        //step - 4
        for (let i = 0; i < students.length; i++){
        if (result.length > 0) {
            for (let j = 0; j < result.length; j++) {
                if (result[j].studentName === students[i].studentName) {
                    result[j].chats.push({value: students[i].chat,createdAt:students[i].createdAt })
                    break
                } else if(j === result.length-1) {
                   flag = true
                }
            }
        } else {
            result.push({studentName: students[i].studentName, chats: [{value:students[i].chat,createdAt:students[i].createdAt }] })
        }
        if (flag) {
            
            result.push({studentName: students[i].studentName, chats: [{value:students[i].chat,createdAt:students[i].createdAt }] })
            flag = false
        } else {
            continue
        }
        }
         dispatch(calculatedData(result))
    }  
}
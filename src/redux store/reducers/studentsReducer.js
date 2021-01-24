
const initialStudentValue = []

const studentsReducer = (state = initialStudentValue, action)=>{
    switch (action.type) {
        case 'ADD_STUDENTS': {
            return state=[...action.payload]
        }
        default: {
            return [...state]
        }
    }
}
export default studentsReducer
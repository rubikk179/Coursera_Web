import {useState, useEffect} from 'react'

const courses = [
    {
        id:1,
        name:"hung"
    },
    {
        id:2,
        name:"bui"
    },
    {
        id:3,
        name:"manh"
    }
]
function Content() {
    const [lessonId,setLessonId] = useState(1)

    return (
        <div>
            <ul>
                {
                    courses.map(course => (
                        <li
                            key = {course.id}
                            style = {{
                                color: lessonId === course.id ?
                                    'red' : "#333",
                                cursor: "pointer"
                            }}
                            onClick = {() => setLessonId(course.id)}
                        >
                        {course.name}
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}
export default Content
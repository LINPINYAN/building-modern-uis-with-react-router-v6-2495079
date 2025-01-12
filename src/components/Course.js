import { useParams,NavLink,Outlet } from "react-router-dom";
import {getCourse} from "../api";
export default function Course(){
    const {catId}=useParams();
    const course = getCourse(catId);
    return(
        <>
            <h1>{course.name} Diploma</h1>
            <ul className="session-list">
                {course?.sessions.map(session=>(
                    <li className="session" key={session.id}>
                        <NavLink 
                            className={({isActive})=>(isActive?"session-active":null)}
                            to={session.id}>
                            <p className="session-name">{session.id}|{session.name}</p>
                        </NavLink>
                    </li>
                ))}
            </ul>
            <Outlet/>
        </>
    )
}
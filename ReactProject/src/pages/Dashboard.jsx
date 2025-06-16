import { Link , Outlet} from "react-router-dom"
export default function Dashboard(){
    return <div>Dashboard
<ul>
    <li> <Link to="profile">Profile</Link></li>
    <li> <Link to="settings">Settings</Link> </li>
</ul>
    
       {/* outlet allows to render nested routing */}
    <Outlet/>

    </div>
    
}
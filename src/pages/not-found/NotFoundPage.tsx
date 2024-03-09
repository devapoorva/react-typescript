import { Link } from "react-router-dom";

const NotFoundPage = ()=>{
    return (
        <div className="about">
            <h1>404 Page Not Found</h1>
            <Link to="/">Home</Link>
        </div>
    );
}
export default NotFoundPage;
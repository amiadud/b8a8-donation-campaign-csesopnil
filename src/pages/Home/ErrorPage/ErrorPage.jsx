import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {

    const error = useRouteError()
    
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="space-y-10">
            <h2 className="md:text-8xl text-center font-semibold">Oops!!!</h2>
            <p className="md:text-4xl text-center "><span className="text-red-500"> { error.status} { error.statusText } </span></p>
            <p className="text-center bg-slate-500 py-2 rounded-full text-white"><Link to="/">Go Back to Home</Link></p>
            </div>
            
        </div>
    );
};

export default ErrorPage;
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Home(){
    const [token, setToken] = useState(null);
    useEffect(() =>{
        const storedToken = localStorage.getItem("authToken");
        if (storedToken){
            setToken(storedToken);
        }
    }); [];

    const handleLogout = () => {
        localStorage.removeItem("authToken");
    setToken(null);
    }

    return(
        <div className="min-h-screen bg-gray-100 p-8">
        <h1>Bienvenido</h1>
        {(token &&(
            <button onClick={handleLogout}
            className="px-4 py-2 text-white bg-orage-500 rounded hover:bg-orage-600">
                Cerrar Sesión
            </button>
        ))}
        <p className="text-2l font-bold">Esta es nuestro sitio web</p>
        </div>
    );
}

export default Home; 
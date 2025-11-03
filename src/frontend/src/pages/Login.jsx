function Login(){
    const GOOGLE_AUTH_URL = import.meta.env.VITE_GOOGLE_AUTH_URL;
    return(
        <div>
            <div>
                <h1>Iniciar Sesión</h1>
                <p>Usa tu cuenta de Google</p>
                <a href={GOOGLE_AUTH_URL}>Iniciar Sesión</a>
            </div>
        </div>
    );
}

export default Login;


function App() {
    const user = useSelector((state) => state.authReducer.authData);
    return(
        <div
            className = "App"
            style = {{
                height:
                    window.location.href === "http://localhost:3000/chat"
                    ? "calc(100vh - 2rem)"
                    : "auto"
            }}
        >
        <div className="blur" style={{ top: "-18%", right: "0" }}></div>
        <div className="blur" style={{ top: "36%", left: "-8rem" }}></div>

        <Routes>
            <Route
                path = "/chat"
                element = {user ? <Chat /> : <Navigate to="../auth" />}
            />
        </Routes>

        </div>
    )
}
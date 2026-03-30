import { Link } from "react-router-dom";
import { UserContext, ThemeContext } from "../context/UserContext";

import { useContext } from "react";
import { Button } from "antd";

export default function Navbar() {
    const userContext = useContext(UserContext);
    const themeContext = useContext(ThemeContext);

    if (!userContext || !themeContext) return null;

    const { user, setUser } = userContext;
    const { theme, toggleTheme } = themeContext;


    return (
        <nav className={
            theme === "dark"
                ? "bg-black text-white shadow"
                : "bg-blue-600 text-white shadow"
        }>
            <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
                <Link to="#" className="text-xl font-semibold">
                    <strong>WEB2091 App</strong>
                </Link>
                <div className="hidden md:flex items-center space-x-8">
                    <Link to="/lab1" className="hover:text-gray-200">
                        Lab1
                    </Link>
                    <Link to="/lab2" className="hover:text-gray-200">
                        Lab2
                    </Link>
                    <Link to="/lab3" className="hover:text-gray-200">
                        lab3
                    </Link>
                    <Link to="/lab4" className="hover:text-gray-200">
                        lab4
                    </Link>
                    <Link to="/lab42" className="hover:text-gray-200">
                        lab4,2
                    </Link>
                    <Link to="/lab5" className="hover:text-gray-200">
                        lab5
                    </Link>
                </div>




                <div className="flex items-center space-x-4">
                    {user && (
                        <img
                            src={user.avatar}
                            alt="avatar"
                            className="w-8 h-8 rounded-full"
                        />
                    )}
                    <span>User: {user?.name || "Guest"}</span>

                    {user ? (
                        <Button onClick={() => setUser(null)}>Logout</Button>
                    ) : (
                        <Button
                            onClick={() =>
                                setUser({ name: "hieunk9", avatar: "https://up.yimg.com/ib/th/id/OIP.uECZ4EpUQL--DuBWcMaAKgHaDy?pid=Api&rs=1&c=1&qlt=95&w=206&h=105" })
                            }
                        >
                            Login
                        </Button>
                    )}

                    <Button onClick={toggleTheme}>
                        {theme === "light" ? "Dark mode" : "Light mode"}
                    </Button>
                </div>
            </div>
        </nav>

    );
}
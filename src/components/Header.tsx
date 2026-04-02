import { Link } from "react-router-dom";
import { UserContext, ThemeContext } from "../context/UserContext";
import { useContext } from "react";
import { Button } from "antd";
import { useAuthStore } from "../stores/useAuthStores";

export default function Navbar() {
    const userContext = useContext(UserContext);
    const themeContext = useContext(ThemeContext);

    if (!userContext || !themeContext) return null;

    const { theme, toggleTheme } = themeContext;

    const { user, setUser , logout } = useAuthStore();

 
    const handleLogin = () => {
        setUser({
            username: "hieu",
            email: "hieu123@gmail.com",
        });
        console.log("Đăng nhập thành công");
    };

    const handleLogout = () => {
        logout();
  console.log("Đăng xuất");
    };

    return (
        <nav
            className={
                theme === "dark"
                    ? "bg-black text-white shadow"
                    : "bg-blue-600 text-white shadow"
            }
        >
            <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
                <Link to="#" className="text-xl font-semibold">
                    <strong>WEB2091 App</strong>
                </Link>

                <div className="hidden md:flex items-center space-x-8">
                    <Link to="/lab1">Lab1</Link>
                    <Link to="/lab2">Lab2</Link>
                    <Link to="/lab3">Lab3</Link>
                    <Link to="/lab4">Lab4</Link>
                    <Link to="/lab42">Lab4.2</Link>
                    <Link to="/lab5">Lab5</Link>
                </div>

                <div className="flex items-center space-x-6">
                    {/* Hiển thị user */}
                    <span>
                        {user ? `Email: ${user.email} (Đã đăng nhập)` : "Chưa đăng nhập"}
                    </span>

                    {/* Login / Logout trong Link */}
                    {user ? (
                        <button onClick={handleLogout}>Logout</button>
                    ) : (
                        <Link to="/login">Đăng nhập</Link>
                        
                    )}

                    <Link to="/register">Đăng ký</Link>

                    <Button onClick={toggleTheme}>
                        {theme === "light" ? "Dark mode" : "Light mode"}
                    </Button>
                </div>
            </div>
        </nav>
    );
}

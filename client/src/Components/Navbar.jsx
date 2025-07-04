import {link} from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import { Button } from "@components/ui/button";
import { DropdownMenu, DropdownMenuContent,
    DropdownMenuItem, DropdownMenuTrigger
 } from "@components/ui/dropdown-menu";
import { UserCircle } from "@heroicons/react/24/solid";

export default function Navbar() {
    const logout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        window.location.href = "/login";
    };

    return (
        <nav className="bg-white dark:bg-gray-800 shadow">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <Link to="/" className="text-xl font-bold text-gray-900 dark:text-white">MyApp</Link>
                    </div>
                    <div className="flex items-center space-x-4">
                        <ThemeToggle />
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="ghost" size="icon" aria-label="user menu">
                                    <UserCircle className="h-6 w-6 text-gray-500 dark:text-gray-400" />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                                <DropdownMenuItem asChild>
                                    <Link to="/profile">Profile</Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem onClick={logout}>Logout</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>
            </div>
        </nav>
        );
    }
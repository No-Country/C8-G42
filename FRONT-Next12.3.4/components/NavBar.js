import React from "react";
import styles from "../styles/Navbar.module.css";
import { useUser } from "@auth0/nextjs-auth0";

export default function Navbar() {
    const { user, error, isLoading } = useUser();
    if (isLoading) {
        return (
            <div>
                ...loading
            </div>
        );
    }

    return (
        <nav className={styles.nav}>
            <a href="/">Navbar</a>
            <div>
                <button>
                    {user ? (
                        <a href="/api/auth/logout">Logout</a>
                    ) : (
                        <a href="/api/auth/login">Login</a>
                    )}
                </button>
            </div>
        </nav>
    );
}
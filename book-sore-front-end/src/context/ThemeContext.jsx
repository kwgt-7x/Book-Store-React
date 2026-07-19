import { createContext, useEffect, useState } from "react"
export const ThemeContext = createContext()

export function ThemeProvider({ children }) {

    const getInithialTheme = () => {
        const savedTheme = localStorage.getItem('Theme')

        if (savedTheme) {
            return savedTheme
        }

        const preferTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;

        return preferTheme ? 'dark' : 'light'

    }

    const [theme, setTheme] = useState(() => getInithialTheme())

    useEffect(() => {

        {
            console.log("ThemeProvider Effect:", theme);
        }
        document.documentElement.setAttribute('data-bs-theme', theme)
        localStorage.setItem('Theme', theme)
    }, [theme])

    const toggleTheme = () => {
        setTheme(prev => prev === 'light' ? 'dark' : 'light')
    }

    useEffect(() => {

        document.body.className = theme;

        localStorage.setItem("theme", theme);

        // تغيير لون شريط المتصفح
        const metaTheme = document.querySelector(
            'meta[name="theme-color"]'
        );

        if (metaTheme) {

            metaTheme.setAttribute(
                "content",
                theme === "light"
                    ? "#ffffff"
                    : "#161b22"
            );

        }

    }, [theme]);

    return (
        <>
            <ThemeContext.Provider value={{ theme, toggleTheme }}>
                {children}
            </ThemeContext.Provider>
        </>
    )
}
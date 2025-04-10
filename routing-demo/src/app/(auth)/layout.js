"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import '../globals.css'

const navLinks = [
    { name: 'register', href: '/register' },
    { name: 'login', href: '/login' },
    { name: 'forgot password', href: '/forgot-password' },
]

export default function AuthLayout({ children }) {
    const pathname = usePathname()
    return (
        <html lang="en">
            <body>
                {navLinks.map((link) => {
                    const isActive = pathname === link.href || (pathname.startsWith(link.href) && link.href !== '/')
                    return (
                        <Link className={isActive ? "font-bold mr-4" : "text-blue-500 mr-4"} href={link.href} key={link.name}>
                            {link.name}
                        </Link>
                    )
                })}

                {children}

                <footer style={{
                    backgroundColor: 'lightcoral',
                    padding: '2rem'
                }}>
                    <p>footer but in auth</p>
                </footer>
            </body>
        </html>
    )
}

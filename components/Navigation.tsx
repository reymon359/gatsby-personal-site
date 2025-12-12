"use client"
import React from "react"
import { useState } from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import HelpMessageContainer from './HelpMessageContainer';
import { useStarColorStore } from "@/app/utils/starColorStore";


interface MenuLinkProps {
    href: string;
    children: React.ReactNode;
}

// Social links and navigation links (updated)
const socialLinks = [
    { name: "LinkedIn", socialUrl: "https://www.linkedin.com/in/ramon-morcillo/", isExternal: true },
    { name: "GitHub", socialUrl: "https://github.com/reymon359", isExternal: true },
    { name: "X", socialUrl: "https://twitter.com/reymon359", isExternal: true },
    { name: "Resume", socialUrl: "/resume", isExternal: false },
]

const pages = [
    { name: "Index", href: "/", ariaCurrent: true },
    { name: "works", href: "/works" },
    { name: "about", href: "/about" },
    { name: "Contact", href: "mailto:hey@ramonmorcillo.com?subject=Hi%20there!", external: true },
]


function MenuLink({ href, children, onClick }: MenuLinkProps & { onClick?: () => void }) {
    const pathname = usePathname();
    const isActive = href === '/' ? pathname === '/' : pathname.startsWith(href);
    return (
        <Link
            href={href}
            onClick={onClick}
            className={`menu-link relative text-[#ddd] font-normal pointer-events-auto transition-colors duration-100 leading-[1em] border-b-0 hover:underline${isActive ? ' active' : ''}`}
            aria-current={isActive ? 'page' : undefined}
        >
            {children}
        </Link>
    );
}


// // Device detection hook
// function useIsMobile() {
//     const [isMobile, setIsMobile] = React.useState(false);
//     React.useEffect(() => {
//         const check = () => setIsMobile(window.innerWidth < 768);
//         check();
//         window.addEventListener('resize', check);
//         return () => window.removeEventListener('resize', check);
//     }, []);
//     return isMobile;
// }

const Navigation: React.FC = () => {
    const [open, setOpen] = useState(false)
    const pathname = usePathname();
    const setRandomStarColor = useStarColorStore((state) => state.setRandomStarColor);
    const router = useRouter();
    return (
        <>
            {/* Logo: fixed top left on desktop, bottom in nav on mobile */}
            {/* Desktop logo */}
            <div className="hidden xl:block fixed top-0 left-0 z-20 px-16 py-16">
                <Link
                    href="/"
                    className="block w-10 hover:scale-110 transition"
                    onClick={async (e) => {
                        e.preventDefault();
                        console.log('Index logo clicked');
                        setRandomStarColor();
                        setOpen(false);
                        // Wait a tick to allow state to propagate
                        await new Promise((resolve) => setTimeout(resolve, 0));
                        router.push('/');
                    }}
                >
                    <svg
                        width="32"
                        height="32"
                        viewBox="0 0 22 22"
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-white fill-current"
                    >
                        <path d="M11 21.5C5.201 21.5.5 16.799.5 11S5.201.5 11 .5 21.5 5.201 21.5 11 16.799 21.5 11 21.5zm0-1a9.5 9.5 0 1 0 0-19 9.5 9.5 0 0 0 0 19z" />
                    </svg>
                </Link>
            </div>

            {/* Bottom Navigation */}
            <div className={`fixed bottom-0 w-full print:hidden min-h-12 z-[99999999] pointer-events-none ${open ? '' : 'h-[0px]'} `}>
                <div
                    className={`overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.45,0,0.1,1)] flex flex-col relative
                    ${open ? 'max-h-[800px] pt-24 px-6 xl:px-12 py-6' : 'max-h-[56px] px-6 xl:px-12 py-0 pt-0'}
                    xl:max-h-none xl:overflow-visible xl:transition-none xl:px-12 xl:py-12 xl:block`}
                    style={{ maxHeight: undefined }}
                >
                    {/* Overlay for readability, does not block pointer events */}
                    {pathname !== '/' && open && (
                        <div className="absolute inset-0 bg-stone-950/80 pointer-events-none z-30 transition-opacity duration-300" aria-hidden="true" />
                    )}
                    {/* Logo/toggle bar always at top of nav */}
                    <div className="xl:hidden flex items-center justify-between w-full mb-2 relative z-[99999999]">
                        <Link
                            href="/"
                            className="block w-10 hover:scale-110 transition pointer-events-auto z-[99999999]"
                            onClick={() => {
                                console.log('Index logo clicked');
                                setRandomStarColor();
                                setOpen(false);
                            }}
                        >
                            <svg
                                width="32"
                                height="32"
                                viewBox="0 0 22 22"
                                xmlns="http://www.w3.org/2000/svg"
                                className="text-white fill-current"
                            >
                                <path d="M11 21.5C5.201 21.5.5 16.799.5 11S5.201.5 11 .5 21.5 5.201 21.5 11 16.799 21.5 11 21.5zm0-1a9.5 9.5 0 1 0 0-19 9.5 9.5 0 0 0 0 19z" />
                            </svg>
                        </Link>
                        <div
                            className={`flex flex-col justify-between items-end w-7 h-[15px] cursor-pointer transition-transform duration-300 z-[99999999] pointer-events-auto ${open ? "rotate-90" : ""}`}
                            onClick={() => setOpen(!open)}
                        >
                            <span className={`h-[1px] bg-white transition-all ${open ? "w-[60%]" : "w-full"}`} />
                            <span className={`h-[1px] bg-white transition-all ${open ? "w-full" : "w-[60%] mr-[20%]"}`} />
                            <span className={`h-[1px] bg-white transition-all ${open ? "w-[60%]" : "w-full"}`} />
                        </div>
                    </div>
                    {/* HelpMessageContainer: show when menu is closed on mobile, always on desktop */}
                    {pathname === '/' && (
                        <div className="flex justify-center items-center mb-2 fixed w-8/12 right-1/2 translate-x-1/2 bottom-4 z-[99999999] pointer-events-none">
                            <HelpMessageContainer show={open ? false : true} />
                        </div>
                    )}
                    {/* Menu content, only visible when open or on desktop */}
                    <div className={`gap-4 justify-center flex flex-col transition-opacity duration-300 relative -mx-6 px-6 -mb-6 pb-6 ${pathname === '/' ? "" : "bg-stone-950"} ${open ? 'opacity-100' : 'opacity-0 pointer-events-none'} xl:opacity-100 xl:pointer-events-auto relative z-[99999999]`}
                    >
                        {/* Two-column Menu: Social links and Navigation links */}
                        <nav className="flex justify-between pt-6">
                            {/* Social Links (left on desktop) */}
                            <ul className={`flex flex-col gap-2 xl:mb-0 xl:w-fit z-[99999999] xl:items-start ${open ? '' : 'fixed bottom-12 left-12'} `}>
                                {socialLinks.map((social) => (
                                    <li key={social.name}>
                                        <Link href={social.socialUrl} target={social.isExternal ? '_blank' : '_self'} rel="noopener noreferrer"
                                            className="text-[#ddd] font-normal pointer-events-auto transition-colors duration-100 leading-[1em] border-b-0 cursor-pointer no-underline focus:outline-none hover:text-white hover:font-semibold hover:border-b-0 z-[99999999]"
                                            onClick={() => setOpen(false)}
                                        >
                                            {social.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                            {/* Navigation Links (right on desktop) */}
                            <ul className={`flex flex-col gap-2 xl:items-end xl:w-fit z-[99999999] text-right ${open ? '' : 'fixed bottom-12 right-12'} `}>
                                {pages.map((page) => (
                                    <li key={page.name}>
                                        {page.external ? (
                                            <a
                                                href={page.href}
                                                className="menu-link text-[#ddd] font-normal pointer-events-auto transition-colors duration-100 leading-[1em] border-b-0 hover:underline z-[99999999]"
                                                rel="noopener"
                                                onClick={() => setOpen(false)}
                                            >
                                                {page.name}
                                            </a>
                                        ) : (
                                            <MenuLink
                                                href={page.href}
                                                onClick={() => {
                                                    if (page.name === "Index") {
                                                        console.log('Index link clicked');
                                                        setRandomStarColor();
                                                    }
                                                    setOpen(false);
                                                }}
                                            >
                                                {page.name}
                                            </MenuLink>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </nav>
                        {/* Mobile footer, only visible when menu is open */}
                        <div className={`flex xl:hidden flex-col gap-1 text-center justify-between w-full px-4 pb-2 text-white text-xs font-primary tracking-wider transition-opacity duration-300 ${!open ? 'opacity-0 pointer-events-none' : 'opacity-100'} z-[99999999] pointer-events-auto`}>
                            <span>Ramón Morcillo - {new Date().getFullYear()}</span>
                            <span>Made with 💚 & ⏳</span>
                        </div>
                    </div>
                </div>
            </div>
            {/* Dual rotated footer items, fixed vertical center, left/right (improved for consistent layout) */}
            <footer className="fixed hidden xl:block z-10 w-screen top-1/2 left-0 -translate-y-1/2 pointer-events-none px-16">
                <div className="relative w-full h-40 pointer-events-none">
                    {/* Left item */}
                    <div
                        className="absolute left-0 top-1/2 -translate-y-1/2 origin-left -rotate-90 text-white text-xs font-primary tracking-wider pointer-events-none"
                        style={{ transformOrigin: 'left center' }}
                    >
                        Ramón Morcillo - {new Date().getFullYear()}
                    </div>
                    {/* Right item */}
                    <div
                        className="absolute right-0 top-1/2 -translate-y-1/2 origin-right rotate-90 text-white text-xs font-primary tracking-wider pointer-events-none pt-0 -mr-3"
                        style={{ transformOrigin: 'right center' }}
                    >
                        Made with 💚 & ⏳
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Navigation

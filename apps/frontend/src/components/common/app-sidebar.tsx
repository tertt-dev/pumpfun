"use client"

import { cn } from "@/lib/utils"
import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Sheet } from "@/components/ui/sheet"
import styles from "@/styles/components/sidebar.module.css"

const menuItems = [
  {
    title: "home",
    icon: (props: any) => (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
        <path d="M13.8153 2.34689C12.7771 1.4345 11.2229 1.4345 10.1847 2.34689L3.93468 7.83932C3.34056 8.36143 3 9.11408 3 9.90502V18.2501C3 19.7689 4.23122 21.0001 5.75 21.0001H8.16057C9.12707 21.0001 9.91057 20.2166 9.91057 19.2501V17.0001C9.91057 15.8955 10.806 15.0001 11.9106 15.0001H12C13.1046 15.0001 14 15.8955 14 17.0001V19.2501C14 20.2166 14.7835 21.0001 15.75 21.0001H18.25C19.7688 21.0001 21 19.7689 21 18.2501V9.90502C21 9.11408 20.6594 8.36143 20.0653 7.83932L13.8153 2.34689Z" fill="#86EFAC" />
      </svg>
    ),
    href: "/",
    isActive: true
  },
  {
    title: "livestreams",
    icon: (props: any) => (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
        <path d="M4.75 4.75H14.25C15.3546 4.75 16.25 5.64543 16.25 6.75V8.75L19.7681 6.81505C20.4345 6.44851 21.25 6.93067 21.25 7.69127V16.3087C21.25 17.0693 20.4345 17.5515 19.7681 17.1849L16.25 15.25V17.25C16.25 18.3546 15.3546 19.25 14.25 19.25H4.75C3.64543 19.25 2.75 18.3546 2.75 17.25V6.75C2.75 5.64543 3.64543 4.75 4.75 4.75Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M12.25 12C12.25 13.5188 11.0188 14.75 9.5 14.75C7.98122 14.75 6.75 13.5188 6.75 12C6.75 10.4812 7.98122 9.25 9.5 9.25C11.0188 9.25 12.25 10.4812 12.25 12Z" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
    href: "/live"
  },
  {
    title: "advanced",
    icon: (props: any) => (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
        <path d="M7 2.75V10.75M7 10.75H5.75C4.64543 10.75 3.75 11.6454 3.75 12.75V16.25C3.75 17.3546 4.64543 18.25 5.75 18.25H7M7 10.75H8.25C9.35457 10.75 10.25 11.6454 10.25 12.75V16.25C10.25 17.3546 9.35457 18.25 8.25 18.25H7M7 18.25V21.25M17 2.75001V5.75M17 5.75H15.75C14.6454 5.75 13.75 6.64543 13.75 7.75V16.25C13.75 17.3546 14.6454 18.25 15.75 18.25H17M17 5.75H18.25C19.3546 5.75 20.25 6.64543 20.25 7.75V16.25C20.25 17.3546 19.3546 18.25 18.25 18.25H17M17 18.25V21.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    href: "/advanced/coin?scan=true"
  },
  {
    title: "profile",
    icon: (props: any) => (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
        <path d="M5.85697 18.9157C7.17056 16.9968 9.33203 15.75 12 15.75C14.668 15.75 16.8294 16.9968 18.143 18.9157M5.85697 18.9157C7.49061 20.3679 9.6423 21.25 12 21.25C14.3577 21.25 16.5094 20.3679 18.143 18.9157M5.85697 18.9157C3.95086 17.2214 2.75 14.7509 2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12C21.25 14.7509 20.0491 17.2214 18.143 18.9157M15.25 10C15.25 11.7949 13.7949 13.25 12 13.25C10.2051 13.25 8.75 11.7949 8.75 10C8.75 8.20507 10.2051 6.75 12 6.75C13.7949 6.75 15.25 8.20507 15.25 10Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    ),
    href: "/profile/undefined"
  },
  {
    title: "support",
    icon: (props: any) => (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
        <path d="M4.75 9.75V9.5C4.75 5.77208 7.99594 2.75 12 2.75C16.0041 2.75 19.25 5.77208 19.25 9.5V9.75M12 19.6429V20.25C12 20.8023 12.4477 21.25 13 21.25H15C17.4853 21.25 19.5 19.2353 19.5 16.75M4.25 9.75H5.75V16.25H4.25C3.42157 16.25 2.75 15.5784 2.75 14.75V11.25C2.75 10.4216 3.42157 9.75 4.25 9.75ZM18.25 9.75H19.75C20.5784 9.75 21.25 10.4216 21.25 11.25V14.75C21.25 15.5784 20.5784 16.25 19.75 16.25H18.25V9.75Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    href: "#"
  }
]

export function AppSidebar() {
  const pathname = usePathname();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isShaking, setIsShaking] = useState(false);

  const handleCollapse = () => {
    setIsCollapsed(!isCollapsed);
    setIsShaking(true);
    setTimeout(() => setIsShaking(false), 300); // Duration of the animation
  };

    return (
    <aside 
      className={cn(
        "sticky bottom-0 left-0 top-0 z-40 flex h-screen min-h-screen flex-col border-r border-r-[rgba(248,250,252,0.1)] bg-background",
        isShaking && styles.shakeAnimation
      )}
      style={{ width: isCollapsed ? "70.8104px" : "212.185px" }}
    >
      <div className="flex flex-1 flex-col overflow-hidden">
        <div className="flex-shrink-0 px-2 py-6">
          <div className="flex items-center justify-between">
            <div className={cn(
              "flex items-center transition-all duration-300",
              isCollapsed ? "w-[34px] justify-start pl-[2px]" : "w-full gap-2"
            )}>
              <Link href="/" className="flex w-[130px] min-w-[130px] items-center gap-2.5 px-2">
                <Image src="/logo.png" alt="Pump" width={40} height={40} />
                <div style={{ opacity: isCollapsed ? 0 : 1 }}>
                  <span className="text-sm font-bold text-white">
                    pump<span className="text-[#87EFAC]">.</span>fun
                  </span>
                </div>
              </Link>
              <button 
                onClick={handleCollapse}
                className={cn(
                  "transition-left group absolute flex h-[30px] w-[34px] items-center justify-center rounded-md duration-100 hover:bg-[#262b37]",
                  isCollapsed ? "left-[18px] top-[70px]" : "left-[170px] top-[30px]"
                )}
              >
                <svg 
                  stroke="currentColor" 
                  fill="currentColor" 
                  strokeWidth="0" 
                  viewBox="0 0 24 24" 
                  className={cn(
                    "h-4 w-4 text-[#5d5f67] transition-transform duration-500 group-hover:text-white",
                    isCollapsed && "rotate-180"
                  )}
                  height="1em" 
                  width="1em" 
                  xmlns="http://www.w3.org/2000/svg" 
                  style={{ strokeWidth: "1.5px" }}
                >
                  <path d="M11.28 9.53 8.81 12l2.47 2.47a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215l-3-3a.75.75 0 0 1 0-1.06l3-3a.749.749 0 0 1 1.275.326.749.749 0 0 1-.215.734Z" />
                  <path d="M3.75 2h16.5c.966 0 1.75.784 1.75 1.75v16.5A1.75 1.75 0 0 1 20.25 22H3.75A1.75 1.75 0 0 1 2 20.25V3.75C2 2.784 2.784 2 3.75 2ZM3.5 3.75v16.5c0 .138.112.25.25.25H15v-17H3.75a.25.25 0 0 0-.25.25Zm13 16.75h3.75a.25.25 0 0 0 .25-.25V3.75a.25.25 0 0 0-.25-.25H16.5Z" />
                </svg>
              </button>
            </div>
          </div>
          {isCollapsed ? <div className="h-6"></div> : <div className="1"></div> }
        </div>

        <div className="flex-shrink-0 px-2">
          <div className="flex flex-col gap-4">
            <nav className="flex flex-col gap-6">
              <Link
                href="/board"
                className={cn(
                  "group relative flex h-[24px] items-center cursor-default",
                  isCollapsed ? "text-[#87EF9B]" : "text-white"
                )}
              >
                <div className="w-full rounded-[8px] p-2 group-hover:bg-[#262b37] pb-4">
                  <div className="h-items-center relative h-[24px] w-full">
                    <div className={cn(
                      "sidebar-logo-transition-multi-1 absolute duration-100 ease-in-out",
                      isCollapsed ? "left-1/2 -translate-x-1/2" : "left-0",
                      "top-[2px]"
                    )}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className={cn(
                        "transition-all duration-300",
                        isCollapsed ? "h-5 w-5" : "h-6 w-6"
                      )}>
                        <path d="M13.8153 2.34689C12.7771 1.4345 11.2229 1.4345 10.1847 2.34689L3.93468 7.83932C3.34056 8.36143 3 9.11408 3 9.90502V18.2501C3 19.7689 4.23122 21.0001 5.75 21.0001H8.16057C9.12707 21.0001 9.91057 20.2166 9.91057 19.2501V17.0001C9.91057 15.8955 10.806 15.0001 11.9106 15.0001H12C13.1046 15.0001 14 15.8955 14 17.0001V19.2501C14 20.2166 14.7835 21.0001 15.75 21.0001H18.25C19.7688 21.0001 21 19.7689 21 18.2501V9.90502C21 9.11408 20.6594 8.36143 20.0653 7.83932L13.8153 2.34689Z" fill="#86EFAC" />
                      </svg>
                    </div>
                    <span className={cn(
                      "absolute whitespace-nowrap sidebar-label-transition-multi",
                      isCollapsed ? "text-[#87EF9B] left-1/2 -translate-x-1/2 top-6 text-[10px]" : "text-white left-[40px] top-[4px] text-sm"
                    )}>
                      home
                    </span>
                  </div>
                </div>
              </Link>

              <Link
                href="/live"
                className="group relative flex h-[24px] items-center text-white"
              >
                <div className="w-full rounded-[8px] p-2 group-hover:bg-[#262b37] pb-4">
                  <div className="h-items-center relative h-[24px] w-full">
                    <div className={cn(
                      "sidebar-logo-transition-multi-1 absolute duration-100 ease-in-out",
                      isCollapsed ? "left-1/2 -translate-x-1/2" : "left-0",
                      "top-[2px]"
                    )}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className={cn(
                        "transition-all duration-300",
                        isCollapsed ? "h-5 w-5" : "h-6 w-6"
                      )}>
                        <path d="M4.75 4.75H14.25C15.3546 4.75 16.25 5.64543 16.25 6.75V8.75L19.7681 6.81505C20.4345 6.44851 21.25 6.93067 21.25 7.69127V16.3087C21.25 17.0693 20.4345 17.5515 19.7681 17.1849L16.25 15.25V17.25C16.25 18.3546 15.3546 19.25 14.25 19.25H4.75C3.64543 19.25 2.75 18.3546 2.75 17.25V6.75C2.75 5.64543 3.64543 4.75 4.75 4.75Z" stroke="#F8FAFC" strokeWidth="1.5" />
                        <path d="M12.25 12C12.25 13.5188 11.0188 14.75 9.5 14.75C7.98122 14.75 6.75 13.5188 6.75 12C6.75 10.4812 7.98122 9.25 9.5 9.25C11.0188 9.25 12.25 10.4812 12.25 12Z" stroke="#F8FAFC" strokeWidth="1.5" />
                      </svg>
                    </div>
                    {isCollapsed ? (
                      <>
                        <span className="absolute whitespace-nowrap sidebar-label-transition-multi text-white left-1/2 -translate-x-1/2 top-6 text-[10px] opacity-0">
                          livestreams
                        </span>
                        <span className="absolute whitespace-nowrap sidebar-label-transition-multi text-white left-1/2 -translate-x-1/2 top-6 text-[10px] opacity-100">
                          live
                        </span>
                      </>
                    ) : (
                      <span className="absolute whitespace-nowrap sidebar-label-transition-multi text-white left-[40px] top-[4px] text-sm">
                        livestreams
                      </span>
                    )}
                  </div>
                </div>
              </Link>

              <Link
                href="/advanced/coin?scan=true"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex h-[24px] items-center text-white"
              >
                <div className="w-full rounded-[8px] p-2 group-hover:bg-[#262b37] pb-4">
                  <div className="h-items-center relative h-[24px] w-full">
                    <div className={cn(
                      "sidebar-logo-transition-multi-1 absolute duration-100 ease-in-out",
                      isCollapsed ? "left-1/2 -translate-x-1/2" : "left-0",
                      "top-[2px]"
                    )}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className={cn(
                        "transition-all duration-300",
                        isCollapsed ? "h-5 w-5" : "h-6 w-6"
                      )}>
                        <path d="M7 2.75V10.75M7 10.75H5.75C4.64543 10.75 3.75 11.6454 3.75 12.75V16.25C3.75 17.3546 4.64543 18.25 5.75 18.25H7M7 10.75H8.25C9.35457 10.75 10.25 11.6454 10.25 12.75V16.25C10.25 17.3546 9.35457 18.25 8.25 18.25H7M7 18.25V21.25M17 2.75001V5.75M17 5.75H15.75C14.6454 5.75 13.75 6.64543 13.75 7.75V16.25C13.75 17.3546 14.6454 18.25 15.75 18.25H17M17 5.75H18.25C19.3546 5.75 20.25 6.64543 20.25 7.75V16.25C20.25 17.3546 19.3546 18.25 18.25 18.25H17M17 18.25V21.25" stroke="#F8FAFC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <span className={cn(
                      "absolute whitespace-nowrap sidebar-label-transition-multi text-white",
                      isCollapsed ? "left-1/2 -translate-x-1/2 top-6 text-[10px]" : "left-[40px] top-[4px] text-sm"
                    )}>
                      advanced
                    </span>
                  </div>
                </div>
              </Link>

              <Link
                href={`/profile/${undefined}`}
                className="group relative flex h-[24px] items-center text-white"
              >
                <div className="w-full rounded-[8px] p-2 group-hover:bg-[#262b37] pb-4">
                  <div className="h-items-center relative h-[24px] w-full">
                    <div className={cn(
                      "sidebar-logo-transition-multi-1 absolute duration-100 ease-in-out",
                      isCollapsed ? "left-1/2 -translate-x-1/2" : "left-0",
                      "top-[2px]"
                    )}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className={cn(
                        "transition-all duration-300",
                        isCollapsed ? "h-5 w-5" : "h-6 w-6"
                      )}>
                        <path d="M5.85697 18.9157C7.17056 16.9968 9.33203 15.75 12 15.75C14.668 15.75 16.8294 16.9968 18.143 18.9157M5.85697 18.9157C7.49061 20.3679 9.6423 21.25 12 21.25C14.3577 21.25 16.5094 20.3679 18.143 18.9157M5.85697 18.9157C3.95086 17.2214 2.75 14.7509 2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12C21.25 14.7509 20.0491 17.2214 18.143 18.9157M15.25 10C15.25 11.7949 13.7949 13.25 12 13.25C10.2051 13.25 8.75 11.7949 8.75 10C8.75 8.20507 10.2051 6.75 12 6.75C13.7949 6.75 15.25 8.20507 15.25 10Z" stroke="#F8FAFC" strokeWidth="1.5" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <span className={cn(
                      "absolute whitespace-nowrap sidebar-label-transition-multi text-white",
                      isCollapsed ? "left-1/2 -translate-x-1/2 top-6 text-[10px]" : "left-[40px] top-[4px] text-sm"
                    )}>
                      profile
                    </span>
                  </div>
                </div>
              </Link>

              <Link
                href="#"
                className="group relative flex h-[24px] items-center text-white"
              >
                <div className="w-full rounded-[8px] p-2 group-hover:bg-[#262b37] pb-4">
                  <div className="h-items-center relative h-[24px] w-full">
                    <div className={cn(
                      "sidebar-logo-transition-multi-1 absolute duration-100 ease-in-out",
                      isCollapsed ? "left-1/2 -translate-x-1/2" : "left-0",
                      "top-[2px]"
                    )}>
                      <div className="relative">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className={cn(
                          "transition-all duration-300",
                          isCollapsed ? "h-5 w-5" : "h-6 w-6"
                        )}>
                          <path d="M4.75 9.75V9.5C4.75 5.77208 7.99594 2.75 12 2.75C16.0041 2.75 19.25 5.77208 19.25 9.5V9.75M12 19.6429V20.25C12 20.8023 12.4477 21.25 13 21.25H15C17.4853 21.25 19.5 19.2353 19.5 16.75M4.25 9.75H5.75V16.25H4.25C3.42157 16.25 2.75 15.5784 2.75 14.75V11.25C2.75 10.4216 3.42157 9.75 4.25 9.75ZM18.25 9.75H19.75C20.5784 9.75 21.25 10.4216 21.25 11.25V14.75C21.25 15.5784 20.5784 16.25 19.75 16.25H18.25V9.75Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                    </div>
                    <span className={cn(
                      "absolute whitespace-nowrap sidebar-label-transition-multi text-white",
                      isCollapsed ? "left-1/2 -translate-x-1/2 top-6 text-[10px]" : "left-[40px] top-[4px] text-sm"
                    )}>
                      support
                    </span>
                  </div>
                </div>
              </Link>

              <div>
                <div className="relative flex h-[24px] items-center" aria-haspopup="dialog" aria-expanded="false" data-state="closed">
                  <button className={cn(
                    "flex w-full items-center rounded-md text-sm font-medium text-[#F8FAFC] transition-colors hover:bg-[#262b37]",
                    isCollapsed ? "justify-center p-2" : "px-3 py-2 justify-between"
                  )}>
    <div className={cn(
                      "flex items-center gap-2",
                      isCollapsed && "relative -left-[2px]"
                    )}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className={cn(
                        "transition-all duration-300",
                        isCollapsed ? "h-5 w-5" : "h-6 w-6"
                      )}>
                        <path d="M12 4.75C12.5523 4.75 13 4.30228 13 3.75C13 3.19772 12.5523 2.75 12 2.75C11.4477 2.75 11 3.19772 11 3.75C11 4.30228 11.4477 4.75 12 4.75Z" fill="black" />
                        <path d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z" fill="black" />
                        <path d="M12 21.25C12.5523 21.25 13 20.8023 13 20.25C13 19.6977 12.5523 19.25 12 19.25C11.4477 19.25 11 19.6977 11 20.25C11 20.8023 11.4477 21.25 12 21.25Z" fill="black" />
                        <path d="M12 4.75C12.5523 4.75 13 4.30228 13 3.75C13 3.19772 12.5523 2.75 12 2.75C11.4477 2.75 11 3.19772 11 3.75C11 4.30228 11.4477 4.75 12 4.75Z" stroke="#F8FAFC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z" stroke="#F8FAFC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M12 21.25C12.5523 21.25 13 20.8023 13 20.25C13 19.6977 12.5523 19.25 12 19.25C11.4477 19.25 11 19.6977 11 20.25C11 20.8023 11.4477 21.25 12 21.25Z" stroke="#F8FAFC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      {!isCollapsed && <span className="ml-2">more</span>}
                    </div>
                  </button>
                </div>
              </div>
            </nav>

            <Link
              href="/create"
              className={cn(
                "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground shadow hover:bg-primary/90",
                isCollapsed ? "px-4 py-2 mx-auto h-10 w-10 rounded-xl" : "h-10 px-4 py-2 w-full rounded-md"
              )}
              data-testid="create-coin-button-sidebar"
        >
          {isCollapsed ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                  <path d="M8.50033 3.56641V8.89974M8.50033 8.89974V14.2331M8.50033 8.89974H3.16699M8.50033 8.89974H13.8337" stroke="currentColor" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              ) : (
                "create coin"
              )}
            </Link>
          </div>
        </div>

        <div className="flex min-h-0 flex-1 flex-col">
          <div className="flex-1"></div>
        </div>
      </div>
    </aside>
  );
}
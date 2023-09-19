'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation'

export interface SidebarProps {
    url: string,
    name: string
  }
  
  export function SidebarLink({url, name} : SidebarProps) {
    const pathname = usePathname()
    let highlight_class = pathname.includes(url) ? "is-active" : "";

    if (url == "/procedural/field_selection" && pathname == "/")  highlight_class = "is-active";

    return (
      <li><Link href={url} className={highlight_class} >{name}</Link></li>
    )
  }
  
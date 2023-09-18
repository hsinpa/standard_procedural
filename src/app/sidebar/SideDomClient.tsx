'use client'
import { MouseEventHandler, useState } from 'react'
import Link from 'next/link';


function OnSideLinkClick(e: React.MouseEvent<HTMLElement>) {

    let queries = document.querySelectorAll(".menu-list li a");
    queries.forEach(x=>{
        x.className="";
    });
    e.currentTarget.className="is-active";
}

export interface SidebarProps {
    url: string,
    name: string,
    default_class: string,
  }
  
  export function SidebarLink({url, name, default_class} : SidebarProps) {
    return (
      <li><Link onClick={OnSideLinkClick} className={default_class} href={url}>{name}</Link></li>
    )
  }
  
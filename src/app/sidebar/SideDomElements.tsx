import {SidebarProps, SidebarLink} from './SideDomClient';
import React from 'react';

export const SideBarDom  = () => {
  return <div className='menu'>
	<p className="menu-label">
		General
	</p>

	<ul className='menu-list'>
		<SidebarLink name="Field selection" url="/field_selection"></SidebarLink>
		<SidebarLink name="Data collection" url="/data_collection"></SidebarLink>
		<SidebarLink name="Work" url="/work"></SidebarLink>
		<SidebarLink name="Report" url="/report"></SidebarLink>
		<SidebarLink name="Note" url="/note"></SidebarLink>
	</ul>
    </div>;
  }

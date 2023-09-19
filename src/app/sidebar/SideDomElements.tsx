import {SidebarProps, SidebarLink} from './SideDomClient';
import React from 'react';

export const SideBarDom  = () => {
  return <div className='menu'>
	<p className="menu-label">
		Procedural
	</p>
	<ul className='menu-list'>
		<SidebarLink name="Field selection" url="/procedural/field_selection"></SidebarLink>
		<SidebarLink name="Data collection" url="/procedural/data_collection"></SidebarLink>
		<SidebarLink name="Work" url="/procedural/work"></SidebarLink>
		<SidebarLink name="Report" url="/procedural/report"></SidebarLink>
		<SidebarLink name="Note" url="/procedural/note"></SidebarLink>
	</ul>

	<p className="menu-label">
		Learing
	</p>
	<ul className='menu-list'>
		<SidebarLink name="Video resource" url="/learning/video_resources"></SidebarLink>
	</ul>

	<p className="menu-label">
		Tools
	</p>
	<ul className='menu-list'>
		<SidebarLink name="Tools review" url="/tools/tools_review"></SidebarLink>
	</ul>

    </div>;
  }

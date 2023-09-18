import {SidebarProps, SidebarLink} from './SideDomClient';
import React from 'react';

export const SideBarDom  = () => {
  return <div className='menu'>
	<p className="menu-label">
	General
	</p>

	<ul className='menu-list'>
		<SidebarLink name="Field selection" url="field_selection" default_class="is-active"></SidebarLink>
		<SidebarLink name="Data collection" url="data_collection" default_class=""></SidebarLink>
		<SidebarLink name="Work" url="work" default_class=""></SidebarLink>
		<SidebarLink name="Report" url="report" default_class=""></SidebarLink>
		<SidebarLink name="Note" url="note" default_class=""></SidebarLink>
	</ul>
    </div>;
  }

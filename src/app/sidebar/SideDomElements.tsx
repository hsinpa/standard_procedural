import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export const SideBarDom  = () => {
  return <ul>
      <li><Link href="../">Field selection </Link></li>
      <li><Link href="preparation_stage">Data collection</Link></li>
      <li><Link href="#">Work</Link></li>
      <li><Link href="#">Report</Link></li>
      <li><Link href="#">Note</Link></li>
    </ul>;
  }

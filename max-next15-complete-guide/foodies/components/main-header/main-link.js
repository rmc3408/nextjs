"use client";

import Link from 'next/link';
import classes from './main-header.module.css';
import { usePathname } from 'next/navigation';

export default function MainLink({ href, children }) {
  const path = usePathname();
  const isActive = path.startsWith(href) ? `${classes.link} ${classes.active}` : classes.link

  return (
    <li>
      <Link href={href} className={isActive}>
        {children}
      </Link>
    </li>
  );
} 

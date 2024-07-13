import Link from "next/link";
import React, { HTMLAttributes, forwardRef } from "react";

export interface INavItem extends HTMLAttributes<HTMLAnchorElement> {
  href: string;
}

export const NavItem = forwardRef<HTMLAnchorElement, INavItem>(
  ({ className, children, href, ...props }, ref) => {
    return (
      <Link
        href={href}
        className="text-violet-300 text-lg hover:opacity-60 focus:opacity-60"
        ref={ref}
        {...props}
      >
        {children}
      </Link>
    );
  }
);
NavItem.displayName = "NavItem";

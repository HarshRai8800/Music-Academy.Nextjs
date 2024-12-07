"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { div } from "framer-motion/client";

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);


  return (
<div className="relative w-full flex items-center justify-center">
<div className={cn("fixed top-10  inset-x-0 max-w-2xl mx-auto z-50 ")}>
        <Menu setActive={setActive}>
          <Link href={"/"}>
          <MenuItem setActive={setActive} active={active} item="Home">
         
        </MenuItem>
          </Link>
     <MenuItem setActive={setActive} active={active} item="Our Courses">
     <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/courses">All Courses</HoveredLink>
            <HoveredLink href="/">About Us</HoveredLink>
            <HoveredLink href="/contactUs">Contact Us</HoveredLink>
            <HoveredLink href="/">Branding</HoveredLink>
          </div>
     </MenuItem>

     <Link href={"/contactUs"}>
          <MenuItem setActive={setActive} active={active} item="Contact Us">
         
        </MenuItem>
          </Link>
          
        
        </Menu>
        
    </div>
</div>
   


  
  )
}

export default Navbar
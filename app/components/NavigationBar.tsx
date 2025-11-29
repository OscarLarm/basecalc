"use client";
import {
  Navbar,
  NavbarContent,
  NavbarBrand,
} from "@heroui/react";

export default function NavigationBar() {
  return (
    <Navbar isBordered className="font-mono">
      <NavbarBrand>
        <p>BaseCalc</p>
      </NavbarBrand>
      
      <NavbarContent className="flex" justify="center" >

      </NavbarContent>
    </Navbar>
  );
}

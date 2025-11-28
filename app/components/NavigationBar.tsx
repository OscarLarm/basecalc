"use client";
import {
  Navbar,
  NavbarContent,
  NavbarItem,
  NavbarBrand,
  Tabs,
  Tab,
} from "@heroui/react";

export default function NavigationBar() {
  return (
    <Navbar isBordered>
      <NavbarBrand>
        <p>BaseCalc</p>
      </NavbarBrand>
      
      <NavbarContent className="flex" justify="center" >
        <NavbarItem>
          <Tabs radius="sm" variant="light" aria-label="Base option">
            <Tab key="decimal" title="DEC" />
            <Tab key="hexadecimal" title="HEX" />
            <Tab key="binary" title="BIN" />
          </Tabs>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
      </NavbarContent>
    </Navbar>
  );
}

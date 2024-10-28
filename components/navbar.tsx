"use client";

import { Button } from "./ui/button";
import Logo from "./logo";
import { ModeToggle } from "./mode-toggle";
import { useRouter } from "next/navigation";
import { NavBarMap, navMapping } from "@/lib/data";


interface NavButtonProps extends NavBarMap {
  navigateTo: (route: string) => void
}

export default function Navbar() {
  const router = useRouter();

  function navigateTo(path: string) {
    router.push(path);
  }

  return (
    <div className="border bg-card text-card-foreground p-3 shadow-sm md:rounded-lg flex justify-between items-center top-0 sticky z-50">
      <Logo onClick={() => navigateTo("/")} />

      <div className="space-x-3 items-center">
        {navMapping.map((nav, index) => (
          <NavButton Icon={nav.Icon} route={nav.route} label={nav.label} navigateTo={navigateTo} key={index} />
        ))}

        <ModeToggle />
      </div>
    </div>
  );
}

function NavButton({ Icon, route, label, navigateTo }: NavButtonProps) {
  return (
    <Button
      onClick={() => navigateTo(route)}
      variant="outline"
      size="sm"
      className="ml-auto h-8"
    >
      <Icon className="h-4 w-4" />
      <span className="hidden md:block ml-2">{label}</span>
    </Button>
  )
}

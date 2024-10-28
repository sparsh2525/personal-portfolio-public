import { aboutYou } from "@/lib/data";
import { BackgroundGradient } from "./ui/background-gradient";
import SidebarLinks from "./sidebar-links";

export default function Sidebar() {
  return (
    <div className="min-w-full md:min-w-[30%] md:w-[30%]">
      <div className="md:sticky md:top-24">
        <BackgroundGradient className="rounded-[20px] bg-white dark:bg-zinc-900">
          <div className="rounded-[20px] border bg-card text-card-foreground shadow flex flex-col space-y-2 p-4 static md:sticky top-24">
            {/* Title/Name */}
            <p className="font-semibold leading-none tracking-tight">
              {aboutYou.name}
            </p>
            {/* Description */}
            <p className="text-sm text-muted-foreground tracking-tight">
              {aboutYou.description}
            </p>
          </div>
        </BackgroundGradient>
        <SidebarLinks />
      </div>
    </div>
  );
}

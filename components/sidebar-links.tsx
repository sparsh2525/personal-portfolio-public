import { IconPelet, sidebarLinks } from "@/lib/data";
import Link from "next/link";

export default function SidebarLinks() {
    return (
        <div className="flex flex-row mt-8 gap-4 justify-around md:flex-col">
            {sidebarLinks.map((link, index) =>
                <SidebarLink Icon={link.Icon} label={link.label} url={link.url} key={index} />
            )}
        </div>
    )
}

function SidebarLink({ Icon, label, url }: IconPelet) {
    return (
        <Link target={'_blank'} href={url!}
            className="inline-flex items-center justify-center 
                mt-3 rounded-xl border bg-card text-card-foreground shadow p-2 no-underline w-full cursor-pointer 
                transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring 
                hover:bg-accent hover:text-accent-foreground">
            <Icon className="mr-2 h-4 w-4" />
            <p className="text-sm text-muted-foreground">
                {label}
            </p>
        </Link>
    )
}
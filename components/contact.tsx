import { aboutYou } from "@/lib/data";
import { buildMailLink } from "@/lib/utils";

export default function Contact() {
    return (
        <>
            <h2 className="text-2xl font-semibold tracking-tight">Contact</h2>
            <div className="mt-5 rounded-xl border bg-card text-card-foreground shadow">
                <p className="p-6 text-sm text-muted-foreground">
                    Best way to reach me is through:{" "}
                    <a href={buildMailLink(aboutYou.email, aboutYou.emailSubject, aboutYou.emailBody)}> my mail</a>
                </p>
            </div>
        </>
    )
}
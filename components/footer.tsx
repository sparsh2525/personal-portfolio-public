import { aboutYou } from "@/lib/data";

export default function Footer() {
  return (
    <p className="mb-8 text-sm text-muted-foreground text-center px-11">
      Built by {aboutYou.name} • With TypeScript,
      Next.js, Tailwind • Code on{" "}
      <a href={aboutYou.gitHubLink}>
        GitHub
      </a>{" "}
      • Deployed on Vercel.
    </p>
  );
}

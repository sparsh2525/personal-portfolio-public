import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(input: string | number): string {
  const date = new Date(input);
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export function absoluteUrl(path: string) {
  return `${process.env.NEXT_PUBLIC_APP_URL}${path}`;
}

export const buildMailLink = (mail: string, subject: string, body: string) => {
  subject = subject.split(" ").join("%20");
  body = body.split("\n").join("%0A").split(" ").join("%20");
  return `mailto:${mail}?subject=${subject}&body=${body}`;
};

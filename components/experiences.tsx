import { Experience } from "@/lib/data";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Separator } from "./ui/separator";
import DateRange from "./date-range";

interface ExperiencesCardProps {
  experiences: Experience[];
  type: string;
}

interface ShowcaseProps {
  experience: Experience;
  whetherlast: boolean;
}


export default function ExperiencesCard({ experiences, type }: ExperiencesCardProps) {
  return (
    <>
      <h2 className="text-2xl font-semibold tracking-tight">{type}</h2>
      <div className="mt-5 rounded-xl border bg-card text-card-foreground shadow">
        <div className="p-6 space-y-6 pb-2">
          {experiences.map(
            (education: Experience, index: number) => (
              <Showcase
                key={education.company}
                experience={education}
                whetherlast={experiences.length == index + 1}
              />
            )
          )}
        </div>
      </div>
    </>)
}



function Showcase({
  experience,
  whetherlast,
}: ShowcaseProps) {
  return (
    <div className="space-y-2 ">
      <div className="flex justify-between flex-col gap-3 sm:flex-row sm:gap-0">
        <div className="flex items-center space-x-4">
          <Avatar>
            <AvatarImage src={experience.logo} />
            <AvatarFallback>AB</AvatarFallback>
          </Avatar>
          <div className="flex justify-between flex-row gap-3 w-full sm:flex-col sm:gap-1 sm:w-fit">
            <h3 className="font-semibold leading-none tracking-tight">
              {experience.company}
            </h3>
            <p className="font-medium text-sm text-muted-foreground leading-none ">
              {experience.position}
            </p>
          </div>
        </div>
        <DateRange date={experience.years} />
      </div>
      {typeof experience.description === 'string' ?
        <p className="text-sm text-muted-foreground pb-2">
          {experience.description}
        </p>
        :
        <ul className="list-disc">
          {experience.description.map((point, index) =>
            <li className="text-sm text-muted-foreground pb-2" key={index}>{point}</li>
          )}
        </ul>
      }
      {whetherlast ? <></> : <Separator />}
    </div>
  );
}

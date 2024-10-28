import { buildMailLink } from "@/lib/utils";
import ActionButton from "./action-button";
import SkillOutline from "./skill-outline";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import {
    aboutYou,
    marketingHeadlines,
    skills,
} from "@/lib/data";

export default function Hero() {
    return (
        <>
            <div className="text-2xl font-bold tracking-tight">
                <TextGenerateEffect words={marketingHeadlines.mainHeadline} duration={1} />
            </div>
            <div className="text-muted-foreground">
                {marketingHeadlines.subHeadline}
            </div>
            <div className="flex justify-between">
                <ActionButton actionText={aboutYou.actionText} url={buildMailLink(aboutYou.email,aboutYou.emailSubject,aboutYou.emailBody)} />
                <div className="space-y-1">
                    <h3 className="font-medium leading-none">
                        {aboutYou.yearsOfExperience}
                    </h3>
                    <p className="text-xs text-muted-foreground">Experience</p>
                </div>
                <div className="space-y-1">
                    <h3 className="font-medium leading-none">
                        {aboutYou.location}
                    </h3>
                    <p className="text-xs text-muted-foreground">Location</p>
                </div>
            </div>
            <div className="space-y-1">
                <div className="space-y-2">
                    {skills.map((skill) => (
                        <SkillOutline
                            key={skill.label}
                            Icon={skill.Icon}
                            label={skill.label}
                        />
                    ))}
                </div>
            </div>
        </>
    )
}
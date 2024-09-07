import {Skill, programLanguages, devs, others} from "@/features/about/components/skills/skills";
import styles from "@/features/about/styles.module.css";

export default function SkillSet() {
    return (
        <section className={styles.skill}>
            <h2 className={undefined}>Skills</h2>
            <div>
                <h4>Program Languages</h4>
                {programLanguages.map((pg) =>
                    <SkillElement skillName={pg.skillName} description={pg.description}/>
                )}
            </div>
            <div>
            <h4>Dev</h4>
                {devs.map((dev) =>
                    <SkillElement skillName={dev.skillName} description={dev.description}/>
                )}
            </div>
            <div>
            <h4>Others</h4>
                {others.map((other)=>
                    <SkillElement skillName={other.skillName} description={other.description} />
                )}
            </div>
        </section>
    )
}

function SkillElement(skill: Skill) {
    return (
        <div className={undefined}>
            {skill.skillName}
            {skill.description}
        </div>
    )
}

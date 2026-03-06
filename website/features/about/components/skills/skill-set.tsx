"use client";

import {Skill, programLanguages, devs, others} from "@/features/about/components/skills/skills";
import styles from "@/features/about/styles.module.css";
import React, {useEffect, useRef, useState} from "react";

export default function SkillSet() {
    const [activeSkill, setActiveSkill] = useState<any | null>(null);
    const tooltipRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const handleClickOutside = (event: { target: any }) => {
            if (tooltipRef.current && !tooltipRef.current.contains(event.target)) {
                setActiveSkill(null);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const renderSkillsGrid = (skills: Skill[]) => {
        const paddedSkills = [...skills];
        while (paddedSkills.length % 4 !== 0) {
            paddedSkills.push({ skillName: "", description: "" });
        }

        return (
            <div className={styles.skills_grid}>
                {paddedSkills.map((skill, index) => (
                    <div
                        key={index}
                        className={`${styles.skill_box} ${(index % 2 === 0 ? styles.line_odd : styles.line_even)} ${(Math.floor(index / 4) % 2 === 0) ? styles.row_odd : styles.row_even} ${!skill.skillName ? styles.skill_box_empty : ""}`}
                        onClick={() => skill.skillName && setActiveSkill(skill.skillName)}
                    >
                        {skill.skillName && <span>{skill.skillName}</span>}
                        {activeSkill === skill.skillName && skill.skillName && (
                            <div className={styles.tooltip} ref={tooltipRef}>
                                <p>{skill.description ? skill.description : "No Description"}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        );
    };

    return (
        <section className={`${styles.skill} ${styles.skills_section}`}>
            <h2 className={styles.section_title}>Skills</h2>
            <div className={styles.skills_container}>
                <h4>Program Languages</h4>
                {renderSkillsGrid(programLanguages)}
            </div>
            <div className={styles.skills_container}>
                <h4>Dev</h4>
                {renderSkillsGrid(devs)}
            </div>
            <div className={styles.skills_container}>
                <h4>Others</h4>
                {renderSkillsGrid(others)}
            </div>
        </section>
    );
}
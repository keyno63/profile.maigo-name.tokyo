"use client";

import {Skill, programLanguages, devs, others} from "@/features/about/components/skills/skills";
import styles from "@/features/about/styles.module.css";
import React, {useEffect, useRef, useState} from "react";

export default function SkillSet() {
    // activeなスキルの追跡
    const [activeSkill, setActiveSkill] = useState(null);
    const tooltipRef = useRef(null);

    const toggleTooltip = (skillName) => {
        if (activeSkill === skillName) {
            setActiveSkill(null);
        } else {
            setActiveSkill(skillName);
        }
    };

    // クリックイベントを監視し、吹き出しの外側をクリックした場合に閉じる
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (tooltipRef.current && !tooltipRef.current.contains(event.target)) {
                setActiveSkill(null); // 吹き出しを閉じる
            }
        };

        document.addEventListener("mousedown", handleClickOutside); // クリックイベントのリスナー追加
        return () => {
            document.removeEventListener("mousedown", handleClickOutside); // コンポーネントがアンマウントされるときにリスナーを削除
        };
    }, []);

    // 各カテゴリのスキルグリッドをレンダリングする関数
    const renderSkillsGrid = (skills: Skill[]) => {
        const paddedSkills = [...skills];
        while (paddedSkills.length % 4 !== 0) {
            paddedSkills.push({ skillName: "", description: "" }); // 空の要素を追加
        }

        return (
            <div className={styles.skills_grid}>
                {paddedSkills.map((skill, index) => (
                    <div
                        key={index}
                        className={`${styles.skill_box} ${(index % 2 === 0 ? styles.line_odd : styles.line_even)} ${(Math.floor(index / 4) % 2 === 0) ? styles.row_odd : styles.row_even}`}
                        onClick={() => skill.skillName && setActiveSkill(skill.skillName)} // クリックで吹き出しをトグル
                    >
                        <span>{skill.skillName}</span>
                        {activeSkill === skill.skillName && skill.skillName && (
                            <div className={styles.tooltip} ref={tooltipRef}>
                                <p>{skill.description}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        );
    };

    return (
        <section className={`${styles.skill} ${styles.skills_section}`}>
                <h2 className={undefined}>Skills</h2>
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
    )
}

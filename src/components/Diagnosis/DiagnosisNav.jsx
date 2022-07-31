import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./css/diagnosis.module.css";

const DiagnosisNav = () => {
    const DiagnosisNavList = [
        { id: 1, content: "현재상태 점검하기", href: "." },
        { id: 2, content: "진단결과 보기", href: "./result" },
    ];
    const [currentTab, setCurrentTab] = useState(0);
    const handleMenu = (idx) => {
        setCurrentTab(idx);
    };

    return (
        <div>
            <nav className={styles.diaNav}>
                <ul>
                    {DiagnosisNavList.map((element, index) => {
                        return (
                            <li
                                key={element.id}
                                className={
                                    currentTab === index
                                        ? `${styles.navbtn} ${styles.on}`
                                        : `${styles.navbtn}`
                                }
                                onClick={() => handleMenu(index)}
                                type="button"
                            >
                                <NavLink to={element.href}>
                                    {element.content}
                                </NavLink>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </div>
    );
};

export default DiagnosisNav;

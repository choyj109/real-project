import React from "react";
import styles from "../ChemiStory/css/index.module.css";
import { Route, Routes } from "react-router-dom";
import TeacherCard from "./TeacherCard";
import TeacherDetail from "./TeacherDetail";
import teacherData from "../../data/teacherData.json";

const Teacher = () => {
  return (
    <div className={styles.JournalGoal}>
      <Routes>
        <Route path="/" element={<TeacherCard teacherData={teacherData} />} />
        <Route
          path="/:id"
          element={<TeacherDetail teacherData={teacherData} />}
        />
      </Routes>
    </div>
  );
};

export default Teacher;

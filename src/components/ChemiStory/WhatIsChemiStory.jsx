import React from "react";
import styles from "./css/index.module.css";
import { BsCheckLg } from "react-icons/bs";
import pData from "../../data/chemiStory.json";

const WhatIsChemiStory = () => {
  return (
    <div className={styles.WhatIsChemiStory}>
      <div>
        <p className={styles.pin}>
          <BsCheckLg />
        </p>
        <h1 className={styles.title}>Chemi Story란?</h1>
        <div className={styles.subTitle}>
          <img
            className={styles.img}
            src={"/chemiverse_img/bg-gnb-noshadow.png"}
            alt="bg-gnb-noshadow"
          />
          <div className={styles.module}>
            <h1>목적</h1>
          </div>
        </div>
        <ul className={styles.moduleList}>
          {/* 모듈 목록  */}
          {pData.map(ele => {
            return (
              <li className={styles.moduleListItem} key={ele.id}>
                <div className={styles.imgBox}>
                  <img src={ele.img} alt="" />
                  <div className={styles.hover}>{ele.goal}</div>
                </div>
                <p className={styles.moduleName}>{ele.name}</p>
                <p className={styles.moduleEngName}>{ele.engName}</p>
              </li>
            );
          })}
        </ul>

        <div className={styles.subTitle}>
          <img
            className={styles.img}
            src={"/chemiverse_img/bg-gnb-noshadow.png"}
            alt="bg-gnb-noshadow"
          />
          <div className={styles.module}>
            <h1>사용방법</h1>
          </div>
        </div>
        <div className={styles.video}>
          <div className={styles.videoContainer}>
            <iframe
              width="100%"
              height="auto"
              src="https://www.youtube.com/embed/QlNpm_mvuFE"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatIsChemiStory;

import React from "react";

const WriteChemiStory = () => {
  return (
    <div>
      <h1>ChemiStory 작성</h1>
      <div>
        <img
          className="chemi-img"
          src={"/chemiverse_img/bg-gnb-noshadow.png"}
          alt="bg-gnb-noshadow"
        />
        <h2>모듈명/활동명</h2>
        <h3>작성 설명 글</h3>
        <div>콘텐츠 기획 후 삽입 예정</div>
        <button>작성하기</button>
      </div>
    </div>
  );
};

export default WriteChemiStory;
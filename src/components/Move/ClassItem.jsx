import React from 'react';
// import MoveDate from "./../../data/moveData.json"
import { AiOutlineShareAlt } from 'react-icons/ai';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import styles from "./css/move.module.css"
import { useState,useRef } from 'react';


const ClassItem = ({classdata}) => {
  const link = useRef();

  const [isCopied, setIsCopied] = useState(false);

  const toClipboard = () => {
    if (!isCopied) {
      navigator.clipboard.writeText(link.current.innerHTML);
      setIsCopied(true);
      setTimeout(()=>{
        setIsCopied(false)}, 1500)
    }
  };
  
  

  return (
    <li className={styles.itemboxs}>
        
        <div className={styles.moveClassImg}>
        <img src={classdata.moveClassImg} alt={classdata.moveClassName}/>
        </div>
        <div className={styles.classDes}>

          <div className={styles.classname}>
            <h2>{classdata.moveClassName}</h2>
            </div>

          <div className={styles.classinfobox}>

           <div className={styles.classinfotitle}>교육 일정 : 
           <span className={styles.classinfo}> {classdata.moveClassDate}</span> </div>
           <div className={styles.classinfotitle}> 교육 시간 : 
           <span className={styles.classinfo}> {classdata.moveClassTime}</span></div>
          </div>
          
          </div>
        <div className={styles.buttonarea}>

            <span className={styles.url} ref={link}>
             {classdata.moveClassUrl}
            </span>
            <botton className={styles.copybutton} onClick={toClipboard}>
              {isCopied ? <BsFillCheckCircleFill className={styles.urlNoneClick}/>  : <AiOutlineShareAlt className={styles.urlClick}/>}
            </botton>
 
          {isCopied && <span className={styles.urlcopy}> URL 복사 완료! </span>}
    
        <button className={styles.button}><a href={classdata.moveClassUrl}>바로가기</a></button>
        </div>


        </li>


  );
};

export default ClassItem;

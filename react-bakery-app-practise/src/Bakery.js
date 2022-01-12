import { useEffect, useState, useRef } from "react";
import styles from "./Bakery.module.css";


const DoughBall = (props) => {
  const [doughBallSize, setDoughBallSize] = useState(50);
  const doughBallRef = useRef();
  // useEffect(() => {
  // // if(doughBallSize === 0){
  // //   doughBallRef.current.remove();
  // //   props.setDoughBallsCounter((count) => count - 1)

  // //   }}, [sth])
  
  return (
    <div id={props.id} className={styles.doughBall} onClick={() => {
      setDoughBallSize((size) => size - 5); 
      console.log(doughBallSize)
      }} style={{width: `${doughBallSize}px`, height: `${doughBallSize}px`}} ref={doughBallRef}
      ></div>
  )}
  

export const Bakery = () => {
  const [progress, setProgress] = useState(0);
  const [shouldFormDoughBalls, setShouldFormDoughBalls] = useState(false);
  const [doughBallsCounter, setDoughBallsCounter] = useState(0);
  const [flourAmount, setFlourAmount] = useState(100);
  const [doughBalls, setDoughBalls] = useState([]);
  const canStartFormingDoughBall = flourAmount >= 10;
  
  const width = `${progress * 100}%`;
  
  
  const handleClick = () => {
    setShouldFormDoughBalls((should) => !should);

  
  };

  
  useEffect(() => {
    
    if (shouldFormDoughBalls === false) {
      return;
    }
    
    const id = setInterval(() => {
      console.log("update progress");
      setProgress((oldProgress) => {
        if (oldProgress === 1) {
          setDoughBallsCounter((counter) => counter + 1)
          return 0;
        }
        if(oldProgress === 0){
          
          if(canStartFormingDoughBall){
            setFlourAmount((flour) => flour -10)}
            else {
              clearInterval(id);
              return oldProgress;
            };
          }
        return oldProgress + 0.25;
      });
    }, 100);
    
    return () => {
      clearInterval(id);
    };
    
  }, [shouldFormDoughBalls, canStartFormingDoughBall]);

  useEffect(() => {
   
    setDoughBalls((ball) => {
      ball[doughBallsCounter -1]={
        id: `dough-ball-${doughBallsCounter - 1}`,
      }       
      

      return [...ball]});
    console.log(doughBalls)
    console.log(doughBallsCounter)},
   [doughBallsCounter])


  return (
    <div>
      <h1>React Bakery</h1>
      <div className={styles.progressBar}>
        <div className={styles.greenProgressBar} style={{ width: width }} />
      </div>
      <button onClick={handleClick}>
        {shouldFormDoughBalls === false ? "Ulep ciasto" : "Zatrzymaj lepienie"}
      </button>
      {shouldFormDoughBalls && !canStartFormingDoughBall && (<span style={{color: 'red'}}>Za mało mąki</span>)}
      <p>Ilość mąki: {flourAmount}kg</p>
      <p>Liczba ulepionych ciastowych kul: {doughBallsCounter}</p>
      <div className={styles.doughBallWrapper}>
        {doughBalls.map((ball) => {
          return (<DoughBall
            key={ball.id}
            id={ball.id}
            numOfBalls={doughBalls.length}
            setDoughBallsCounter={setDoughBallsCounter}
            
          />)}
        )}



      </div>
      
    </div>
  );
};

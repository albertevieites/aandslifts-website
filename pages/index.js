import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const Home = () => {

  const boxRef = useRef(null)

  useEffect(() => {

    gsap.to(".box", {
      rotation: 27,
      x: 400,
      duration: 1
    })

  })
  return (
    <div className="box">
      <h1>Leading solutions in lift maintenance</h1>
      <div></div>
    </div>
  );
};

export default Home;

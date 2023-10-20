import { Loader } from "@react-three/drei";
import CanvasContainer from "./CanvasContainer";
import Experience from "./Experience";
import { SectionFive } from "./Sections/SectionFive";
import { SectionFour } from "./Sections/SectionFour";
import { SectionOne } from "./Sections/SectionOne";
import { SectionThree } from "./Sections/SectionThree";
import { SectionTwo } from "./Sections/SectionTwo";
import Lenis from "@studio-freight/lenis";

import { useProgress } from "@react-three/drei";
import { Suspense } from "react";

const LoadingScreen = () => {
  const { progress, active } = useProgress();

  return (
    <div className={`loading-screen ${active ? "" : "loading-screen--hidden"}`}>
      <div className="loading-screen__container">
        <h1 className="loading-screen__title">ENEFIT GREEN RECREATION</h1>
        <div className="progress__container">
          <div
            className="progress__bar"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

function App() {

    const lenis = new Lenis({
        duration: 2.2,
        easing: t => Math.min(1, 1.001 - Math.pow(2, -5 * t)),
        direction: 'vertical',
        gestureDirection: 'vertical',
        mouseMultiplier: 1,
      })
      
    function raf(time) {
        lenis.raf(time)
        requestAnimationFrame(raf)
    }
      
    requestAnimationFrame(raf)

    return (
        <main className="main" >
            <LoadingScreen />
            <div  className="experience">
                <Suspense>
                <CanvasContainer />
                </Suspense>
            </div>

            <SectionOne />
            <SectionTwo />
            <SectionThree />
            <SectionFour />
            <SectionFive />
            
        </main>
    )
}

export default App;
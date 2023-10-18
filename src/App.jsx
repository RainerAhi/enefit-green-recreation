import CanvasContainer from "./CanvasContainer";
import Experience from "./Experience";
import { SectionFive } from "./Sections/SectionFive";
import { SectionFour } from "./Sections/SectionFour";
import { SectionOne } from "./Sections/SectionOne";
import { SectionThree } from "./Sections/SectionThree";
import { SectionTwo } from "./Sections/SectionTwo";
import Lenis from "@studio-freight/lenis";

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
            <div  className="experience">
                <CanvasContainer />
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
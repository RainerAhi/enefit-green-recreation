import React from "react";

export const SectionTwo = () => {
    return (
        <section className="second-section" id="second-section" >
                <div className="second--main" >
                    <div className="second--div" >
                        <h1>TUULEENERGIA</h1>
                        <p>Enefit Greenile kuulub Eestis ja Leedus 22 tuuleparki ning neis töötab kokku 165 tuulikut. Tuuleparkide koguvõimsus on 398 MW ning need toodavad aastaga ligi 1 teravatt-tundi elektrit. Selle kogusega saaks varustada aasta jooksul rohkem kui 330 000 keskmise tarbimisega kodu. Kui võrrelda seda põlevkivist toodetava elektriga, jääb antud toodangumahu juures aastas õhku paiskamata ligikaudu 940 000 CO2 heitmeid.</p>
                        <div className="image--container" >
                            <img src="./wind-farm.png" />
                            <img src="./co2.png" />
                        </div>
                    </div>
                </div>
        </section>
    )
}
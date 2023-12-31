import { useEffect } from 'react';

function Section0() {

    function animOnLoad (className: string, animClassName: string, delay: number) {
        let animItem = document.getElementsByClassName(className) as HTMLCollectionOf<HTMLElement>;
        setTimeout( () => {
            for(let i = 0; i < animItem.length; i++) {
                animItem[i].classList.add(animClassName);
            }
        }, delay);
    }; 
    
    useEffect( () => {
        animOnLoad('mafia__costume', 'anim-costume', 1000);
        animOnLoad('logotype', 'anim-item', 1600);
        animOnLoad('boxes', 'anim-item', 2000);
        animOnLoad('section0__title', 'anim-item', 2400);
        animOnLoad('section0__subtitle', 'anim-item', 2800);
    }, []);

    return (
        <section className="section0">
            <div className="container">
                <div className="logotype">
                    <img src={require("../img/logo.png")} alt="logo" />
                </div>
                <div className="glow">
                    <div className="boxes">
                        <img src={require("../img/boxes.png")} alt="boxes" />
                    </div>
                    <div className="glow__img-1">
                        <img src={require("../img/glow1.png")} alt="glow" />
                    </div>
                </div>
                <div className="right__items">
                    <div className="mafia__costume m-right">
                        <img
                            src={require("../img/MafiaCostume_2022-3.png")}
                            alt="mafia-right"
                        />
                    </div>
                    <div className="dark__costume m-right">
                        <img
                            src={require("../img/Layer157-2.png")}
                            alt="dark"
                        />
                    </div>
                </div>
                <div className="left__items">
                    <div className="mafia__costume m-left">
                        <img
                            src={require("../img/MafiaCostume_2022-2.png")}
                            alt="mafia-left"
                        />
                    </div>
                    <div className="dark__costume m-left">
                        <img
                            src={require("../img/Layer157-1.png")}
                            alt="dark"
                        />
                    </div>
                </div>
                <div className="glow">
                    <div className="section0__title">
                        <h1 className="title">КОЛЛЕКЦИОННЫЕ ИЗДАНИЯ</h1>
                    </div>
                    <div className="section0__subtitle">
                        <p>
                            Побеждайте легко, побеждайте стильно с новыми
                            коллекционными изданиями «Аллодов Онлайн»!
                        </p>
                    </div>
                    <div className="dark__title">
                        <img src={require("../img/Layer157-3.png")} alt="glow" />
                    </div>
                    <div className="blue__glow">
                        <img src={require("../img/BlueGlow3.png")} alt="glow" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Section0;

import Table from "./Table";

function Section1() {
    return (
        <section className="section1">
            <div className="container">
                <div className="section1__flex">
                    <div className="section1__flex-item">
                        <div className="section1_img-container">
                            <div className="section1_img">
                                <img src={require('../img/Vito1.png')} alt="vito" />
                            </div>
                        </div>
                    </div>
                    <div className="section1__flex-item">
                        <div className="section1__title">
                            <h2 className="title">
                                НАБОР «ПОСЫЛКА С КОНТРАБАНДОЙ»
                            </h2>
                        </div>
                        <Table />
                        <div className="box_container">
                            <div className="box_image">
                                <img
                                    src={require("../img/box.png")}
                                    alt="box"
                                />
                            </div>
                            <div className="box_positions">
                                <div className="box_price">
                                    <p>399 &#8381;</p>
                                </div>
                                <div className="buy_btn">
                                    <p>ПРИОБРЕСТИ</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Section1;

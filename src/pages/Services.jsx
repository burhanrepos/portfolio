import Service from "../pages/Service";
import ServiceData from "../pages/ServiceData";
import "../pages/Services.css";
import Menu from "./Menu";
import Footer from "./Footer";
const Services = () => {
    return (
        <>
            <div className="menu">
                <Menu page="services" />
            </div>

            <div className="services__page" id="service">
                <div className="servicePage__top">
                    <h1 className="section__title">Ser<span>vi</span>ces</h1>
                </div>

                <div className="servicePage__body">
                    {

                        ServiceData.map((service, index) => {
                            return (
                                <Service key={index} src={service.src} title={service.title} desc={service.desc} />
                            );
                        })

                    }
                </div>
            </div>
            {/* <Footer/> */}
        </>
    );
}
export default Services;
import Menu from "./Menu";
import Footer from "./Footer";
import Contact_Item from "../pages/Contact_Item";
import ContactData from "../pages/ContactData";
import "../pages/Contact.css";

const Contact = () => {
    return (
        <>
            <div className="menu">
                <Menu page="contact" />
            </div>
            <div className="contact__page" id="contact">
                <h1 className="section__title">Contact<span>Info</span></h1>
                <div className="contact__body">
                    {
                        ContactData.map((value,index)=>{
                            return(
                            <Contact_Item key={value.id} src={value.src} title={value.title} para1={value.para1} para2={value.para2} />
                            );
                        })
                    }
                </div>
            </div>
                <Footer/>
        </>
    );
}
export default Contact;
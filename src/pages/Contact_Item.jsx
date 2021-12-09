const Contact_Item = (props) => {
    return (
        <div className="contactpage__container">
            <img src={props.src} alt="" />
            <div>
                <h2>{props.title}</h2>
                <p>{props.para1}</p>
                <p className="copyR">{props.para2}</p>
            </div>
        </div>
    );
}
export default Contact_Item;
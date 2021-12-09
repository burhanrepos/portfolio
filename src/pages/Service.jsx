const Service = (props) => {
    return (
        <div className="serviePage__item item">
            <img src={props.src} alt="Error" />
            <h3>{props.title}</h3><br/>
            <p>{props.desc}</p>
        </div>

    );
}
export default Service;
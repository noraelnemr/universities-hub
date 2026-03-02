function Info(props) {
    return (
      <div className="Info">
        <h3>
          {props.title}
          <p>{props.info}</p>
        </h3>
      </div>
    );
  }
  
  export default Info;
  
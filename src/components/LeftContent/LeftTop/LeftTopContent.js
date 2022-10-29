import "./LeftTopContent.css";

function LeftTopContent(props) {
  
  return (
    <div className="LeftTopContent">
      <div>
        <img src={props.data1.image1} alt="imag" className="image" />
      </div>
      <div className="child">
        <p>
          {props.data1.head} <br />
          {props.data1.price}
        </p>
        <div className={`prof ${props.data1.profLoss.includes('-')?"profActive":""}`}>{props.data1.profLoss}</div>
      </div>
    </div>
  );
}

export default LeftTopContent;

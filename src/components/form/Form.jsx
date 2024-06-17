import './form.css';

function Form(props) {
  return (
    <div className="form">
      <label htmlFor={props.name} className="label">
        {props.label} :
      </label>
      {props.type === "textarea" ? (
        <textarea name={props.name} className="input" rows="10" />
      ) : (
        <input type={props.type} className="input" />
      )}
    </div>
  );
  
}

export default Form;
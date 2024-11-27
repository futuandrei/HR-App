import './Button.css'; 

function Button({ text, click, type = 'button', variant }) {
    // return <button type={type} onClick={click}>{text}</button>
    return (
        <button 
        className={`button ${variant === 'primary' ? 'button-primary': 'button-secondary'}`} type={type} onClick={click}>{text}</button>
    );
}

export default Button;
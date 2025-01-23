/* eslint-disable react/prop-types */
function Btn({ text, func }) {
    return (
        <button onClick={func} className="btn btn-success">{text}</button>
    )
}

export default Btn;
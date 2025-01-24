/* eslint-disable react/prop-types */
function Input({ v, n, setText }) {

    console.log(v);

    return (
        <>
            <input onChange={(event) => {
                setText(event.target.value)
            }} style={{ display: 'flex' }} type="text" placeholder="Type text" />
        </>
    );
}

export default Input;
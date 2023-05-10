function MyButton({title, handleClick}){ 
    return(
        <button onClick={handleClick}>{title}</button>
    )
}

export default MyButton
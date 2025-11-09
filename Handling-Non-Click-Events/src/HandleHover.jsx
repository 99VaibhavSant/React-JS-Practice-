function MouseHover(){
    console.log("Mouse were hover")
}

function HandleHover(){
    return(
        <div>
            <button onMouseOver={MouseHover}>Click Me</button>
        </div>
    )
}

export default HandleHover
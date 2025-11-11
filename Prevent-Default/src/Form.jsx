function handleFormSumit(event){
    event.preventDefault()
    console.log("form were submit")
}

function Form(){
    return(
        <form action="">
            <input type="text"  placeholder="Write Somthing"/>
            <button onClick={handleFormSumit}>Submit</button>
        </form>
    )
}

export default Form
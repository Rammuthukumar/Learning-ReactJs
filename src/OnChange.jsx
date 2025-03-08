import React, {useState} from "react";

function OnChange(){
    const [name, setName] = useState();
    const [quantity, setQuantity] = useState(1);
    const [comment, setComment] = useState();
    const [paymentType, setPaymentType] = useState("Cash on Delivery");
    const [shippingType, setShippingType] = useState("Delivery");

    function handleNameChange(event){
        setName(event.target.value);
    }

    function handleQuantityChange(event){
        setQuantity(event.target.value);
    }

    function handleCommentChange(event){
        setComment(event.target.value);
    }

    return(
        <>
            <input value={name} onChange={handleNameChange}/>
            <p>Name: {name}</p>

            <input type="number" value={quantity} onChange={handleQuantityChange}/>
            <p>Quantity: {quantity}</p>
            
            <input type="text" onChange={handleCommentChange} />
            <p>Comment: {comment}</p>

           
        </>
    )
}
export default OnChange;
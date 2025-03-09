import React, {useState} from 'react'

function ColorPicker(){
    const [color, setColor] = useState('#FFFFFF')

    function handleColorChange(event){
        setColor(event.target.value)
    }
    return(
        <div className='container'>
            <h1 className='heading'>Color picker</h1>
            <div className='color-background' style={{backgroundColor: color}}>
                <p>Selected color : {color}</p>
            </div>
            <label >Select a Color</label>
            <input type="color" value={color} onChange={handleColorChange}/>
        </div>
    )
}
export default ColorPicker
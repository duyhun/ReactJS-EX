import { useState, useEffect } from "react";

const Selector = () => {
    const [selectedCar, setSelectedCar] = useState('0');
    const [selectedColor, setValueSelectedColor] = useState('0');
    useEffect(() => {
        switch (selectedCar) {
            case '0':
                setSelectedCar('Mercedes C300');
                break;
            case '1':
                setSelectedCar('Kia Seltos');
                break;
            case '2':
                setSelectedCar('Kia Sorento');
                break;
            case '4':
                setSelectedCar('Mercedes S680');
                break;
            case '5':
                setSelectedCar('Mercedes S600');
                break;
            case '6':
                setSelectedCar('Mercedes G63');
                break;
            default:
        }
    }, [selectedCar])
    useEffect(() => {
        switch (selectedColor) {
            case '0':
                setValueSelectedColor('Black');
                break;
            case '1':
                setValueSelectedColor('Blue');
                break;
            case '2':
                setValueSelectedColor('Pink');
                break;
            case '4':
                setValueSelectedColor('Green');
                break;
            case '5':
                setValueSelectedColor('Red');
                break;
            case '6':
                setValueSelectedColor('Marin');
                break;
            default:
        }
    }, [selectedColor])
    const choiceCar = (e)=>{
        setSelectedCar(e.target.value); 
    }
    const choiceColor = (e) =>{
        setValueSelectedColor(e.target.value);
    }

    return(
        <div className="container text-center">
            <h1> Select your car </h1>
            <select className="mb-5" onChange={(e)=> choiceCar(e) }>
                <option value={'Mercedes C300'}> Mercedes C300 </option>
                <option value={'Kia Seltos'}> Kia Seltos </option>
                <option value={'Kia Sorento'}> Kia Sorento </option>
                <option value={'Mercedes S680'}> Mercedes S680 </option>
                <option value={'Mercedes S600'}> Mercedes S600 </option>
                <option value={'Mercedes G63'}> Mercedes G63</option>
            </select>
            <br/>
            <select onChange={(e)=> choiceColor(e) }>
                <option value={'Black'}> Black </option>
                <option value={'Blue'}>Blue </option>
                <option value={'Pink'}> Pink </option>
                <option value={'Green'}> Green </option>
                <option value={'Red'}> Red </option>
                <option value={'Marin'}> Marin</option>
            </select>
            <h1>
                You selected a {selectedColor} - {selectedCar}; 
            </h1>
        </div>
    )
}
export default Selector;
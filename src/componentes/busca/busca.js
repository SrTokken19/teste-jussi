import React, {useState} from 'react'
import lupa from '../header/img/search.svg'
import './busca.css'
import useDebounce from '../useDebounce'

const Busca = ({value, onChange}) => {

    const [displayValue, setDisplayValue] = useState(value);
    const debouncedChange = useDebounce(onChange, 500);

    function handleChange(event){
        setDisplayValue(event.target.value);
        debouncedChange(event.target.value);
    }

    return (
        <div className='busca'>
            <input type='text' className='busca__input' placeholder='Buscar' value={displayValue} onChange={handleChange}/>
            <button className='busca__btn' ><img src={lupa} /></button>
        </div>
    )
}

export default Busca;
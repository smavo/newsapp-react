import React, {useState} from 'react'

function useSelect(setInicial, opciones) {

    // State del custom hook
    const [state, setState] = useState(setInicial);

    const selectCategories = () => (
        <select
            value={state}
            onChange={e=> setState(e.target.value)}
        >
            {opciones.map(opcion => (
                <option key={opcion.value} value={opcion.value}>{opcion.label}</option>
            ))}
        </select>
    )

    return [state, selectCategories]
}

export default useSelect;

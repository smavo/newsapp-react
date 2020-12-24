import React, { Fragment } from 'react'
import styled from '@emotion/styled';
import useSelect from '../hooks/useSelect';

const Seccion1 = styled.div`
    max-width:900px;
    display: grid;
    grid-template-columns: 1fr;

    h3 {
        font-family: 'PT Serif', serif;
        font-size: 30px;
        margin: 20px 0 10px 0;
    }

    @media (max-width:900px) {
        h3 {
            font-size:26px;
            margin: 20px 20px 10px 20px;
        }
    }

    @media (max-width:600px) {
        h3 {
            font-size:18px;
            margin: 15px 15px 10px 15px;
        }
    }
`

const Boton = styled.button`
    font-family: 'PT Serif', serif;
    font-size:20px;
    background-color:#17181C;
    color: white;
    width: 200px;
    border-radius: 10px;
    outline:none;
    margin: 10px 0;
`

const Selector = styled.div`
    margin: 0 0 10px 0;

    select {
        font-family: 'Noto Sans JP', sans-serif;
        font-size: 18px;
        text-transform: uppercase;
        width: 70%;
        display: block;
        padding: 10px;
        appearance: none;
        border-radius: 10px;
        border: none;
    }
`

function Form() {

const opciones = [
    { value: 'general', label: 'General'},
    { value: 'business', label: 'Negocios'},
    { value: 'entertainment', label: 'Entretenimiento'},
    { value: 'health', label: 'Salud'},
    { value: 'science', label: 'Ciencia'},
    { value: 'sports', label: 'Deportes'},
    { value: 'technology', label: 'Tecnología'}
]

    // Utilizar hook
    const [categoria, SelectNoticias] = useSelect('general', opciones)

    return (
        <Fragment>
            <Seccion1>
                <h3>Encuentra Noticias por Categorias</h3>
                <Selector>
                    <SelectNoticias />
                    <Boton type="submit"
                        value="Buscar">
                        Buscar
                    </Boton>
                </Selector>
            </Seccion1>

        </Fragment>
    )
}

export default Form

import React, { Fragment } from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const Encabezado = styled.div`
    font-family: 'Noto Sans JP', sans-serif;
    letter-spacing:1px;
    color: white;
    text-align:center;
   
    text-transform:uppercase;
    background-color: #17181C;
    padding: 10px 10px ;
    h2{
        font-size:32px;
        margin: 10px
    }
    @media (max-width:900px) {
        h2{
            font-size: 28px;
        }
    }
    @media (max-width:600px) {
        h2{
            font-size: 20px;
        }
    }
`

function Header({titulo}) {
    return(
        <Fragment>
            <Encabezado>
                <h2> {titulo} </h2>
            </Encabezado>
        </Fragment>
    )
}

Header.propTypes = {
    titulo: PropTypes.string.isRequired
}

export default Header;

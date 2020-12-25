import React, { Fragment } from 'react'
import styled from '@emotion/styled';
import noFoundImg from '../noFound.jpg';
import PropTypes from 'prop-types';

const Seccion = styled.div`
    max-width:900px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 10px;
    grid-row-gap: 10px;
    /*background-color: #3f72af;*/
    /*border: solid 2px red;*/

    @media (max-width:900px) {
        grid-template-columns: 1fr 1fr;
        grid-row-gap: 10px;
        margin:0 20px;
    }

    @media (max-width:600px) {
        grid-template-columns: 1fr;
        grid-row-gap: 10px;
        margin:0 15px;
    }
`

const New = styled.div`
    /*border: solid 2px green;*/
    padding: 10px 10px;
    text-align: justify;
    background-color: #f9f7f7;
    border-radius: 10px;

    p{  
        font-family: 'PT Serif', serif;
        margin: 10px 0 5px 0 ;
    }
`

const Card = styled.figure`
    align-items:center;
    margin: 0;

    img{
        width: 100%;
        border-radius: 10px;
    }

    span{
        font-weight:bold;
    }
`

function News({ newsLists }) {

    return (
        <Fragment>
            <Seccion>
                {newsLists.map(noticia => (
                    <New key={noticia.url} noticia={noticia}>
                        <Card>
                            {   noticia.urlToImage !== 'null'
                                ? <img src={noticia.urlToImage} alt={noticia.title} />
                                : <img src={noFoundImg} alt="Imagen" />
                            }
                        </Card>
                        <h3>{noticia.title}</h3>
                        <p>{noticia.content}</p>
                        <a href={noticia.url} target="_blank"
                            rel="noopener noreferrer" 
                        >Ver Noticia </a>
                    </New>
                ))}
            </Seccion>
        </Fragment>
    )
}

News.prototype = {
    newsLists: PropTypes.array.isRequired
}

export default News;

import React, { Fragment } from 'react'
import styled from '@emotion/styled';
import noFoundImg from '../noFound.jpg'

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

function News() {
    return (
        <Fragment>
            <Seccion>
                <New>
                    <Card>
                        <img src={noFoundImg} alt="nombre" />
                    </Card>
                    <h3>Where can I get some?</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </New>
                <New>
                    <Card>
                        <img src={noFoundImg} alt="nombre" />
                    </Card>
                    <h3>Where can I get some?</h3>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
                </New>
                <New>
                    <p>Demo</p>
                </New>
                <New>
                    <p>Demo</p>
                </New>
                <New>
                    <p>Demo</p>
                </New>
                <New>
                    <Card>
                        <img src={noFoundImg} alt="nombre" />
                    </Card>
                    <p>Demo</p>
                </New>
            </Seccion>
        </Fragment>
    )
}

export default News

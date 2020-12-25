import React, { Fragment, useState, useEffect } from 'react';
import Header from './Components/Header';
import Form from './Components/Form';
import styled from '@emotion/styled';
import NewsList from './Components/NewsList';

const Content = styled.div`
    max-width:900px;
    margin:0 auto 30px auto;
    display: grid;
    grid-template-columns: 1fr;
    grid-column-gap: 10px;
    object-fit: contain;
`

function App() {

  // definir la categoria y noticias
  const [categoria, setCategoria] = useState('');
  const [noticias, guardarNoticias] = useState([]);


  useEffect(() => {

    const API_URL = process.env.REACT_APP_API_URL;
    const API_KEY = process.env.REACT_APP_API_KEY;

    const consultarApi = async () => {

      const url = `${API_URL}?country=mx&category=${categoria}&apiKey=${API_KEY}`;
      const respuesta = await fetch(url);
      const noticias = await respuesta.json();
      //console.log(noticias)
      guardarNoticias(noticias.articles)
    }
    consultarApi();
  }, [categoria])

  return (
    <Fragment>
      <Header titulo="News App 🚀" />
      <Content>
        <Form
          selecCategoria={setCategoria}
        />
        <NewsList
          newsLists={noticias}
        />
      </Content>

    </Fragment>
  );
}

export default App;

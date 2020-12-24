import React from 'react';
import Header from './Components/Header';
import Form from './Components/Form';
import styled from '@emotion/styled';
import News from './Components/News';

const Content = styled.div`
    max-width:900px;
    margin:0 auto 30px auto;
    display: grid;
    grid-template-columns: 1fr;
    grid-column-gap: 10px;
    object-fit: contain;
`

function App() {
  return (
    <>
      <Header titulo="News App 🚀"/>
      <Content>
        <Form />
        <News />
      </Content>

    </>
  );
}

export default App;

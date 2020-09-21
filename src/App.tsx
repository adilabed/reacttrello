import React from 'react';
import { Card } from "./Card";
import { Column } from "./Column";
import { AppContainer } from './styles'

function App() {
  return (
    <AppContainer>
      <Column text={"TO DO"}>
        <Card text={"Generate app data"} />
      </Column>
      <Column text={"In Progress"}>
        <Card text={"Learn Typescript"} />
      </Column>
      <Column text={"Done"}>
        <Card text={"Begin to use static typing"} />
      </Column>
    </AppContainer>
  );
}

export default App;

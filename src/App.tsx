import React from 'react';
import { Card } from "./Card";
import { Column } from "./Column";
import { AppContainer } from './styles'
import {AddNewItem} from "./AddNewItem";

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
      <AddNewItem onAdd={console.log} toggleButtonText={'+Add anothr list'}></AddNewItem>
    </AppContainer>
  );
}

export default App;

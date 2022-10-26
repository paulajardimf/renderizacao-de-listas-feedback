import { useState } from "react";
import {
  InputContainer,
  ListaContainer,
  ListaTarefasContainer,
  Tarefa,
  TaskInput,
  AddTaskButton,
  RemoveButton,
  LinhaHorizontal
} from "./styled";
import bin from "../../assets/bin.png";
import TarefasConcluidas from "./TarefasConcluidas/TarefasConcluidas";

export function ListaTarefas() {
  const [lista, setLista] = useState(["Fazer exercícios", "Estudar React"]);
  const [novaTarefa, setNovaTarefa] = useState("");
  const [listaConcluida, setListaConcluida] = useState([])

  const renderizaLista = lista.map((tarefa, index) => {
    return (
      <Tarefa key={index}>
        <p>{tarefa}</p>
        <RemoveButton onClick={() => removeTarefa(index)}>
          <img src={bin} alt="" width="16px" />
        </RemoveButton>
      </Tarefa>
    );
  })

  const onChangeTarefa = (event) => {
    setNovaTarefa(event.target.value);
  };

  const adicionaTarefa = () => {
    const novaLista = [...lista, novaTarefa];
    setLista(novaLista);
    setNovaTarefa("");
  };

  const removeTarefa = (indexTarefa) => {
    const itemConcluido = lista.filter((item, index) => index === indexTarefa);
    const listaFiltrada = lista.filter((item, index) => index !== indexTarefa);
    setLista(listaFiltrada);
    setListaConcluida([...listaConcluida, itemConcluido])
  };

  const adicionaTarefaTecla = (event) => {
    if (event.charCode === 13) {
      adicionaTarefa()
    }
  }

  return (
    <ListaTarefasContainer>
      <InputContainer>
        <TaskInput
          placeholder="Digite aqui uma tarefa"
          value={novaTarefa}
          onChange={onChangeTarefa}
          onKeyPress={(event) => adicionaTarefaTecla(event)}
        />
        <AddTaskButton onClick={adicionaTarefa}>Adicionar</AddTaskButton>
      </InputContainer>
      <ListaContainer>
        <ul>{renderizaLista}</ul>
      </ListaContainer>
      <LinhaHorizontal/>
      <TarefasConcluidas listaConcluida={listaConcluida}/>
    </ListaTarefasContainer>
  );
}

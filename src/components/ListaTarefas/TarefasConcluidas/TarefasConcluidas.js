import { ListaContainer, Tarefa } from "./styled";

export default function TarefasConcluidas(props) {
  return (
    <div>
      <ListaContainer>
        <ul>
          {props.listaConcluida.map((tarefa, index) => {
            return (
              <Tarefa key={index}>
                <s>{tarefa}</s>
              </Tarefa>
            );
          })}
        </ul>
      </ListaContainer>
    </div>
  );
}

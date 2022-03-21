import ListaTarefas from "../../model/ListaTarefas";
import ListaItem from "./ListaItem";
import ListaBotao from "./ListaBotao"
import ListaRodape from "./ListaRodape";

interface ListaProps {
  tarefas: ListaTarefas;
  mudou: (tarefas: ListaTarefas) => void;
}

export default function Lista(props: ListaProps) {
  const { tarefas } = props;

  function renderizarTarefas() {
    return tarefas.itens.map((tarefa) => {
      return (
        <ListaItem
          key={tarefa.id}
          valor={tarefa.descricao}
          concluido={tarefa.concluida}
          alterarStatus={() => {
            const tarefaModificada = tarefa.alternarStatus();
            const novaLista = tarefas.modificarTarefa(tarefaModificada);
            console.log(tarefaModificada)
            props.mudou(novaLista);
          }}
        />
      );
    });
  }

  return (
    <div
      className={`
    flex w-3/5 items-start relative -top-14
    `}
    >
      <ul
        className={`
        absolute
    w-full list-none
    bg-white shadow-lg
    `}
      >
        {renderizarTarefas()}
        <ListaRodape tarefas={props.tarefas} mudou={props.mudou} />
      </ul>
    </div>
  );
}

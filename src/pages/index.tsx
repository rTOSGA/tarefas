import { useState } from "react";
import Lista from "../components/lista/Lista"
import TarefasIniciais from "../data/mock"
import Cabecalho from "../components/template/Cabecalho";
import Conteudo from "../components/template/Conteudo";
import Formulario from "../components/formulario/Formulario";
import Tarefa from "../model/Tarefa";
import ListaTarefas from "../model/ListaTarefas";

export default function Home() {
  const [tarefas, setTarefas] = useState(TarefasIniciais)

    function mudou(novasTarefas: ListaTarefas){
      setTarefas(novasTarefas)
    }

  function novaTarefaCriada(novaTarefa: Tarefa){
    setTarefas(tarefas.adicionarTarefa(novaTarefa))
  }

  return (
    <div className="flex flex-col bg-gray-300 h-screen">
      <Cabecalho>
        <Formulario novaTarefaCriada={novaTarefaCriada} ></Formulario>
      </Cabecalho>
      <Conteudo>
      <Lista tarefas={tarefas} mudou={mudou}></Lista>
      </Conteudo>
    </div>
  );
}

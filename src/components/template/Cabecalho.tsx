export default function Cabecalho(props) {
  return (
    <div className="flex bg-img-tarefas bg-no-repeat bg-cover h-1/3">
      <div className={`flex flex-1 h-full justify-center items-center bg-gradient-to-r from-purple-600 via-transparent to-blue-600 `}>
        {props.children}
      </div>
    </div>
  );
}

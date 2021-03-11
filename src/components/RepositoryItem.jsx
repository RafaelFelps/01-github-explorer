export function RepositoryItem(props) {
  return (
    <li>
      <strong>{props.repository.name ?? "Sem nome"}</strong>
      <p> {props.repository.description} </p>
      <a href={props.repository.link}> Acessar Repositorio </a>
    </li>
  );
}

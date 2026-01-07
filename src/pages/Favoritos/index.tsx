import { useState } from "react";
import { Link } from "react-router-dom"; // Opcional, para linkar de volta
import "./favoritos.css";

// Reutilize a interface que criamos antes
interface Filme {
  id: number;
  title: string;
  poster_path: string;
  // ... outros campos se necessário
}

function Favoritos() {
  // Inicializamos o estado já buscando do localStorage (Lazy Initializer)
  // Isso resolve o erro de "cascading renders" e tipa corretamente como Filme[]
  const [filmes, setFilmes] = useState<Filme[]>(() => {
    const minhaLista = localStorage.getItem("@primeflix");
    return JSON.parse(minhaLista || "[]");
  });

  // Se você precisar sincronizar o localStorage em outros momentos, use o useEffect,
  // mas para o carregamento inicial, a lógica acima é a melhor prática em 2026.

  function excluirFilme(id: number) {
    const filtroFilmes = filmes.filter((item) => {
      return item.id !== id;
    });
    setFilmes(filtroFilmes);
    localStorage.setItem("@primeflix", JSON.stringify(filtroFilmes));
  }

  return (
    <div className="meus-favoritos">
      <h1>Meus Favoritos</h1>

      {filmes.length === 0 && (
        <span>Você não possui nenhum filme salvo :( </span>
      )}

      <ul>
        {filmes.map((item) => {
          return (
            <li key={item.id}>
              <span>{item.title}</span>
              <div className="btn-favoritos">
                <Link to={`/filme/${item.id}`}>Ver detalhes</Link>
                <button onClick={() => excluirFilme(item.id)}>Excluir</button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Favoritos;

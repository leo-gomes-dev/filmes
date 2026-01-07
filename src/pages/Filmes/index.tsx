import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import api from "../../services/api";
import { Link } from "react-router-dom";

import "./filme.css";

interface Filme {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  backdrop_path: string;
  vote_average: number;
  cast: string[];
}

function Filmes() {
  const [filme, setFilme] = useState<Filme | null>(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    async function loadFilme() {
      await api
        .get(`/movie/${id}`)
        .then((res) => {
          setFilme(res.data);
          setLoading(false);
        })
        .catch(() => {
          setFilme(null);
          setLoading(true);
        });
    }

    loadFilme();

    return () => {
      setFilme(null);
      setLoading(true);
    };
  }, [id]);

  if (loading) {
    return (
      <div className="loading">
        <h1>Carregando Detalhes...</h1>
      </div>
    );
  }

  return (
    <div className="filme">
      <div className="area-voltar">
        <Link to="/" className="btn-voltar">
          ← Voltar
        </Link>
      </div>
      <h1>{filme?.title}</h1>
      <img
        src={`https://image.tmdb.org/t/p/w500${filme?.backdrop_path}`}
        alt={filme?.title}
      />

      <h3>Sinopse</h3>
      <span>{filme?.overview}</span>
      <strong>Avaliação: {filme?.vote_average} /10</strong>
      {/* Grupo de botões de ação */}
      <div className="btn-acao">
        <button className="btn-salvar">Salvar</button>
        <a
          href={`youtube.com{filme?.title} Trailer`}
          target="_blank"
          rel="external"
          className="btn-trailer"
        >
          Trailer
        </a>
      </div>
    </div>
  );
}

export default Filmes;

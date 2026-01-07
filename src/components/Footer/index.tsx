import "./footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="text-apoio">
        <h3>☕ Gostou do projeto?</h3>
        <p>Se este trabalho te ajudou, considere me pagar um café!</p>
      </div>
      <a href="https://mpago.la/1kz2Yay" target="_blank" className="ask-coffee">
        <span>☕</span>
        Me paga um café?
      </a>

      <div className="footer-content">
        <p>
          By{" "}
          <a href="https://leogomesdev.com" target="_blank" rel="noreferrer">
            Leo Gomes Dev
          </a>
        </p>
        <span>© 2026 Prime - Todos os direitos reservados.</span>
      </div>
    </footer>
  );
}

export default Footer;

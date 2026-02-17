import '../App.css';

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {year} | Matthew Chandran | Built with React ⚛️</p>
      </div>
    </footer>
  );
}

export default Footer;

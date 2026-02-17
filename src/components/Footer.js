import '../App.css';

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="time-display">
      {year}
    </footer>
  );
}

export default Footer;

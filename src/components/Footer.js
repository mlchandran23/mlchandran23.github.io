function Footer() {
  return (
    <footer className="bg-dark text-light mt-5 border-top border-success">
      <div className="container py-4 text-center">
        <h6 className="fw-bold mb-1">Matt Chandran</h6>
        <p className="small text-secondary mb-2">
          Computer Science Student | Aspiring For Career in Cybersecurity
        </p>
        <hr className="border-secondary my-3" />
        <div className="small text-secondary">
          © {new Date().getFullYear()} Matthew Chandran | Built with React ⚛️ | Last Updated: 24 March 2026
        </div>
      </div>
    </footer>
  );
}

export default Footer;
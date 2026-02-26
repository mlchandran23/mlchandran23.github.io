import { useEffect } from "react";
import ContactCard from "../components/ContactCard";

function Contact() {
  useEffect(() => {
    document.title = "Contact | Matt Chandran Portfolio";
  }, []);

  const contacts = [
    { label: "Email", value: "mattchandran23@gmail.com", link: "mailto:mattchandran23@gmail.com" },
    { label: "LinkedIn", value: "Matthew Chandran", link: "https://www.linkedin.com/in/matthew-chandran-18bb56384/" },
    { label: "GitHub", value: "mlchandran23", link: "https://github.com/mlchandran23" },
  ];

  return (
    <div className="container my-5">
      <h2 className="mb-4 text-center text-light">Contacts</h2>
      <p className="lead text-center mb-5 text-secondary">
        Actively seeking cybersecurity internship opportunities.
      </p>

      <div className="row g-4 justify-content-center">
        {contacts.map((item, idx) => (
          <ContactCard 
            key={idx} 
            label={item.label} 
            value={item.value} 
            link={item.link} 
          />
        ))}
      </div>
    </div>
  );
}

export default Contact;
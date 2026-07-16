export default function Navbar() {
  return (
    <nav className="navbar">
      <a href="#home" className="logo">
        Vinay Yalamanchi
      </a>

      <div className="nav-links">
        <a href="#about">About</a>
        <a href="#experience">Experience</a>
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a
          href="/Vinay_Yalamanchi_Resume.pdf"
          target="_blank"
          rel="noreferrer"
        >
          Resume
        </a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}
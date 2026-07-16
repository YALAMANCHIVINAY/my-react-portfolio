export default function Navbar() {
  return (
    <nav className="navbar">
      <a className="logo" href="#home">
        Vinay Yalamanchi
      </a>

      <div className="nav-links">
        <a href="#projects">Work</a>
        <a href="#about">About</a>
        <a href="#experience">Experience</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}
const Header = () => { 
  return (
    <div className="header">
      <h1>
        <a href="/">
          <img src="/images/logo.png" alt="logo" />
        </a>
      </h1>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </div>
  );
}
export default Header;
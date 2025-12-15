function Header(props) {
  const titles = props.titles;

  return (
    <>
      <header>
        <ul className="header__ul">
          <li>{titles[0]}</li>
          <li>{titles[1]}</li>
          <li>{titles[2]}</li>
        </ul>
      </header>
    </>
  );
}

export default Header;

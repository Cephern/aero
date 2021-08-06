import "../css/Nav.css";

const Nav = () => {
  return (
    <nav>
      <ul className="main_nav">
        <li>Главная</li>
        <li>Документы</li>
        <li>Авиационные Новости</li>
        <li>Информационный Блок</li>
        <li>Наша Жизнь</li>
        <li>Проф. Актив</li>
        <li>О Нас</li>
      </ul>

      <ul className="admin_nav">
        <li>Добавить Новость</li>
        <li>Выйти</li>
      </ul>
    </nav>
  );
};

export default Nav;

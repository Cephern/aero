import Nav from "../Nav";

import "../../css/AeroNews.css";
import News from "../News";
import Airplane from "../Airplane";

const AeroNews = () => {
  return (
    <div id="aeroNews">
      <Nav />
      <Airplane />
      <main>
        <h2>Авиационные Новости</h2>

        <section className="news">
          <News
            titleData={"Первая новость сайта!"}
            importanceData={"Обычная"}
            publishedData={"17:50 04.08.2021"}
          />
          <News
            titleData={"А вот и вторая :)"}
            importanceData={"Обычная"}
            publishedData={"17:50 04.08.2021"}
          />
        </section>
      </main>
    </div>
  );
};

export default AeroNews;

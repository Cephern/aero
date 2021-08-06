const News = ({ titleData, importanceData, publishedData }) => {
  return (
    <article className="theNews_article">
      <div className="left_content">
        <div className="theNews_info">
          <p className="title">Заголовок</p>
          <p className="titleData">{titleData}</p>
          <p className="importance">Важность</p>
          <p className="importanceData">{importanceData}</p>
          <p className="published">Опубликованно</p>
          <p className="publishedData">{publishedData}</p>
        </div>

        <button>читать полностью</button>
      </div>

      <div className="theNews">
        <div className="theNews_main">
          <h3>Первая Новость Сайта!</h3>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
            minima repudiandae dolor sint mollitia debitis velit quas, odio
            soluta quae fugit neque laborum ex similique ab laboriosam aut eum!
            Officiis porro qui hic deserunt, ipsam dolorum doloribus optio iure
            dolore, minus autem ducimus. Repellat dolor fuga voluptatibus
            perspiciatis voluptate at quis dolorem molestiae laudantium rerum
            deserunt placeat iure assumenda enim delectus consequuntur, a vel
            molestias, ullam quos facilis eaque maxime distinctio vitae. Maxime
            ex quidem sapiente reiciendis facilis tempora harum asperiores.
            Blanditiis magni cupiditate neque optio sequi quam, commodi modi
            nulla aliquid minus alias cum deleniti ipsa mollitia, animi culpa
            laboriosam ducimus odit. Dolorem veniam, ut qui quia laudantium quae
            voluptate minus officia autem consequatur perferendis distinctio,
            incidunt corrupti magnam optio a doloremque ipsum iusto? Quidem
            repellendus eaque tempore odio, nobis ducimus, quod voluptatibus
            iusto, quam culpa minus vel beatae? Enim nam eum voluptatum
            repudiandae, ad repellat error. Accusamus porro esse, facilis,
            consectetur fuga et minima nulla corrupti provident, cum quidem.
            Dignissimos ratione pariatur autem eveniet quis harum repellat, nemo
            animi at, nostrum velit veritatis ea? Placeat mollitia in neque,
            odit eos sit dolorem ipsam quasi consequatur voluptatem facilis
            dolor dolores sequi hic sunt voluptate accusamus maxime omnis sint
            sed!
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint
            similique exercitationem non, beatae amet rerum vitae soluta
            voluptatem necessitatibus temporibus nulla sunt eos, dolore odit
            cupiditate nostrum corporis reiciendis! Nostrum temporibus assumenda
            nemo inventore iusto quia voluptatibus itaque alias? Nam, illo!
            Reiciendis ex in expedita error! Perspiciatis unde ab cupiditate
            ratione sunt, recusandae earum eligendi itaque voluptatibus
            corrupti, nisi quae consequuntur accusamus officiis quas repellat,
            eos laudantium! Accusamus accusantium, nesciunt error assumenda
            harum similique in quidem consectetur facilis nemo, odit, corporis
            ab soluta illo reiciendis. Quibusdam dignissimos distinctio minima
            rerum, ea deleniti earum quas fuga molestias aut commodi suscipit
            odio dicta totam id. Maiores, et. Blanditiis autem maiores, aliquam,
            perspiciatis quisquam non mollitia tempora, minus nemo possimus
            tenetur iusto iure sit vel distinctio voluptatem id. Delectus
            mollitia iure facilis voluptas? Doloremque eligendi deserunt amet
            ipsa. Ea magnam nesciunt, illum magni dolorem dolorum! At cum
            voluptatum dolorum neque culpa quas aliquid? Adipisci fuga maxime
            eveniet voluptatibus est rerum recusandae voluptatem ipsa expedita!
            Accusamus exercitationem ad ab similique totam quia fugiat natus
            error? Quaerat minima eum aperiam accusantium suscipit qui facere
            corrupti est quasi accusamus inventore hic quos sint, recusandae
            repellat impedit tenetur ad eius consequuntur optio commodi soluta
            velit beatae. Repudiandae?
          </p>
        </div>
      </div>
    </article>
  );
};

export default News;

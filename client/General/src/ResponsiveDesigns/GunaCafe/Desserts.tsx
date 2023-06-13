export default function Desserts() {
  return (
    <section>
      <h2 className="text-center text-3xl">Desserts</h2>
      <img
        src="https://cdn.freecodecamp.org/curriculum/css-cafe/pie.jpg"
        alt="pie icon"
      />
      <article className="item">
        <p className="dessert">Donut</p>
        <p className="price">1.50</p>
      </article>
      <article className="item">
        <p className="dessert">Cherry Pie</p>
        <p className="price">2.75</p>
      </article>
      <article className="item">
        <p className="dessert">Cheesecake</p>
        <p className="price">3.00</p>
      </article>
      <article className="item">
        <p className="dessert">Cinnamon Roll</p>
        <p className="price">2.50</p>
      </article>
    </section>
  );
}

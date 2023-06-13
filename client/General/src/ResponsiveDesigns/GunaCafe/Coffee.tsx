export default function Coffee() {
  return (
    <>
      <section>
        <h2>Coffee</h2>
        <img
          src="https://cdn.freecodecamp.org/curriculum/css-cafe/coffee.jpg"
          alt="coffee icon"
        />
        <article className="item">
          <p className="flavor">French Vanilla</p>
          <p className="price">3.00</p>
        </article>
        <article className="item">
          <p className="flavor">Caramel Macchiato</p>
          <p className="price">3.75</p>
        </article>
        <article className="item">
          <p className="flavor">Pumpkin Spice</p>
          <p className="price">3.50</p>
        </article>
        <article className="item">
          <p className="flavor">Hazelnut</p>
          <p className="price">4.00</p>
        </article>
        <article className="item">
          <p className="flavor">Mocha</p>
          <p className="price">4.50</p>
        </article>
        <div>
          <a href="/flexbox">Flex Design</a>
        </div>
      </section>
    </>
  );
}

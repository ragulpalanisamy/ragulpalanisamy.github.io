import "../../App.css";

export default function colouredMarker() {
  return (
    <>
      <section className="flex justify-center align-center max-w-7xl mx-auto ">
        <h1 className="text-center h1">CSS Color Markers</h1>
        <div className="container">
          <div className="marker red">
            <div className="cap"></div>
            <div className="sleeve"></div>
          </div>
          <div className="marker green">
            <div className="cap"></div>
            <div className="sleeve"></div>
          </div>
          <div className="marker blue">
            <div className="cap"></div>
            <div className="sleeve"></div>
          </div>

          <button
            className="btn btn-blue bg-blue-500 hover:bg-blue-600"
            type="submit"
          >
            <a href="/gunacafe">Guna Cafe</a>
          </button>
        </div>
      </section>
    </>
  );
}

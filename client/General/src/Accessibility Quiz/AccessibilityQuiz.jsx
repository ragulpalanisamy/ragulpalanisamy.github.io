import Quiz from "./Quiz";

export default AccessibilityQuiz = () => {
  return (
    <div>
      <header>
        <img
          id="logo"
          src="https://cdn.freecodecamp.org/platform/universal/fcc_primary.svg"
        />
        <h1>HTML/CSS Quiz</h1>
        <nav>
          <ul>
            <li>
              <a href="#student-info" accesskey="I">
                INFO
              </a>
            </li>
            <li>
              <a href="#html-questions" accesskey="H">
                HTML
              </a>
            </li>
            <li>
              <a href="#css-questions" accesskey="C">
                CSS
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <Quiz />
      <footer>
        <address>
          <a href="https://freecodecamp.org">freeCodeCamp</a>
          <br />
          San Francisco
          <br />
          California
          <br />
          USA
        </address>
      </footer>
    </div>
  );
};

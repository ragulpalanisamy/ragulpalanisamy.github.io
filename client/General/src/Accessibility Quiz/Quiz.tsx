export default function Quiz() {
  return (
    <main>
      <form
        method="post"
        action="https://freecodecamp.org/practice-project/accessibility-quiz"
      >
        <section role="region" aria-labelledby="student-info">
          <h2 id="student-info">Student Info</h2>
          <div className="info">
            <label htmlFor="student-name">Name:</label>
            <input type="text" name="student-name" id="student-name" />
          </div>
          <div className="info">
            <label htmlFor="student-email">Email:</label>
            <input type="email" name="student-email" id="student-email" />
          </div>
          <div className="info">
            <label htmlFor="birth-date">
              D.O.B.<span className="sr-only">(Date of Birth)</span>
            </label>
            <input type="date" name="birth-date" id="birth-date" />
          </div>
        </section>
        <section role="region" aria-labelledby="html-questions">
          <h2 id="html-questions">HTML</h2>
          <div className="question-block">
            <p>1</p>
            <fieldset className="question" name="html-question-one">
              <legend>
                The legend element represents a caption htmlFor the content of
                its parent fieldset element
              </legend>
              <ul className="answers-list">
                <li>
                  <label htmlFor="q1-a1">
                    <input type="radio" id="q1-a1" name="q1" value="true" />
                    True
                  </label>
                </li>
                <li>
                  <label htmlFor="q1-a2">
                    <input type="radio" id="q1-a2" name="q1" value="false" />
                    False
                  </label>
                </li>
              </ul>
            </fieldset>
          </div>
          <div className="question-block">
            <p>2</p>
            <fieldset className="question" name="html-question-two">
              <legend>
                A label element nesting an input element is required to have a
                htmlFor attribute with the same value as the input's id
              </legend>
              <ul className="answers-list">
                <li>
                  <label htmlFor="q2-a1">
                    <input type="radio" id="q2-a1" name="q2" value="true" />
                    True
                  </label>
                </li>
                <li>
                  <label htmlFor="q2-a2">
                    <input type="radio" id="q2-a2" name="q2" value="false" />
                    False
                  </label>
                </li>
              </ul>
            </fieldset>
          </div>
        </section>
        <section role="region" aria-labelledby="css-questions">
          <h2 id="css-questions">CSS</h2>
          <div className="htmlFormrow">
            <div className="question-block">
              <label htmlFor="customer">Are you a frontend developer?</label>
            </div>
            <div className="answer">
              <select name="customer" id="customer" required>
                <option value="">Select an option</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
            <div className="question-block">
              <label htmlFor="css-questions">Do you have any questions:</label>
            </div>
            <div className="answer">
              <textarea
                id="css-questions"
                name="css-questions"
                placeholder="Who is flexbox..."
              ></textarea>
            </div>
          </div>
        </section>
        <button type="submit">Send</button>
      </form>
    </main>
  );
}

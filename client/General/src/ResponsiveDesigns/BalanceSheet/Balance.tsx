import "./styles.scss";

export default function Balance() {
  return (
    <div>
      <main>
        <section>
          <h1>
            <span className="flex">
              <span>AcmeWidgetCorp</span>
              <span>Balance Sheet</span>
            </span>
          </h1>
          <div id="years" aria-hidden="true">
            <span className="year">2019</span>
            <span className="year">2020</span>
            <span className="year">2021</span>
          </div>
          <div className="table-wrap">
            <table>
              <caption>Assets</caption>
              <thead>
                <tr>
                  <td></td>
                  <th>
                    <span className="sr-only year">2019</span>
                  </th>
                  <th>
                    <span className="sr-only year">2020</span>
                  </th>
                  <th className="current">
                    <span className="sr-only year">2021</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="data">
                  <th>
                    Cash{" "}
                    <span className="description">
                      This is the cash we currently have on hand.
                    </span>
                  </th>
                  <td>$25</td>
                  <td>$30</td>
                  <td className="current">$28</td>
                </tr>
                <tr className="data">
                  <th>
                    Checking{" "}
                    <span className="description">
                      Our primary transactional account.
                    </span>
                  </th>
                  <td>$54</td>
                  <td>$56</td>
                  <td className="current">$53</td>
                </tr>
                <tr className="data">
                  <th>
                    Savings{" "}
                    <span className="description">
                      Funds set aside for emergencies.
                    </span>
                  </th>
                  <td>$500</td>
                  <td>$650</td>
                  <td className="current">$728</td>
                </tr>
                <tr className="total">
                  <th>
                    Total <span className="sr-only">Assets</span>
                  </th>
                  <td>$579</td>
                  <td>$736</td>
                  <td className="current">$809</td>
                </tr>
              </tbody>
            </table>
            <table>
              <caption>Liabilities</caption>
              <thead>
                <tr>
                  <td></td>
                  <th>
                    <span className="sr-only">2019</span>
                  </th>
                  <th>
                    <span className="sr-only">2020</span>
                  </th>
                  <th>
                    <span className="sr-only">2021</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="data">
                  <th>
                    Loans{" "}
                    <span className="description">
                      The outstanding balance on our startup loan.
                    </span>
                  </th>
                  <td>$500</td>
                  <td>$250</td>
                  <td className="current">$0</td>
                </tr>
                <tr className="data">
                  <th>
                    Expenses{" "}
                    <span className="description">
                      Annual anticipated expenses, such as payroll.
                    </span>
                  </th>
                  <td>$200</td>
                  <td>$300</td>
                  <td className="current">$400</td>
                </tr>
                <tr className="data">
                  <th>
                    Credit{" "}
                    <span className="description">
                      The outstanding balance on our credit card.
                    </span>
                  </th>
                  <td>$50</td>
                  <td>$50</td>
                  <td className="current">$75</td>
                </tr>
                <tr className="total">
                  <th>
                    Total <span className="sr-only">Liabilities</span>
                  </th>
                  <td>$750</td>
                  <td>$600</td>
                  <td className="current">$475</td>
                </tr>
              </tbody>
            </table>
            <table>
              <caption>Net Worth</caption>
              <thead>
                <tr>
                  <td></td>
                  <th>
                    <span className="sr-only">2019</span>
                  </th>
                  <th>
                    <span className="sr-only">2020</span>
                  </th>
                  <th>
                    <span className="sr-only">2021</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="total">
                  <th>
                    Total <span className="sr-only">Net Worth</span>
                  </th>
                  <td>$-171</td>
                  <td>$136</td>
                  <td className="current">$334</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  );
}

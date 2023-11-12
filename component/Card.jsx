export default function Card({ list, text, newTotal }) {
  return (
    <>
      <div className="card">
        <div className="card-body">
          <div className="card-title">
            <h5>訂單</h5>

            <table className="table">
              <thead>
                <tr>
                  <th scope="col">品項</th>
                  <th scope="col">數量</th>
                  <th scope="col">小計</th>
                </tr>
              </thead>
              <tbody>
                {list.map((v, i) => {
                  return (
                    <tr key={i}>
                      <td>{v.name}</td>
                      <td>{v.count}</td>
                      <td>{v.count * v.price}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>

            <div className="text-end">
              備註: <span>{text}</span>
            </div>
            <div className="text-end">
              <h5>
                總計: <span>{newTotal}</span>
              </h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default function Table({
  item,
  setItem,
  handleChangeCount,
  total,
  setNote,
  handleList,
}) {
  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col" width="50">
              操作
            </th>
            <th scope="col">品項</th>
            <th scope="col">描述</th>
            <th scope="col" width="90">
              數量
            </th>
            <th scope="col">單價</th>
            <th scope="col">小計</th>
          </tr>
        </thead>
        <tbody>
          {item.length !== 0 ? (
            item.map((v, i) => {
              return (
                <tr key={i}>
                  <td>
                    <button
                      type="button"
                      className="btn btn-sm"
                      onClick={() => {
                        const delItem = item.filter((u) => {
                          return v.id !== u.id;
                        });
                        console.log(delItem);
                        setItem(delItem);
                      }}
                    >
                      x
                    </button>
                  </td>
                  <td>{v.name}</td>
                  <td>
                    <small>{v.description}</small>
                  </td>
                  <td>
                    <select
                      className="form-select"
                      value={v.count}
                      onChange={(e) => handleChangeCount(e.target.value, v.id)}
                    >
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="10">10</option>
                    </select>
                  </td>
                  <td>{v.price}</td>
                  <td>{v.count * v.price}</td>
                </tr>
              );
            })
          ) : (
            <td colSpan="6">
              <p className="my-3 border border-primary rounded bg-primary-subtle">
                請加入商品
              </p>
            </td>
          )}
        </tbody>
      </table>
      <div className="text-end mb-3">
        <h5>
          總計: <span>{total}</span>
        </h5>
      </div>
      <textarea
        className="form-control mb-3"
        rows="3"
        placeholder="備註"
        onChange={(e) => {
          setNote(e.target.value);
          // console.log(e.target.value);
        }}
      ></textarea>
      <div className="text-end">
        <button className="btn btn-primary" onClick={handleList}>
          送出
        </button>
      </div>
    </>
  );
}

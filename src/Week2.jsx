import React, { useEffect, useState } from "react";

export default function Week2() {
  const data = [
    {
      id: 1,
      name: "珍珠奶茶",
      description: "香濃奶茶搭配QQ珍珠",
      price: 50,
    },
    {
      id: 2,
      name: "冬瓜檸檬",
      description: "清新冬瓜配上新鮮檸檬",
      price: 45,
    },
    {
      id: 3,
      name: "翡翠檸檬",
      description: "綠茶與檸檬的完美結合",
      price: 55,
    },
    {
      id: 4,
      name: "四季春茶",
      description: "香醇四季春茶，回甘無比",
      price: 45,
    },
    {
      id: 5,
      name: "阿薩姆奶茶",
      description: "阿薩姆紅茶搭配香醇鮮奶",
      price: 50,
    },
    {
      id: 6,
      name: "檸檬冰茶",
      description: "檸檬與冰茶的清新組合",
      price: 45,
    },
    {
      id: 7,
      name: "芒果綠茶",
      description: "芒果與綠茶的獨特風味",
      price: 55,
    },
    {
      id: 8,
      name: "抹茶拿鐵",
      description: "抹茶與鮮奶的絕配",
      price: 60,
    },
  ];
  const [item, setItem] = useState([]);
  const [total, setTotal] = useState(0);
  const [note, setNote] = useState("");
  const [text, setText] = useState("");
  const [list, setList] = useState([]);
  const handleAddItem = (v) => {
    setItem([
      ...item,
      {
        id: v.id,
        name: v.name,
        description: v.description,
        count: 1,
        price: v.price,
      },
    ]);
  };
  useEffect(() => {
    const newTotal = item.reduce((pre, cur) => {
      return pre + cur.count * cur.price;
    }, 0);
    setTotal(newTotal);
  }, [item]);
  const handleList = () => {
    setList(item);
    setText(note);
  };
  useEffect(() => {
    console.log(list);
  }, [list]);
  return (
    <>
      <div class="container mt-5">
        <div class="row">
          <div class="col-md-4">
            <div class="list-group">
              {data.map((v, i) => {
                return (
                  <a
                    key={v.id}
                    href="#"
                    class="list-group-item list-group-item-action"
                    onClick={() => {
                      handleAddItem(v);
                    }}
                  >
                    <div className="d-flex w-100 justify-content-between">
                      <h5 className="mb-1">{v.name}</h5>
                      <small>{v.price}</small>
                    </div>
                    <p class="mb-1">{v.description}</p>
                  </a>
                );
              })}
            </div>
          </div>
          <div class="col-md-8">
            <table class="table">
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
                            class="btn btn-sm"
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
                            class="form-select"
                            value={v.count}
                            onChange={(e) => {
                              const newItem = item.map((u) => {
                                if (u.id === v.id) {
                                  return { ...u, count: e.target.value };
                                } else {
                                  return { ...u };
                                }
                              });
                              setItem(newItem);
                            }}
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
                  <td colspan="6">
                    <p className="my-3 border border-primary rounded bg-primary-subtle">
                      請加入商品
                    </p>
                  </td>
                )}
              </tbody>
            </table>
            <div class="text-end mb-3">
              <h5>
                總計: <span>{total}</span>
              </h5>
            </div>
            <textarea
              class="form-control mb-3"
              rows="3"
              placeholder="備註"
              onChange={(e) => {
                setNote(e.target.value);
                // console.log(e.target.value);
              }}
            ></textarea>
            <div class="text-end">
              <button class="btn btn-primary" onClick={handleList}>
                送出
              </button>
            </div>
          </div>
        </div>
        <hr />
        <div class="row justify-content-center">
          <div class="col-8">
            <div class="card">
              <div class="card-body">
                <div class="card-title">
                  <h5>訂單</h5>

                  <table class="table">
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

                  <div class="text-end">
                    備註: <span>{text}</span>
                  </div>
                  <div class="text-end">
                    <h5>
                      總計: <span>{total}</span>
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

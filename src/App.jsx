import { useState } from "react";

function App() {
  const data = [
    {
      id: 1,
      item: "珍珠奶茶",
      desc: "香濃奶茶搭配QQ珍珠",
      price: "50",
      stock: 20,
    },
    {
      id: 2,
      item: "冬瓜檸檬",
      desc: "清新冬瓜配上新鮮檸檬",
      price: "45",
      stock: 18,
    },
    {
      id: 3,
      item: "翡翠檸檬",
      desc: "綠茶與檸檬的完美結合",
      price: "55",
      stock: 34,
    },
    {
      id: 4,
      item: "四季春茶",
      desc: "香醇四季春茶，回甘無比",
      price: "45",
      stock: 10,
    },
    {
      id: 5,
      item: "四季春茶",
      desc: "香醇四季春茶，回甘無比",
      price: "45",
      stock: 10,
    },
    {
      id: 6,
      item: "阿薩姆奶茶",
      desc: "阿薩姆紅茶搭配香醇鮮奶",
      price: "50",
      stock: 25,
    },
    {
      id: 7,
      item: "檸檬冰茶",
      desc: "檸檬與冰茶的清新組合",
      price: "45",
      stock: 20,
    },
    {
      id: 8,
      item: "芒果綠茶",
      desc: "芒果與綠茶的獨特風味",
      price: "55",
      stock: 18,
    },
    {
      id: 9,
      item: "抹茶拿鐵",
      desc: "抹茶與鮮奶的絕配",
      price: "60",
      stock: 20,
    },
  ];
  const [product, setProduct] = useState(data);
  const itemChange = (id, e) => {
    return product.map((v) => {
      if (v.id === id) {
        return { ...v, item: e.target.value };
      } else {
        return { ...v };
      }
    });
  };
  const minu = (product, id) => {
    return product.map((u) => {
      if (id === u.id) {
        return { ...u, stock: u.stock - 1 };
      } else {
        return { ...u };
      }
    });
  };
  const add = (id, product) => {
    return product.map((u) => {
      if (u.id === id) {
        return { ...u, stock: u.stock + 1 };
      } else {
        return { ...u };
      }
    });
  };

  const handleminu = (id) => {
    console.log(minu(product, id));
    setProduct(minu(product, id));
  };
  const handleadd = (id) => {
    setProduct(add(id, product));
  };
  const handleItem = (id, e) => {
    setProduct(itemChange(id, e));
  };
  return (
    <>
      <table>
        <thead>
          <tr>
            <th scope="col">品項</th>
            <th scope="col">描述</th>
            <th scope="col">價格</th>
            <th scope="col">庫存</th>
            <th scope="col">修改</th>
          </tr>
        </thead>

        {product.map((v) => {
          return (
            <tr key={v.id}>
              <th scope="col">{v.item}</th>
              <th scope="col">{v.desc}</th>
              <th scope="col">{v.price}</th>

              <th scope="col">
                <button
                  onClick={() => {
                    handleminu(v.id);
                  }}
                >
                  -
                </button>
                {v.stock}
                <button
                  onClick={() => {
                    handleadd(v.id);
                  }}
                >
                  +
                </button>
              </th>
              <th>
                <button>修改</button>
                <input
                  name="change"
                  onChange={(e) => {
                    handleItem(v.id, e);
                  }}
                ></input>
              </th>
            </tr>
          );
        })}
      </table>
    </>
  );
}

export default App;

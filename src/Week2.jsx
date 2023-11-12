import { useEffect, useState } from "react";
import ListGroup from "../component/ListGroup";
import Table from "../component/Table";
import Card from "../component/Card";

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
  const [newTotal, setNewTotal] = useState(0);
  const handleChangeCount = (value, id) => {
    const newItem = item.map((u) => {
      if (u.id === id) {
        return { ...u, count: value };
      } else {
        return { ...u };
      }
    });
    setItem(newItem);
  };
  const handleAddItem = (v) => {
    let hashName = item.map((u) => {
      if (v.name === u.name) {
        return true;
      } else {
        return false;
      }
    });
    if (hashName.includes(true)) {
      const itemToo = item.map((u) => {
        if (v.id === u.id) {
          return { ...u, count: parseInt(u.count) + 1 };
        } else {
          return u; // 對於其他項目，返回原始物件
        }
      });
      console.log(itemToo);
      setItem(itemToo);
    } else {
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
    }
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
    setNewTotal(total);
  };
  useEffect(() => {
    console.log(list);
  }, [list]);
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-4">
            <ListGroup data={data} handleAddItem={handleAddItem} />
            {/* <div className="list-group">
              {data.map((v, i) => {
                return (
                  <a
                    key={v.id}
                    href="#"
                    className="list-group-item list-group-item-action"
                    onClick={() => {
                      handleAddItem(v);
                    }}
                  >
                    <div className="d-flex w-100 justify-content-between">
                      <h5 className="mb-1">{v.name}</h5>
                      <small>{v.price}</small>
                    </div>
                    <p className="mb-1">{v.description}</p>
                  </a>
                );
              })}
            </div> */}
          </div>
          <div className="col-md-8">
            <Table
              item={item}
              setItem={setItem}
              handleChangeCount={handleChangeCount}
              total={total}
              setNote={setNote}
              handleList={handleList}
            />
          </div>
        </div>
        <hr />
        <div className="row justify-content-center">
          <div className="col-8">
            <Card list={list} text={text} newTotal={newTotal} />
          </div>
        </div>
      </div>
    </>
  );
}

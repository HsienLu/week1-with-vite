import axios from "axios";
import { useState } from "react";
export default function Week3() {
  const [token, setToken] = useState("");
  const [singUpData, setSingUpData] = useState({});
  const [singInData, setSingInData] = useState({});
  const [todo, setTodo] = useState([]);
  const handleSingUpData = (e) => {
    setSingUpData({ ...singUpData, [e.target.name]: e.target.value });
    console.log(singUpData);
  };
  const handleSingInData = (e) => {
    setSingInData({ ...singInData, [e.target.name]: e.target.value });
  };
  const handleSingUp = async () => {
    console.log(singUpData);
    const res = await axios.post(
      "https://todolist-api.hexschool.io/users/sign_up",
      singUpData
    );

    console.log(res);
  };
  const handleSingIn = async () => {
    const res = await axios.post(
      "https://todolist-api.hexschool.io/users/sign_in",
      singInData
    );
    setToken(res.data.token);
  };
  const handleCheckOut = async () => {
    const res = await axios.get(
      "https://todolist-api.hexschool.io/users/checkout",
      {
        headers: {
          Authorization: token,
        },
      }
    );
    setToken(res.data.token);
    console.log(res);
  };
  const handleSignOut = async () => {
    try {
      const res = await axios.post(
        "https://todolist-api.hexschool.io/users/sign_out",
        {},
        {
          headers: {
            Authorization: token,
          },
        }
      );
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };
  const handleTodo = async () => {
    const res = await axios.get("https://todolist-api.hexschool.io/todos", {
      headers: {
        Authorization: token,
      },
    });
    setTodo(res.data.data);
    console.log(res.data.data);
  };
  // useEffect(() => {
  //   handleTodo();
  //   console.log(todo);
  // }, []);
  return (
    <>
      <div>
        <h1>會員中心</h1>
        <h2>註冊</h2>
        <input
          type="email"
          placeholder="email"
          onChange={(e) => handleSingUpData(e)}
          name="email"
        />
        <input
          type="password"
          placeholder="password"
          onChange={(e) => handleSingUpData(e)}
          name="password"
        />
        <input
          type="text"
          placeholder="nickname"
          onChange={(e) => handleSingUpData(e)}
          name="nickname"
        />
        <button type="button" onClick={handleSingUp}>
          註冊
        </button>
        <h2>登入</h2>
        <input
          type="email"
          placeholder="email"
          onChange={(e) => handleSingInData(e)}
          name="email"
        />
        <input
          type="password"
          placeholder="password"
          onChange={(e) => handleSingInData(e)}
          name="password"
        />
        <button type="button" onClick={handleSingIn}>
          登入
        </button>
        <p>Token:{token}</p>
        <h2>驗證</h2>
        <input type="text" placeholder="Token" name="token" />
        <button type="button" onClick={handleCheckOut}>
          驗證
        </button>
        <h2>登出</h2>
        <input type="text" placeholder="Token" name="token" />
        <button type="button" onClick={handleSignOut}>
          登出
        </button>
        <hr />
        <h1
          onClick={() => {
            handleTodo();
            console.log(todo);
          }}
        >
          todolist
        </h1>
        <p>{todo[0].content}</p>
      </div>
    </>
  );
}

import React, { Component } from "react";
import "./Login.css";

class Login extends Component {
  state = {
    username: "",
    password: "",
    message: "",
  };

  handleUsernameChange = (e) => {
    this.setState({ username: e.target.value });
  };

  handlePasswordChange = (e) => {
    this.setState({ password: e.target.value });
  };

  handleLogin = () => {
    const { username, password } = this.state;
    if (username === "operatorother" && password === "operatorOther") {
      // Foydalanuvchi kirish muvaffaqiyatli amalga oshdi
      this.setState({ message: "Kirish muvaffaqiyatli" });
    } else if (username === "operator1" && password === "M852456") {
      // Admin kirish muvaffaqiyatli bo'lganini aniqlang
      this.setState({ message: "Admin kirish muvaffaqiyatli" });
    } else {
      // Kirishni rad etish xabarini chiqaring
      this.setState({
        message: "Kirishni rad etildi. Login yoki parol noto'g'ri.",
      });
    }
  };

  render() {
    return (
      <div className="">
        <form class="bg-white p-4 max-w-xs mx-auto rounded-md shadow-md">
          <p class="text-lg font-semibold text-center text-black">Войти</p>
          <div class="mb-4">
            <div class="relative">
              <input
                type="text"
                placeholder="Логин"
                value={this.state.username}
                onChange={this.handleUsernameChange}
                class="w-full px-4 py-2 border rounded-md shadow-sm focus:ring focus:ring-blue-500 outline-none"
              />
            </div>
          </div>
          <div class="mb-6">
            <div class="relative">
              <input
                type="password"
                placeholder="Пароль"
                value={this.state.password}
                onChange={this.handlePasswordChange}
                class="w-full px-4 py-2 border rounded-md shadow-sm focus:ring focus:ring-blue-500 outline-none"
              />
            </div>
          </div>
          <button
            onClick={this.handleLogin}
            type="submit"
            class="w-full py-3 bg-blue-500 text-white font-semibold rounded-md text-uppercase"
          >
            Войти
          </button>
        </form>
      </div>
    );
  }
}

export default Login;

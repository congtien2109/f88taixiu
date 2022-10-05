import React, { Component } from "react";
import KetQua from "./KetQua";
import XucXac from "./XucXac";

export default class XucXacContent extends Component {
  render() {
    return (
      <div
        className="bg-no-repeat bg-cover bg-center h-screen"
        style={{ backgroundImage: "url(./images/XucXac/bgTaixiu.jpg)" }}
      >
        <div className="max-w-7xl m-auto">
          <XucXac />
          <KetQua />
        </div>
      </div>
    );
  }
}

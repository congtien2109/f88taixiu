import React, { Component } from "react";
import { connect } from "react-redux";

class XucXac extends Component {
  render() {
    const { xucXac, isTai } = this.props;
    return (
      <div>
        {" "}
        <h1 className="text-center text-white text-[40px] font-bold">
          F88 Dealer From Asia
        </h1>
        <div className="flex gap-40 justify-center mt-20">
          <div
            className={`cursor-pointer w-[120px] h-[120px] rounded-xl bg-blue-800 flex items-center justify-center text-white font-bold text-[40px] ${
              isTai ? "bg-red-500" : "bg-blue-800"
            }`}
            onClick={() => {
              this.props.dispatch({
                type: "datCuoc",
                payload: true,
              });
            }}
          >
            Tài
          </div>
          <div className="flex">
            {xucXac.map((item, index) => {
              return (
                <img
                  key={index}
                  className="w-[100px] object-contain"
                  src={item.hinhAnh}
                  alt=""
                />
              );
            })}
          </div>
          <div
            className={`cursor-pointer w-[120px] h-[120px] rounded-xl bg-blue-800 flex items-center justify-center text-white font-bold text-[40px] ${
              isTai ? "bg-blue-800" : "bg-red-500"
            }`}
            onClick={() => {
              this.props.dispatch({
                type: "datCuoc",
                payload: false,
              });
            }}
          >
            Xỉu
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    xucXac: state.XucXac.mangXucXac,
    isTai: state.XucXac.isTai,
  };
};
export default connect(mapStateToProps)(XucXac);

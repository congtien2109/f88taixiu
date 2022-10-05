import React, { Component } from "react";
import { connect } from "react-redux";

class KetQua extends Component {
  render() {
    const {
      ketQua: { isTai, soBanThang, soBanChoi },
    } = this.props;
    return (
      <div>
        <div className="mt-20 text-center">
          <p className="text-[40px] font-bold">
            You choose?:{" "}
            <span className="text-red-600">{isTai ? "Tài" : "Xỉu"}</span>
          </p>
          <p className="text-[40px] font-bold">Number of goals: {soBanThang}</p>
          <p className="text-[40px] font-bold">
            Number of matches: {soBanChoi}
          </p>
          <button
            className="bg-green-800 px-[50px] py-4 text-white rounded-sm hover:bg-green-600 mt-8"
            onClick={() => {
              this.props.dispatch({
                type: "play",
              });
            }}
          >
            Play
          </button>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    ketQua: state.XucXac,
  };
};
export default connect(mapStateToProps)(KetQua);

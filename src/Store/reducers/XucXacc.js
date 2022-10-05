const stateDefault = {
  isTai: true,
  soBanThang: 0,
  soBanChoi: 0,
  mangXucXac: [
    {
      hinhAnh: "./images/XucXac/1.png",
      diem: 1,
    },
    {
      hinhAnh: "./images/XucXac/2.png",
      diem: 2,
    },
    {
      hinhAnh: "./images/XucXac/3.png",
      diem: 3,
    },
  ],
};
export const XucXac = (state = stateDefault, { type, payload }) => {
  switch (type) {
    case "datCuoc": {
      state.isTai = payload;
      return { ...state };
    }
    case "play": {
      let newMangXucXac = [];
      for (let i = 0; i < 3; i++) {
        const number = Math.floor(Math.random() * 6) + 1;
        const xucXac = {
          hinhAnh: `./images/XucXac/${number}.png`,
          diem: number,
        };
        newMangXucXac.push(xucXac);
      }
      const total = newMangXucXac.reduce((sum, item) => {
        return (sum += item.diem);
      }, 0);
      // console.log(total);
      if (
        (state.isTai && total % 2 === 0) ||
        (!state.isTai && total % 2 !== 0)
      ) {
        state.soBanThang += 1;
      }
      state.soBanChoi += 1;
      return { ...state, mangXucXac: newMangXucXac };
    }
    default:
      return { ...state };
  }
};

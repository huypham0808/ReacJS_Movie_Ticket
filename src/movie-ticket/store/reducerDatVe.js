const stateDefault = {
    danhSachGheDangDat: [
        {soGhe: "A1", gia:1000},
        {soGhe: "B5", gia:1000},
    ],
};

const DatveReducer = (state = stateDefault, action) => {
    switch(action.type) {
        case "DAT_GHE": {
            let danhSachGheDangDatUpdate = [...state.danhSachGheDangDat];
            let index = danhSachGheDangDatUpdate.findIndex(gheDangDat => 
                gheDangDat.soGhe === action.ghe.soGhe);
            if (index !== -1) {
                danhSachGheDangDatUpdate.splice(index,1)
            }else {
                danhSachGheDangDatUpdate.push(action.ghe);
            }
            state.danhSachGheDangDat = danhSachGheDangDatUpdate;
            return {...state}
            
        }
        default: return {...state}
    }
};
 export default DatveReducer;
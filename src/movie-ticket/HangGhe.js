import React, { Component } from 'react'
import { connect } from 'react-redux';

class HangGhe extends Component {
    renderGhe = () => {
        return this.props.hangGhe.danhSachGhe.map((ghe, index) => {
            let cssGheDaChon = '';
            let disabled = false;
            if (ghe.daDat) {
                cssGheDaChon = 'gheDuocChon';
                disabled = true;
            }
            //Xét trạng thái ghế đang đặt
            let cssGheDangDat = '';
            let indexGheDangDat = this.props.danhSachGheDangDat.findIndex(gheDangDat => gheDangDat.soGhe === ghe.soGhe);
            if (indexGheDangDat !== -1) {
                cssGheDangDat = 'gheDangChon';
            }

            return <button onClick={() => {
                this.props.datGhe(ghe)
            }} disabled={disabled} className={`ghe ${cssGheDaChon} ${cssGheDangDat}`} key={index}>
                {ghe.soGhe}
            </button>
        })
    }
    renderSoHang = () => {
        return this.props.hangGhe.danhSachGhe.map((hang, index) => {
            return <button className='rowNumber'>{hang.soGhe}</button>
        })
    };
    renderHangGhe = () => {
        if (this.props.soHangGhe === 0) {
            return <div className='ml-1'>
                {this.props.hangGhe.hang} {this.renderSoHang()}
            </div>

        } else {
            return <div>
                {this.props.hangGhe.hang} {this.renderGhe()}
            </div>
        }
    }

    render() {
        return (
            <div className='text-left mt-2 firstChar' style={{ fontSize: 30, marginLeft: 100 }}>
                {this.renderHangGhe()}
            </div>
        )
    }
};
const mapStateToProps = state => {
    return {
        danhSachGheDangDat: state.DatveReducer.danhSachGheDangDat
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        datGhe: (ghe) => {
            dispatch({
                type: "DAT_GHE",
                ghe
            })
        }

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(HangGhe);
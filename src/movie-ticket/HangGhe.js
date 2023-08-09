import React, { Component } from 'react'

export default class HangGhe extends Component {
    renderGhe = () => {
        return this.props.hangGhe.danhSachGhe.map((ghe, index) => {
            let cssGheDaChon = '';
            let disabled = false;
            if (ghe.daDat) {
                cssGheDaChon = 'gheDuocChon';
                disabled = true;
            }
            return <button disabled={disabled} className={`ghe ${cssGheDaChon}`} key={index}>
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

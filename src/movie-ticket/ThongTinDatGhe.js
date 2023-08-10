import React, { Component } from 'react'
import { connect } from 'react-redux';
import { HUY_GHE } from './store/type/DatveType';

class ThongTinDatGhe extends Component {
    render() {
        return (
            <>
                <div className='thongTinDatGhe d-flex flex-column mt-3'>
                    <div className='row'>
                        <button className='gheDuocChon '></button>
                        <h5 className='text-light align-item-center'>Ghế đã đặt</h5>
                    </div>
                    <div className='row my-3'>
                        <button className='gheDangChon text-light'></button>
                        <h5 className='text-light align-item-center'>Ghế đang chọn</h5>
                    </div>
                    <div className='row'>
                        <button className='gheChuaChon text-light'></button>
                        <h5 className='text-light align-item-center'>Ghế chưa chọn</h5>
                    </div>
                </div>
                <div className='mt-5'>
                    <table className="table table-bordered">
                        <thead className='thead text-light'>
                            <tr className='text-center' style={{ fontSize: 20 }}>
                                <th>Số ghế</th>
                                <th>Giá</th>
                                <th>Huỷ</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.danhSachGheDangDat.map((gheDangDat, index) => {
                                return <tr key={index} className='text-center text-warning'>
                                    <td>{gheDangDat.soGhe}</td>
                                    <td>{gheDangDat.gia.toLocaleString()} VND</td>
                                    <td><button onClick={() => {
                                        this.props.dispatch({
                                            type: HUY_GHE,
                                            soGhe: gheDangDat.soGhe
                                        })
                                    }} className='btn btn-danger'>Huỷ</button></td>
                                </tr>
                            })}
                        </tbody>
                        <tfoot className='text-center text-light' style={{ fontSize: 20 }}>
                            <tr>
                               
                                <td>Tổng tiền</td>
                                <td>{this.props.danhSachGheDangDat.reduce((tongTien,gheDangDat,index) => {
                                return tongTien += gheDangDat.gia;
                            },0).toLocaleString()} VND</td>
                            </tr>
                            
                        </tfoot>
                    </table>
                </div>
            </>
        )
    }
};

const mapStateToProps = state => {
    return {
        danhSachGheDangDat: state.DatveReducer.danhSachGheDangDat
    }
};

export default connect(mapStateToProps)(ThongTinDatGhe);

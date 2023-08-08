import React, { Component } from 'react'

export default class ThongTinDatGhe extends Component {
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
                            <tr className='text-center' style={{fontSize:20}}>
                                <th>Số ghế</th>
                                <th>Giá</th>
                                <th>Huỷ</th>
                            </tr>
                        </thead>
                        <tbody>
                           
                        </tbody>
                    </table>
                </div>
            </>
        )
    }
}

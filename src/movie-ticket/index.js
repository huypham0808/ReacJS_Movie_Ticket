import React, { Component } from 'react'
import HangGhe from './HangGhe';
import ThongTinDatGhe from './ThongTinDatGhe';
import danhSachGheData from './store/danhSachGhe.json';
export default class MovieTicket extends Component {
   renderHangGhe = () => {
      return danhSachGheData.map((hangGhe, index) => {
         return <div key={index}>
            <HangGhe hangGhe={hangGhe} soHangGhe={index}/>
         </div>
      })
   }
   render() {
      return (
         <div style={{ position: 'fixed' }}>
            <div style={{ position: 'fixed', width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.36)' }}>
               <div className='container-fluid mt-5' >
                  <div className='row'>
                     <div className='col-8'>
                        <h3 className='text-center text-light'>Movie Seat Selection</h3>
                        <div className='screen w-75 m-auto'></div>
                        <div className='text-center align-middle font-weight-bold mt-5'>
                           {this.renderHangGhe()}
                        </div>
                     </div>
                     <div className='col-4'>
                        <h3 className='text-warning'>Thông tin đặt ghế</h3>
                        <ThongTinDatGhe />
                     </div>
                  </div>
               </div>
            </div>
         </div>
      )
   }
};

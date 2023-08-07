import React, { Component } from 'react'

export default class Sothutughe extends Component {
  
  render() {
   let {Sothutu} = this.props;
    return (
      <div className='soThuTuGhe'>
         {Sothutu.danhSachGhe.map((sothutu,index) => {
            return (
               <div key={index}>
                  <p>{sothutu.soGhe}</p>
               </div>
            )
         })}
      </div>
    )
  }
};

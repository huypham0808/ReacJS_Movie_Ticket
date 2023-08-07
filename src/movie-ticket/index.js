import React, { Component } from 'react'
import HangGhe from './HangGhe';
import ThongTinDatGhe from './ThongTinDatGhe';

export default class MovieTicket extends Component {
  render() {
    return (
      <div className='container d-flex justify-content-between mt-5'>
        <HangGhe />
        <ThongTinDatGhe />
      </div>
    )
  }
}

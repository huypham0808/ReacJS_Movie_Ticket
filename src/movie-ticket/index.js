import React, { Component } from 'react'
import HangGhe from './HangGhe';
import ThongTinDatGhe from './ThongTinDatGhe';
export default class MovieTicket extends Component {
  render() {
    return (
      <div>
        <HangGhe/>
        <ThongTinDatGhe/>
      </div>
    )
  }
}

import React, { Component } from 'react'
import Data from './store/danhSachGhe.json';
import Sothutughe from './Sothutughe';
export default class HangGhe extends Component {
    renderSothutuGhe = () => {
        return Data.map((Sothutu,index) => {
            return <div className='col-4' key={index}>
                <Sothutughe Sothutu={Sothutu}/>
            </div>
        })
    }
    render() {
        return (
            <div className='movieSeatSelection text-center'>
                <h3>Movie Seat Selection</h3>
                <div className='screen'></div>
                <div className='row'>
                    {this.renderSothutuGhe()}
                </div>
            </div>
        )
    }
};

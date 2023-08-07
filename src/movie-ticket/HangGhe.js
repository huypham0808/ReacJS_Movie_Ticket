import React, { Component } from 'react'
import {connect} from 'react-redux';

class HangGhe extends Component {
    renderSothutuGhe = () => {
        const {listSeat} = this.props;
        return listSeat.map((Sothutu,index) => {
            return (          
                    <tr key={index} className="text-center">
                        <td />
                        <>{Sothutu.danhSachGhe.map((col) => {
                            return (                             
                                <td key={col.soGhe}> {col.soGhe}</td>
                            )
                        })}</>
                    </tr>
                
            )
        })
    }
    render() {
        return (
            <div className='movieSeatSelection text-center'>
                <h3>Movie Seat Selection</h3>
                <div className='screen'></div>
                {this.renderSothutuGhe()}
            </div>
        )
    }
};

const mapStateToProps = (state) => {
    return {
        listSeat: state.seatReducer.listSeat,
    }
};

export default connect (mapStateToProps) (HangGhe);

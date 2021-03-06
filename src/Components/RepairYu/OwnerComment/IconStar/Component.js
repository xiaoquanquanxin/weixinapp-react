/*共用的*/
import React from 'react';
import start from './start.png';
import yellowStar from './yellow-star.png';
/*antd-mobile*/
import {
	Modal,
} from 'antd-mobile';
/*自定义类*/
import './Component.less';



module.exports.IconStar= class ImgActions extends React.Component{
	constructor (){
		super();
		this.state = {
			starArrayIndex: []
		};
	}

	handleImg = (e, starArrayIndex) => {
		this.setState({
			starArrayIndex: starArrayIndex+1
		});

	};
	renderImg = (e) => {
		const num = 6; //接口
		const Array = [];
		const { starArrayIndex } = this.state;
		for (let i = 0; i < num - 1; i++) {
			if (i >= starArrayIndex) {
				Array.push(<span onClick={(e) => { this.handleImg(e, i); }} key={i} ><img src={start}  style={{ width: 31 }} /></span >);

			} else {
				Array.push(<span onClick={(e) => { this.handleImg(e, i); }} key={i} ><img src={yellowStar}   style={{ width: 31 }} /></span >);
			}
		}
		return Array;
	};

	render(){ return <div> { this.renderImg() } </div> }

};

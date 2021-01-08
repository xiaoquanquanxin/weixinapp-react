/*共用的*/
import React from 'react';
import {observer, inject} from 'mobx-react';
/*antd-mobile*/
import {
    Flex,
    WhiteSpace,
    Toast,
    WingBlank,
} from 'antd-mobile';
import Mybutton from '../../pub/MyButton';
import header from './header.png';
/*当前页面用到的*/
/*自定义类*/
import './Component.less';

@inject('store', 'actions')
@observer
export default class ComplaintSuggestions extends React.Component {
    componentDidMount(){
        window.setWindowTitle('投诉建议 ');
        //注入a标签，href 打电话
        // window.JQ("#tel1").attr("href","tel:")
    }

    //检查按纽状态
    _checkForm = (data) => {
        const array = [];
        const bolean = data instanceof Object || data instanceof Array;
        if (bolean) {
            if (data instanceof Object) {
                for (let ele of Object.values(data)) {
                    array.push(ele);
                }
            }
            const value = array.every((item, index) => {
                return item != '';							//注:自定义store时，必需为空('')
            });
            if (value) {
                this.setState({
                    colorStyle: true
                });
            } else {
                this.setState({
                    colorStyle: false
                });
            }
        } else {
            Toast.info(`只支持数组和对象`, 1);
        }

    };
    clickPhone = () => {
        window.location.href = 'tel:400-008-0808'
    }

    render(){
        // const { store, actions } = this.props;
        return <div className={'Components-ComplaintSuggestions-container'}>
            <WingBlank>
                <div className={'sugggestion'}>
                    <div>
                        <p className={'headerImg'}><img src={header} style={{width: '35%'}}/></p>
                        <WhiteSpace size="lg"/><WhiteSpace size="lg"/>
                        <p className={'tit'}>尊敬的业主，您好</p>
                        <WhiteSpace size="lg"/><WhiteSpace size="lg"/>
                        <p className={'destion'}>若您有任何建议和问题，欢迎您致电客服中心，我们将全天候7*24小时为您服务。</p>
                        <WhiteSpace size="lg"/>
                        <p className={'destion'}>您可以拨打</p>
                    </div>
                    <WhiteSpace size="lg"/>
                    <WhiteSpace size="lg"/>

                    <div className={'call-tel'}>
                        <p>
                            400电话
                        </p>
                        <WhiteSpace size="lg"/>
                        <Flex>
                            <Mybutton id="tel1" callback={() => this.clickPhone('400-008-0808')} type={'white'}
                                      label="400-008-0808"/>
                        </Flex>
                    </div>
                    <WhiteSpace size="lg"/>
                </div>
            </WingBlank>
            <WhiteSpace size="lg"/>
            <WhiteSpace size="lg"/>
        </div>;
    }
}

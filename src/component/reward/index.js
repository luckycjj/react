import React, { Component } from 'react';
import './less/reward.less';
class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            money:0,
            list:[1],
        }
        this.ajaxGet = this.ajaxGet.bind(this);
    }
    componentDidMount(){
        //localStorage.setItem("GUID","09031110410635958049");
        this.ajaxGet()
    }
    componentWillUnmount() {
        this.serverRequest.abort();
    }
    ajaxGet(){
        const result = {
            "ResponseStatus": {
                "Timestamp": "/Date(1550820339597+0800)/",
                "Ack": "Success",
                "Errors": null,
                "Build": null,
                "Version": null,
                "Extension": [{
                    "Id": "CLOGGING_TRACE_ID",
                    "Version": null,
                    "ContentType": null,
                    "Value": "7264737435008290088"
                }, {
                    "Id": "RootMessageId",
                    "Version": null,
                    "ContentType": null,
                    "Value": "921812-0a022946-430783-70665"
                }]
            },
            "code": 200,
            "msg": null,
            "result": {
                "receivedAmount": 0.0,
                "expectAmount": 39.0,
                "currency": "CNY",
                "receivedHistory": [{
                    "rewardID": null,
                    "rewardName": "礼品卡",
                    "rewardAmount": 3.0,
                    "rewardCurrency": "CNY",
                    "rewardDescription": "直播观看人数达到10人",
                    "date": "2018.03.08",
                    "rewardState": 0
                }, {
                    "rewardID": null,
                    "rewardName": "礼品卡",
                    "rewardAmount": 5.0,
                    "rewardCurrency": "CNY",
                    "rewardDescription": "直播观看人数达到10人",
                    "date": "2017.10.25",
                    "rewardState": 0
                }, {
                    "rewardID": null,
                    "rewardName": "礼品卡",
                    "rewardAmount": 8.0,
                    "rewardCurrency": "CNY",
                    "rewardDescription": "直播观看人数达到10人",
                    "date": "2017.10.24",
                    "rewardState": 0
                }, {
                    "rewardID": null,
                    "rewardName": "礼品卡",
                    "rewardAmount": 2.0,
                    "rewardCurrency": "CNY",
                    "rewardDescription": "直播观看人数达到10人",
                    "date": "2017.10.13",
                    "rewardState": 0
                }, {
                    "rewardID": null,
                    "rewardName": "礼品卡",
                    "rewardAmount": 5.0,
                    "rewardCurrency": "CNY",
                    "rewardDescription": "直播观看人数达到10人",
                    "date": "2017.09.26",
                    "rewardState": 0
                }, {
                    "rewardID": null,
                    "rewardName": "礼品卡",
                    "rewardAmount": 3.0,
                    "rewardCurrency": "CNY",
                    "rewardDescription": "直播观看人数达到10人",
                    "date": "2017.07.17",
                    "rewardState": 0
                }, {
                    "rewardID": null,
                    "rewardName": "礼品卡",
                    "rewardAmount": 8.0,
                    "rewardCurrency": "CNY",
                    "rewardDescription": "直播观看人数达到10000人",
                    "date": "2017.07.17",
                    "rewardState": 0
                }, {
                    "rewardID": null,
                    "rewardName": "礼品卡",
                    "rewardAmount": 5.0,
                    "rewardCurrency": "CNY",
                    "rewardDescription": "直播观看人数达到5000人",
                    "date": "2017.07.17",
                    "rewardState": 0
                }]
            }
        }
        this.setState({
            money : result.result.receivedAmount,
            list : result.result.receivedHistory,
        })
        /*var that = this;
        this.serverRequest = $.ajax({
            url: common.ajaxHtml() + "soa2/13184/json/searchMyReward?_fxpcqlniredt=09031130211442246895&_fxpcqlniredt=09031130211442246895&__gw_appid=99999999&__gw_ver=1.0&__gw_from=0&__gw_platform=H5",
            type:"POST",
            headers: {
                Accept: "application/json"
            },
            data:JSON.stringify({"head":{"cid":"09031130211442246895","ctok":"","cver":"1.0","lang":"01","sid":"8888","syscode":"09","auth":null,"extension":[{"name":"protocal","value":"http"}]},"contentType":"json"}),
            contentType: "application/json",
            success: function (result) {
            }
        })*/
    }
    render() {
        const list = this.state.list.map((item,i) =>
            <li  className={["js_jump_place",this.state.list.length - 1 === i ? "borderno" : ""].join(" ")}>
                <div className="listLeft">
                    <h6>￥<span>{item.rewardAmount}</span></h6>
                    <h5>{item.rewardDescription}</h5>
                </div>
                <div className="listRight">
                    <h6>{item.date}</h6>
                    <h5 className={[item.rewardState === 0 ? "gitfGet" : ""].join(" ")}>{item.rewardState === 0 ? "待发放" : "已发放"}</h5>
                </div>
                <div className="clearBoth"></div>
            </li>
        )
        const showList = this.state.list.length > 0 ? <div className="js_listBox">
            <div className="js_list listbox">
                <ul className="text_list near">
                {list}
                </ul>
                <div className="footer livestream-iphoneX-bottom">
                    <div className="desc">礼品卡审核需要1-3个工作日</div>
                    <div className="desc">如有疑问请联系vod@ctrip.com</div>
                </div>
            </div>
        </div> : <div className="nodata-wrap">
            <div className="ls-nodataimg"></div>
            <p className="ls-nodatafont">您还没有奖励哟</p>
        </div> ;
        return (
            <div className="comment_reward">
                <div className="content">
                    <div className="top">
                        <div className="area">
                            <div className="title">直播获得奖励</div>
                            <div className="money">
                                <span className="money-type">￥</span>
                                <span className="money-show">{this.state.money}</span>
                            </div>
                            <div className="desc">礼品卡</div>
                        </div>
                    </div>
                    <div className="bottom">
                        <div className="area">
                            <div className="card"></div>
                            <div id="m_homepage_reward_view" className="btn js_card">查看我的礼品卡</div>
                        </div>
                    </div>
                </div>
                <div className="list">
                    <div className="list-title">
                        <div className="reward-img"></div>
                        <span>奖励记录</span>
                    </div>
                    {showList}
                </div>

            </div>
        );
    }
}

export default App;

import React, { Component } from "react"
import './App.css';
import House from './component/House';
import Sidebar from './component/Sidebar';
import Sort from './component/Sort';
import a from './hotelpic/日野苑.jpeg';
import b from './hotelpic/北行旅.jpeg';
import c from './hotelpic/台北凱薩.jpeg';
import d from './hotelpic/甲山林湯旅.jpeg';
import e from './hotelpic/茹曦酒店.jpeg';
import { useState } from 'react';

const json = [{ "name": "日野苑","service":["停車場","寵物友善","洗衣機","免費無線網路","禁煙客房"],"price": 1500, "url": a, "score": 4.3, "intro": "日野苑位於台北市的中正區，距離台北捷運總站和台北客運西站距離10分鐘的步行路程。 擁有現代裝飾，提供24小時櫃檯服務。每間客房都有空調及配置一台平面電視。 私人浴室設有熱水淋浴或浴缸，根據不同房型而定。距離總統府大約15分鐘的步行路程，距離桃園國際機場約有1小時的車程。日野苑將為客人提供餐券。客人可以在日野苑的旅遊諮詢櫃檯安排一日遊或交通服務。 另外也有提供汽車租賃服務。" },
{ "name": "北行旅", "service":["停車場","寵物友善"],"price": 1100, "url": b, "score": 5.0, "intro": "北行旅地理位置超棒，位於台北的中正區，距離臺北市中山堂 200 公尺，距離中華民國總統府 300 公尺，距離西門紅樓 700 公尺。這間住宿提供的設施與服務包括共用廚房、共用休息室以及全館 WiFi（免費）。住宿有旅遊諮詢台服務和行李寄放服務。北行旅為住客提供空調客房。所有房型均有書桌、電熱水壺、冰箱、保險箱、平面電視以及附沖洗座的私人衛浴。這間住宿的每間客房都有寢具和毛巾。北行旅附近的人氣景點包括剝皮寮老街、台北植物園和國立中正紀念堂。最近的機場是台北松山機場，距離 北行旅 5 公里。" },
{ "name": "台北凱撒", "service":["停車場","免費無線網路","禁煙客房"],"price": 1300 , "url": c, "score": 4.0, "intro": "台北凱撒大飯店位於中心商業區，坐落在台北車站正對面，與台北捷運、台灣高鐵、桃園機場捷運和台北轉運站相連通。館內提供房內 WiFi，客房設有空調、大理石私人衛浴和平面電視。飯店最近的機場是台北松山機場，距離 15 分鐘車程。飯店距離桃園國際機場 40 分鐘車程。"},
{ "name": "甲山林湯旅", "service":["停車場","禁煙客房"],"price": 3600 , "url": d, "score": 4.3, "intro": "甲山林湯旅位在台北，距離遼寧街夜市不到 1 公里，有健身中心、免費私人停車位、花園和露台。這間住宿距離行天宮 1.5 公里，距離台北小巨蛋 2.2 公里，距離寧夏觀光夜市 2.7 公里。住宿提供 WiFi（免費）和 24 小時接待櫃檯。甲山林湯旅的所有客房均備有電熱水壺。這間住宿的客房均提供平面電視、空調以及備有浴袍的私人衛浴。部分客房有陽台。 甲山林湯旅的每間客房都有寢具和毛巾。甲山林湯旅距離大安森林公園 3.3 公里，距離迪化街 3.6 公里。最近的機場是台北松山機場，距離這間住宿 2.1 公里。住宿提供付費機場接駁服務。"},
{ "name": "茹曦酒店", "service":["停車場","寵物友善","洗衣機","免費無線網路","禁煙客房"],"price": 3100, "url": e, "score": 4.0, "intro": "茹曦酒店座落於台北市中心，位於綠樹成蔭、車水馬龍的南京東路及敦化北路交叉口，面對台北小巨蛋、鄰近台北小巨蛋及南京復興捷運站，比鄰微風南京館，距離臺北松山機場僅1公里、臺北101僅3公里的路程，是商務洽公旅遊購物的首選。所有客房和套房都配有空調、平面電視、冰箱和電熱水壺。部分房型包括咖啡機、迷你吧和沙發。私人衛浴內配有浴缸或淋浴設備，並備有免費盥洗用品和吹風機。全館提供免費 WiFi。在入住期間，客人可以到設備齊全的健身中心鍛煉身體、或使用室外游泳池或選擇桑拿好好放鬆身心。茹曦酒店有2間挑高無柱的宴會廳及11間獨立可調整的會議室，可容納 8 至 1000 人，適合舉辦各式活動及會議。酒店二樓的玉蘭軒中餐廳，以台菜、江浙菜及港式點心聞名；一樓自助餐廳SUNNY BUFFET 挑高16樓的寬敞空間，供應各國自助料理；一樓的SUNNY CAFE，提供輕食、下午茶、咖啡茶與麵包甜點。" }];

const service=["停車場","寵物友善","洗衣機","免費無線網路","禁煙客房"]
const finalstate=[false,false,false,false,false]

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: json,
      have:service
    };
  }

  moneysort = (money) => { 
    this.setState({
      data: money
    })
  }
  servicesort = (check) => { 
    this.setState({
      have: check
    })
  }
  render() {
    const { data,have } = this.state
    const ck=[false,false,false,false,false]
    const fck=0
    return (
      <div class="container">
      <div className={`flex flex-col lg:flex-row h-screen pt-20 lg:pt-0`}>
      <Sidebar servicesort={this.servicesort} have={have}/>
      <div className=" w-full h-full overflow-y-auto">
      <div className="flex flex-row-reverse sm:text-end mt-2 sm:mt-0 sm:ml-4 md:mx-6 sm:py-2">
      <Sort moneysort={this.moneysort} data={data}/>
      </div>
        <div className="flex flex-col mx-auto h-full container">
        {have.map((first, id) => (//判別的服務
            data.map((meeting,idx) =>(//全部資料service陣列
              meeting.service.map((second,idx2)=>(//每間的服務循環
                (second===first )?<House key={idx} name={meeting.name}url={meeting.url}price={meeting.price}score={meeting.score}intro={meeting.intro}/>:''
              ))
            ))
          ))}
        </div>
      </div>
    </div>
    </div>
    );
  }
}
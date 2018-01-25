var React = require('react');
var ReactDOM = require('react-dom');
var ons = require('onsenui');
var Ons = require('react-onsenui');
var client = require('./client');
import CancelRoom from './CancelRoom';

let imgUrl = 'https://www.picz.in.th/images/2018/01/25/2000.jpg';
export default class Home extends React.Component {

   renderToolbar() {
    return (
      <Ons.Toolbar style={{backgroundColor: '#996699'}}>

        <div className='center'> ยินต้อนรับ </div>
      </Ons.Toolbar>
    );
  }

  showMenu() {
    this.props.showMenu();
  }

  PageBallRoom() {
    this.props.navigator.pushPage({ component: BallRoom, props: { key: 'ballroom' } });
  }
  PageCancelRoom() {
    this.props.navigator.pushPage({ component: CancelRoom, props: { key: 'cancelRoom' } });
  }

render() {
    return (
      <Ons.Page renderToolbar={this.renderToolbar.bind(this)}>
      <Ons.Card style={{paddingLeft:'33%', backgroundImage: 'url(' + imgUrl + ')' }}>
         <Ons.Card  style={{backgroundColor:'#D3D3D3',width: '50%'}}>


        <div style={{ textAlign: 'center'}}>
          <br />

          <Ons.Button style={{ width: '45%',backgroundColor: '#00BFFF' }}>จองห้องจัดเลี้ยง</Ons.Button><br /><br />
          <Ons.Button style={{ width: '45%',backgroundColor: '#00BFFF' }}>จองห้องพัก</Ons.Button><br /><br />
          <Ons.Button style={{ width: '45%',backgroundColor: '#00BFFF' }} onClick={this.PageCancelRoom.bind(this)}>แจ้งยกเลิกห้องพัก</Ons.Button><br /><br />
          <Ons.Button style={{ width: '45%',backgroundColor: '#00BFFF' }}>แจ้งทำความสะอาด</Ons.Button><br /><br />
          <Ons.Button style={{ width: '45%',backgroundColor: '#00BFFF' }}>แจ้งซ่อม</Ons.Button><br /><br />
          <Ons.Button style={{ width: '45%',backgroundColor: '#00BFFF' }}>ชำระเงิน</Ons.Button>

        </div>
        </Ons.Card>
        <br/>
        <br/>
        <br/>
        <br/><br/>
        <br/>
        <br/>
        <br/><br/>
        <br/>
        <br/>
        <br/><br/>
        <br/>
        <br/>
        <br/><br/>
        <br/>
        <br/>
        <br/><br/>
        <br/>
        <br/>
        <br/><br/>



      </Ons.Card>

      </Ons.Page>
    );
  }
}

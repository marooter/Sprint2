var React = require('react');
var ReactDOM = require('react-dom');
var ons = require('onsenui');
var Ons = require('react-onsenui');
var client = require('./client');


let imgUrl = 'https://www.picz.in.th/images/2018/01/25/2000.jpg';
export default class Home extends React.Component {
   renderToolbar() {
    return (
      <Ons.Toolbar style={{backgroundColor: '#00BFFF'}}>

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

render() {
    return (
      <Ons.Page renderToolbar={this.renderToolbar.bind(this)}>
      <Ons.Card style={{paddingLeft:'33%', backgroundImage: 'url(' + imgUrl + ')' }}>
         <Ons.Card  style={{backgroundColor:'#CCFFE4B5',width: '50%'}}>


        <div style={{ textAlign: 'center'}}>
          <br />

          <Ons.Button style={{ width: '45%',backgroundColor: 'red' }}>จองห้องจัดเลี้ยง</Ons.Button><br /><br />
          <Ons.Button style={{ width: '45%',backgroundColor: 'blue' }}>จองห้องพัก</Ons.Button><br /><br />
          <Ons.Button style={{ width: '45%',backgroundColor: 'green' }}>ยกเลิกห้องพัก</Ons.Button><br /><br />
          <Ons.Button style={{ width: '45%',backgroundColor: '#CC33CC' }}>แจ้งทำความสะอาด</Ons.Button><br /><br />
          <Ons.Button style={{ width: '45%',backgroundColor: '#FF3300' }}>แจ้งซ่อม</Ons.Button><br /><br />
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

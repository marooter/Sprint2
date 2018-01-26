var React = require('react');
var ReactDOM = require('react-dom');
var ons = require('onsenui');
var Ons = require('react-onsenui');
var client = require('./client');
class  Payment2 extends React.Component {

  renderToolbar() {

    return (
      <Ons.Toolbar>
       <Ons.BackButton> กลับ</Ons.BackButton>
        <div className='right'>
          <Ons.ToolbarButton onClick={this.showMenu.bind(this)}>
            <Ons.Icon icon='ion-navicon, material:md-menu' />
          </Ons.ToolbarButton>
        </div>

      </Ons.Toolbar>
    );
  }

  showMenu() {
    this.props.showMenu();
  }

  render() {

    return (
      <Ons.Page renderToolbar={this.renderToolbar.bind(this)}>

      <Ons.Card>
         <Ons.Card>
           <div style={{ textAlign: 'center' }}>
              <h2>ใบบันทึกการแจ้งชำระเงิน</h2>
          </div>

          <p>
        ชื่อ-สกุล :{this.props.state.name}
        </p>

        <p>
        เลขที่ใบบันทึกการจอง :{this.props.state.idBill}
        </p>

        <p>
        ธนาคาร: : {bankcheck}
        </p>

        <p>
        วันที่โอน: {this.props.state.date}
      </p>

        <p>
        เวลาที่โอน : {this.props.state.time}
        </p>
        <div style={{ textAlign: 'center' }}>
        <Ons.Button>บันทึก</Ons.Button>
        </div>

          </Ons.Card>
      </Ons.Card>

        <p style={{ textAlign: 'center', opacity: '0.6', paddingTop: '20px' }}>
           ขอบคุณที่ใช้บริการ!
        </p>
      </Ons.Page>
    );
  }
}


var bankcheck;
var pro = ['ธนาคารไทยพาณิชย์(SCB) 110-11212222','ธนาคารกรุงไทย(KTB) 120-11313333','ธนาคารกรุงเทพ(BBL 132-11414444)'];
var URL = ["https://image.goosiam.com/imgupload/upload44/AyHljB4k3Acv.jpg","https://image.goosiam.com/imgupload/upload44/h81smkbmrcqT.jpg","https://image.goosiam.com/imgupload/upload44/PY7CxbuheJ3K.jpg"];
export default class Payment extends React.Component {
  constructor(){
    super()
    this.state={
      name: '',
      idBill: '',
      date: '',
      time:'',
      banks: [
        'ธนาคารไทยพาณิชย์(SCB) 110-11212222',
        'ธนาคารกรุงไทย(KTB) 120-11313333',
        'ธนาคารกรุงเทพ(BBL 132-11414444'
      ],
      selectedBanks: 'No'

    }
  }

 renderToolbar() {
    return (
      <Ons.Toolbar>
        <div className='center'>โรงแรงTeam15</div>
        <Ons.BackButton> กลับ</Ons.BackButton>
        <div className='right'>
          <Ons.ToolbarButton onClick={this.showMenu.bind(this)}>
            <Ons.Icon icon='ion-navicon, material:md-menu' />
          </Ons.ToolbarButton>
        </div>
      </Ons.Toolbar>
    );
  }

  showMenu() {
    this.props.showMenu();
  }

  popPage() {
    this.props.navigator.popPage();
  }

  Payment2() {
     bankcheck = this.state.selectedBanks
    this.props.navigator.pushPage({ component: Payment2, props: { key: 'payment2',state:this.state } });
  }
  handleNameChange(e) {
    this.setState({name: e.target.value});
  }

  handleIdBillChange(e) {
    this.setState({idBill: e.target.value});
  }

  handleDateChange(e) {
    this.setState({date: e.target.value});
  }

  handleTimeChange(e) {
    this.setState({time: e.target.value});
  }

  handleBanksChange(banks) {
    this.setState({selectedBanks: banks});
  }


  renderCheckboxRow(row,c) {
    return (
      <Ons.ListItem key={row} tappable>
        <label className='left'>
          <Ons.Checkbox
            inputId={`checkbox-${row}`}
            checked={row === this.state.selectedBanks}
            onChange={this.handleBanksChange.bind(this, row)}
          />
        </label>

        <label htmlFor={`checkbox-${pro[c]}`} className = 'center'>
          <img src={URL[c]} style={{width: '80',height: '75'}} />&emsp;{pro[c]}
        </label>

        <label htmlFor={`checkbox-${row}`} className='right'>

        </label>
      </Ons.ListItem>
    )
  }


  render() {
    return (
      <Ons.Page renderToolbar={this.renderToolbar.bind(this)}>
       <Ons.Card>
        <div style={{ textAlign: 'left' }}>
         <div style={{ textAlign: 'center' }}>
           <h1>แจ้งชำระเงิน</h1>
           <p>
            <Ons.Input
            value={this.state.name}
            onChange={this.handleNameChange.bind(this)}
              modifier='underbar'
              float
              placeholder='ชื่อ-สกุล' />
          </p>

          <p>
            <Ons.Input
            value={this.state.idBill}
            onChange={this.handleIdBillChange.bind(this)}
              modifier='underbar'
              float
              placeholder='เลขที่ใบบันทึกการจอง' />
          </p>

           <Ons.List
          dataSource={this.state.banks}
          renderHeader={() => <Ons.ListHeader>เลือกธนาคาร</Ons.ListHeader>}
          renderRow={this.renderCheckboxRow.bind(this)}
        />



         </div>
               <form >
           <div>
           <br/>
           <br/>
                <label>เลือกวันที่โอน:</label> &ensp;&ensp;&ensp;
                &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;

              <div>
               <input type="date"  value={this.state.date}
            onChange={this.handleDateChange.bind(this)}/>
                &ensp;&ensp;&ensp;

              </div>
           </div>
           <br/>
           <br/>
           <div>
                 <label>เลือกเวลาที่โอน:</label> &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;
                &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;
              <div>
               <input type="time" value={this.state.time}
            onChange={this.handleTimeChange.bind(this)}  />
              </div>
           </div>
           <br/>  <div style={{ textAlign: 'center' }}>
                         <Ons.Button value = {this.state.banks} onClick={this.Payment2.bind(this, Payment2)}>ถัดไป </Ons.Button><br/><br/>
                  </div>

        </form>
             </div>
        </Ons.Card>
        <p style={{ textAlign: 'center', opacity: '0.6', paddingTop: '20px' }}>
           ขอบคุณที่ใช้บริการ!
        </p>
      </Ons.Page>
    );
  }
}

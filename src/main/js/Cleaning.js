var React = require('react');
var ReactDOM = require('react-dom');
var ons = require('onsenui');
var Ons = require('react-onsenui');
var client = require('./client');

var fname;
var lname;
var telnum;
var location;
var note;
var date;
var time;
var roomnumber;

class  ReceiptCleaning extends React.Component {
  renderToolbar() {
    return (
      <Ons.Toolbar>
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

  handClick(){
    roomnumber = p1
    fname = this.props.state.fname
    lname = this.props.state.lname
    telnum = this.props.state.telnum
    location = p2
    note = this.props.state.location
    date = this.props.state.date
    time = this.props.state.time

    client({method: 'GET', path: '/roomnumber/'+roomnumber+'/fname/'+fname+'/lname/'+lname+'/telnum/'+telnum+'/location/'+location+'/note/'+note+'/date/'+date+'/time/'+time}).done(
      ons.notification.alert('บันทึกสำเร็จ')
    )
  }

  
  render() {
    return (
      <Ons.Page renderToolbar={this.renderToolbar.bind(this)}>
      <Ons.Card>
         <div>
      <h3>ใบแจ้งทำความสะอาด</h3>
        </div>
        
        <p>
        หมายเลขห้อง : {p1}
        </p>
        
       <p>
        ชื่อ : {this.props.state.fname}
        </p>
        
        <p>
        นามสกุล : {this.props.state.lname}
        </p>
        
        <p>
        หมายเลขโทรศัพท์ : {this.props.state.telnum}
        </p>
        
        <p>
        ตำแหน่งที่ต้องการทำความสะอาด : {p2}
        </p>
        
        <p>
        หมายเหตุ : {this.props.state.location}
        </p>
        
        <p>
        วันที่ : {this.props.state.date}
        </p>
        
        <p>
       เวลาที่แจ้งทำความสะอาด : {this.props.state.time}
      </p>
       
       <div style={{ textAlign: 'center' }}>
        <Ons.Button onClick={this.handClick.bind(this)}>บันทึก</Ons.Button>
        </div>
        
      </Ons.Card>
      </Ons.Page>
    );
  }
  
}

var p2;
class  ReserveCleaning extends React.Component {
 constructor(){
    super()
    this.state={
      fname: '',
      lname: '',
      telnum: '',
      location: '',
      date: '',
      time:'',
      note: [
        'ทั้งห้อง',
        'ห้องนอน',
        'ห้องน้ำ',
        'ห้องครัว'
      ],
      selected: 'No'

    }
  }
 
  
  renderToolbar() {
    return (
      <Ons.Toolbar>
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
  
  handlenoteChange(note) {
    this.setState({selected: note});
  }
  
   popPage() {
    this.props.navigator.popPage();
  }
  
  ReceiptCleaning() {
    p2 = this.state.selected
    this.props.navigator.pushPage({ component: ReceiptCleaning, props: { key: 'receiptCleaning',state: this.state } });
  }
 
  
  handleFname(e) {
    this.setState({fname: e.target.value});
  }
  
  handleLname(e) {
    this.setState({lname: e.target.value});
  }
  
   handleTelnum(e) {
    this.setState({telnum: e.target.value});
  }
  
  handleLocation(e) {
    this.setState({location: e.target.value});
  }
  
  handleDate(e) {
    this.setState({date: e.target.value});
  }
  
   handleTime(e) {
    this.setState({time: e.target.value});
  }
  
  
  renderCheckboxRow(row,c) {
    return (
      <Ons.ListItem key={row} tappable>
        <label className='left'>
          <Ons.Checkbox
            inputId={`checkbox-${row}`}
            checked={row === this.state.selected}
            onChange={this.handlenoteChange.bind(this, row)}
          />
        </label>

        <label htmlFor={`checkbox-${row}`} className='center'>
          {row}
        </label>
      </Ons.ListItem>
    )
  }

  render() {
    return (
      
      <Ons.Page renderToolbar={this.renderToolbar.bind(this)}>
      <Ons.Card>
         <Ons.Card>
      
      <h3>*ข้อมูลการแจ้งทำความสะอาด</h3>
        <form >
        
        <p>
        หมายเลขห้อง : {p1}
        </p>
      
           <div>
                <label>ชื่อ:</label> &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;
                &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;
                &ensp;&ensp;&ensp;&ensp;&ensp;
                <label>นามสกุล:</label>
                <br/>
                
              <div>
               <input type="text" value={this.state.fname} onChange={this.handleFname.bind(this)}/>
                &ensp;&ensp;&ensp;
               <input type="text" value={this.state.lname} onChange={this.handleLname.bind(this)}/>
              </div>
              <br/>
              
              <div>
              <label>หมายเลขโทรศัพท์:</label>
              </div>
              
              <div>
              <input type="text" value={this.state.telnum} onChange={this.handleTelnum.bind(this)}/>
              </div>
               <br/>
              
              <label>เลือกตำแหน่งที่ต้องการให้ทำความสะอาด:</label>
              <Ons.List
               dataSource={this.state.note}
               renderRow={this.renderCheckboxRow.bind(this)}
                />
              <br/>
              
              <div>
              <label>หมายเหตุ:</label>
              </div>
              
              <div>
              <textarea type="text"  size="100" value={this.state.location} onChange={this.handleLocation.bind(this)}/>
              </div>
               <br/>
               
              <div>
              <label>วันทีที่ต้องการให้ทำความสะอาด:</label>
              </div>
              
              <div>
              <input type="date" value={this.state.date} onChange={this.handleDate.bind(this)}/>
              </div>
               <br/>
               
              <div>
              <label>เวลาที่ต้องการให้ทำความสะอาด:</label>
              </div>
              
              <div>
              <input type="time" value={this.state.time} onChange={this.handleTime.bind(this)}/>
              </div>
           <br/>
           
           </div>
           <br/>
      
        </form>
         <Ons.Button onClick={this.ReceiptCleaning.bind(this, ReceiptCleaning)}>แจ้งทำความสะอาด</Ons.Button><br/><br/>
          </Ons.Card>
      
      </Ons.Card>
      </Ons.Page>
    );
  }
  
}
var p1;
export default class Cleaning extends React.Component {
  constructor(){
    super()
    this.state={
      roomnumber: ''
    }
  }
 renderToolbar() {
    return (
      <Ons.Toolbar>
        <div className='center'>โรงแรงTeam15</div>
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
  
  ReserveCleaning() {
    if(this.state.roomnumber !==  ''){
      fetch('http://localhost:8080/api/roomnumbers/search/findByroomnumber?'+
        'roomnumber=' + this.state.roomnumber)
         .then((response)=> response.json())
         .then((responseJson) => {
    p1 = this.state.roomnumber
    this.props.navigator.pushPage({ component: ReserveCleaning, props: { key: 'reserveCleaning' } });
     })
            .catch((error) => {
                ons.notification.alert('ไอดีหรือรหัสผิด');

            });
    }else{
      ons.notification.alert('กรุณาป้อนหมายเลขห้อง');
    }
  }
  
  
 handleRoomnumberChange(e){
   this.setState({roomnumber: e.target.value});
 }
  
  render() {
    return (
      <Ons.Page renderToolbar={this.renderToolbar.bind(this)}>
       <Ons.Card>
        <div style={{ textAlign: 'center' }}>
           <h1>บริการแจ้งทำความสะอาด</h1>
        
            <img src={"http://s.isanook.com/hm/0/ud/0/4589/main_house.jpg"} style={{width: '50%'}}  />
             
             </div>
        </Ons.Card>
          
           <Ons.Card>
          <section style={{textAlign: 'center'}}>
           <h9>กรอกหมายเลขห้องห้องที่จะแจ้งทำความสะอาด</h9>
          <p>
            <Ons.SearchInput
            value={this.state.roomnumber}
            onChange={this.handleRoomnumberChange.bind(this)}
              placeholder='หมายเลขห้อง' />
          </p>
           <Ons.Button onClick={this.ReserveCleaning.bind(this, ReserveCleaning)}>ยืนยัน </Ons.Button><br/><br/>
            </section>
            </Ons.Card>
      </Ons.Page>
      
    );
  }
}
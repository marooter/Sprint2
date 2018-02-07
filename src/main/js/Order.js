
var React = require('react');
var ReactDOM = require('react-dom');
var ons = require('onsenui');
var Ons = require('react-onsenui');
var client = require('./client');

class Orderbill extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
      name:'',
      roomnum:''
    };
  }
  renderToolbar() {
    return (
      <Ons.Toolbar>
       <div className='center'>Order</div>
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
  
  handleName(e) {
    this.setState({name: e.target.value});
  }
  handleRoomnum(e) {
    this.setState({roomnum: e.target.value});
  }
  
  
 

 
  
  render() {
    return (
      <Ons.Page renderToolbar={this.renderToolbar.bind(this)}>
      
   <Ons.Card >
      <div style={{ textAlign: 'lift' }}>
          เลขที่ใบเสร็จ : 
          {bid}
      </div>
            <h1 style={{ textAlign: 'center' }}>ใบเสร็จ</h1>
      
     <form style={{ textAlign: 'center' }}> 
         ชื่อ : 
         {n} <br/>
         เลขห้อง : 
         {rn} <br/>
         รายการอาหาร : 
         {f} <br/>
         รายการเครื่องดื่ม : 
         {d} <br/>
         วันที่สั่ง : 
         {datechair}/{mounthchair}/{yearchair}<br/>
         เวลา
         {hours}:{minut}:{sec}
     </form>
     
   <Ons.Card>
    
        </Ons.Card>
        <br/>
             
</Ons.Card>

       
      </Ons.Page>
    );
  }
}







  var n;
  var rn;
  var f;
  var d;
  var date = '';
  var time;
  
var bid;
var chaird = new Date();
var datechair = chaird.getDate();
var mounthchair = chaird.getMonth() + 1;
var yearchair = chaird.getYear() + 1900;
var hours = chaird.getHours();
var minut = chaird.getMinutes();
var sec = chaird.getSeconds();


export default class Order extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
      food: [
        'set1',
        'set2',
        'set3',
        'set4',
        'set5'
      ],
      selectedFood: 'set1',
       drinks: [
        'Lemon',
        'Apple',
        'Mango',
        'Orange',
        'Strawberry'
      ],
      selectedDrink: 'Lemon',
      name:'',
      roomnum:''
    };
  }
  renderToolbar() {
    return (
      <Ons.Toolbar>
       <div className='center'>Order</div>
        <div className='right'>
          <Ons.ToolbarButton onClick={this.showMenu.bind(this)}>
            <Ons.Icon icon='ion-navicon, material:md-menu' />
          </Ons.ToolbarButton>
        </div>
      </Ons.Toolbar>
    );
  }
  
  makepassword(){
            var text1 = "";

            var text2 = "";
            var text3 = "";
            var possible1 = "0123456789";
            var possible2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
            var possible3 = "abcdefghijklmnopqrstuvwxyz";
            let bill = "";

            for (var i = 0; i < 2; i++)
                        text1 += possible1.charAt(Math.floor(Math.random() * possible1.length));

            

            for (var i = 0; i < 1; i++)
                          text3 += possible3.charAt(Math.floor(Math.random() * possible3.length));

              bill = 'OR'+text1+text3;

        return bill;
      }


  componentDidMount() {
    this.setState({password: this.makepassword()})
  }

  pushPage() {
    bid = this.state.password
    n = this.state.name
    rn = this.state.roomnum
    f = this.state.selectedFood
    d = this.state.selectedDrink
    date = "" + (chaird.getFullYear()) +'-'+ (chaird.getMonth() + 1) +'-'+ (chaird.getDate());
    
  
          client({method: 'GET', path: `/name/${this.state.name.trim()}/billid/${this.state.roomnum.trim()}`}).done(response => {
           console.log(response.entity.status)
           if(response.entity.status==="not found"){
              ons.notification.alert('ชื่อหรือเลขที่ใบบันทึกไม่ถูกต้อง');
          }else if("found"){
            client({method: 'GET', path: '/billid/'+bid+'/name/'+n+'/roomnumber/'+rn+'/food/'+f+'/drink/'+d+'/date/'+date}).done(
                ons.notification.alert('Success')
            )
            this.props.navigator.pushPage({ component: Orderbill, props: { key: 'orderbill' } });
        }else{
               ons.notification.alert('server error'+response.status.code);
        }
      });
 }
  
//   pushPage() {
//       bid = this.state.password
//       n = this.state.name
//       rn = this.state.roomnum
//       f = this.state.selectedFood
//       d = this.state.selectedDrink
//       date = "" + (chaird.getFullYear()) +'-'+ (chaird.getMonth() + 1) +'-'+ (chaird.getDate());
      
      
//       if(n=='aa' && rn =='A001'){
        
//            client({method: 'GET', path: '/billid/'+bid+'/name/'+n+'/roomnumber/'+rn+'/food/'+f+'/drink/'+d+'/date/'+date}).done(
//                 ons.notification.alert('Success')
//            )

//            //client({method: 'GET', path: '/billid/'+billid+'/name/'+n+'/roonnum/'+rn+'/food/'+f+'/drink/'+d}).done(
//           this.props.navigator.pushPage({ component: Orderbill, props: { key: 'orderbill' } });
//       }else{
//             ons.notification.alert('ข้อมูลไม่ถูกต้อง');
//       }
//   }
  

  showMenu() {
    this.props.showMenu();
  }
  
  
  handleName(e) {
    this.setState({name: e.target.value});
  }
  handleRoomnum(e) {
    this.setState({roomnum: e.target.value});
  }
  handleFoodChange(food) {
    this.setState({selectedFood: food});
  }
  handleDrinkChange(drinks) {
    this.setState({selectedDrink: drinks});
  }
  
  
  
  renderCheckboxFoodRow(row) {
    return (
      <Ons.ListItem key={row} tappable>
        <label className='left'>
          <Ons.Checkbox 
            inputId={`checkbox-${row}`}
            checked={row === this.state.selectedFood}
            onChange={this.handleFoodChange.bind(this, row)}
          />
        </label>
        <label htmlFor={`checkbox-${row}`} className='center' >
          {row}
        </label>
      </Ons.ListItem>
    )
  }
  
  renderCheckboxDrinkRow(row) {
    return (
      <Ons.ListItem key={row} tappable>
        <label className='left'>
          <Ons.Checkbox 
            inputId={`checkbox-${row}`}
            checked={row === this.state.selectedDrink}
            onChange={this.handleDrinkChange.bind(this, row)}
          />
        </label>
        <label htmlFor={`checkbox-${row}`} className='center' >
          {row}
        </label>
      </Ons.ListItem>
    )
  }

  
  
  render() {
    return (
      <Ons.Page renderToolbar={this.renderToolbar.bind(this)}>
      <div style={{ textAlign: 'center' }}>
          <h1>สั่งอาหารและเครื่องดื่ม</h1>
      </div>
      
<Ons.Card style={{ textAlign: 'center' }}>
    <h1>กรอกข้อมูล</h1>
      
  <form style={{ textAlign: 'center' }}> 
      <form bordered>
        <item>
      <input 
         style={{
            borderWidth: 2,  
            borderColor: '',  
            paddingLeft: 10,
            height: 20,
          }}
         placeholder="ชื่อ" 
         value={this.state.name}
         onChange={this.handleName.bind(this)}
         
         />
       </item>
     </form>
     <br/>
     
     <form bordered>
        <item>
      <input 
         style={{
            borderWidth: 2,  
            borderColor: '',  
            paddingLeft: 10,
            height: 20,
          }}
         placeholder="เลขห้อง" 
         value={this.state.roomnum}
         onChange={this.handleRoomnum.bind(this)}
         />
       </item>
     </form>
   </form>
   <br/>
   <Ons.Card>
    
              
        <Ons.List style={{ textAlign: 'center' }}
          dataSource={this.state.food}
          renderHeader={() => <Ons.ListHeader style={{ textAlign: 'center' }}>Choose Food Set</Ons.ListHeader>}
          renderRow={this.renderCheckboxFoodRow.bind(this)}
        />
        <Ons.List style={{ textAlign: 'center' }}
          dataSource={this.state.drinks}
          renderHeader={() => <Ons.ListHeader style={{ textAlign: 'center' }}>Choose Drinks</Ons.ListHeader>}
          renderRow={this.renderCheckboxDrinkRow.bind(this)}
        />
        
       
        </Ons.Card>
        <br/>
        
              <Ons.Button  onClick={this.pushPage.bind(this)}>
                 <Ons.Icon >สั่งอาหาร</Ons.Icon>
              </Ons.Button>
              <br/>
</Ons.Card>

       
      </Ons.Page>
    );
  }
}



import React from 'react';

  
const Home = () => {
  return (
    <div class="card2" data-tilt>
      <img src='images/img.jpg'></img>
            <h2>Find Flight:</h2>
            <form>
                <b style={{ fontSize: '24px', fontFamily: 'monospace', fontStyle: "inherit", color:'grey' }}>From:</b><input type="text" name="from" />
                <b style={{ fontSize: '24px', fontFamily: 'monospace', fontStyle: "inherit", color:'grey' }}>To:</b><input type="text" name="to" />
                <b style={{ fontSize: '24px', fontFamily: 'monospace', fontStyle: "inherit", color:'grey' }}>DepartureDate:</b><input type="text" name="departureDate"/>
             <button className='btn1'>Search</button>
               
            </form>
        </div>
        
    
  );
};
  
export default Home;


{/* <b>From:</b><input type="text" name="from" onChange={(event)=>{this.from=event.target.value}}/>
<b>To:</b><input type="text" name="to" onChange={(event)=>{this.to=event.target.value}}/>
<b>DepartureDate:</b><input type="text" name="departureDate" onChange={(event)=>{this.departureDate=event.target.value}}/>
<button onClick={this.handleSubmit.bind(this)}>Search</button> */}
import React, { Component } from 'react';
import {Form,Input } from "reactstrap";
import axios from "axios";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
  };
 
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleSubmit(event) {
    this.setState({value: event.target.value});
    let url = `http://localhost:5000/search/` + event.target.value;
    console.log(url);
    
    if(event.target.value !== '') {
      axios.get(url).then(resp => {
        console.log(resp.data);
        const details=resp.data.data;
        console.log("details",details)

        
        this.items=(details ||[]).map(data=>{
          const styleInfo = {
            paddingRight:'10px'
          }
          return(
          <div key={data.id} className="list">
            <table>
          <thead>
            <tr style={{position:'relative',left:'10vh'}}>
              <th>id</th>
              <th>name</th>
              <th>company</th>
              <th>department</th>
              <th>designation</th>
              <th>contact</th>
              <th>email</th>
            </tr>
          </thead>
          <tbody>
            <tr key={data.id} style={{position:'relative',left:'10vh'}}>
              <td style={styleInfo}>{data.id}</td>
              <td style={styleInfo}>{data.name}</td>
              <td style={styleInfo}>{data.company}</td>
              <td style={styleInfo}>{data.department}</td>
              <td style={styleInfo}>{data.designation}</td>
              <td style={styleInfo}>{data.contact}</td>
              <td style={styleInfo}>{data.email}</td>
              
            </tr>
            </tbody>
          </table>
            </div>
          )
        })
      });
    } else {
      console.log('!!!Empty Value!!!');
    }
    event.preventDefault();
  }

  render() {
   
       
    
    return (<div>
    <Form onSubmit={this.handleSubmit}>
          <Input type="search" value={this.state.value} onChange={this.handleSubmit} className="col-5" placeholder="search..."/>
    </Form>
  
          {this.items}
          
      </div>
    );
  }
}

export default Search;
import React from 'react';
import TableHeaderComponent for './header';
import TableBodyComponent for './header';

var
  components=[];
  
  
class TableManager{
  
  radio={this.props.radio} columns={this.props.columns} 
  
  registerComponent(type,name,component)
  {
    
    
  }
  
  getComponent(type,name)
  {
    
    
  }
  
  
}


var table=react.createClass({
  getInitialState(){
    
    return { header:TableHeaderComponent,
              body:TableBodyComponent,
              footer:TableBodyComponent}
   
  
    
    
  }
  
  getHeader(){
    
      
      TableHeader=this.props.header;
    
    return(<TableHeader columns={this.props.columns} radio={this.props.radio} /> )
  }
  
  getBody(){
    
    TableBody=this.props.body;
    return (<TableBody columns={this.props.columns}  radio={this.props.radio} data={this.props.data} /> )
  }
  
  
  
  
  render(){
    
  
    
    return(
      
        {this.getheader()}
        {this.getbody()}
    
     )
})

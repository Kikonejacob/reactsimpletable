import React from 'react';

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
   
  
    
    
  }
  
  getHeader(){
    
      
      TableHeader=tablemgr.getcomponent('column',this.props.headerComponent)
    
    return()
  }
  
  
  
  
  render(){
    
  
    
    return(
      
      <TableHeader  radio={this.props.radio} columns={this.props.columns}  />
      <TableBody radio={this.props.radio} columns={this.props.columns} />
      <TableFoot radio={this.props.radio} columns={this.props.columns}  />
    
     )
})

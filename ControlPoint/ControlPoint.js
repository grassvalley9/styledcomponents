import React, { Component } from "react";


import styled from 'styled-components';

import {
 
  Label,Select
  
} from './styles.js'


class ControlPoint extends Component {
	 constructor(props){
	  
    super(props);
	

	   
	 }
	
  
  render() {
    return (
	 <div>
	 <Label htmlFor='start'>Control Point</Label>
      <br />
     
    
      <Select>
       
		 
        <option value='HAL Studio'>HAL Studio</option>
        <option value='Les Sports'>Les Sports</option>
        <option value='Other Sports'>Other Sports</option>
        <option value='News'>News</option>
        <option value='Weather'>Weather</option>
        </Select>
    </div>
    );
  }
}


export default ControlPoint;

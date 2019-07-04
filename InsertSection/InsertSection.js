import React from 'react';

import SourceSection from '../Source/SourceSection';
import AssetSection from '../AssetSection/AssetSection';
import styled from 'styled-components';

import Popup from "reactjs-popup";
import {
 
  Button,Insert,SourceSectiondiv
  
} from './styles.js'


class InsertSection extends React.Component{
	constructor(props){
	  
    super(props);
	this.TakeClip = this.TakeClip.bind(this);
this.Takelive = this.Takelive.bind(this);
	
	   
	 }
	   
	 TakeClip(event){
	
	  //alert("TakeClip")
  }
  Takelive(event){
	  alert("Takelive")
  }
	render() {
	return (
	
		<Insert >
		 
	<Popup   trigger={<Button onClick={(event) => this.TakeClip(event)}>Insert and Take Clip</Button>
     } position="top center">
   <AssetSection/>
  </Popup>
      
     <SourceSectiondiv>
		 
	
      <Popup  trigger={ <Button onClick={(event) => this.Takelive(event)}>Insert and Take Live</Button>} position="left center">
   <SourceSection/>
  </Popup>
      
       
    </SourceSectiondiv> 
     
    </Insert>
	
	
	
	);
}
}


export default  InsertSection;

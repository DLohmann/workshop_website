import React, { Component } from 'react';
//IMPORT SEMANTIC-UI
import {Divider, Icon, Grid} from "semantic-ui-react";

//IMPORT JAVASCRIPT
//this function is what we import from our js folder and then use it to interact with the dom to make accordion-like animation
import {accordion, expand_button_text} from "../assets/js/accordion.js";
import { expand } from '../assets/js/skills.js';

class workExperience extends Component {
    state = {  }
    render() { 
        return (
            <React.Fragment>

            <center className="subtitle">
                <Icon name="book"/> <br/>
                David's work experience
            </center>

            <Grid columns="equal">
                <Grid.Column width={8}>
                    <button className="exp" onClick={()=>expand_button_text(0)}>button1</button>
                    <div className="panel">
                        suprising text 1!
                        <br/>
                        
                    </div>
                </Grid.Column>
                <Grid.Column width={8}>
                    <button className="exp" onClick={()=>expand_button_text(1)}>button2</button>
                    <div className="panel">
                        suprising text 2!
                    
                    </div>
                </Grid.Column>
            </Grid>


                {/*
                <div id = "workExperience">
                    <center className = "about"><Icon name ="keyboard outline"/>
                        <br/>
                        Work Experience
                    </center>
                    <Divider/>
                    <Grid columns = "equal">
                            <Grid.Column width = {8}>
                                <button className = "experience" onClick = {() => accordion(0)}>Sonic 06</button>
                                <div className = "panel">
                                    HORRIBLE GAME
                                </div>
                            </Grid.Column>
                       
                            <Grid.Column  width = {8}>
                                <button className = "experience" onClick = {() => accordion(1)}> Sonic Colors </button>
                                <div className = "panel">
                                    COOL GAME
                                </div>
                            </Grid.Column>
                    </Grid>
                    
                    <Grid columns = "equal">
                            <Grid.Column width = {8}>
                                <button className = "experience" onClick = {() => accordion(2)}>Sonic Mania</button>
                                <div className = "panel">
                                    GREAT GAME I SUPPOSE
                                </div>
                            </Grid.Column>
                       
                            <Grid.Column  width = {8}>
                                <button className = "experience" onClick = {() => accordion(3)}> Sonic Mania 2 </button>
                                <div className = "panel">
                                    GREAT GAME AS WELL!
                                </div>
                            </Grid.Column>
                    </Grid>
                </div>

                */}

                <br/>
                <br/>
            </React.Fragment>
          );
    }
}
 
export default workExperience;
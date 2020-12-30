import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import FadeIn from 'react-fade-in'
import ProfilePic from './images/profile.png'
class Contact extends Component {
    render() {
        return (
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <FadeIn>
                        <h2>Max Clayton</h2>
                        <img
                            src={ProfilePic}
                            style={{ height: '250px' }}
                            
                        />
                        <p style={{ width: '75%', margin: 'auto', paddingTop: '1em' }}>blah blah orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, </p>
                        </FadeIn>
                         </Cell>
                    <Cell col={6}>
                        <FadeIn>
                        <h2>Contact Me</h2>
                        <hr />
                        

                        <div className="contact-list">

                            <List>
                            
                                <ListItem>
                                    <ListItemContent style={{ fontSize: '30px', fontFamily: 'Montserrat' }}>
                                        <i className="fa fa-paper-plane" aria-hidden="true" />
                                    maxclayton07@gmail.com
                                </ListItemContent>

                                </ListItem>
                            </List>
                            
                        </div>
                        </FadeIn>
                    </Cell>
                </Grid></div>
        )
    }
}

export default Contact;
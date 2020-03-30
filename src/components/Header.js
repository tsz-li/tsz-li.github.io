import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import data from '../yourdata'
import { Button } from 'reactstrap';


class Header extends Component {
    state = {}

    render() {
        return (<div>
        <h1 className='heading-background'>TszDick Li</h1>
            <header>
                <h1>
                    <Fade bottom cascade>{data.name}</Fade></h1>
            </header>
            <Fade bottom>
            <p className='header-title'>
            {data.headerTagline[0]}<br></br>{data.headerTagline[1]}<br></br>
            {data.headerTagline[2]}
               <br></br>
                </p>
            <Button outline color="success"><a href={`mailto:${data.contactEmail}`} rel="noopener noreferrer" >Email Me</a></Button>{' '}    
            </Fade>



        </div>);
    }
}

export default Header;
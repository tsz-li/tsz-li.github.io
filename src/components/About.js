import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import data from '../yourdata';
import { Button, UncontrolledPopover, PopoverHeader, PopoverBody } from 'reactstrap';

class About extends Component {
    state = {  }
    render() { 
        return (<div className='about'>
            <div className='about-content'>
            <h1><Fade bottom cascade>About.</Fade></h1>
            <Fade bottom>
                    <p id="rightnow">Right now in my Full-Stack knowledge is JS, React, Ruby on Rails, along with HTML and CSS.</p>
                    <p>{data.abouttext}</p>
                    <UncontrolledPopover trigger="legacy" placement="bottom" target="PopoverLegacy">
                        <PopoverHeader>More About Me</PopoverHeader>
                        <PopoverBody>
                            <p>I am a new developer in the city of San Diego and currently part of an acelerated Full-Stack Development program called LEARN. What I really like about the program is that they know how to work well with people from all fields transitioning them from old careers, into a Web Development career. This is particularly important to me, because the last year and a half I have been working in the oilfield and on pipeline automation. I have worked closely with programmers and always found myself solving the problem at hand well with them, which led me to wanting more knowledge of tools I can use such as programming.
                            </p>
                        <br />
                            <p>During my time in the oilfield I learned so much that I never knew I could aquire. I did not start in the oilfield as the same position I last was in. I was able to continually progress my skills and knowledge and able to show that I understood the job and was moved up the ladder quickly. Once I understood the job well, I then was easily able to make changes to how I did things that was more efficient, ergo making the company more money and able to expand in the field.
                            </p>
                        </PopoverBody>
                    </UncontrolledPopover>
                    <Button id="PopoverLegacy" type="button">
                         Continue to read more of my Life Journey
                    </Button>
 
            </Fade>
            </div>
            
            <p>{data.ShowAboutImage ? <img src={data.aboutImage} alt='about iamge' height='500' width='500'></img> : null}</p>
            

        </div>  );
    }
}
 
export default About;
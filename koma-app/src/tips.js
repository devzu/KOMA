import React, { Component } from 'react';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom';
import './main.css';

const TipsPage = () => ( 
 <div className="containWithStuff">
        <div className=" row" id="root">
</div>
<App/>


</div>

);

class App extends Component {
        constructor() {
            super();
            this.handleClick1 = this.handleClick1.bind(this);
            this.state = {
                    
                viewContent1: false,
                viewContent2: false,
                viewContent3: false,
                viewContent4: false
                // 0 could be your default view
            }
        }
    
        handleClick1 = () => {
            this.setState({ viewContent1: true, viewContent2: false, viewContent3: false, viewContent4: false })
        }

        handleClick2 = (button) => {
                this.setState({viewContent1: false, viewContent2: true, viewContent3: false, viewContent4: false })
            }

        handleClick3 = (button) => {
                this.setState({viewContent1: false, viewContent2: false, viewContent3: true, viewContent4: false })
            }

        handleClick4 = (button) => {
                this.setState({ viewContent1: false, viewContent2: false, viewContent3: false, viewContent4: true  })
            }
        
    
        render() {
            const click1= this.state.viewContent1;
            const click2= this.state.viewContent2;
            const click3= this.state.viewContent3;
            const click4= this.state.viewContent4;
            if(click1) return  (<div className="container boxContent" id="">
            <div className="col-xl-11 self-align-center"><div className="row">
            <button className='button button1 col' onClick={this.handleClick1}>VIDEO</button>
                    <button className='button button2 col' onClick={this.handleClick2}> HEMSIDA</button>
                    <button className='button button3 col' onClick={this.handleClick3}> BÖCKER</button>
                    <button className='button button3 col' onClick={this.handleClick4}> APPAR</button>
            <br/>
            </div></div>
            <div className="container"><div className="row"><div className="col-xl-11 self-align-center Blue">
            
            <div className="videosContainer">
            <div className="VideoBox row">  <div className="col">
            <iframe title="fuckIt" className="WhatEverBro" width="426" height="240" src="https://www.youtube.com/embed/pZgMpjjgCRA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
            <div className="VideoDescText col"><h3>Improving Cornell Notes With Sketchnoting Techniques</h3><p>Hur kan dina anteckningar blir bättre? Här berättar videon lite olika tips för hur du kan bli bättre på att anteckna på föreläsningen, lektionen eller bara för dig själv att minnas.</p></div> </div>
        </div> <hr/>
    
        <div className="videosContainer">
            <div className="VideoBox row">  <div className="col">
            <iframe title="fuckIt" className="WhatEverBro" width="426" height="240" src="https://www.youtube.com/embed/IlU-zDU6aQ0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
            <div className="VideoDescText col"><h3>Study Less, Study Smart</h3><p>If you spend hours and hours of studying, without improving your grades, or information retention, then learn how to study smart by Marty Lobdell.  Lobdell taught Psychology at Pierce College in Washington State for 40 years.  During Lobdell's career, he has taught tens of thousands of students and he wants students to succeed.  After watching students cram for eight hours or more for a test without any improvement, Lobdell has developed a studying technique that helps the brain retain the information that you are studying in this video "Study Less, Study Smart"
</p></div> </div>
        </div> <hr/>
    
        <div className="videosContainer">
            <div className="VideoBox row">  <div className="col">
            <iframe title="fuckIt" className="WhatEverBro" width="426" height="240" src="https://www.youtube.com/embed/uT_GcOGEFsk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
            <div className="VideoDescText col"><h3>Unleash Your Super Brain To Learn Faster</h3><p>Behöver du lära dig snabbare? Behöver du bli bättre på att arbeta smart? Denna videon är från mindvalley talks, lite som Ted Talks fast mycket längre. En timme långt. Oavsett, här snackar Jim Kawk om massa bra coola grejer.</p></div> </div>
        </div> <hr/>
    
        
        {/* HEMSIDA */}
        </div></div></div></div>)
                else if (click2) return ( <div className="container boxContent" id="">
                <div className="col-xl-11 self-align-center"><div className="row">
                <button className='button button1 col' onClick={this.handleClick1}>VIDEO</button>
                        <button className='button button2 col' onClick={this.handleClick2}> HEMSIDA</button>
                        <button className='button button3 col' onClick={this.handleClick3}> BÖCKER</button>
                        <button className='button button3 col' onClick={this.handleClick4}> APPAR</button>
                <br/>
                </div></div>
                <div className="container"><div className="row"><div className="col-xl-11 self-align-center Blue">
                
                <div className="videosContainer">
                <div className="VideoBox row">  <div className="col">
                <img src="https://i.imgur.com/mxlkm4T.png" className="WhatEverBrosephine" alt="uppsala university"></img></div>
                <div className="VideoDescText col"><h3>Find the study technique that works best for you</h3><p>Starting university can be present a major change for many - with new challenges and new environments. It is important to adapt as quickly as possible in order to keep up. University studies often involve a relative freedom for students. This places greater demands on you to take more responsibility for your own learning. Many forms of instruction are new and the number of students in some programmes can be large.</p></div> </div>
            </div> <hr/>
        
            <a href="https://www.oxfordlearning.com/how-to-study-effectively/"><div className="videosContainer">
                <div className="VideoBox row">  <div className="col">
                <img src="https://i.imgur.com/V0jo4Xj.jpg" className="WhatEverBrosephine" alt="uppsala university"></img></div>
                <div className="VideoDescText col"><h3>How to study effectively</h3><p>Being properly organized and prepared for tests and exams can make all the difference to school performance. Effective studying starts with the right attitude—a positive outlook can shift studying from a punishment to an opportunity to learn.</p></div> </div>
            </div></a> <hr/>
        
        
            
            
            </div></div></div></div>
                )



                  else if (click3) return (<div className="container boxContent" id="">
                  <div className="col-xl-11 self-align-center"><div className="row">
                  <button className='button button1 col' onClick={this.handleClick1}>VIDEO</button>
                          <button className='button button2 col' onClick={this.handleClick2}> HEMSIDA</button>
                          <button className='button button3 col' onClick={this.handleClick3}> BÖCKER</button>
                          <button className='button button3 col' onClick={this.handleClick4}> APPAR</button>
                  <br/>
                  </div></div>
                  <div className="container"><div className="row"><div className="col-xl-11 self-align-center Blue">
                  
                  <div className="videosContainer" >
              <div className="VideoBox row">  <div className="col">
              <img src="https://s1.adlibris.com/images/279390/plugga-smart-och-lar-dig-mer.jpg" className="WhatEverBrosephine" alt="uppsala university"></img></div>
              <div className="VideoDescText col"><h3>Plugga smart och lär dig mer!</h3><p>Being properly organized and prepared for tests and exams can make all the difference to school performance. Effective studying starts with the right attitude—a positive outlook can shift studying from a punishment to an opportunity to learn.</p></div> </div>
          </div> <hr/>
              
              
              </div></div></div></div>)
                  else if (click4) return (
                    <div className="container boxContent" id="">
                    <div className="col-xl-11 self-align-center"><div className="row">
                    <button className='button button1 col' onClick={this.handleClick1}>VIDEO</button>
                            <button className='button button2 col' onClick={this.handleClick2}> HEMSIDA</button>
                            <button className='button button3 col' onClick={this.handleClick3}> BÖCKER</button>
                            <button className='button button3 col' onClick={this.handleClick4}> APPAR</button>
                    <br/>
                    </div></div>
                    <div className="container"><div className="row"><div className="col-xl-11 self-align-center Blue">
                    
                    <a href=""><div className="videosContainer">
                <div className="VideoBox row">  <div className="col">
                <img src="https://www.forestapp.cc/img/icon.png" className="WhatEverBrosephine" alt="uppsala university"></img></div>
                <div className="VideoDescText col"><h3>Forest Focus App</h3><p>Build Your Forest
Keep building your forest everyday, every single tree represents your focused time</p></div> </div>
            </div></a> <hr/>
                
                
                </div></div></div></div>
                  )

        else return (<div className="container boxContent" id="">
        <div className="col-xl-11 self-align-center"><div className="row">
        <button className='button button1 col' onClick={this.handleClick1}>VIDEO</button>
                <button className='button button2 col' onClick={this.handleClick2}> HEMSIDA</button>
                <button className='button button3 col' onClick={this.handleClick3}> BÖCKER</button>
                <button className='button button3 col' onClick={this.handleClick4}> APPAR</button>
        <br/>
        </div></div>
        <div className="container"><div className="row"><div className="col-xl-11 self-align-center Blue">
        
        <div className="VideoBox row">
                <div className="VideoDescText col"><h3>Studieteknik</h3><p>Lite studietips! Här kan du få tips och tekniker för dig att plugga och studera vettigt, smart och EFFEKTIVT! Tryck ovan på de fyra fina knapparna.</p></div> </div>
            <hr/>
    
    
    </div></div></div></div>
        )
        }

        
}
ReactDOM.render(<App />, document.getElementById('root'));

export default TipsPage;
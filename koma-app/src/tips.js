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
    
        
        
        </div></div></div></div>)
                else if (click2) return ( 
                        <div className="container" id="">
        <div className="col-xl-11 self-align-center"><div className="row">
        <button className='button button1 col' onClick={this.handleClick1}>VIDEO</button>
                <button className='button button2 col' onClick={this.handleClick2}> HEMSIDA</button>
                <button className='button button3 col' onClick={this.handleClick3}> BÖCKER</button>
                <button className='button button3 col' onClick={this.handleClick4}> APPAR</button>
        <br/>
        </div></div></div>
                )
                  else if (click3) return (<div className="container" id="">
                  <div className="col-xl-11 self-align-center"><div className="row">
                  <button className='button button1 col' onClick={this.handleClick1}>VIDEO</button>
                          <button className='button button2 col' onClick={this.handleClick2}> HEMSIDA</button>
                          <button className='button button3 col' onClick={this.handleClick3}> BÖCKER</button>
                          <button className='button button3 col' onClick={this.handleClick4}> APPAR</button>
                  <br/>
                  </div></div></div>)
                  else if (click4) return (
                        <div className="container" id="">
                        <div className="col-xl-11 self-align-center"><div className="row">
                        <button className='button button1 col' onClick={this.handleClick1}>VIDEO</button>
                                <button className='button button2 col' onClick={this.handleClick2}> HEMSIDA</button>
                                <button className='button button3 col' onClick={this.handleClick3}> BÖCKER</button>
                                <button className='button button3 col' onClick={this.handleClick4}> APPAR</button>
                        <br/>
                        </div></div></div>
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
        
        <div className="videosContainer">
        <div className="VideoBox row">  <div className="col">
        <iframe title="fuckIt" className="WhatEverBro" width="426" height="240" src="https://www.youtube.com/embed/aVS4W7GZSq0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
        <div className="VideoDescText col"><h3>Lorem Ipsum</h3><p>Väldigt informativ video om Lorem Ipsum</p></div> </div>
    </div> <hr/>

    <div className="videosContainer">
        <div className="VideoBox row">  <div className="col">
        <iframe title="fuckIt" className="WhatEverBro" width="426" height="240" src="https://www.youtube.com/embed/aVS4W7GZSq0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
        <div className="VideoDescText col"><h3>Lorem Ipsum</h3><p>Väldigt informativ video om Lorem Ipsum</p></div> </div>
    </div> <hr/>

    <div className="videosContainer">
        <div className="VideoBox row">  <div className="col">
        <iframe title="fuckIt" className="WhatEverBro" width="426" height="240" src="https://www.youtube.com/embed/aVS4W7GZSq0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
        <div className="VideoDescText col"><h3>Lorem Ipsum</h3><p>Väldigt informativ video om Lorem Ipsum</p></div> </div>
    </div> <hr/>

    
    
    </div></div></div></div>
        )
        }

        
}
ReactDOM.render(<App />, document.getElementById('root'));

export default TipsPage;
import React from "react";
import Dev from "../Devloper.png";
import axios from "axios";

const btnStyle={"width":"65px","height":"65px","background":"linear-gradient(45deg,#F41484,#C036EA)","borderRadius":"50%","border":"0px"};
const btnStyle2={"background":"linear-gradient(45deg,#F41484,#C036EA)","border":"0px"};
const twitterBtn={"backgroundColor":"#00A7FF","width":"65px","height":"65px","border":"0px","borderRadius":"50%"};
const whatsappBtn={"backgroundColor":"#09E064","width":"65px","height":"65px","border":"0px","borderRadius":"50%"};


const showQuotes=()=>
{
      
      axios.get('https://api.quotable.io/random').then(response=>{
            const quote =response.data.content;
            const author=response.data.author;
            document.getElementById('quote').innerHTML=quote;
            document.getElementById('author').innerHTML='By '+author;
            document.getElementById("twitter").setAttribute('href','https://twitter.com/intent/tweet?text='+quote+' by '+author);
            document.getElementById("whatsapp").setAttribute('href','whatsapp://send?text='+quote+' by '+author+'');
      });
}

const Quote = () =>
{
      return <div>
            <div className="hero is-fullheight">
                  <div className="hero-body">
                        <div className="container">
                              <div className="columns">
                                    <div className="column">
                                    <i className="fa fa-quote-left is-size-1"></i> 
                                          <h1 className="title is-size-1 has-text-black" id="quote">Be slow to fall into friendship; but when thou art in, continue firm and constant.</h1>
                                          <br/>
                                          <h2 className="subtitle" id="author">By Isocrates</h2>
                                          <div className="buttons">
                                                <a href="#/" className="button" style={btnStyle} onClick={showQuotes}><i className="fas fa-chevron-right has-text-white"></i></a>
                                                <a href="#/" className="button" style={twitterBtn} id="twitter"><i className="fab fa-twitter has-text-white"></i></a>
                                                <a href="#/" className="button" style={whatsappBtn} id="whatsapp"><i className="fab fa-whatsapp has-text-white"></i></a>
                                          </div>
                                          <br/>
                                          <br/><br/><br/>
                                    <p className="subtitle has-text-centered">Made with <i className="fa fa-heart has-text-danger"></i> by <a href="#/">Sumit Kumar Bighaniya</a></p>
                                    </div>
                                    
                              </div>
                        </div>
                  </div>
            </div>
      </div>;
}

export default Quote;
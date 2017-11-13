import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from "redux-zero/react";
import { Redirect, HashRouter,Switch,Route,NavLink } from 'react-router-dom';

const Header =()=>{
    return(
      <div className="col-md-12">
      <nav className="navbar navbar-default navbar-fixed-top col-md-12 navbar-transparent">
          <div className="brand-left">
          </div>
      <div id="navbar9" className="navbar-collapse collapse">
        <ul className="nav navbar-nav navbar-right text-uppercase">
            <li><a href="#home">Home</a></li>
            <li><a href="#aboutme">About Me</a></li>
            <li><a href="#skills">Skill</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">contact</a></li>
        </ul>
      </div>
      </nav>
  </div>
    )
}
const Home = () =>{
  return (
    <section className="container-fluid home"id="home">
      <div className="row color">
        <div className="cont-name">
        <div className="col-md-offset-2 col-lg-8 text-center name">
          <h2>Haidy Flor</h2>
          <hr className="hr"/>
          <p>Sé siempre tu proyecto más importante,haz siempre lo que te apasiona.</p>
          <hr className="hr"/>
      </div>
        <div className="col-xs-12 col-lg-12 text-center cont-btn">
          <NavLink to="/aboutme">
          <button className="btn btn-direct">
              Conóceme
          </button>
          </NavLink>
        </div>
      </div>
      </div>			
    </section>
    );

}

const About =()=>{
  return(
    <section className="container-fluid about" id="aboutme">
      <div className="row">
      <Header/>
        <div className="col-md-10 text-center principal-title">
          <h2>Acerca de mi</h2>
        </div>
        <div className="col-lg 12 col-md-12">
          <div className ="col-lg-6 col-md-6 photo"></div>
          <div className =" col-lg-6 col-md-6 text-center text-about">
            <p className="col-lg-12 col-md-12 cont-about">
            ¡Hola!
            Soy Haidy, actualmente estudio Front end Developer en Laboratoria,
            aquí acompaño mi aprendizaje técnico con habilidades blandas 
            relevantes para mi desarrollo profesional en un futuro, persona
            autodidacta con compromiso por los desafíos,disfruto recopilar información,
            trabajar en equipo y leer.
            </p>
          </div>
        </div>
      </div>			
    </section>
    )
}
/*=============================================Skills===================================== */
const ItemImg = ({item,index}) => {
  /*div-img*/
  return(

          <div  className='col-lg-2 col-md-2 col-xs-2 div-img'>
              <i className={item.img}></i>
              </div>      
  )

}
const Skills =({images})=>{
  return(
    <section className="container-fluid skills" id="skills">
      <div className="row color">
        <Header/>
        <div className="col-md-12 text-center">
        <h2>Skills Tech</h2>
        <p>Estas son mis habilidades técnicas</p>
        </div>
        <div className ="col-lg-12 col-md-12 img-skill">
        {
        images.map((item,index)=>{
          return <ItemImg key ={index} item={item} index={index}/>
        })
        }
        </div>
      </div>			
    </section>
    )
}

/*=============================================Projects===========================================*/
const ImgPro = ({item,index}) => {
  return(
    <div className=" col-lg-4 col-md-4 col-xs-4 div-img-pro">
      <img className="img-responsive" id={item.class} src={item.img}/>
    </div>     
  )

}
const Project =({imgProject})=>{
  return(
    <section className="container-fluid projects" id="projects">
      <div className="row">
      <Header/>
        <div className="col-md-12 text-center">
          <h2>Projects</h2>
        </div>
        <div className="img-project col-lg-12 ">
            {
              imgProject.map((item,index)=>{
                return <ImgPro key ={index} item={item} index={index}/>
              })
            }
        </div>
      </div>			
    </section>
    )
}

const Contact =()=>{
  return(
    <section className="container-fluid contact" id="contact">
      <div className="row color text-color">
      <Header/>
        <div className="col-md-12 text-center">
        <h2>Contactame</h2>
        <p>Si te gusto mi trabajo , sera muy grato hablar contigo. Contactame.</p>
        </div>
        <div className="col-lg-12">
          <form className="col-md-offset-4 col-lg-4">
            <div className="form-group">
              <label>Nombre</label>
              <input type="email" className="form-control"  aria-describedby="emailHelp" placeholder="Enter email"/>
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="email" className="form-control"  aria-describedby="emailHelp" placeholder="Enter email"/>
            </div>
            <div className="form-group">
            <label htmlFor="comment">Comentario</label>
            <textarea className="form-control" rows="10" cols="40"></textarea>
            </div>
            <button type="submit" className="col-md-offset-4 col-lg-4 btn btn-primary">Send</button>
          </form>
        </div>
      </div>			
    </section>
    )
}

const App = ({images,imgProject}) => {
  return(
       <div>
        <HashRouter>
			    <Switch>
            <Route  exact path="/" component ={Home}/>
				    <Route  path="/home" render={() => <Home/>}/>
				    <Route  path="/aboutme" render={() => <About />}/>
				    <Route  path="/skills" render={() => <Skills images={images} />}/>
				    <Route  path="/projects" render={() => <Project imgProject={imgProject} />}/>
            <Route  path="/contact" component ={Contact}/>

			</Switch>
      </HashRouter>
		</div>

        )
}
const mapToProps = ({ images,imgProject }) => ({ images,imgProject});
export default connect(mapToProps)(App);

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from "redux-zero/react";
import {  NavLink } from 'react-router-dom';

const Home = () =>{
  return (
    <section className="container-fluid home"id="home">
      <div className="row color">
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

        <div className="cont-name">
        <div className="col-md-offset-4 col-md-4 text-center name">
          <hr className="hr"/>
          <h2>Haidy Flor</h2>
          <hr className="hr"/>
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
        <div className="col-md-10 text-center title-about">
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
            Antes de entrar al mundo de la programación,
            trabaje en el área de contabilidad pública y privada .
            </p>
          </div>
        </div>
      </div>			
    </section>
    )
}
/*=============================================Skills===================================== */
const ItemImg = ({item,index}) => {
  return(

          <div  className='col-lg-2 col-md-2 col-xs-2 div-img'>
              <img className="img-responsive" src={item.img}/>
              </div>      
  )

}
const Skills =({images})=>{
  return(
    <section className="container-fluid skills" id="skills">
      <div className="row color">
        <div className="col-md-12 text-center">
        <h2>Skills Tech</h2>
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
      <div className="row color">
        <div className="col-md-12 text-center">
        <h2>contact</h2>
        </div>
        <div className="col-lg-12">
          <form className="col-md-offset-4 col-lg-4">
            <div className="form-group">
              <label>Email address</label>
              <input type="email" className="form-control"  aria-describedby="emailHelp" placeholder="Enter email"/>

            </div>
            <div className="form-group">
            <label htmlFor="comment">Comment:</label>
            <textarea className="form-control" rows="10" cols="40"></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>			
    </section>
    )
}

const App = ({images,imgProject}) => {
    return(
      <div>
        <Home/>
        <About/>
        <Skills images={images}/>
        <Project imgProject={imgProject}/>
        <Contact/>
      </div>
    )
}
const mapToProps = ({ images,imgProject }) => ({ images,imgProject});
export default connect(mapToProps)(App);

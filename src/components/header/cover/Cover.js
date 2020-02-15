import React from 'react';
import { BackgroungImageBus } from '../style';

function Cover() {
  return (
    <>
        <div className="cover">
        <div className="navbar">
            <div className="container">
            <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-ex-collapse">
                <span className="sr-only"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                </button>
            </div>
            <div className="collapse navbar-collapse" id="navbar-ex-collapse">
                <ul className="nav navbar-nav navbar-right">
                <li>
                    <a href="contactus.html" className="text-inverse">Ajude-nos<i className="fa fa-comments-o fa-fw fa-lg pull-right text-inverse"></i></a>
                </li>
                </ul>
            </div>
            </div>
        </div>
        </div>
        <BackgroungImageBus className="cover-image" />
        <div className="container">
            <div className="row">
            <div className="col-md-12 text-center">
                <h1 className="text-inverse">Simplício</h1>
                <p className="text-inverse">Fique por dentro da sua vaga e garanta o seu direito!</p>
                <br />
                <br />
                <a className="btn btn-lg btn-primary" data-toggle="modal" href="pageList/list.html">Entrar</a>
            </div>
        </div>
        </div>
    </>
  );
}

export default Cover;
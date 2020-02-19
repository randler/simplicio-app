import React, { useState } from 'react';
import { BackgroungImageBus, ContainerLogin } from '../style';
import { Modal, Button } from 'react-bootstrap';

function Cover() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
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
        <ContainerLogin className="container">
            <div className="row">
            <div className="col-md-12 text-center">
                <h1 className="text-inverse">Simplício</h1>
                <p className="text-inverse">Fique por dentro da sua vaga e garanta o seu direito!</p>
                <br />
                <br />
                <Button variant="primary" onClick={handleShow}>
                    Entrar
                </Button>
            </div>
        </div>
        </ContainerLogin>
        <Modal 
            show={show}
            size='sm' 
            onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>Entrar</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div class="form-group">
                <label class="control-label" for="exampleInputEmail1">Login</label>
                <input class="form-control" id="exampleInputEmail1" placeholder="Digite o seu Login" type="email" />
              </div>
              <div class="form-group">
                <label class="control-label" for="exampleInputPassword1">Senha</label>
                <input class="form-control" id="exampleInputPassword1" placeholder="Digite sua Senha" type="password" />
              </div>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="primary" onClick={handleClose}>
                Entrar
            </Button>
            </Modal.Footer>
        </Modal>
    </>
  );
}

export default Cover;
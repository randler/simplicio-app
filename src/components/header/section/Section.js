import React from 'react';
import { SectionHome } from '../style';

import studing from '../../../assets/img/studing.png';

export default function section() {
  return (
      <>

    <div className="section">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h1 className="text-primary">Simplício</h1>
            <h2>Informe-se, Comunique e Ajude!</h2>
            <h3>
              <p className="text-justify text-muted">A ideia principal dessa página é informar aos estudantes universitários
                de Cândido Sales a sua situação quanto a documentação.
                <br />
                <br />
                <br />Você poderá saber de forma
                <b>Transparente</b>e
                <b>Real</b>qual a sua situação referente a poltrona.</p>
            </h3>
          </div>
          <div className="col-md-6">
            <img src={studing} alt="studing" className="img-responsive" />
          </div>
        </div>
      </div>
    </div>
    <SectionHome className="section text-center">
      <p className="text-center">
        <b>"A educação tem raízes amargas, mas os seus frutos são doces"</b>
      </p>
      <h5 className="text-center text-muted">Aristóteles</h5>
    </SectionHome>
    <div className="fade modal" id="modalLoginIndex">
      <div className="modal-dialog modal-sm" id="modalLoginIndex">
        <div className="modal-content">
          <div className="modal-header">
            <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
            <h4 className="modal-title" contenteditable="true">
              <i className="fa fa-fw fa-lg fa-user"></i>Entrar</h4>
          </div>
          <div className="modal-body">
            <form role="form">
              <div className="form-group">
                <label className="control-label" for="exampleInputEmail1">Login</label>
                <input className="form-control" id="exampleInputEmail1" placeholder="Digite o seu Login" type="email" />
              </div>
              <div className="form-group">
                <label className="control-label" for="exampleInputPassword1">Senha</label>
                <input className="form-control" id="exampleInputPassword1" placeholder="Digite sua Senha" type="password" />
              </div>
              <button type="submit" className="btn btn-primary">Entrar</button>
            </form>
          </div>
          <div className="modal-footer"></div>
        </div>
      </div>
    </div>
    
      </>
  );
}

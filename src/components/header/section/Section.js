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
                    <b> Transparente </b>e
                    <b> Real</b> qual a sua situação referente a poltrona.</p>
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
      </>
  );
}

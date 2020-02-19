import React from 'react';

// import { Container } from './styles';

function Footer () {
    return (
      <footer className="section section-primary">
      <div className="container">
        <div className="row">
          <div className="col-sm-2 col-md-8">
            <h1>Simplício</h1>
            <h4>
              <p>A informação de forma Transparente e Real!</p>
            </h4>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-sm-2 col-md-2 text-center">
                <img alt="user" src="https://scontent.fvdc1-1.fna.fbcdn.net/v/t1.0-9/78411263_2753399211382885_5854931887859957760_n.jpg?_nc_cat=109&_nc_ohc=Msa1HmRT5wAAX8Z3von&_nc_ht=scontent.fvdc1-1.fna&oh=ce14423b12b9b4a5a9b489a06b2de1a8&oe=5EBF1565" className="center-block img-circle img-responsive" width="100" />
                <h3 className="text-center">Randler</h3>
                <p className="text-center">Desenvolvedor</p>
                <a href="https://www.facebook.com/randlerferraz"><i className="fa fa-2x fa-facebook fa-fw text-inverse"></i></a>
                <a href="https://twitter.com/randlerferraz"><i className="fa fa-2x fa-fw fa-twitter text-inverse"></i></a>
                <a href="https://www.instagram.com/randler_ferraz/"><i className="fa fa-2x fa-fw fa-instagram text-inverse"></i></a>
                <a href="https://github.com/randler"><i className="fa fa-2x fa-fw fa-github text-inverse"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
    );
}

export default Footer;
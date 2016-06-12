import React, {Component, PropTypes} from 'react';
import LoginFacebook from './LoginFacebook';
import { Meteor } from 'meteor/meteor';
import ListPages from './ListPages';
import userContainer from '../containers/user';

@userContainer
export default class MainApp extends Component {
  render(){
    return (
      <div className="no-loader">
              <div className="loader">
                <div className="spinner">
                <div className="double-bounce1"></div>
                <div className="double-bounce2"></div>
              </div>
              </div>

            <div className="nav-container">
              <nav className="simple-bar top-bar">
                <div className="container">


                  <div className="row nav-menu">
                    <div className="col-md-3 col-sm-3 columns">
                      <img className="logo logo-dark" alt="Logo" src="img/logo-dark.png" />
                    </div>

                    <div className="col-md-9 col-sm-9 columns text-right">
                      <ul className="menu">
                        <li><a className="inner-link" href="#como">como funciona</a></li><li><a className="inner-link" href="#contato">contato</a></li>




                      </ul>

                      <ul className="social-icons text-right">


                        <li>
                          <a href="https://www.facebook.com/BotPay-1574537982839952/">
                            <i className="icon social_facebook text-facebook"></i>
                          </a>
                        </li>


                      </ul>
                    </div>
                  </div>

                  <div className="mobile-toggle">
                    <i className="icon icon_menu"></i>
                  </div>

                </div>
              </nav>

            </div>

            <div className="main-container">
            <section className="product-right" style={{paddingTop: '180px'}}>

                <div className="background-image-holder">
                  <img className="background-image" alt="Background Image" src="img/grey-bg.jpg" />
                </div>

                <div className="container align-vertical">
                  <div className="row">
                    <div className="col-md-5 col-sm-6">
                      <h1>Envie e receba pagamentos com o Facebook messenger</h1>
                      <p className="lead">
                        Já imaginou usar o Facebook Messenger para receber pagamentos diretamente em sua página do Facebook? Com o BotPay, em algumas mensagens, seus clientes e fãs poderão fazer pagamentos de uma forma rápida e social. E você ainda poderá acompanhar o histórico de transações.
                      </p>

                      <a href="#" className="btn btn-primary btn-filled">ENTRE COM FACEBOOK</a>

                                    <div style={{marginTop:'55px', fontSize: '10px'}} >POWERED BY: <img style={{paddingLeft:'15px', height: '55px', marginBottom: '10px'}} src="img/logo-mastercard.png" /></div>

                    </div>
                  </div>
                </div>

                <div className="product-image" data-scroll-reveal="enter right and move 100px">
                  <img alt="Product Image" src="img/ipad.png" />
                </div>

              </section>

              <section  className="duplicatable-content">

                <div id="como" className="container">
                  <div className="row">
                    <div className="col-md-12 text-center">
                      <h1>Como o BotPay funciona?</h1>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-sm-6">
                      <div className="feature feature-icon-large">
                        <div className="pull-left">
                          <i className="icon icon-lightbulb"></i>
                        </div>
                        <div className="pull-right">
                          <h5>Integração fácil e rápida</h5>
                          <p>
                            Ao criar uma conta, todas as páginas que você administra no Facebook estarão disponíveis para serem integradas e receberem pagamentos.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="col-sm-6">
                      <div className="feature feature-icon-large">
                        <div className="pull-left">
                          <i className="icon icon-alarmclock"></i>
                        </div>
                        <div className="pull-right">
                          <h5>Histórico de transações</h5>
                          <p>Veja de forma clara todas as transações feitas pelo BotPay em sua página ao longo do tempo.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="col-sm-6">
                      <div className="feature feature-icon-large">
                        <div className="pull-left">
                          <i className="icon icon-global"></i>
                        </div>
                        <div className="pull-right">
                          <h5> Atinja seu público em qualquer lugar</h5>
                          <p>
                             45% dos Brasileiros estão no Facebook. Com o poder das redes sociais, seus clientes poderão efetuar pagamentos de qualquer lugar.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="col-sm-6">
                      <div className="feature feature-icon-large">
                        <div className="pull-left">
                          <i className="icon icon-target"></i>
                        </div>
                        <div className="pull-right">
                          <h5>Várias formas de pagamento em um clique</h5>
                          <p>
                            Usando a tecnologia MasterPass, seus clientes terão em um único clique diversas formas de pagamento para seu projeto, produto ou serviço.
                          </p>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>

              </section>

              <section className="strip bg-secondary-1">
                <div className="container">
                  <div className="row clearfix">
                    <div className="col-sm-6 pull-left col-xs-11">
                      <h3 className="text-white"><strong>Receba pagamentos sociais em sua página.</strong> <br/>Configuração em menos de 5 minutos!</h3>
                    </div>

                    <div className="col-sm-4 col-xs-12 pull-right text-right">
                      <a href="#" className="btn btn-primary btn-white">ENTRE COM FACEBOOK</a>
                    </div>
                  </div>
                </div>
              </section>

              <section className="pure-text-contact">
                <div className="container">
                  <div className="row">
                    <div className="col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2 text-center">
                      <span className="sub alt-font">dinâmico, social e inovador<br/></span>
                      <h1><strong>Seus visitantes interagem com o Facebook Messenger, descobrem mais infos sobre seu produto ou serviço e realizam pagamentos diretamente em sua página.</strong></h1>
                      <i className="icon icon-chat"></i>
                      <i className="icon icon-heart"></i>
                      <i className="icon icon-wallet"></i>
                    </div>
                  </div>

                </div>
              </section>

              <section id="contato" className="contact-center">
                <div className="container">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2 text-center">
                      <h1>Entre em contato</h1>
                      <p className="lead">
                        Tem dúvidas, sugestões, críticas ou reclamações?</p>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-4 col-md-offset-4 col-sm-6 col-sm-offset-3">
                      <div className="form-wrapper clearfix">
                        <form className="form-contact email-form">
                          <div className="inputs-wrapper">
                            <input className="form-name validate-required" type="text" placeholder="Nome" name="name" />
                            <input className="form-email validate-required validate-email" type="text" name="email" placeholder="Email" />
                            <textarea className="form-message validate-required" name="message" placeholder="Mensagem"></textarea>
                          </div>
                          <input type="submit" className="send-form" value="Enviar" />
                          <div className="form-success">
                            <span className="text-white">Mensagem enviada - responderemos em breve</span>
                          </div>
                          <div className="form-error">
                            <span className="text-white">Erro - favor preencher corretamente</span>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>

            <div className="footer-container">

              <footer className="social bg-secondary-1">

                <div className="container">
                  <div className="row">
                    <div className="col-sm-12 text-center">

                      <span className="sub">© Copyright 2016 <a href="#">BotPay</a>- Todos os Direitos Reservados</span>
                    </div>
                  </div>
                </div>

              </footer>
            </div>
        {
           this.props.user ?
          <ListPages user={this.props.user} /> :
          <LoginFacebook label="Entrar com Facebook"/>
        }
      </div>
    );
  }
}
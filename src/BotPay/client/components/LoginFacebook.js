import React, {Component} from 'react';
import { Bert } from 'meteor/themeteorchef:bert';

export default class FacebookButton extends Component {

  handleFacebookLogin(){
    Meteor.loginWithFacebook({
      requestPermissions: Meteor.settings.public.facebook.permissions,
    }, error => {
      if(!error){
        return;
      }

      if (error && error.reason.match('Email already exists.')) {
        Bert.alert('Seu email já está cadastrado no sistema. Entre com seu login e senha', 'danger');
        return;
      }

      Bert.alert('Erro ao alcançar o Facebook, tente mais tarde', 'danger');
    });
  }

  render(){
    return (
      <button
        type="submit"
        className="lg"
        onClick={this.handleFacebookLogin}
      >
        {this.props.label}
      </button>
    );
  }
};

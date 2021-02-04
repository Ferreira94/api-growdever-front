import CreateAccount from './classes/CreateAccount';
import Login from './classes/Login';

class App {
  constructor() {
    this.createAccountModal = new CreateAccount();
    this.loginModal = new Login();
  }
}

new App();
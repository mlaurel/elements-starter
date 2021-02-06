/// <style path="./index.css"/>
import * as React from 'react';
import { getFormData } from '@elements/application';
import { Navbar } from 'app/shared/components/navbar';
import { ILoginPage } from './types';

export default class LoginPage extends React.Component<ILoginPage, ILoginPage> {
  constructor(props: ILoginPage) {
    super(props);
    this.state = { ...props };
  }

  async onContinue(e) {
    e.preventDefault();
    let form = await getFormData(e.target);
    console.log(form);
  }

  render() {
    return (
      <div className="login-page">
        <Navbar/>

        <div className="container mx-auto my-20 max-w-sm">
          <h1 className="mb-10">
            Log in.
          </h1>

          <p className="font-light">
            Type your email and password to login.
          </p>
          <form className="my-5" onSubmit={(e) => this.onContinue(e)}>
            <input type="email" name="email" placeholder="james.doe@company.com" className="w-full" autoFocus required />
            <input type="password" name="password" placeholder="password" className="w-full" required />
            <input type="submit" value="Continue" className="my-10 w-full" />
          </form>
        </div>

        <aside className="bg-texture">
        </aside>
      </div>
    );
  }
}

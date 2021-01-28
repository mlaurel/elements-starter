/// <style path="./index.css"/>
import * as React from 'react';

export interface INavbar {
  [key: string]: any;
}

export class Navbar extends React.Component<INavbar, INavbar> {
  constructor(props: INavbar) {
    super(props);
    this.state = { ...props };
  }

  render() {
    return (
      <nav className="border-b border-gray-100 py-5 bg-white">
        <div className="container mx-auto px-5">
          <div className="flex justify-between">
            <a href="/">
              <img src="app/shared/images/logo.png" className="h-12 hover:opacity-70" />
            </a>
            <a href="/login">
              <button>
                Login
              </button>
            </a>
          </div>
        </div>
      </nav>
    );
  }
}

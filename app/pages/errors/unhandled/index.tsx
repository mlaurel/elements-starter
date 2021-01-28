/// <style path="./index.css"/>
import * as React from 'react';
import { IUnhandledPage } from './types';
import { Navbar } from 'app/shared/components/navbar';

export default class UnhandledPage extends React.Component<IUnhandledPage, IUnhandledPage> {
  constructor(props: IUnhandledPage) {
    super(props);
    this.state = { ...props };
  }

  render() {
    return (
      <div className="unhandled-page">
        <Navbar/>

        <div className="text-center my-20">
          <img src="app/shared/images/500.svg" className="mx-auto mb-10"/>
          <h1 className="text-gray-700 mb-10">Unexpected error.</h1>
          <p className="mb-2">
            Something went wrong.
          </p>
          <p>
            <a href="/">
              Go back home.
            </a>
          </p>
        </div>

        <aside className="bg-texture">
        </aside>
      </div>
    );
  }
}

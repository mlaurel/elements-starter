/// <style path="./index.css"/>
import * as React from 'react';
import { INotFoundPage } from './types';
import { Navbar } from 'app/shared/components/navbar';

export default class NotFoundPage extends React.Component<INotFoundPage, INotFoundPage> {
  constructor(props: INotFoundPage) {
    super(props);
    this.state = { ...props };
  }

  render() {
    return (
      <div className="not-found-page">
        <Navbar/>

        <div className="text-center my-20">
          <img src="app/shared/images/404.svg" className="mx-auto mb-10"/>
          <h1 className="text-gray-700 mb-10">Not found.</h1>
          <p className="mb-2">
            The data or url you requested wasn't found.
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

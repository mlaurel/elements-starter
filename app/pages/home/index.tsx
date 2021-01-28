/// <style path="./index.css"/>
import * as React from 'react';
import { ResourceCard } from 'app/shared/components/resource-card';
import { Navbar } from 'app/shared/components/navbar';

import { IHomePage } from './types';

export default class HomePage extends React.Component<IHomePage, IHomePage> {
  constructor(props: IHomePage) {
    super(props);
    this.state = { ...props };
  }

  render() {
    return (
      <div className="home-page">
        <Navbar/>

        <div className="bg-blue-50 px-5">
          <div className="container mx-auto py-16 xl:py-24 text-center">
            <h1 className="text-4xl md:text-6xl mb-6">
              Welcome to Elements
            </h1>
            <h2 className="mb-6 text-blue-400 text-3xl md:text-4xl">
              {this.props.subtitle}
            </h2>
            <p className="text-lg leading-normal">
              Your elements app is running. Try making a change to<br/>
              <span className="text-blue-400 font-mono">app/pages/home/index.tsx</span><br/>
              and see the changes hot reloaded in the browser.
            </p>
          </div>
        </div>

        <div className="container mx-auto px-5 py-10 md:py-20">
          <div className="grid md:grid-cols-3 gap-10 justify-center md:justify-start">
            <ResourceCard
              title="Learn"
              desc="Watch videos about elements."
              href="https://elements.dev/learn"
              buttonText="learn/"
              icon={() => {
                return (
                  <svg viewBox="0 0 40 40" className="w-10 fill-current text-blue-400">
                    <path d="M8,4 L32,4 C36.4183,4 40,7.58172 40,12 L40,28 C40,32.4183 36.4183,36 32,36 L8,36 C3.58172,36 0,32.4183 0,28 L0,12 C0,7.58172 3.58172,4 8,4 Z M32,7 L8,7 C5.23858,7 3,9.23858 3,12 L3,28 C3,30.7614 5.23858,33 8,33 L32,33 C34.7614,33 37,30.7614 37,28 L37,12 C37,9.23858 34.7614,7 32,7 Z M17.1,14.1079 L24.9,20 L17.1,25.8921 L17.1,14.1079 Z" />
                  </svg>
                );
              }}
            />

            <ResourceCard
              title="Community"
              desc="Hang out with other builders."
              href="https://people.elements.dev"
              buttonText="community/"
              icon={() => {
                return (
                  <svg viewBox="0 0 24 24" className="w-10 fill-current text-blue-400">
                    <path d="M16 17V19H2V17S2 13 9 13 16 17 16 17M12.5 7.5A3.5 3.5 0 1 0 9 11A3.5 3.5 0 0 0 12.5 7.5M15.94 13A5.32 5.32 0 0 1 18 17V19H22V17S22 13.37 15.94 13M15 4A3.39 3.39 0 0 0 13.07 4.59A5 5 0 0 1 13.07 10.41A3.39 3.39 0 0 0 15 11A3.5 3.5 0 0 0 15 4Z" />
                  </svg>
                );
              }}
            />

            <ResourceCard
              title="Email"
              desc="Send an email and say hello."
              href="https://elements.dev/learn"
              buttonText="email/"
              icon={() => {
                return (
                  <svg viewBox="0 0 40 40" className="w-10 fill-current text-blue-400">
                    <path d="M22 4L10 24H18V36L30 16H22V4Z" />
                  </svg>
                );
              }}
            />
          </div>
        </div>
      </div>
    );
  }
}

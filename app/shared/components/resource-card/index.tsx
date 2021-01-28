/// <style path="./index.css"/>
import * as React from 'react';

export interface IResourceCard {
  title: string;
  desc: string;
  buttonText: string;
  href: string;
  icon: () => JSX.Element;
}

export class ResourceCard extends React.Component<IResourceCard, IResourceCard> {
  constructor(props: IResourceCard) {
    super(props);
    this.state = { ...props };
  }

  render() {
    return (
      <div className="resource-card flex flex-row">
        <div className="row-span-2 p-2">
          {this.props.icon()}
        </div>
        <div className="p-2">
          <div className="flex flex-col h-full">
            <h4 className="text-lg mb-3">
              {this.props.title}
            </h4>
            <p className="mb-5 flex-1">
              {this.props.desc}
            </p>
            <a href={this.props.href} target="_blank" className="flex-1">
              <button className="btn-primary">
                {this.props.buttonText}
              </button>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

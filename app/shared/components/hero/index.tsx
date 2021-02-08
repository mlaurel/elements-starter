/// <style path="./index.css"/>
import * as React from "react";

export interface IHero {
    [key: string]: any;
}

export class Hero extends React.Component<IHero, IHero> {
    constructor(props: IHero) {
        super(props);
        this.state = { ...props };
    }

    render() {
        return (
            <section className="px-5 bg-blue-50">
                <div className="container py-16 mx-auto text-center xl:py-24">
                    <div className="flex flex-col justify-between space-y-6">
                        <h1 className="text-4xl md:text-6xl">
                            {this.props.title}
                        </h1>
                        <h2 className="text-blue-400">{this.props.subtitle}</h2>
                        <p className="text-lg leading-normal">
                            Your elements app is running. Try making a change to
                            <span className="block py-2 font-bold text-blue-600">
                                app/pages/home/index.tsx
                            </span>
                            and see the changes hot reloaded in the browser
                        </p>
                    </div>
                </div>
            </section>
        );
    }
}

import React from "react";
import { Palette } from "react-palette";
import "./pokemon.scss";

class Pokemon extends React.Component {
    clickPokemon(e) {
        var test = e.currentTarget;
        var testElement = test.querySelector('.sub-content');
        testElement.classList.toggle('is-hidden');
    }
    
    render() {
        return (
            <Palette src={this.props.pokemon.sprites.front_default}>
                {({ data }) => (
                    <div
                        className="card is-rounded mb-3"
                        style={{ background: data.vibrant + "CC" }}>
                        <div className="card-content" onClick={this.clickPokemon}>
                            <div className="media">
                                <div className="media-left media-left-rounded">
                                    <figure className="image is-64x64">
                                        <img
                                            src={
                                                this.props.pokemon.sprites
                                                    .front_default
                                            }
                                            onMouseOver={(e) =>
                                                (e.currentTarget.src = this.props.pokemon.sprites.front_shiny)
                                            }
                                            onMouseOut={(e) =>
                                                (e.currentTarget.src = this.props.pokemon.sprites.front_default)
                                            }
                                            alt={
                                                this.props.pokemon.name +
                                                "-sprite"
                                            }
                                        />
                                    </figure>
                                </div>
                                <div className="media-content">
                                    <p
                                        className="title is-4"
                                        style={{
                                            textTransform: "capitalize",
                                            color: "white",
                                        }}>
                                        {this.props.pokemon.name}
                                    </p>
                                    <p className="subtitle is-6">
                                        {this.props.pokemon.types.map(
                                            (value, index) => {
                                                return (
                                                    <span
                                                        key={index}
                                                        className={
                                                            "type type-" +
                                                            value.type.name +
                                                            " tag mr-1"
                                                        }>
                                                        {value.type.name}
                                                    </span>
                                                );
                                            }
                                        )}
                                    </p>
                                </div>
                                <div className="media-right">
                                    <div className="tags has-addons">
                                        <span className="tag">Pokedex ID</span>
                                        <span className="tag">
                                            {this.props.pokemon.id}
                                        </span>
                                    </div>
                                </div>
                            </div>
                    <div className="sub-content is-hidden">twat</div>
                        
                        </div>
                    </div>
                )}
            </Palette>
        );
    }
}

export default Pokemon;

import React from "react";
import axios from "axios";
import Pokemon from "../pokemon/pokemon.js";
import "./pokedex.scss";

class Pokedex extends React.Component {
    state = {
        pokemon: [],
        isFetching: false,
    };

    componentDidMount() {
        this.fetchPokemon();
    }

    fetchPokemon() {
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=20").then((res) => {
            const pokemon = res.data.results;
            let pokeArray = [];
            let requests = pokemon.map((item) => {
                return this.fetchPokemonDetail(item.url);
            });
            Promise.all(requests).then((data) => {
                data.forEach((item) => {
                    pokeArray.push(item.data);
                });
                this.setState({ pokemon: pokeArray });
            });
        });
    }

    fetchPokemonDetail(pokeUrl) {
        return axios.get(pokeUrl);
    }

    render() {
        return (
            <div className="column">
                {this.state.pokemon.map((value, index) => {
                    return <Pokemon key={value.id} pokemon={value} />;
                })}
            </div>
        );
    }
}

export default Pokedex;

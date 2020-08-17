import React from "react";
import Pokedex from "./components/pokedex/pokedex";
import Sidebar from "./components/sidebar/sidebar";
import "./App.css";

export default function App() {
    return (
        <div className="columns">
            <Sidebar />
            <Pokedex />
        </div>
    );
}
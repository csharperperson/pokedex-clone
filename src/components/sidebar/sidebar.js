import React from "react";
import "./sidebar.scss";

class Sidebar extends React.Component {
    render() {
        return (
            <div className="column is-one-third">
                <aside className="column menu">
                    <input
                        className="input is-rounded is-small"
                        type="text"
                        placeholder="Pikachu"></input>

                    <p className="menu-label">Filters</p>
                    <ul className="menu-list">
                        <li>
                            <a>Games</a>
                        </li>
                        <li>
                            <a className="is-active">Regions</a>
                            <ul>
                                <li>
                                    <a>Hoenn</a>
                                </li>
                                <li>
                                    <a>Johto</a>
                                </li>
                                <li>
                                    <a>Sinnoh</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a>Types</a>
                        </li>
                    </ul>
                </aside>
            </div>
        );
    }
}

export default Sidebar;

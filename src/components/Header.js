import React from 'react';
import logoImage from '../images/pokedex.png'
// https://onlyvectorbackgrounds.com/ambient-light-background-day-blue/

function Header(props) {
    return (
        <nav className="fixed-top navbar navbar-expand-sm navbar-dark bg-dark">
            <a className="navbar-brand" href="https://www.pokemon.com/us/"><img src={logoImage} height="35px" alt="Pokemon Logo" /></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="ml-auto mr-5 navbar-nav change-nav">
                    <li className="nav-item active">
                        <a className="nav-link mr-3 active" href="/">Pokédex<span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link mr-3" href="https://github.com/canarygrapher/pokedex">About</a>
                    </li>
                </ul>
                <input className="mr-0 d-none d-lg-inline w-25 mr-sm-2 form-control" type="search" placeholder="Search Pokémon" aria-label="Search" onChange={props.findPokemon} />
                <input className="mr-0 d-none d-md-inline d-lg-none w-50 mr-sm-2 form-control" type="search" placeholder="Search Pokémon" aria-label="Search" onChange={props.findPokemon} />
                <input className="mr-0 d-inline d-md-none w-100 mr-sm-2 form-control" type="search" placeholder="Search Pokémon" aria-label="Search" onChange={props.findPokemon} />
            </div>
        </nav>
    )
}

export default Header

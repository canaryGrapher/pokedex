import React from 'react';
import pokeDescription from '../data/pokeDescription'
import pokemonSpecifics from '../data/pokemonSpecifics'
import physiqueDescription from '../data/physiqueDescription'

function PokemonModal(props) {
    let selectDescription = pokeDescription.pokemonPara[props.id - 1]

    //for finding other detials about the pokemon
    let detailPokemonChart = pokemonSpecifics.data.map(pokemon => {
        if (pokemon.id === props.id) {
            let HP = pokemon.base.HP
            let attack = pokemon.base.Attack
            let defense = pokemon.base.Defense
            let special_attack = pokemon.base["Sp. Attack"]
            let special_defense = pokemon.base["Sp. Defense"]
            let speed = pokemon.base.Speed
            let stylingHP = {
                height: `${((HP * 100) / 200)}%`,
                width: "100%",
                backgroundColor: "#e53935"
            };
            let stylingAttack = {
                height: `${((attack * 100) / 200)}%`,
                width: "100%",
                backgroundColor: "#ff3d00"
            };
            let stylingDefense = {
                height: `${((defense * 100) / 200)}%`,
                width: "100%",
                backgroundColor: "#1976d2"
            };
            let styling_specialAttack = {
                height: `${((special_attack * 100) / 200)}%`,
                width: "100%",
                backgroundColor: "#e91e63"
            };
            let styling_specialDefense = {
                height: `${((special_defense * 100) / 200)}%`,
                width: "100%",
                backgroundColor: "#2962ff"
            };
            let stylingSpeed = {
                height: `${((speed * 100) / 200)}%`,
                width: "100%",
                backgroundColor: "#fdd835"
            };
            return (
                <div key={pokemon.id} className="col-12 d-flex flex-column" style={{ minHeight: "100px", width: "100%" }}>
                    <div className="col-12 d-flex flex-row" style={{ minHeight: "100px", width: "100%", borderWidth: "2px", borderStyle: "solid", borderColor: "#eeeeee" }}>
                        <div className="col-2 m-0 d-flex flex-column-reverse p-0" style={{ height: "300px" }}>
                            <div className="heightIndicator pb-0 w-100" style={stylingHP}></div>
                            <div className="p-0 m-o">
                                <p className="lead">{HP}</p>
                            </div>
                        </div>
                        <div className="col-2 m-0 d-flex flex-column-reverse p-0" style={{ height: "300px" }}>
                            <div className="heightIndicator pb-0 w-100" style={stylingAttack}></div>
                            <div className="p-0 m-o">
                                <p className="lead">{attack}</p>
                            </div>
                        </div>
                        <div className="col-2 m-0 d-flex flex-column-reverse p-0" style={{ height: "300px" }}>
                            <div className="heightIndicator pb-0 w-100" style={stylingDefense}></div>
                            <div className="p-0 m-o">
                                <p className="lead">{defense}</p>
                            </div>
                        </div>
                        <div className="col-2 m-0 d-flex flex-column-reverse p-0" style={{ height: "300px" }}>
                            <div className="heightIndicator pb-0 w-100" style={styling_specialAttack}></div>
                            <div className="p-0 m-o">
                                <p className="lead">{special_attack}</p>
                            </div>
                        </div>
                        <div className="col-2 m-0 d-flex flex-column-reverse p-0" style={{ height: "300px" }}>
                            <div className="heightIndicator pb-0 w-100" style={styling_specialDefense}></div>
                            <div className="p-0 m-o">
                                <p className="lead">{special_defense}</p>
                            </div>
                        </div>
                        <div className="col-2 m-0 d-flex flex-column-reverse p-0" style={{ height: "300px" }}>
                            <div className="heightIndicator pb-0 w-100" style={stylingSpeed}></div>
                            <div className="p-0 m-o">
                                <p className="lead">{speed}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 d-flex flex-row">
                        <div className="col-2">
                            <p>HP</p>
                        </div>
                        <div className="col-2">
                            <p className="d-none d-md-inline">Attack</p>
                            <p><abbr title="Attack" className="initialism d-inline d-md-none">Atk</abbr></p>
                        </div>
                        <div className="col-2">
                            <p className="d-none d-md-inline">Defense</p>
                            <p><abbr title="Defense" className="initialism d-inline d-md-none">Def</abbr></p>
                        </div>
                        <div className="col-2">
                            <p className="d-none d-md-inline">Special Attack</p>
                            <p><abbr title="Special Attack" className="initialism d-inline d-md-none">S.Atk</abbr></p>
                        </div>
                        <div className="col-2">
                            <p className="d-none d-md-inline">Special Defense</p>
                            <p><abbr title="Special Defense" className="initialism d-inline d-md-none">S.Def</abbr></p>
                        </div>
                        <div className="col-2">
                            <p className="d-none d-md-inline">Speed</p>
                            <p><abbr title="Speed" className="initialism d-inline d-md-none">Spd</abbr></p>
                        </div>
                    </div>
                    <div className="col-12 text-center font-weight-bold">
                        <p>Pokemon Stats</p>
                    </div>
                </div>
            )
        }
        return null
    })

    //for finding type and weaknesses of the pokemon
    let typeOfPokemon = pokemonSpecifics.data[props.id - 1].type.map(type => {
        let color = "bg-" + type.toLocaleLowerCase()
        return (
            <p key={type} className={`pr-3 pl-3 pt-2 pb-2 mr-2 text-light pokemon-type ${color}`}>{type}</p>
        )
    })

    let genderTextMale = physiqueDescription.pokemonPara[props.id].gender_ratio.split("-")[0]
    let genderTextFemale = physiqueDescription.pokemonPara[props.id].gender_ratio.split("-")[1]
    let displayName = props.name.charAt(0).toUpperCase() + props.name.slice(1)
    let national_ID = ""
    if (props.id.toString().length < 2) {
        national_ID = "00" + props.id.toString()
    }
    else if (props.id.toString().length > 1 && props.id.toString().length < 3) {
        national_ID = "0" + props.id
    }
    else {
        national_ID = props.id
    }
    return (
        <div className="overlay container-fluid bg-light" style={{ backgroundImage: "url(./assets/modalBackground.jpg)" }}>
            <div className="row mb-5">
                <div className="col-1"></div>
                <div className="col-10 mt-5">
                    <div className="row-fluid text-center text-dark">
                        <h4 className="display-4">{displayName}</h4>
                    </div>
                    <div className="row-fluid text-center text-secondary">
                        <h4 className="text-secondary">#{national_ID}</h4>
                    </div>
                </div>
                <div className="col-1">
                    <p className="closebtn" onClick={props.closeThis}>&times;</p>
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-md-6 p-5">
                    <img className="img" src={process.env.PUBLIC_URL + props.image} alt={props.name} style={{ filter: "drop-shadow(0 0 0.75rem #000000)" }} />
                </div>
                <div className="col-12 col-md-6 p-5">
                    <div className="row">
                        <h3 className="mt-3 font-weight-bold">About</h3>
                    </div>
                    <div className="row text-left">
                        {selectDescription.description}
                    </div>
                    <div className="row w-100">
                        <h3 className="mt-3 font-weight-bold">Type</h3>
                    </div>
                    <div className="row">
                        {typeOfPokemon}
                    </div>
                </div>
            </div>
            <div className="container d-md-flex flex-row mt-1 mb-5">
                <div className="col-12 col-md-6">
                    <div className="container mb-5 pb-5" style={{ height: "200px" }}>
                        {detailPokemonChart}
                    </div>
                </div>
                <div className="row d-lg-none h-25" style={{ minHeight: "200px" }}> </div>
                <div className="col-12 col-md-6">
                    <div className="card text-white bg-light mb-3">
                        <div className="card-body">
                            <h5 className="card-title text-dark text-left">Information</h5>
                            <table className="table">
                                <tbody>
                                    <tr>
                                        <td>Height</td>
                                        <td>{physiqueDescription.pokemonPara[props.id].height}</td>
                                    </tr>
                                    <tr>
                                        <td>Weight</td>
                                        <td>{physiqueDescription.pokemonPara[props.id].weight}</td>
                                    </tr>
                                    <tr>
                                        <td>Abilities</td>
                                        <td>{physiqueDescription.pokemonPara[props.id].abilities}</td>
                                    </tr>
                                    <tr>
                                        <td>Gender Ratio</td>
                                        <td>{genderTextMale} &#9794; {genderTextFemale} &#9792;</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PokemonModal
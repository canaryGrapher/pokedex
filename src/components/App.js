import React, { Component } from 'react';
import '../styles/App.css';
import pokedata from '../data/pokeData';
import Header from './Header'
import Pokemon from './Pokemon'
import PokemonModal from './PokemonModal'

class App extends Component {
  constructor() {
    super()
    this.state = {
      searchField: "",
      selectedPokemon: "",
      showModal: false
    }
    this.findPokemon = this.findPokemon.bind(this)
    this.selectedPokemon = this.selectedPokemon.bind(this)
    this.closeModal = this.closeModal.bind(this)
  }

  findPokemon(event) {
    this.setState({ searchField: event.target.value })
  }
  selectedPokemon(event) {
    let selection = event.target.alt.toLowerCase()
    this.setState({ selectedPokemon: selection, showModal: true })
  }
  closeModal() {
    this.setState(
      {
        selectedPokemon: "",
        showModal: false
      }
    )
  }
  render() {
    //For rendering the modal when a pokemon card is clicked
    const pokemonModal = pokedata.pokemon.map(item => {
      if (this.state.showModal === true) {
        if (this.state.selectedPokemon === item.name) {
          return (<PokemonModal key={item.id} id={item.id} show={this.state.showModal} image={item.image} name={item.name} closeThis={this.closeModal} />)
        }
      }
      return null;
    })


    // For rendering the cards at the start page
    const pokemonData = pokedata.pokemon.map(item => {
      let name = item.name.charAt(0).toUpperCase() + item.name.slice(1)
      let imageLink = process.env.PUBLIC_URL + "/thumbnails/" + item.id + ".png"
      if (this.state.searchField === "") {
        return (
          <Pokemon key={item.id} id={item.id} name={name} image={imageLink} alt={item.name} searchItem={this.state.searchItem} clickEvent={this.selectedPokemon} />
        )
      }
      else {
        let checkLength = this.state.searchField.length;
        if (item.name.slice(0, checkLength) === this.state.searchField) {
          return (
            <Pokemon key={item.id} id={item.id} name={name} image={imageLink} alt={item.name} searchItem={this.state.searchItem} clickEvent={this.selectedPokemon} />
          )
        }
      }
      return (null)
    })
    return (
      <div className="App w-100">
        {pokemonModal}
        <Header findPokemon={this.findPokemon} />
        <div className="container-fluid mt-5">
          <div className="row w-100 col-12 mt-5 pt-5">
            {pokemonData}
          </div>
        </div>
      </div>
    )
  }
}

export default App

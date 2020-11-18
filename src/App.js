import React, { Component } from 'react'
import './App.css'
import Logo from './assets/LOGO.png'

import { getMovies } from './Store/Actions/Movie'

import { connect } from 'react-redux'

import Movie from './Components/Movies/Movie'

class App extends Component {
  constructor() {
    super()
    this.state = {
      name: "",
      year: "",
      genre: "",
      onlyFeatured: "0"
    }
  }

  componentDidMount = _ => {
    this.onSearch()
  }

  onCleanFilterClick = _ => {
    this.setState({ name: "", year: "", genre: "", onlyFeatured: "0" }, _ => {
      this.onSearch()
    })
  }

  onSearch = _ => {
    this.props.getMovies(
      this.state.name.trim(), 
      this.state.year.trim(), 
      this.state.genre.trim(),
      this.state.onlyFeatured
    )
  }

  render() {
    return (
      <div className="main-container">
        <div className="top-container">
          <img src={Logo} alt="Vale Sul Movies" />
        </div>

        <div className="search-container">
          <h2>Busque por títulos</h2>

          <div className="input-container">
            <label>Nome do título</label>
            <input value={this.state.name} onChange={event => this.setState({ name: event.target.value })} />
          </div>
          <div className="input-container">
            <label>Ano de lançamento</label>
            <input value={this.state.year} onChange={event => this.setState({ year: event.target.value })} />
          </div>
          <div className="input-container">
            <label>Gênero</label>
            <input value={this.state.genre} onChange={event => this.setState({ genre: event.target.value })} />
          </div>
          <div className="input-container">
            <label>Apenas destaques</label>
            <select value={this.state.onlyFeatured} onChange={event => this.setState({ onlyFeatured: event.target.value })}>
              <option value="0" defaultValue>Não</option>
              <option value="1" defaultValue>Sim</option>
            </select>
          </div>

          <div className="buttons">
            <button className="primary" onClick={_ => this.onSearch()}>Buscar</button>
            <button className="secondary" onClick={_ => this.onCleanFilterClick()}>Limpar filtros</button>
          </div>
        </div>

        <div className="movies-container">
          {this.props.movies.map(movie => {
            return (
              <Movie key={movie.id} {...movie} />
            )
          })}
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ movie }) => {
  return {
    movies: movie.movies
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getMovies: (name, year, genre, onlyFetured) => dispatch(getMovies(name, year, genre, onlyFetured))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
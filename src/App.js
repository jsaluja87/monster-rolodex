import React, {Component}  from 'react';
import {CardList} from './components/card-list/card-list.component';
import './App.css';
import {SearchBox} from './components/search-box/search-box.component';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    }
  }

  handleChange1 = e => {this.setState({searchField: e.target.value})}
  //A component is mounted when react renders that component. When our component gets mounted, 
  //the code inside componentDidMount is called. The following code adds the data to monsters array
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters: users}))
  }
  render() {
    //This deconstructs the state structure and puts the values in the fields mentioned inside brackets
    //same as doing const mosters = this.state.monsters;
    const {monsters, searchField} = this.state;
    //In methods like these iterator is "<iterator> =>""
    //includes() checks that if the value inside includes is in what we are iteration or not
    //ultimately filteredMonsters will only have the monsters which were filtered by the searchField text
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
      )
    //Here, name goes into props
    return (
      <div className='App'>
        <h1>Monsters Rolodex</h1>
        <SearchBox
          placeholder={'search monsters'}
          handleChange={this.handleChange}
        />

        <CardList monsters={filteredMonsters}>

        </CardList>
 
      </div>
    )
  }
}

export default App;

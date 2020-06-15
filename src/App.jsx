import React from 'react';


import './App.scss';
import Topbar from './components/Topbar';
import HeaderTopbar from './components/HeaderTopbar';
import Container from './components/Container';
import Filters from './components/Filters';
import Contacts from './components/Contacts';
import Contact from './components/Contact';
import ButtonFilter from './components/ButtonFilter';
import {
  Name,
  ImageAvatar
} from "./components/NameList";
import {sortByName,
        sortByCountry,
        sortByDepartament,
        sortByAdmition
      } from './utils'

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      contacts:[],
      search: ''
    }
  }

  updateSearch(event){
    this.setState({
      search: event.target.value.substr(0,20)
    });
  }

  componentDidMount() {
    fetch('https://5e82ac6c78337f00160ae496.mockapi.io/api/v1/contacts')
        .then(res => res.json())
        .then(res => {
            this.setState({
              contacts: res
            });
        });
}

  handleClickName(event){
    event.preventDefault();

    let newListClient = sortByName(this.state.contacts)

    this.setState({
       contacts : newListClient
    })
  }

  handleClickCountry(event){
    event.preventDefault();

    let newListClient = sortByCountry(this.state.contacts)

    this.setState({
      contacts : newListClient
    })
  }

  handleClickDepartament(event){
    event.preventDefault();

    let newListClient = sortByDepartament(this.state.contacts)

    this.setState({
      contacts : newListClient
    })
  }

  handleClickAdmission(event){
    event.preventDefault();

    let newListClient = sortByAdmition(this.state.contacts)

    this.setState({
      contacts : newListClient
    })
  }

   render() {

    let filteredContacts = this.state.contacts.filter(
      (contact) => {
        return contact.name.toLowerCase().indexOf(
          this.state.search.toLowerCase()) !== -1;
      }
    );
    return (
      <React.Fragment>
        <Topbar>
          <Container>
            <HeaderTopbar />
          </Container>
        </Topbar> 

        <Container>
          <Filters>
              <div className="filters__search">
                <input type="text" 
                className="filters__search__input" 
                placeholder="Pesquisar" 
                value = {this.state.search}
                onChange={this.updateSearch.bind(this)}
                />

                <button className="filters__search__icon">
                  <i className="fa fa-search"/>
                </button>
              </div>

              <ButtonFilter 
                name="Nome"
                handleClickState = {event =>this.handleClickName(event)}
                />

              <ButtonFilter 
                name="País"
                handleClickState = {event =>this.handleClickCountry(event)}
                />
              
              <ButtonFilter name="Empresa"/>
              
              <ButtonFilter 
              name="Departamento"
              handleClickState = {event =>this.handleClickDepartament(event)}
              />
              
              <ButtonFilter 
              name="Data de admissão"
              handleClickState = {event =>this.handleClickAdmission(event)}
              />
            </Filters>
        </Container>

        <Container>
          <Contacts>
            <Contact>
              <Name name="Nome"/>
              <Name name="Telefone"/>
              <Name name="País"/>
              <Name name="Admissão"/>
              <Name name="Empresa"/>
              <Name name="Departamento"/>
            </Contact>
              {filteredContacts.map(contact => {
                return(
                  <Contact key = {contact.id}>
                    <ImageAvatar 
                    image = {contact.avatar}
                    alt = {contact.name}
                    />
                    <Name name={contact.name}/>
                    <Name name={contact.phone}/>
                    <Name name={contact.country}/>
                    <Name name={contact.admissionDate}/>
                    <Name name={contact.company}/>
                    <Name name={contact.department}/>
                  </Contact>
                ) 
              }
            )}
              
          </Contacts>  
        </Container>
      
      </React.Fragment>
  
    )
  }
}

export default App;

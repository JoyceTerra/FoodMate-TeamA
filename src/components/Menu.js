import React, { Component } from 'react';

export default class Menu extends Component {
    constructor() {
      super();
      
      this.state = {
        showMenu: false,
      };
      
      this.showMenu = this.showMenu.bind(this);
      this.closeMenu = this.closeMenu.bind(this);
    }
    
    showMenu(event) {
      event.preventDefault();
      
      this.setState({ showMenu: true }, () => {
        document.addEventListener('click', this.closeMenu);
      });
    }
    
    closeMenu(event) {
      
      if (!this.dropdownMenu.contains(event.target)) {
        
        this.setState({ showMenu: false }, () => {
          document.removeEventListener('click', this.closeMenu);
        });  
        
      }
    }
  
    clickedProfile() {
        console.log("You clicked on Profile!")
        }

    clickedFoodP() {
        console.log('You clicked on Food Preferences!')
        }

    clickedMessage() {
        console.log("You clicked on Messages!")
        }

    clickedInvite() {
        console.log("You clicked on Invite!")
        }

    clickedSettings() {
        console.log("You clicked on Settings!")
        }

    render() {
      return (
        <div>
          <button id="menu" onClick={this.showMenu}>
            Menu
          </button>
          
          {
            this.state.showMenu
              ? (
                <div
                  className="menu"
                  ref={(element) => {
                    this.dropdownMenu = element;
                  }}
                >
                  <button onClick={() => this.clickedProfile()}> Profile </button>
                  <button onClick={() => this.clickedFoodP()}> Food preferences</button>
                  <button onClick={() => this.clickedMessage()}> Message </button>
                  <button onClick={() => this.clickedInvite()}> Invite </button>
                  <button onClick={() => this.clickedSettings()}> Settings </button>
                </div>
              )
              : (
                null
              )
          }
        </div>
      );
    }
  }
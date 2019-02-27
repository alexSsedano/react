import React, { Component } from 'react';

import Card from './Card';

import profileImage from './images/profile.jpg';

import likeH from './images/hearth.svg';

var fecha = new Date().toLocaleString();

class App extends Component {
  render() {
    return (
      <div className="App">
        <Card
          image={profileImage}
          imageAlt="Fotico"
          name="Fake taxi"
          date={fecha}
          text="Thanks to the key is to make sure to make it."
          likes={78}
          likeImg={likeH}
          />

          <Card
            image={profileImage}
            imageAlt="Fotico"
            name="Piedad"
            date={fecha}
            text="Ahora vengo ¿me dejas tu paraguas?"
            likes={134534534}
            likeImg={likeH}
            />
            <Card
            image={profileImage}
            imageAlt="Fotico"
            name="Piedad"
            date={fecha}
            text="Bueno eso lo mirais en casa."
            likes={0}
            likeImg={likeH}
            />
            <Card
            image={profileImage}
            imageAlt="Fotico"
            name="Piedad"
            date={fecha}
            text="Otra vez a dar clase..."
            likes={12}
            likeImg={likeH}
            />
      </div>
    );
  }
}

export default App;

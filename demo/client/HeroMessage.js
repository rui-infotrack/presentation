import React, { Component, PropTypes } from 'react';

const BATMAN = 'https://cdn4.iconfinder.com/data/icons/superheroes/512/batman-128.png';
const SPIDERMAN = 'https://cdn4.iconfinder.com/data/icons/superheroes/512/spiderman-128.png';
const IRONMAN = 'https://cdn4.iconfinder.com/data/icons/superheroes/512/ironman-128.png';
const HULK = 'https://cdn4.iconfinder.com/data/icons/superheroes/512/hulk-128.png';
const CAPTAIN_AMERICA = 'https://cdn4.iconfinder.com/data/icons/superheroes/512/captainamerica-128.png';

class HeroMessage extends Component {
  getImageUrl() {
    const { hero } = this.props;

    switch (hero) {
      case 'batman':
        return BATMAN;
      case 'spiderman':
        return SPIDERMAN;
      case 'ironman':
        return IRONMAN;
      case 'hulk':
        return HULK;
      case 'captain':
      default:
        return CAPTAIN_AMERICA;
    }
  }

  render() {
    const { hero, message } = this.props;

    const src = this.getImageUrl();

    return (
      <div style={{ marginBottom: '15px' }}>
        <div className="chip">
          <img src={src} alt={name} />
          <strong>{hero}</strong> says: "{message}"
        </div>
      </div>
    );
  }
}

HeroMessage.propTypes = {
  hero: PropTypes.oneOf(['batman', 'spiderman', 'ironman', 'hulk', 'captain']),
  message: PropTypes.string.isRequired
};

export default HeroMessage;

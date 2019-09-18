import React from 'react';
import './directory.styles.scss';
import MenuItem from '../menu-item/menu-item.component';
import {API_HOST} from '../../env';

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      menu: []
    }
  }

  componentDidMount = async () => {
    const pizzas = await fetch(`${API_HOST}/api/pizzas`, {
      method: 'GET'
    });

    this.setState({
      menu: await pizzas.json()
    });
  }

  render() {
    return (
      <div className='directory-menu'>
        {
          this.state.menu.map(pizza => (
            <MenuItem key={pizza.id} item={pizza} />
          ))
        }
      </div>
    )
  }
}

export default Directory;
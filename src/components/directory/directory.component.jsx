import React from 'react';
import './directory.styles.scss';
import MenuItem from '../menu-item/menu-item.component';

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      menu: []
    }
  }

  componentDidMount = async () => {
    const pizzas = await fetch('http://localhost:8000/api/pizzas', {
      method: 'GET'
    });
    console.log(pizzas);
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
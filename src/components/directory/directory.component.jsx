import React from 'react';
import './directory.styles.scss';
import MenuItem from '../menu-item/menu-item.component';
import items from '../../menu.json';

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: items
    }
  }

  render() {
    return (
      <div className='directory-menu'>
        {
          this.state.sections.map(({id, ...otherProps}) => (
            <MenuItem key={id} {...otherProps} />
          ))
        }
      </div>
    )
  }
}

export default Directory;
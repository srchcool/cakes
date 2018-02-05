import React, { Component, PropTypes } from 'react'
import {withRouter} from 'react-router-dom';

class CakeListItem extends Component {
   render() {
      return (
         <tr onClick={(e)=>this.handleClick(e)} className='clickable'>

            <td><img src={this.props.imageUrl}/></td>
            <td>{this.props.name}</td>      

         </tr>                         
      )
   }

   handleClick(e)
   {
      this.props.history.push( '/Cake/' + this.props.id ); 

      e.preventDefault();
   }
}

export default withRouter(CakeListItem);


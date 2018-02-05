import React, { Component, PropTypes } from 'react'
import CakeListItem from './CakeListItem.js'

export default class CakeList extends Component {
   render() {
      return (
         <table><tbody>
            {this.props.cakes.map(cake =>
               <CakeListItem
                  key = {cake.id}
                  {...cake}
               />
            )}
         </tbody></table>
      )
   }
}


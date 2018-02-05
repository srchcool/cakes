import React, { Component, PropTypes } from 'react'
import {withRouter} from 'react-router-dom';

class Cake extends Component {
   render() {

   	//console.log(this.props);

    const id = this.props.match.params.id;

   	const cake = this.props.cakes.find((cake) => {
    	return cake.id == id;
  		})

   	if( cake ){
   	return (
         <table><tbody>    
            <tr><td colSpan='2'>{cake.name}</td></tr>
            <tr><td colSpan='2'><img src={cake.imageUrl}/></td></tr>
            <tr><td>Yum Factor:</td><td>{cake.yumFactor}</td></tr>
            <tr><td>Comment:</td><td>{cake.comment}</td></tr>
         </tbody></table>                           
      )}

    return(

    <div>{/*id*/}</div>

    )
   }
}

export default withRouter(Cake);
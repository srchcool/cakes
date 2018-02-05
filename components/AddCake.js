import React, { Component, PropTypes } from 'react'
import {withRouter} from 'react-router-dom';


class AddCake extends Component {

   constructor(props)
   {
      super(props);

      this.handleSubmit = this.handleSubmit.bind(this);
   }

   render() {
      return (
         <div>
            <form onSubmit={this.handleSubmit} action="/">

            <table><tbody>
               <tr><td>Cake Name: </td><td><input type = 'text' ref = 'cakeName' required="yes"/></td></tr>
               <tr><td>Comment: </td><td><textarea ref = 'cakeComment' required="yes"/></td></tr>
               <tr><td>Image URL: </td><td><input type = 'url' ref = 'cakeImgUrl' required="yes"/></td></tr>
               <tr><td>Yum Factor: </td><td><input type = 'number' min="1" max="5" ref = 'cakeYumFactor' required="yes"/></td></tr>
				   <tr><td colSpan='2'> <input type="submit" value="  Add  "/></td></tr>
            </tbody></table>

           
            </form>
         </div>
      )
   }

   handleSubmit(e) {

      const nodeName = this.refs.cakeName;
      const textName = nodeName.value.trim();

      const nodeComment = this.refs.cakeComment;
      const textComment = nodeComment.value.trim();

      const nodeImgUrl = this.refs.cakeImgUrl;
      const textImgUrl= nodeImgUrl.value.trim();

      const nodeYumFactor = this.refs.cakeYumFactor;
      const textYumFactor = nodeYumFactor.value.trim();

      this.props.onAddClick(textName,textComment,textImgUrl,textYumFactor)
      
      nodeName.value = '';
      nodeComment.value = '';
      nodeImgUrl.value = '';
      nodeYumFactor.value = '';

      e.preventDefault();

      this.props.history.push('/'); 
   }
}

export default withRouter(AddCake);


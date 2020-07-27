import React from 'react';

const Rainbow = (WrappedComponent) => {
   let colors = ['red', 'green', 'orange', 'pink', 'purple'];
   let color = colors[Math.floor(Math.random() * 4)];
   let changedColor = color + '-text';
   
   return(props) =>{
       return(
           <div className={changedColor}>
               <WrappedComponent {...props} />
           </div>
       );
   }
}
export default Rainbow;
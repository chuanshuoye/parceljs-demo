export default {
   data(){
    return {
      message:"hello world!"
    }
   },
   render(h){
     return (
     <div>
       <p>{{message}}</p>
     </div>
     );
   }
 }

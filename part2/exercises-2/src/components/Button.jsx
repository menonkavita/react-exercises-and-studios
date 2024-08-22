import './styles.css';

function Button() {

   function onLearnMore(){
      alert("Splish Splash... Splish Splash... ");
   };

   return ( 
         <button onClick={onLearnMore}>
            Learn More
         </button>
   );
}

export default Button;
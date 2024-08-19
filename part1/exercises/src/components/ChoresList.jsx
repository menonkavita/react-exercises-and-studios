import classes from './ChoresList.module.css';

export default function ChoresList () {
   let pageTitle = "My Chores for Today";
   let chores1 = "Laundry";
   let chores2 = "Cooking";
   let chores3 = "Cleaning";

   return (
      <div>
         <h3 class={classes.choresHeading}>{pageTitle}</h3>
         <ul class={classes.choresText}>
            <ol>{chores1}</ol>
            <ol>{chores2}</ol>
            <ol>{chores3}</ol>
         </ul>
      </div>
   );
}
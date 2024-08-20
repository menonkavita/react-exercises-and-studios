import classes from './ChoresList.module.css';

export default function ChoresList () {
   let pageTitle = "My Chores for Today";
   let chores1 = "Laundry";
   let chores2 = "Cooking";
   let chores3 = "Cleaning";

   return (
      <div className={classes.choresDiv}>
         <h3 className={classes.choresHeading}>{pageTitle}</h3>
         <ol className={classes.choresText}>
            <li>{chores1}</li>
            <li>{chores2}</li>
            <li>{chores3}</li>
         </ol>
      </div>
   );
}
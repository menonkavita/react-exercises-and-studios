import classes from './HobbyLinks.module.css'

export default function HobbyLinks() {

    let pageTitle = "My 3 Favorite Hobbies";
    let hobbyLinks = ["https://seedsavers.org/learn/garden-planning/",
        "https://www.instructables.com/Starting-Photography-a-Beginners-Guide/",
        "https://www.lostideas.net/hobby-ideas/baking-hobby/"];

    return (
        <div className={classes.hobbyDiv}>
            <h3>{pageTitle}</h3>
            <ul>
                <li><a href={hobbyLinks[0]}>Gardening </a></li>
                <li> <a href={hobbyLinks[1]}>Photography </a> </li>
                <li> <a href={hobbyLinks[2]}>Baking </a> </li>
            </ul>
        </div>
    );
}



export default function HobbyLinks() {

    let pageTitle = "My 3 Favorite Hobbies";
    let hobbyLinks = ["https://seedsavers.org/learn/garden-planning/",
        "https://www.instructables.com/Starting-Photography-a-Beginners-Guide/",
        "https://www.lostideas.net/hobby-ideas/baking-hobby/"];

    return (
        <div>
            <h3>{pageTitle}</h3>
            <a href={hobbyLinks[0]}>Hobby: Gardening is fulfilling</a>
            <a href={hobbyLinks[1]}>Hobby: Photography is fun</a>
            <a href={hobbyLinks[2]}>Hobby: Baking is relaxing</a>
        </div>
    );
}
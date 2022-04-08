import video from './videos/b.mp4';
import './projects.css';
import first from './img/first.JPG';
import about from './img/about.JPG';
import helloween from './img/helloween.JPG';
import hustler from './img/hustler.JPG';
import movielist from './img/movielist.JPG';
import vishlist from './img/vishlist.JPG';




function Projects() {
    return (<div>
        <h1>Welcome to the Project page</h1>


        <div className="container-fluid videoWrapper">
            <video width="1400" height="550" autoPlay={true} loop={true} muted={true} className=" custom-video">
                <source src={video} type="video/mp4" />
            </video>
        </div>


        <hr />

        <div className="container-fluid d-flex">
            <h2>Projects:</h2>

            <div className="container collection d-flex row">
                <div className="container card col-5 my-2 mx-2 py-2">
                    <img src={first} alt="" />
                    <h4>Anime</h4>
                    <p className="pj-details"> This was the very first website I've ever created. I first time in my life has learned the basic HTML and CSS. This is the only beauty of this website that it is made up of only simple html and css </p>
                    <a href="https://stupefied-beaver-b62688.netlify.app/" className="btn btn-primary">Visit</a>                </div>
                <div className="container card col-5 my-2 mx-2 py-2">
                    <img src={helloween} alt="" />
                    <h4>Helloween</h4>
                    <p className="pj-details">Coming onto this website, it was created by me when i started learning java script and i was manipulating the DOM just try some random stuff. </p>
                    <a href="https://nostalgic-johnson-96ce1b.netlify.app/" className="btn btn-primary">Visit</a>                </div>
                <div className="container card col-5 my-2 mx-2 py-2">
                    <img src={about} alt="" />
                    <h4>About</h4>
                    <p className="pj-details"> About this website as far as i remember I made this website out of a concept known as prallax which was a trending thing in web development at that time </p>
                    <a href="https://xenodochial-noyce-28f88e.netlify.app/" className="btn btn-primary">Visit</a>                </div>
                <div className="container card col-5 my-2 mx-2 py-2">
                    <img src={vishlist} alt="" />
                    <h4>Wishlist</h4>
                    <p className="pj-details"> Ahhh... this website was my very first React app. I started learning React And my friend was having trouble in remembering the daily tasks so I watched few tutorials about a wishlist and i created this wishlist app for my friend. </p>
                    <a href="https://vishlist.herokuapp.com/" className="btn btn-primary">Visit</a>                </div>
                <div className="container card col-5 my-2 mx-2 py-2">
                    <img src={hustler} alt="" />
                    <h4>Hustler</h4>
                    <p className="pj-details"> This was my very first project I've got this is only the frontend of the application i was making for one of my firend who owns a snooker shop and as i've told you in my about sec i was found of snooker so i did this for him. </p>
                    <a href="https://hustlerweed.herokuapp.com/" className="btn btn-primary">Visit</a>                </div>
                <div className="container card col-5 my-2 mx-2 py-2">
                    <img src={movielist} alt="" />
                    <h4>Movie List</h4>
                    <p className="pj-details"> This was my collage project when i was in 5th sem. This was the very first website i made when i learned about the most intresting thing which was API. I made this app simillar to the wishlist app but with a twist as its hard to remember a movie when someone randomly tell you out of nowhere but using this app you can make a wishlist of your movies. I personally use this app very frequently.</p>
                    <a href="https://revieew.vercel.app/" className="btn btn-primary">Visit</a>                </div>
            </div>
        </div>


    </div>);
}

export default Projects;
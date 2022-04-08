
import './about.css';
import Footer from './Footer';
function About() {
    return (<div>
        <hr />
        <h1>About Me</h1>
        <h4>Play around with this robot... drag it, rotate it, etc..... have Fun</h4>
        <div className="d-object container">

            <iframe src='https://my.spline.design/untitled-70f521afc48f44e8d375910e6a2f1fd7/' frameborder='0' width='350px' height='300px'></iframe>
        </div>
        <hr />
        <h2>Education</h2>
        <div className="edu container">
            <p>As For my Education I did...</p>
            <p>High School : Mount Carmel School(ICSE)</p>
            <p>Higher Secondry School : Mount Carmel School(Isc) in (Pyhsics, Chemistry, Mathematics)</p>
            <p>Graducation : I did my BTech. Degree in CSE branch from LNCTE Collage in 2023</p>
        </div>
        <hr />
        <div className="sk container">
            <h2>As For my Skills I Have...</h2>
            <h1 data-aos="zoom-in-up" data-aos-duration="1500"
                data-aos-easing="ease-in-out" data-aos-delay="1500" >Skills</h1>
            <div className="container my-4 p-0 progress">
                <div data-aos="fade-right" data-aos-duration="2000"
                    data-aos-easing="ease-in-out" data-aos-delay="1000" className="html progress-bar" role="progressbar" aria-valuenow="99" aria-valuemin="0" aria-valuemax="100">HTML (99%)</div>

            </div>
            <div className="container my-4 p-0 progress">
                <div data-aos="fade-right" data-aos-duration="2000"
                    data-aos-easing="ease-in-out" data-aos-delay="500" className="css progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">CSS (90%)</div>

            </div>
            <div className="container my-4 p-0 progress">
                <div data-aos="fade-right" data-aos-duration="2000"
                    data-aos-easing="ease-in-out" data-aos-delay="1000" className="js progress-bar" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100">JAVA SCRIPT (85%)</div>

            </div>
            <div className="container my-4 p-0 progress">
                <div data-aos="fade-right" data-aos-duration="2000"
                    data-aos-easing="ease-in-out" data-aos-delay="500" className="react progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">REACT (75%)</div>

            </div>
            <div className="container my-4 p-0 progress">
                <div data-aos="fade-right" data-aos-duration="2000"
                    data-aos-easing="ease-in-out" data-aos-delay="1000" className="mern progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">MERN STACK (70%)</div>

            </div>
            <div className="container my-4 p-0 progress">
                <div data-aos="fade-right" data-aos-duration="2000"
                    data-aos-easing="ease-in-out" data-aos-delay="500" className="py progress-bar" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">PYTHON (99%)</div>

            </div>


        </div>

        <hr />
        <h2>About me</h2>
        <div className="about container">
            <p>So now a little bit about myself. As you might be calling me AKT so besides all these skills and education I would like to tell you what is not been told yet about me so, let me tell you that i was a good basketball player back when i was in my school days. This was not enough so I tried chess and become a intermediate chess player, i defeated a lot of people in chess till now, you can also try your luck with me. I also like to play 8 ball pool and snooker I'm not absolutly perfct at it but yeah I'm a good at playing snooker. You might also know that I'm a nice photoghapher, I like to click Photos of nature. keeping everything aside I have a very deep connection and intrest in astro physics. being able to perform these task everyday I manage my time a lot due to whuch time has become the most important aspect of my life. You can litrally talk to about anything for hrs.</p>
        </div>

    </div>);
}

export default About;
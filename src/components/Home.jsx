import './home.css';
import video from './videos/a.mp4';
import Footer from './Footer';



function Home() {
    return (<div data-aos="fade-up"  className='container-fluid w-100'>
        <div className="container-fluid videoWrapper">
                
            <video width="1400" height="550" autoPlay={true} loop={true} muted={true} className=" custom-video">
                <source src={video} type="video/mp4" />
            </video>
            
            </div>
        <div data-aos="fade-up" data-aos-duration="1500"
    data-aos-easing="ease-in-out" className='aboutme'>
            <hr data-aos="fade-right" data-aos-duration="1500"
    data-aos-easing="ease-in-out" data-aos-delay="1500"/>
            <h1 data-aos="zoom-in-up" data-aos-duration="1500"
    data-aos-easing="ease-in-out" data-aos-delay="1500">AKAHAT BHATNAGAR</h1>
            <p data-aos="zoom-in-up" data-aos-duration="1500"
    data-aos-easing="ease-in-out" data-aos-delay="1500">Hey... </p>
            <p data-aos="zoom-in-up" data-aos-duration="1500"
    data-aos-easing="ease-in-out">How are you ?? I guess you're just fine and sippin some wine.</p>
            <p data-aos="zoom-in-up" data-aos-duration="1500"
    data-aos-easing="ease-in-out">Let me tell you a little bit about me. Well my name is Akshat but you can call me Akt. I'm a web developer, not the odinary one but I'm stoner and a creative developer at the same time even right now I'm bit high... </p>
            <p data-aos="zoom-in-up" data-aos-duration="1500"
    data-aos-easing="ease-in-out">It's enough talking about ourselfes let's jump to the main part which is about my skills and talent i've got trapped inside a small brain in me.....  so, here you go... just be comfortable and enjoy my work...</p>
        </div>

        <div data-aos="fade-up" data-aos-duration="1500"
    data-aos-easing="ease-in-out" className='skills'>
            <hr  data-aos="fade-right" data-aos-duration="1500"
    data-aos-easing="ease-in-out" data-aos-delay="1500" />
            <h1 data-aos="zoom-in-up" data-aos-duration="1500"
    data-aos-easing="ease-in-out" data-aos-delay="1500" >Skills</h1>
            <div  className="container my-4 p-0 progress">
                <div data-aos="fade-right" data-aos-duration="2000"
    data-aos-easing="ease-in-out" data-aos-delay="1000"  className="html progress-bar" role="progressbar" aria-valuenow="99" aria-valuemin="0" aria-valuemax="100">HTML (99%)</div>
                
            </div>
            <div className="container my-4 p-0 progress">
            <div data-aos="fade-right" data-aos-duration="2000"
    data-aos-easing="ease-in-out" data-aos-delay="500" className="css progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">CSS (90%)</div>
                
            </div>
            <div  className="container my-4 p-0 progress">
            <div data-aos="fade-right" data-aos-duration="2000"
    data-aos-easing="ease-in-out" data-aos-delay="1000" className="js progress-bar" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100">JAVA SCRIPT (85%)</div>
                
            </div>
            <div  className="container my-4 p-0 progress">
            <div data-aos="fade-right" data-aos-duration="2000"
    data-aos-easing="ease-in-out" data-aos-delay="500" className="react progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">REACT (75%)</div>
                
            </div>
            <div  className="container my-4 p-0 progress">
            <div data-aos="fade-right" data-aos-duration="2000"
    data-aos-easing="ease-in-out" data-aos-delay="1000" className="mern progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">MERN STACK (70%)</div>
                
            </div>
            <div className="container my-4 p-0 progress">
            <div data-aos="fade-right" data-aos-duration="2000"
    data-aos-easing="ease-in-out" data-aos-delay="500" className="py progress-bar" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">PYTHON (99%)</div>
                
            </div>
            <hr />
        </div>

        <Footer></Footer>

    </div>);
}

export default Home;





                
                
                
                
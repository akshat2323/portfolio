import './fotter.css';
function Footer() {
    return (<div>
        <div className="footer container-fluid my-5">

        <footer className="text-center text-lg-start" >
            <div className="a container d-flex justify-content-center py-5">
                <a type="button" href="https://www.facebook.com/vickey.bhatnagar.92/" className="btn fb btn-primary btn-lg btn-floating mx-2" >
                    <i className="bi bi-facebook">Facebook</i>
                </a>
                <a type="button" href="https://www.youtube.com/channel/UCLLH_bDAmgi_WEjNGS8ZaqA" className="btn yt btn-primary btn-lg btn-floating mx-2" >
                    <i className="fab fa-youtube">Youtube</i>
                </a>
                <a type="button" href="https://www.instagram.com/_a_k__s_h_a_t_/" className="btn ig btn-primary btn-lg btn-floating mx-2" >
                    <i className="fab fa-instagram">Instagram</i>
                </a>
                <a type="button" href="https://twitter.com/intellectual_by" className="btn tw btn-primary btn-lg btn-floating mx-2" >
                    <i className="fab fa-twitter">Twitter</i>
                </a>
            </div>

            <div className="b text-center text-white p-3">
                © 2022 Copyright : 
                <a className="text-white" href="#"> AKSHAT</a>
            </div>
        </footer>

    </div>
    </div>);
}

export default Footer;
import './fotter.css';
function Footer() {
    return (<div>
        <div className="footer container-fluid my-5">

        <footer className="text-center text-lg-start" >
            <div className="a container d-flex justify-content-center py-5">
                <button type="button" className="btn fb btn-primary btn-lg btn-floating mx-2" >
                    <i className="bi bi-facebook">Facebook</i>
                </button>
                <button type="button" className="btn yt btn-primary btn-lg btn-floating mx-2" >
                    <i className="fab fa-youtube">Youtube</i>
                </button>
                <button type="button" className="btn ig btn-primary btn-lg btn-floating mx-2" >
                    <i className="fab fa-instagram">Instagram</i>
                </button>
                <button type="button" className="btn tw btn-primary btn-lg btn-floating mx-2" >
                    <i className="fab fa-twitter">Twitter</i>
                </button>
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
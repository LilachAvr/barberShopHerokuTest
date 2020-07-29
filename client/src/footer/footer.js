import React, { Component } from 'react';
import './footer.css';

class Footer extends Component {
    render() {
        return (
            // <div className="footer">
            //     <div id="button"><i className="fas fa-arrow-up"></i></div>
            //     <div id="container">
            //         <div id="cont">
            //             <div className="footer_center">
            //                 <h3>צור קשר</h3>
            //                 <a className='location' href={"https://www.google.com/maps/?q=דוד סניור ,ראשון לציון4"} target="blank"><img className='iconLocation' alt='googleMap' src='https://image.flaticon.com/icons/svg/888/888856.svg' /></a>
            //                 <a className='location' href={"https://www.instagram.com/naftali_barbershop/"} target="blank"><img className='iconLocation' alt='instagram' src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/599px-Instagram_icon.png' /></a>
            //                 <a href={"https://wa.me/972509803990?text=אני רוצה לקבוע תור"}><img className='location' alt='dbvk' src='whatsapp.png' /></a>
            //                 <a className='location' href={"'https://www.facebook.com/search/top/?q=naftali%20avraham"} target="blank"><img className='iconLocation' alt='facebook' src='https://i.pinimg.com/564x/b3/26/b5/b326b5f8d23cd1e0f18df4c9265416f7.jpg' /></a>
            //             </div>
            //         </div>
            //     </div>
            // </div>
            <div>
                {/* <div class="main"> FOOTER DESIGN IN HTML CSS</div> */}
                <footer className="footer-distributed">

                    <div className="footer-left">

                        <h3>N.A_HairStyle</h3>

                        <p className="footer-links">
                            {/* <a href=''>Home</a>
                        ·
                        <a href="">Blog</a>
                        ·
                        <a href="">Pricing</a>
                        ·
                        <a href="">About</a>
                        ·
                        <a href="">Faq</a>
                        ·
                        <a href="">Contact</a> */}
                        </p>

                        <p className="footer-company-name">KalTor &copy; 2019</p>
                    </div>

                    <div className="footer-center">

                        <div>
                            <i className="fa fa-map-marker"></i>
                            <p><span>רח' דוד סניור 4</span> ישראל , ראשל"צ</p>
                        </div>

                        <div>
                            <i className="fa fa-phone fa-2x"></i>
                            <p>+072 050 9803990</p>
                        </div>

                        <div>
                            <i className="fa fa-envelope"></i>
                            <p><a href="mailto:support@company.com">N.A_HairStyle@gmail.com</a></p>
                        </div>

                    </div>

                    <div className="footer-right">

                        <p className="footer-company-about">
                            <span>קצת על המספרה...</span>
                         היא מספרה לגברים בלבד עם עיצוב מוקפד, סטנדרטים N.A hairStyle מקצועיים ותודעת שירות מצוינת שכוללת דיוק בקביעת תורים
                    </p>

                        <div className="footer-icons">

                            <a className='location' href={"https://www.instagram.com/naftali_barbershop/"} target="blank"><img className='iconLocation' alt='instagram' src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/599px-Instagram_icon.png' /></a>
                            <a href={"https://wa.me/972509803990?text=אני רוצה לקבוע תור"}><img className='iconLocation' alt='dbvk' src='whatsapp.png' /></a>
                            <a className='location' href={"'https://www.facebook.com/search/top/?q=naftali%20avraham"} target="blank"><img className='iconLocation' alt='facebook' src='https://i.pinimg.com/236x/9e/f9/44/9ef9441b1bed9f0e3f2d4cc09eb9a177.jpg' /></a>
                            <a className='location' href={"https://www.google.com/maps/?q=דוד סניור ,ראשון לציון4"} target="blank"><img className='iconLocation' alt='googleMap' src='https://image.flaticon.com/icons/svg/888/888856.svg' /></a>

                        </div>

                    </div>
                </footer>
            </div>
        )
    }
}
export default Footer

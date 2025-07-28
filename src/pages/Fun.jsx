import Header from '../assets/components/Header'
import { Link } from 'react-router-dom';
import { HashLink } from "react-router-hash-link";
import Footer from '../assets/components/Footer'
import './Fun.css'
import Lovesong from '../assets/images/kpg/0x1-lovesong.png'
import ThreeD from '../assets/images/kpg/3d.png'
import AfterLike from '../assets/images/kpg/after-like.png'
import Antifragile from '../assets/images/kpg/antifragile.png'
import BlackMamba from '../assets/images/kpg/black-mamba.png'
import Bouncy from '../assets/images/kpg/bouncy.png'
import BMHM from '../assets/images/kpg/break-my-heart-myself.png'
import Crazy from '../assets/images/kpg/crazy.png'
import Easy from '../assets/images/kpg/easy.png'
import ETA from '../assets/images/kpg/eta.png'
import GBOGH from '../assets/images/kpg/go-big-or-go-home.png'
import Halazia from '../assets/images/kpg/halazia.png'
import IAm from '../assets/images/kpg/i-am.png'
import LaDiDa from '../assets/images/kpg/la-di-da.png'
import LoveDive from '../assets/images/kpg/love-dive.png'
import Magnetic from '../assets/images/kpg/magnetic.png'
import Queencard from '../assets/images/kpg/queencard.png'
import RunBTS from '../assets/images/kpg/run-bts.png'
import Tomboy from '../assets/images/kpg/tomboy.png'
import TrickyHouse from '../assets/images/kpg/tricky house.png'

const Fun = () => {
    return (
    <>
    <Header />

    <section id="overview-section" class="text-sections">
            <div class="section-body">
                <a class='video-link' href="https://www.youtube.com/watch?v=nXyxpEABSOs" target="_blank">
                    <div class='image-text-under'>
                    <img class='thumbnail-design' src={Queencard} />
                    <p class='video-title'>Queencard</p>
                    </div>
                </a>
                
                <a class='video-link' href="https://www.youtube.com/watch?v=58WIONXjoTg&t=8s" target="_blank">
                    <div class='image-text-under'>
                    <img class='thumbnail-design' src={Antifragile} />
                    <p class='video-title'>Antifragile</p>
                    </div>
                </a>
    
                <a class='video-link' href="https://www.youtube.com/watch?v=HRflfK0_a1U" target="_blank">
                    <div class='image-text-under'>
                    <img class='thumbnail-design' src={Magnetic} />
                    <p class='video-title'>Magnetic</p>
                    </div>
                </a>
    
                <a class='video-link' href="https://www.youtube.com/watch?v=EAy0rRapegY" target="_blank">
                    <div class='image-text-under'>
                    <img class='thumbnail-design' src={BMHM} />
                    <p class='video-title'>Break My Heart Myself</p>
                    </div>
                </a>
    
                <a class='video-link' href="https://www.youtube.com/watch?v=q_yob1KunY4" target="_blank">
                    <div class='image-text-under'>
                    <img class='thumbnail-design' src={LaDiDa} />
                    <p class='video-title'>LA DI DA</p>
                    </div>
                </a>
    
                <a class='video-link' href="https://www.youtube.com/watch?v=cWp-kMahfGw" target="_blank">
                    <div class='image-text-under'>
                    <img class='thumbnail-design' src={Easy} />
                    <p class='video-title'>EASY</p>
                    </div>
                </a>
    
                <a class='video-link' href="https://www.youtube.com/watch?v=NiqPfsO4Itw" target="_blank">
                    <div class='image-text-under'>
                    <img class='thumbnail-design' src={AfterLike} />
                    <p class='video-title'>After LIKE</p>
                    </div>
                </a>
    
                <a class='video-link' href="https://www.youtube.com/watch?v=EBcSCN17i8M&t=2s" target="_blank">
                    <div class='image-text-under'>
                    <img class='thumbnail-design' src={TrickyHouse} />
                    <p class='video-title'>Tricky House</p>
                    </div>
                </a>
    
                <a class='video-link' href="https://www.youtube.com/watch?v=AH4dX6Jpm3w" target="_blank">
                    <div class='image-text-under'>
                    <img class='thumbnail-design' src={Halazia} />
                    <p class='video-title'>HALAZIA</p>
                    </div>
                </a>
    
                <a class='video-link' href="https://www.youtube.com/watch?v=3yC28GinKSc" target="_blank">
                    <div class='image-text-under'>
                    <img class='thumbnail-design' src={Bouncy} />
                    <p class='video-title'>BOUNCY</p>
                    </div>
                </a>
    
                <a class='video-link' href="https://www.youtube.com/watch?v=UvDXaoMqvto" target="_blank">
                    <div class='image-text-under'>
                    <img class='thumbnail-design' src={LoveDive} />
                    <p class='video-title'>LOVE DIVE</p>
                    </div>
                </a>
    
                <a class='video-link' href="https://www.youtube.com/watch?v=_qjHh8M7ox0&t=7s" target="_blank">
                    <div class='image-text-under'>
                    <img class='thumbnail-design' src={ThreeD} />
                    <p class='video-title'>3D</p>
                    </div>
                </a>
    
                <a class='video-link' href="https://www.youtube.com/watch?v=u_7K1D_adCU" target="_blank">
                    <div class='image-text-under'>
                    <img class='thumbnail-design' src={ETA} />
                    <p class='video-title'>ETA</p>
                    </div>
                </a>
    
                <a class='video-link' href="https://www.youtube.com/watch?v=q_yob1KunY4" target="_blank">
                    <div class='image-text-under'>
                    <img class='thumbnail-design' src={RunBTS} />
                    <p class='video-title'>Run BTS</p>
                    </div>
                </a>
    
                <a class='video-link' href="https://www.youtube.com/watch?v=Z2ZGdYGOlrk" target="_blank">
                    <div class='image-text-under'>
                    <img class='thumbnail-design' src={IAm} />
                    <p class='video-title'>I AM</p>
                    </div>
                </a>
    
                <a class='video-link' href="https://www.youtube.com/watch?v=5UQuzgXy0CU&t=6s" target="_blank">
                    <div class='image-text-under'>
                    <img class='thumbnail-design' src={Crazy} />
                    <p class='video-title'>CRAZY</p>
                    </div>
                </a>
    
                <a class='video-link' href="https://www.youtube.com/watch?v=9MUn2rpLigM" target="_blank">
                    <div class='image-text-under'>
                    <img class='thumbnail-design' src={Tomboy} />
                    <p class='video-title'>TOMBOY</p>
                    </div>
                </a>
    
                <a class='video-link' href="https://www.youtube.com/watch?v=RnEW_rEGXh0" target="_blank">
                    <div class='image-text-under'>
                    <img class='thumbnail-design' src={BlackMamba} />
                    <p class='video-title'>Black Mamba</p>
                    </div>
                </a>
    
                <a class='video-link' href="https://www.youtube.com/watch?v=DVVJm3JEY64" target="_blank">
                    <div class='image-text-under'>
                    <img class='thumbnail-design' src={GBOGH} />
                    <p class='video-title'>Go Big or Go Home</p>
                    </div>
                </a>
    
                <a class='video-link' href="https://www.youtube.com/watch?v=64_R554I_uY" target="_blank">
                    <div class='image-text-under'>
                    <img class='thumbnail-design' src={Lovesong} />
                    <p class='video-title'>0X1=LOVESONG</p>
                    </div>
                </a>
            </div>
        </section>
    
    <Footer />
    </>
);
}
  
  export default Fun;
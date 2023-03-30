import React from 'react'
import '../styles/Home.scss';
import vg from '../assets/2.webp';
import {AiFillGoogleCircle, AiFillAmazonCircle, AiFillYoutube, AiFillInstagram} from "react-icons/ai"
const Home = () => {
  return (
    <>
    <div className='home' id='home'>
        <main>
            <h1>Kobayashi Maru</h1>
            <p>A no win scenario</p>
        </main>

    </div>


    <div className="home2">
    <img src={vg} alt="graphics"  />
        <div>
            <p>What is a Kobayashi Maru situation?
            The phrase "Kobayashi Maru" has entered the popular lexicon as a reference to a no-win scenario. The term is also sometimes used to invoke Kirk's decision to "change the conditions of the test."</p>
        </div>
    </div>

    <div className="home3" id='about'>
        <div>
            <h1>Depiction</h1>
            <p>
            The test is introduced in the opening of Star Trek II: The Wrath of Khan, with Lieutenant Saavik commanding her crew on a bridge simulator. They receive a distress call from the Kobayashi Maru and enter the Klingon Neutral Zone to rescue it. The crew loses contact with the civilian ship and three Klingon vessels attack. With the bridge crew dead and the ship badly damaged, Saavik orders the crew to abandon ship and the simulation ends. When Saavik says the test is unfair because there is no way to win, Admiral James T. Kirk replies that a starship captain might face an actual "no-win scenario". Later in the film, Kirk reveals that he beat the Kobayashi Maru as a cadet on his third attempt by reprogramming the simulation to make it possible to rescue the ship, and that he does not actually believe in the idea of a no-win scenario. The 2009 film Star Trek shows an alternate timeline's version of Cadet Kirk defeating the Kobayashi Maru test.

            
            </p>
        </div>
    </div>


    <div className="home4" id='brands'>
        <div>
            <h1>Brands</h1>

            <article>
                <div style={{
                    animationDelay: "0.3s",
                }}>
                    <AiFillGoogleCircle/>
                    <p>Google</p>
                </div>

                <div style={{
                    animationDelay: "1.3s",
                }}>
                    <AiFillAmazonCircle/>
                    <p>Amazon</p>
                </div> 
                
                <div style={{
                    animationDelay: "2.3s",
                }}>
                    <AiFillYoutube/>
                    <p>Youtube</p>
                </div>
                
                 <div style={{
                    animationDelay: "3.3s",
                }}>
                    <AiFillInstagram/>
                    <p>Instagram</p>
                </div>
                
            </article>
        </div>
    </div>
    </>
  )
}

export default Home
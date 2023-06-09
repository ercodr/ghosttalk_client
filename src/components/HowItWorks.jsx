import img1 from "../assets/1.jpg"
import img2 from "../assets/2.jpg"
import img3 from "../assets/3.jpg"
import img4 from "../assets/4.jpg"
import img5 from "../assets/5.jpg"
import img6 from "../assets/6.jpg"

const HowItWorks = () => {

    const images = [img1, img2, img3, img4, img5, img6]

    return (
        <section className="bg-gradient-to-br text-slate-900 p-4 md:p-8 pb-16">
            <div className="container mx-auto text-center">
                <h3 className="text-2xl md:text-3xl font-bold mt-12">
                    How It Works
                </h3>
                <p className="text-center mt-4">
                    GhostTalk is easy to use, and fun to play with! Simply visit our
                    website and get started with GhostTalk now.
                    <br className="hidden lg:block" /> After you visit the site, easily
                    create your account and share the profile link with friends to get
                    going.
                <br className="hidden lg:block" /> 
                    Receive anonymous messages from friends and family online!
                </p>
            </div>

            <div className="flex flex-wrap gap-4 justify-center container mx-auto mt-8">
                {
                    images.map(image => <img src={image} alt="" key={image} className="lg:hover:scale-150 w-full md:w-48 select-none transition-all rounded-3xl border-8 border-spacing-8 border-slate-900 shadow-lg"/>)
                }
            </div>
        </section>
    );
}

export default HowItWorks;
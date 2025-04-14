import "./homePage.scss";
import FormContact from "@/app/component/formcontact/formContact";
import HeroBanner from "@/app/component/herroBanner/herroBanner";
import AboutSection from "@/app/component/about/about";
import ProjectsSection from "@/app/component/projectSection/projectSection";

const HomePage = () => {
    return (
        <div className="flex   column height100vh scroll">
            <HeroBanner />
            <div>
                <AboutSection />
            </div>
            <ProjectsSection />
            <div>
                <FormContact />
            </div>
        </div>
    );
};

export default HomePage;

import './App.css'
import Navbar from './components/Navbar/Navbar'
import HeroSection from './components/HeroSection/HeroSection'
import IntroduceYourself from './components/IntroduceYourself/IntroduceYourself'
import WhyChooseUs from './components/WhyChooseUs/WhyChooseUs'

function App() {
    return (
        <div className="App">
            <Navbar />
            <HeroSection />
            <IntroduceYourself />
            <WhyChooseUs />
        </div>
    )
}

export default App

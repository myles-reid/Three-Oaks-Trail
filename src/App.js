import Banner from './components/Banner';
import Gallery from './components/Gallery';
import Header from './components/Header';
import Footer from './components/Footer';

//Image imports
import horseback from './img/horseback.jpg';
import trail from './img/trail.jpg';
import waterfall from './img/waterfall.jpg';
import winter from './img/winter.jpg';

const NAV_LINKS = [
    {key: 0, name: "About", url: "https://example.com/about"},
    {key: 1, name: "Tours", url: "https://example.com/tours"},
    {key: 2, name: "Contact", url: "https://example.com/contact"},
    {key: 3, name: "Blog", url: "https://example.com/blog"}
  ]

const IMAGES  = [
  {key: 0, src: horseback, alt: "Horseback riding on the trail"},
  {key: 1, src: trail, alt: "Scenic view of the trail"},
  {key: 2, src: waterfall, alt: "A waterfall along the trail"},
  {key: 3, src: winter, alt: "Winter trail view"}
]

const TITLE = "Explore the Great Outdoors";

function App() {
  return (
    <>
      <Header navLinks={NAV_LINKS}/>
      <main>
        <Banner />
        <Gallery imgs={IMAGES} title={TITLE} />
      </main>
      <Footer />
    </>
  );
}

export default App;

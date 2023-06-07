import './App.css';
import {BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './Routes/Home';
import About from './Routes/About';
import Classes from "./Routes/Classes/Classes"
import ClassList from './Routes/Classes/ClassList';
import ClassDetails from './Routes/Classes/ClassDetails';
import Team from './Routes/Pages/Team';
import Review from './Routes/Pages/Review';
import FAQs from './Routes/Pages/FAQs';
import PricingCard from './Routes/Pages/PricingCard';
import CommingSoon from './Routes/Pages/CommingSoon';
import Error404 from './Routes/Pages/Error404';
import Blog from './Routes/Blogs/Blog';
import BlogList from './Routes/Blogs/BlogList';
import BlogDetails from './Routes/Blogs/BlogDetails';
import Contacts from './Routes/Contacts';
import BookClass from './Routes/BookClass';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/> } />
        <Route path='/Home' element={<Home/>}  />
        <Route path='/Home/About_Us' element={<About/>} />

        <Route path='/Home/Classes' element={<Classes/>} />
        <Route path='/Home/Classes_Lists' element={<ClassList/>} />
        <Route path='/Home/Classes/Classes_Details' element={<ClassDetails/>} />

        <Route path='/Home/Our_Team' element={<Team />} />
        <Route path='/Home/Client_Reviews' element={<Review/>} />
        <Route path='/Home/FAQ' element={<FAQs/>} />
        <Route path='/Home/Pricing_Table' element={<PricingCard/>} />
        <Route path='/Home/Comming_Soon' element={<CommingSoon/>} />
        <Route path='/Home/Error_404' element={<Error404 />} />

        <Route path='/Home/Blogs' element={<Blog />} />
        <Route path='/Home/Blog_Lists' element={<BlogList />} />
        <Route path='/Home/Blogs/Blog_Details' element={<BlogDetails />} />
        
        <Route path='/Home/Contact_Us' element={<Contacts/>} />
        <Route path='/Home/BOOK_A_CLASS' element={<BookClass/>} />
        
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

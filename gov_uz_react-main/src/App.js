import logo from './logo.svg';
import './assets/css/main.css';
import './assets/css/media.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Main_page from './pages/main_pages';
import React, { useEffect, useState, } from 'react';
import About_portal from './pages/Ab_portal_page';
import Ministry_communication from './pages/min_communication_page';
import All_news from './pages/all_news_page';
import View_news from './pages/view_news_page';
import Activity from './pages/activity_page';
import All_page_ministry from './pages/all_ministry_page';
import Feedback from './pages/feedback_page';
import Info_uzb from './inner_components/gen_info_uzb';
import View_news_two from './pages/view_news_page2';
import NavigationScroll from './components/scroll_top';
import Events from './inner_components/events';
import Events_view from './inner_components/events_view';
import All_usefulllinks from './inner_components/all_usefulllinks';
import Error_page from './pages/404_page';
import About_ministry from './pages/about_ministry';
import Ministry_contact from './pages/ministry_contact';
import Question_answer from './pages/questions_answer';
import First_menu_mitc from './pages/first_menu_mitc_page';

function App() {

  const [shadow, setShadow2] = useState(false);

  useEffect(() => {
      document.addEventListener("scroll", checkScroll2);
      return () => document.removeEventListener("scroll", checkScroll2);
  }, []);

  const checkScroll2 = (e) => {
      const bar2 = document.getElementById("bar2");

      if (window.scrollY >= bar2.offsetTop) {

        setShadow2(true);
      } else {
        setShadow2(false);
      }

  };

  return (
    <BrowserRouter>
      <div 
      className="App"
      
      >
          <div className={`wrapper ${shadow && "wrapper_in"}`} id="bar2">
            <NavigationScroll>
              <Switch>
                <Route exact path="/" component={Main_page} />
                <Route path="/portal" component={About_portal} />
                <Route path="/miniistry_com_page" component={Ministry_communication} />
                <Route path="/all_news_page" component={All_news} />
                <Route path="/view_news_page" component={View_news} />
                <Route path="/view_news_page2" component={View_news_two} />
                <Route path="/activity_page" component={Activity} />
                <Route path="/all_ministry" component={All_page_ministry} />
                <Route path="/feedback_page" component={Feedback} />
                <Route path="/info_uzb" component={Info_uzb} />
                <Route path="/events_info" component={Events} />
                <Route path="/events_view" component={Events_view} />
                <Route path="/usefulllinks_all" component={All_usefulllinks} />
                <Route path="/404_page" component={Error_page} />
                <Route path="/about_ministry" component={About_ministry} />
                <Route path="/ministry_contact" component={Ministry_contact} />
                <Route path="/question_answer" component={Question_answer} />
                <Route path="/first_menu_mitc" component={First_menu_mitc} />
              </Switch>
            </NavigationScroll>
          </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

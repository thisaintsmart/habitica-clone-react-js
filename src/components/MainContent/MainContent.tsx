import { MainContentHabit, MainContentDaily, MainContentGoal, MainContentReward } from '..';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MainContent: React.FC = () => {
  return (
    <section className='main-content'>
      <div className='container'>
        <div className='main-content__top'>
          <div className='main-content__search'>
            <input type='text' placeholder='Поиск' className='main-content__search-bar'></input>
          </div>
          <div className='main-content__tags'>
            <button className='main-content__dropdown'>
              <div className='main-content__ico'>
                <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'>
                  <path
                    fill-rule='evenodd'
                    d='M5 14a1 1 0 1 1 0-2 1 1 0 0 1 0 2m10-2H7.815A2.995 2.995 0 0 0 5 10a2.996 2.996 0 0 0-2.816 2H1a1 1 0 0 0 0 2h1.184A2.995 2.995 0 0 0 5 16a2.993 2.993 0 0 0 2.815-2H15a1 1 0 0 0 0-2m-4-3a1 1 0 1 1 0-2 1 1 0 0 1 0 2m4-2h-1.185A2.995 2.995 0 0 0 11 5a2.996 2.996 0 0 0-2.816 2H1a1 1 0 0 0 0 2h7.184A2.995 2.995 0 0 0 11 11a2.993 2.993 0 0 0 2.815-2H15a1 1 0 0 0 0-2M5 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2m10-2H7.815A2.995 2.995 0 0 0 5 0a2.996 2.996 0 0 0-2.816 2H1a1 1 0 0 0 0 2h1.184A2.995 2.995 0 0 0 5 6a2.993 2.993 0 0 0 2.815-2H15a1 1 0 0 0 0-2'></path>
                </svg>
              </div>
              <span>Теги</span>
            </button>
          </div>
        </div>
        <div className='main-content__row'>
          <MainContentHabit />
          <MainContentDaily />
          <MainContentGoal />
          <MainContentReward />
          <ToastContainer />
        </div>
      </div>
    </section>
  );
};

export default MainContent;

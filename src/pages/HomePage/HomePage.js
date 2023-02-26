import css from './HomePage.module.css';

const HomePage = () => {
    return (
        <div className={css.homePage}>
           <h1>Welcome</h1>
            <div><img src='https://klike.net/uploads/posts/2020-05/1590734968_2.jpg' alt="simpsons photo"/></div>
        </div>
    );
};

export { HomePage };
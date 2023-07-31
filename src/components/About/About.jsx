import style from './index.module.css'

export default function About(){
 

    return (
        <div className={style.container}>
            <div className={style.title}>
            <h2>About Me</h2>
          </div>
          <div className={style.aboutContent}>
          <div className={style.row}>
              <div className={style.aboutText}>
                <h3>
                  &lt;Valentin Urcullu /&gt;
                  <br/>
                  <span>&lt;Full Stack Web Developer /&gt;</span>
                </h3>
                <p>
                    I am a Fullstack Web Developer 
                    <br />
                    But apart from programming, I enjoy reading and researching different topics, related to music, economics and powerlifting.I'm also a sporty person , i love playing all kind of sports,specially football and rugby!
                    <br />
                    I consider myself an organized person, who solves problems effectively, independently, with a very good sense of humor and detail. I love to travel and visit new places.
                    <br />
                    I like to participate in group projects with positive people who bring value and pleasant experiences.
                </p>
              </div>
            </div>
        </div>
        <div className={style.homeIcons}>
          <a href='https://www.linkedin.com/in/valentin-urcullu-a796551b1/' 
          className={style.iconLikedin}></a>
          <a href='https://github.com/valenurcullu' className={style.iconGit}></a>
          <a href='https://docs.google.com/document/d/11YWerMGOMPgs2hmIQj7e80Vr8J3Ilau_c4Ei64AcZTk/edit?usp=sharing' download className={style.iconCv}></a>
          </div>
    </div>
    )
}
import PropTypes from 'prop-types';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faTwitter from '@fortawesome/fontawesome-free-brands/faTwitter'
import faInstagram from '@fortawesome/fontawesome-free-brands/faInstagram'
import faGithub from '@fortawesome/fontawesome-free-brands/faGithub'

class Main extends React.Component {
  render() {

    let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>

    return (
      <div id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>

        <article id="intro" className={`${this.props.article === 'intro' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Intro</h2>
          <p>
            I made this portfolio site for practice of <a href="https://nextjs.org/" target="_blank">Next.js</a>.<br/>
            This website is deployed on <a href="https://vercel.com/" target="_blank">Vercel</a>.
          </p>
          <p>
            I used <a href="https://codebushi.com/nextjs-website-starters/" target="_blank">nextjs-starter-dimension template</a>.<br/>
            Thanks for great job.
          </p>
          {close}
        </article>

        <article id="skill" className={`${this.props.article === 'skill' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">skill</h2>
          <h3>Photograph</h3>
          <p>
            Adobe Photoshop<br/>
            Adobe Lightroom Classic
          </p>
          <h3>Programming (learning)</h3>
          <p>
            Python<br/>
            Javascript<br/>
            React<br/>
            Next.js<br/>
            Git<br/>
            JDLA Deep Learning for GENERAL 2020 #2
          </p>
          <h3>Language</h3>
          <p>
            Japanese (Native)<br/>
            English (TOEIC L&R Score 825, The EIKEN Test in Practical English Proficiency Grade 2)
          </p>
          <h3>Others</h3>
          <p>
            Gojyu-ryu Karate Shodan of black belt<br/>
            Test in Color Coodination Grade 3
          </p>
          {close}
        </article>

        <article id="about" className={`${this.props.article === 'about' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">About</h2>
          <span className="image main"><img src="/static/images/cyrus03.jpg" alt="" /></span>
          <p>
            My name is Cyrus and I am a medical student and a portrait photographer based in Tokyo, Japan. I study Medicine in a medical school in Tokyo and I'm a fifth grade student. I started learning Programming with dreaming more technological Medicine.<br/>
            I also shoot portrait photos in <a href="https://corporate.lovegraph.me/en" target="_blank">Lovegraph Inc.</a>
          </p>
          {close}
        </article>

        <article id="contact" className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Contact (It's NOT working.)</h2>
          <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4">I'm coding contact function... Please contact me via twitter DM.</textarea>
            </div>
            <ul className="actions">
              <li><input type="submit" value="Send Message" className="special" /></li>
              <li><input type="reset" value="Reset" /></li>
            </ul>
          </form>
          <ul className="icons">
            <li><a href="https://twitter.com/cyrus_twi" target="_blank">
              <FontAwesomeIcon icon={faTwitter} />
            </a></li>
            {/* <li><a href="#">
              <FontAwesomeIcon icon={faInstagram} />
            </a></li> */}
            <li><a href="https://github.com/cyrus-git" target="_blank">
              <FontAwesomeIcon icon={faGithub} />
            </a></li>
          </ul>
          {close}
        </article>

      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool
}

export default Main
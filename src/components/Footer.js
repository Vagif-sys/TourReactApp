import { socialLinks } from "../data";

const Footer =()=>{

    return(
        <footer class="section footer">
        <ul class="footer-links">
          <li>
            <a href="#home" class="footer-link">home</a>
          </li>
          <li>
            <a href="#about" class="footer-link">about</a>
          </li>
          <li>
            <a href="#services" class="footer-link">services</a>
          </li>
          <li>
            <a href="#featured" class="footer-link">featured</a>
          </li>
        </ul>
        <ul class="footer-icons">
          {socialLinks.map((link)=>{
              return(
                  
                  <li key={link.id}>
                    <a href={link.href} target="_blank"  rel="noreferrer" class="footer-icon">
                      <i class={link.icon}></i>
                    </a>
                  </li>
              )
          })}
        </ul>
        <p class="copyright">
          copyright &copy; Backroads travel tours company
          <span id="date">{new Date().getFullYear()}</span> all rights reserved
        </p>
        <div className='nameAuthor'><p >Made By Vagif</p></div>
      </footer>
    )
}
export default Footer;
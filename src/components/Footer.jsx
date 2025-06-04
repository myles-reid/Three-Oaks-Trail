function Footer() {
  return (
    <footer>
      <div className="container flex flex-between">
        <div className="footer-text">
          <p>&copy; {new Date().getFullYear()} Three Oaks Trail</p>
          <p>All rights reserved.</p>
        </div>
        <div className="social-media">
          <p>Follow us on social media!</p>
          <ul className="socials">
            <li><a href="https://facebook.com"><i className="fa-brands fa-facebook"></i></a></li>
            <li><a href="https://twitter.com"><i className="fa-brands fa-square-twitter"></i></a></li>
            <li><a href="https://instagram.com"><i className="fa-brands fa-instagram"></i></a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
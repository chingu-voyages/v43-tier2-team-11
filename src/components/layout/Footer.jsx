const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="footer">
      <p className="footer__copyright">
        Copyright &copy; {currentYear} 4Foodies. All rights reserved
      </p>
    </div>
  );
};

export default Footer;

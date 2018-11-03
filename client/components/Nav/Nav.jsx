import React, { PureComponent } from 'react';
import cx from 'classnames';

class Nav extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      scrolled: false,
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.onScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll);
  }

  handleScroll = () => {
    const { scrolled } = this.state;
    const { scrollY } = window;

    if (scrolled && scrollY <= 5) {
      this.setState({
        scrolled: false,
      });
    } else if (!scrolled && scrollY > 5) {
      this.setState({
        scrolled: true,
      });
    }
  };

  onScroll = () => {
    window.requestAnimationFrame(this.handleScroll);
  };

  render() {
    return (
      <nav
        className={cx(
          'navbar navbar-light navbar-expand-md fixed-top bg-white',
          {
            'navbar--sticky': this.state.scrolled,
          }
        )}>
        <a className="navbar-brand ml-md-5 mx-auto" href="#jumbotron">
          <img
            className="d-none d-md-block"
            src="https://d30am0anjtu1dn.cloudfront.net/images/logo.svg"
            width="88"
            alt="Mustache logo"
          />
          <img
            className="d-md-none"
            src="https://d30am0anjtu1dn.cloudfront.net/images/logo.svg"
            width="108"
            alt="Mustache logo"
          />
        </a>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ml-auto mr-5">
            <li className="nav-item mr-4">
              <a className="nav-link" href="#about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link text-uppercase text-primary font-weight-bold"
                href="#"
                onClick={this.props.showModal}>
                Download
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Nav;

import React, { PureComponent } from 'react';

function withAnimateIn(Component, config = {}) {
  const { transitionDuration = 0 } = config;

  class WithAnimateIn extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        enter: false,
        show: false,
      };
    }

    componentDidMount() {
      if (this.props.show) {
        this.showComponent();
      }
    }

    componentWillReceiveProps(nextProps) {
      if (nextProps.show && !this.props.show) {
        this.showComponent();
      } else if (!nextProps.show && this.props.show) {
        this.hideComponent();
      }
    }

    animateIn = () => {
      this.setState(
        {
          enter: true,
        },
        () => {
          setTimeout(() => {
            this.setState({
              show: true,
            });

            this.showTimeout = null;
          }, transitionDuration);
        }
      );
    };

    animateOut = () => {
      this.setState(
        {
          show: false,
        },
        () => {
          setTimeout(() => {
            this.setState({
              enter: false,
            });

            this.showTimeout = null;
          }, transitionDuration);
        }
      );
    };

    hideComponent = () => {
      const { show } = this.state;

      if (this.showTimeout) {
        clearTimeout(this.showTimeout);
        this.showTimeout = null;
      }

      if (!show) {
        return;
      }

      this.animateOut();
    };

    showComponent = () => {
      const { delay } = this.props;
      const { show } = this.state;

      if (show || this.showTimeout) {
        return;
      }

      if (delay) {
        this.showTimeout = setTimeout(this.animateIn, delay);
      } else {
        this.animateIn();
      }
    };

    render() {
      const { delay, ...other } = this.props;

      return <Component {...other} {...this.state} />;
    }
  }

  WithAnimateIn.WrappedComponent = Component;

  return WithAnimateIn;
}

export default withAnimateIn;

import React, { createRef, PureComponent } from 'react';

function withToggleComponentFactory(config = {}) {
  const { autoDismiss = false, name = 'Component' } = config;

  function withToggleComponent(Component) {
    class WithToggleComponent extends PureComponent {
      constructor(props) {
        super(props);

        this.state = {
          isComponentVisible: false,
        };

        this.nodeRef = createRef();
      }

      componentDidMount() {
        this.mounted = true;

        if (autoDismiss) {
          window.addEventListener('click', this.handleWindowClick);
          window.addEventListener('keyup', this.handleKeyUp);
        }
      }

      componentWillUnmount() {
        this.mounted = false;

        if (autoDismiss) {
          window.removeEventListener('click', this.handleWindowClick);
          window.removeEventListener('keyup', this.handleKeyUp);
        }
      }

      handleKeyUp = e => {
        const { isComponentVisible } = this.state;

        if (e.key === 'Escape' && isComponentVisible) {
          this.hideComponent();
        }
      };

      handleWindowClick = e => {
        const { isComponentVisible } = this.state;

        if (isComponentVisible) {
          if (!this.nodeRef.current.contains(e.target)) {
            this.hideComponent();
          }
        }
      };

      hideComponent = e => {
        if (e && e.preventDefault) {
          e.preventDefault();
          e.stopPropagation();
        }

        const { isComponentVisible } = this.state;

        if (isComponentVisible && this.mounted) {
          gtag('event', `hide${name}`, {
            category: `toggle${name}`,
          });

          this.setState({
            isComponentVisible: false,
          });
        }
      };

      showComponent = e => {
        if (e && e.preventDefault) {
          e.preventDefault();
          e.stopPropagation();
        }

        const { isComponentVisible } = this.state;

        if (!isComponentVisible && this.mounted) {
          gtag('event', `show${name}`, {
            category: `toggle${name}`,
          });

          this.setState({
            isComponentVisible: true,
          });
        }
      };

      toggleComponent = () => {
        const { isComponentVisible } = this.state;

        if (isComponentVisible) {
          this.hideComponent();
        } else {
          this.showComponent();
        }
      };

      render() {
        const { isComponentVisible } = this.state;

        const otherProps = {
          [`is${name}Visible`]: isComponentVisible,
          [`hide${name}`]: this.hideComponent,
          [`show${name}`]: this.showComponent,
          [`toggle${name}`]: this.toggleComponent,
          nodeRef: this.nodeRef,
        };

        return <Component {...this.props} {...otherProps} />;
      }
    }

    WithToggleComponent.WrappedComponent = Component;

    return WithToggleComponent;
  }

  return withToggleComponent;
}

export default withToggleComponentFactory;

import React, { PureComponent } from 'react';
import cn from 'classnames';
import styles from './NotifyService.scss';

class NotifyService extends PureComponent {

  state = {
    notify: null,
  };

  componentWillReceiveProps(nextProps) {

    if (nextProps.notify.id !== this.props.notify.id) {

      this.setState({
        notify: nextProps.notify.text,
      });

      setTimeout(() => this.setState({ notify: null }), 3000);

    }

  }

  render() {

    return (
      <div className={cn(styles.notify, { [styles.opened]: this.state.notify })}>
        {this.state.notify}
      </div>
    );

  }

}

export default NotifyService;

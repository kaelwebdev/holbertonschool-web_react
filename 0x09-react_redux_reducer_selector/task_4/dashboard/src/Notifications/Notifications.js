import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import imgClose from '../assets/close-icon.png';
import NotificationItem from './NotificationItem';
import NotificationItemShape from './NotificationItemShape';
import {StyleSheet, css} from 'aphrodite';


export default class Notifications extends PureComponent {
  static propTypes = {
    displayDrawer: PropTypes.bool,
    listNotifications: PropTypes.arrayOf(NotificationItemShape),
    handleDisplayDrawer: PropTypes.func,
    handleHideDrawer: PropTypes.func,
    markNotificationAsRead: PropTypes.func,
  }

  static defaultProps  = {
    displayDrawer: false,
    listNotifications: [],
    handleDisplayDrawer: () => void(0),
    handleHideDrawer: () => void(0),
    markNotificationAsRead: () => void(0),
  }

  constructor (props) {
    super(props);
  }

  renderNotification = x =>
    <NotificationItem key={ x.id } keyId={ x.id } type={ x.type }
    value={ x.value } html={ x.html } markAsRead={ this.props.markNotificationAsRead }/>

  generateList = () => {
    if (this.props.listNotifications.length <= 0) {
      return (<li>No new notification for now</li>);
    }
    return this.props.listNotifications.map(this.renderNotification)
  }
  
  render() {
    return <>
    <div className={ css(styles.menuItem) }
      onClick={this.props.handleDisplayDrawer} data-test-id="notificationBtn">
        <p
          className={ css(styles.p, styles.bounce, styles.textFlash) }>
          Your notifications
        </p>
    </div>
    { this.props.displayDrawer ? <div className={ css(styles.notifications) }>
      <button aria-label="Close"
              onClick={ this.props.handleHideDrawer }
              style={
                {position: "absolute",
                top: 10,
                right: 10,
                visibility: "hidden"}
              }
              data-test-id="closeNotificationBtn"
      >
      <img alt="close" src={imgClose}
            style={
              {visibility: "visible",
              height: "15px",
              width: "15px"}
            }
      />
      </button>
      { this.props.listNotifications?.length > 0  ? <p>Here is the list of notifications</p> : null}
      <ul>
        { this.generateList() }
      </ul>
    </div> : null }
    </>
  }
}

const styles = StyleSheet.create({
  textFlash: {  
    ':hover': {
    animationName: {
        '50%': {
            opacity: '50%'
        },
        '100%': {
            opacity: '100%'
        },
    },
    animationDuration: '1s',
    animationIterationCount: '2',
    },
  },
  bounce: {
      ':hover': {
      cursor: 'pointer',
      animationName: {
          '25%': {
              transform: 'translateY(-5px)'
          },
          '75%': {
              transform: 'translateY(5px)'
          },
          '100%': {
              transform: 'translateY(0px)'
          },
      },
      animationDuration: '0.5s',
      animationIterationCount: '3',
      }
  },
  notifications: {
    padding: '30px 5px',
    border: '1px solid #E0354B',
    borderStyle: 'dashed',
    marginBottom: '20px',
    position: 'absolute',
    top: '37px',
    right: 0,
    textAlign: 'left',
    marginRight: '10px',
    padding: '20px 20px',
    zIndex: 1,
    backgroundColor: 'white',
    '@media (max-width: 900px)': {
      top:0,
      left: 0,
      margin: '0px',
      width: '100%',
      height: '100%',
      fontSize: '20px'
    }
  },
  menuItem: {
    top: 0,
    right: '0px',
    textAlign: 'right',
    margin: '10px',
    position: 'absolute',
    zIndex: 1,
    backgroundColor: '#fff8f8'
  },
  p: {
      paddingBottom: '10px'
  }
});

import * as listNotifications from "../../dist/notifications.json";
import { normalize, schema } from 'normalizr';

const user = new schema.Entity('users');
const message = new schema.Entity('messages', {}, {
  idAttribute: 'guid' // default id
});
const notification = new schema.Entity('notifications', {
  author: user,
  context: message
});

export const normalizedData = normalize(listNotifications.default, [notification]);

function getAllNotificationsByUser(userId) {
  /**
   * this function get all notifications messages by User
   */
   const {notifications, messages } = normalizedData.entities;
   const r = [];
   for (let key in notifications) {
    if (notifications[key].author == userId)
    r.push(messages[notifications[key].context]);
  }
  return r;
}

export const notificationsNormalizer = (data) => {
  return normalize(data, [notification]).entities;
};

export default getAllNotificationsByUser;

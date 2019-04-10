import * as moment from 'moment';
import { Types } from 'mongoose';
import { UTIL_CONSTANTS } from './utils.constants';

export class UtilsService {
  /**
   * Method used to clean all undefined, null or empty attributes inside the received object recursively.
   *
   * @param {Object} object
   * @returns {Object}
   */
  static clean(object: any): any {
    for (let key in object) {
      if (object[key] === null || typeof object[key] === 'undefined') {
        delete object[key];
      } else if (typeof object[key] === 'object' && typeof object[key].getMonth !== 'function'
        && !object[key].hasOwnProperty('lastIndex')) {
        if (Object.keys(object[key]).length === 0) {
          delete object[key];
        } else {
          let cleared = this.clean(object[key]);

          if (Object.keys(cleared).length === 0 && typeof cleared.getMonth !== 'function') {
            delete object[key];
          } else {
            object[key] = cleared;
          }
        }
      }
    }

    return object;
  }

  /**
   * Generates all dates based on a interval, since and util amount of times
   *
   * @static
   * @param {number} startDay
   * @param {number} endDay
   * @param {number} interval
   * @param {string} intervalUnit
   * @param {number} since
   * @param {string} sinceUnit
   * @returns
   * @memberof UtilsService
   */
  static getIntervalDates(startDay: number, endDay: number, interval: number, intervalUnit: string, since: number, sinceUnit: string) {
    let dates: Array<Date> = [];
    let nextDate: Date;
    let startDate: Date = moment().add(startDay, 'days').toDate();
    let limit: Date = moment().add(startDay + endDay, 'days').toDate();
    let firstOccurrence: Date = moment().add(<any>(startDay + since), sinceUnit).toDate();

    if (moment(firstOccurrence).isBefore(limit)) {
      dates.push(firstOccurrence);
      nextDate = moment(dates[dates.length - 1]).add(<any>interval, intervalUnit).toDate();

      while (moment(nextDate).isBefore(limit)) {
        dates.push(nextDate);
        nextDate = moment(dates[dates.length - 1]).add(<any>interval, intervalUnit).toDate();
      }
    }
    return dates;
  }

  /**
   * Method used to create a formatted id like 0000-0000-0000 with randon numbers.
   *
   * @returns {string}
   */
  static generateRandomId(): string {
    let result = '';

    for(let i = 0; i <= 3; i++) {
      result +=  Math.floor(1000 + Math.random() * 9000);
      if(i != 3) {
        result += '-';
      }
    }

    return result;
  }

  /**
   * Method to execute a for each in the async way.
   *
   * @param {Array<any>} array
   * @param {Function} callback
   * @returns {Promise<void>}
   */
  static async asyncForEach(array: Array<any>, callback: Function) {
    for (let index = 0; index < array.length; index++) {
      await callback(array[index], index, array)
    }
  }

  /**
   * Method used to get the hour between two dates.
   *
   * @param {any} from
   * @param {any} to
   * @returns {number}
   */
  static getHoursBetweenDates(from: any, to: any) {
    return Math.abs(<any>new Date(to) - <any>new Date(from)) / UTIL_CONSTANTS.MILLISECONDS_IN_HOUR;
  }

  /**
   * Compare two mongoose ids.
   *
   * @param id1
   * @param id2
   * @returns {boolean}
   */
  static compareIds(id1: Types.ObjectId, id2: Types.ObjectId) {
    return id1 === id2 || (id1 && id1.equals(id2));
  };
}

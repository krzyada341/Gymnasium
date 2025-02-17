/*
 * GymApp
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.42
 *
 * Do not edit the class manually.
 *
 */
import {ApiClient} from '../ApiClient';
import {EntranceEvent} from './EntranceEvent';
import {PassBoughtEvent} from './PassBoughtEvent';

/**
 * The Client model module.
 * @module model/Client
 * @version 1.0
 */
export class Client {
  /**
   * Constructs a new <code>Client</code>.
   * @alias module:model/Client
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>Client</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Client} obj Optional instance to populate.
   * @return {module:model/Client} The populated <code>Client</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Client();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('ownerId'))
        obj.ownerId = ApiClient.convertToType(data['ownerId'], 'String');
      if (data.hasOwnProperty('role'))
        obj.role = ApiClient.convertToType(data['role'], 'String');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('surname'))
        obj.surname = ApiClient.convertToType(data['surname'], 'String');
      if (data.hasOwnProperty('phoneNumber'))
        obj.phoneNumber = ApiClient.convertToType(data['phoneNumber'], 'String');
      if (data.hasOwnProperty('passBoughtEvents'))
        obj.passBoughtEvents = ApiClient.convertToType(data['passBoughtEvents'], [PassBoughtEvent]);
      if (data.hasOwnProperty('entranceEvents'))
        obj.entranceEvents = ApiClient.convertToType(data['entranceEvents'], [EntranceEvent]);
      if (data.hasOwnProperty('passwordHash'))
        obj.passwordHash = ApiClient.convertToType(data['passwordHash'], 'Blob');
      if (data.hasOwnProperty('passwordSalt'))
        obj.passwordSalt = ApiClient.convertToType(data['passwordSalt'], 'Blob');
    }
    return obj;
  }
}

/**
 * @member {String} id
 */
Client.prototype.id = undefined;

/**
 * @member {String} ownerId
 */
Client.prototype.ownerId = undefined;

/**
 * @member {String} role
 */
Client.prototype.role = undefined;

/**
 * @member {String} name
 */
Client.prototype.name = undefined;

/**
 * @member {String} surname
 */
Client.prototype.surname = undefined;

/**
 * @member {String} phoneNumber
 */
Client.prototype.phoneNumber = undefined;

/**
 * @member {Array.<module:model/PassBoughtEvent>} passBoughtEvents
 */
Client.prototype.passBoughtEvents = undefined;

/**
 * @member {Array.<module:model/EntranceEvent>} entranceEvents
 */
Client.prototype.entranceEvents = undefined;

/**
 * @member {Blob} passwordHash
 */
Client.prototype.passwordHash = undefined;

/**
 * @member {Blob} passwordSalt
 */
Client.prototype.passwordSalt = undefined;


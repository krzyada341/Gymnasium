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
import {Gym} from './Gym';

/**
 * The Receptionist model module.
 * @module model/Receptionist
 * @version 1.0
 */
export class Receptionist {
  /**
   * Constructs a new <code>Receptionist</code>.
   * @alias module:model/Receptionist
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>Receptionist</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Receptionist} obj Optional instance to populate.
   * @return {module:model/Receptionist} The populated <code>Receptionist</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Receptionist();
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
      if (data.hasOwnProperty('gyms'))
        obj.gyms = ApiClient.convertToType(data['gyms'], [Gym]);
      if (data.hasOwnProperty('passwordHash'))
        obj.passwordHash = ApiClient.convertToType(data['passwordHash'], 'String');
    }
    return obj;
  }
}

/**
 * @member {String} id
 */
Receptionist.prototype.id = undefined;

/**
 * @member {String} ownerId
 */
Receptionist.prototype.ownerId = undefined;

/**
 * @member {String} role
 */
Receptionist.prototype.role = undefined;

/**
 * @member {String} name
 */
Receptionist.prototype.name = undefined;

/**
 * @member {String} surname
 */
Receptionist.prototype.surname = undefined;

/**
 * @member {Array.<module:model/Gym>} gyms
 */
Receptionist.prototype.gyms = undefined;

/**
 * @member {String} passwordHash
 */
Receptionist.prototype.passwordHash = undefined;


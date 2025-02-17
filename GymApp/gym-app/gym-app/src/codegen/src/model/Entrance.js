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
import {Pass} from './Pass';
import {Sector} from './Sector';

/**
 * The Entrance model module.
 * @module model/Entrance
 * @version 1.0
 */
export class Entrance {
  /**
   * Constructs a new <code>Entrance</code>.
   * @alias module:model/Entrance
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>Entrance</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Entrance} obj Optional instance to populate.
   * @return {module:model/Entrance} The populated <code>Entrance</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Entrance();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('ownerId'))
        obj.ownerId = ApiClient.convertToType(data['ownerId'], 'String');
      if (data.hasOwnProperty('passId'))
        obj.passId = ApiClient.convertToType(data['passId'], 'String');
      if (data.hasOwnProperty('pass'))
        obj.pass = Pass.constructFromObject(data['pass']);
      if (data.hasOwnProperty('sectorId'))
        obj.sectorId = ApiClient.convertToType(data['sectorId'], 'String');
      if (data.hasOwnProperty('sector'))
        obj.sector = Sector.constructFromObject(data['sector']);
      if (data.hasOwnProperty('entranceEvents'))
        obj.entranceEvents = ApiClient.convertToType(data['entranceEvents'], [EntranceEvent]);
    }
    return obj;
  }
}

/**
 * @member {String} id
 */
Entrance.prototype.id = undefined;

/**
 * @member {String} ownerId
 */
Entrance.prototype.ownerId = undefined;

/**
 * @member {String} passId
 */
Entrance.prototype.passId = undefined;

/**
 * @member {module:model/Pass} pass
 */
Entrance.prototype.pass = undefined;

/**
 * @member {String} sectorId
 */
Entrance.prototype.sectorId = undefined;

/**
 * @member {module:model/Sector} sector
 */
Entrance.prototype.sector = undefined;

/**
 * @member {Array.<module:model/EntranceEvent>} entranceEvents
 */
Entrance.prototype.entranceEvents = undefined;


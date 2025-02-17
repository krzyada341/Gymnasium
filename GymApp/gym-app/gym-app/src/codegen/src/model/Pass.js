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
import {Entrance} from './Entrance';
import {PassBoughtEvent} from './PassBoughtEvent';

/**
 * The Pass model module.
 * @module model/Pass
 * @version 1.0
 */
export class Pass {
  /**
   * Constructs a new <code>Pass</code>.
   * @alias module:model/Pass
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>Pass</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Pass} obj Optional instance to populate.
   * @return {module:model/Pass} The populated <code>Pass</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Pass();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('ownerId'))
        obj.ownerId = ApiClient.convertToType(data['ownerId'], 'String');
      if (data.hasOwnProperty('passName'))
        obj.passName = ApiClient.convertToType(data['passName'], 'String');
      if (data.hasOwnProperty('passDescription'))
        obj.passDescription = ApiClient.convertToType(data['passDescription'], 'String');
      if (data.hasOwnProperty('price'))
        obj.price = ApiClient.convertToType(data['price'], 'Number');
      if (data.hasOwnProperty('duration'))
        obj.duration = ApiClient.convertToType(data['duration'], 'Number');
      if (data.hasOwnProperty('passBoughtEvents'))
        obj.passBoughtEvents = ApiClient.convertToType(data['passBoughtEvents'], [PassBoughtEvent]);
      if (data.hasOwnProperty('entrances'))
        obj.entrances = ApiClient.convertToType(data['entrances'], [Entrance]);
    }
    return obj;
  }
}

/**
 * @member {String} id
 */
Pass.prototype.id = undefined;

/**
 * @member {String} ownerId
 */
Pass.prototype.ownerId = undefined;

/**
 * @member {String} passName
 */
Pass.prototype.passName = undefined;

/**
 * @member {String} passDescription
 */
Pass.prototype.passDescription = undefined;

/**
 * @member {Number} price
 */
Pass.prototype.price = undefined;

/**
 * @member {Number} duration
 */
Pass.prototype.duration = undefined;

/**
 * @member {Array.<module:model/PassBoughtEvent>} passBoughtEvents
 */
Pass.prototype.passBoughtEvents = undefined;

/**
 * @member {Array.<module:model/Entrance>} entrances
 */
Pass.prototype.entrances = undefined;


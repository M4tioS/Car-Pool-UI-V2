/**
 * CarPool API
 * API documentation for CarPool application
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The AnswerRideRequestRequest model module.
 * @module model/AnswerRideRequestRequest
 * @version 1.0
 */
class AnswerRideRequestRequest {
    /**
     * Constructs a new <code>AnswerRideRequestRequest</code>.
     * @alias module:model/AnswerRideRequestRequest
     * @param rideRequestId {Number} 
     * @param answerStatus {module:model/AnswerRideRequestRequest.AnswerStatusEnum} 
     */
    constructor(rideRequestId, answerStatus) { 
        
        AnswerRideRequestRequest.initialize(this, rideRequestId, answerStatus);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, rideRequestId, answerStatus) { 
        obj['rideRequestId'] = rideRequestId;
        obj['answerStatus'] = answerStatus;
    }

    /**
     * Constructs a <code>AnswerRideRequestRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AnswerRideRequestRequest} obj Optional instance to populate.
     * @return {module:model/AnswerRideRequestRequest} The populated <code>AnswerRideRequestRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AnswerRideRequestRequest();

            if (data.hasOwnProperty('rideRequestId')) {
                obj['rideRequestId'] = ApiClient.convertToType(data['rideRequestId'], 'Number');
            }
            if (data.hasOwnProperty('answerStatus')) {
                obj['answerStatus'] = ApiClient.convertToType(data['answerStatus'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>AnswerRideRequestRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>AnswerRideRequestRequest</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of AnswerRideRequestRequest.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['answerStatus'] && !(typeof data['answerStatus'] === 'string' || data['answerStatus'] instanceof String)) {
            throw new Error("Expected the field `answerStatus` to be a primitive type in the JSON string but got " + data['answerStatus']);
        }

        return true;
    }


}

AnswerRideRequestRequest.RequiredProperties = ["rideRequestId", "answerStatus"];

/**
 * @member {Number} rideRequestId
 */
AnswerRideRequestRequest.prototype['rideRequestId'] = undefined;

/**
 * @member {module:model/AnswerRideRequestRequest.AnswerStatusEnum} answerStatus
 */
AnswerRideRequestRequest.prototype['answerStatus'] = undefined;





/**
 * Allowed values for the <code>answerStatus</code> property.
 * @enum {String}
 * @readonly
 */
AnswerRideRequestRequest['AnswerStatusEnum'] = {

    /**
     * value: "ACCEPTED"
     * @const
     */
    "ACCEPTED": "ACCEPTED",

    /**
     * value: "REJECTED"
     * @const
     */
    "REJECTED": "REJECTED"
};



export default AnswerRideRequestRequest;


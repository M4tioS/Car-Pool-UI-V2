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


import ApiClient from "../ApiClient";
import AuthenticationRequest from '../model/AuthenticationRequest';
import RegisterRequest from '../model/RegisterRequest';

/**
* AuthenticationRegistration service.
* @module api/AuthenticationRegistrationApi
* @version 1.0
*/
export default class AuthenticationRegistrationApi {

    /**
    * Constructs a new AuthenticationRegistrationApi. 
    * @alias module:api/AuthenticationRegistrationApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the authenticate operation.
     * @callback module:api/AuthenticationRegistrationApi~authenticateCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {module:model/AuthenticationRequest} authenticationRequest 
     * @param {module:api/AuthenticationRegistrationApi~authenticateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    authenticate(authenticationRequest, callback) {
      let postBody = authenticationRequest;
      // verify the required parameter 'authenticationRequest' is set
      if (authenticationRequest === undefined || authenticationRequest === null) {
        throw new Error("Missing the required parameter 'authenticationRequest' when calling authenticate");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Object;
      return this.apiClient.callApi(
        '/auth/authenticate', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the check operation.
     * @callback module:api/AuthenticationRegistrationApi~checkCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {module:api/AuthenticationRegistrationApi~checkCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    check(callback) {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Object;
      return this.apiClient.callApi(
        '/auth/check', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the logout operation.
     * @callback module:api/AuthenticationRegistrationApi~logoutCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {module:api/AuthenticationRegistrationApi~logoutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    logout(callback) {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Object;
      return this.apiClient.callApi(
        '/auth/logout', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the register operation.
     * @callback module:api/AuthenticationRegistrationApi~registerCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {module:model/RegisterRequest} registerRequest 
     * @param {module:api/AuthenticationRegistrationApi~registerCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    register(registerRequest, callback) {
      let postBody = registerRequest;
      // verify the required parameter 'registerRequest' is set
      if (registerRequest === undefined || registerRequest === null) {
        throw new Error("Missing the required parameter 'registerRequest' when calling register");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Object;
      return this.apiClient.callApi(
        '/auth/register', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}

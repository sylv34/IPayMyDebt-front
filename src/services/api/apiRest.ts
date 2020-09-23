import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import { getToken } from '../localStorage'


export class ApiBase {

    private api: AxiosInstance

    constructor() {
        this.api = axios.create()

        this.api.interceptors.request.use((param: AxiosRequestConfig) => ({
            baseURL: process.env.REACT_APP_BASE_API_URL,
            ...param
        }));
        
        this.get = this.get.bind(this)
    }

    config() {
        return {
            headers: { Authorization : getToken() }
        }
    }

    /**
     * HTTP GET method, used to fetch data `statusCode`: 200.
     *
     * @access public
     * @template T - `TYPE`: expected object.
     * @template R - `RESPONSE`: expected object inside a axios response format.
     * @param {string} url - endpoint you want to reach.
     * @param {import("axios").AxiosRequestConfig} [config] - axios request configuration.
     * @returns {Promise<R>} HTTP `axios` response payload.
     * @memberof Api
     */
    public get<R> (url: string): Promise<R> {
        return this.api.get(url, this.config());
    }

    /**
     * HTTP DELETE method, `statusCode`: 204 No Content.
     *
     * @access public
     * @template T - `TYPE`: expected object.
     * @template R - `RESPONSE`: expected object inside a axios response format.
     * @param {string} url - endpoint you want to reach.
     * @param {import("axios").AxiosRequestConfig} [config] - axios request configuration.
     * @returns {Promise<R>} - HTTP [axios] response payload.
     * @memberof Api
     */
    public delete<R>(url: string): Promise<R> {
        return this.api.delete(url, this.config());
    }

     /**
     * HTTP POST method `statusCode`: 201 Created.
     *
     * @access public
     * @template T - `TYPE`: expected object.
     * @template B - `BODY`: body request object.
     * @template R - `RESPONSE`: expected object inside a axios response format.
     * @param {string} url - endpoint you want to reach.
     * @param {B} data - payload to be send as the `request body`,
     * @param {import("axios").AxiosRequestConfig} [config] - axios request configuration.
     * @returns {Promise<R>} - HTTP [axios] response payload.
     */
    public post<T, B, R = AxiosResponse<T>> (url: string, data?: B): Promise<R> {
        return this.api.post<T, R>(url, data, this.config());
    }

    /**
     * HTTP PUT method.
     *
     * @access public
     * @template T - `TYPE`: expected object.
     * @template B - `BODY`: body request object.
     * @template R - `RESPONSE`: expected object inside a axios response format.
     * @param {string} url - endpoint you want to reach.
     * @param {B} data - payload to be send as the `request body`,
     * @param {import("axios").AxiosRequestConfig} [config] - axios request configuration.
     * @returns {Promise<R>} - HTTP [axios] response payload.
     */
    public put<T, B, R = AxiosResponse<T>> (url: string, data?: B): Promise<R> {
        return this.api.put(url, data, this.config());
    }

     /**
     *
     * @template T - type.
     * @param {import("axios").AxiosResponse<T>} response - axios response.
     * @returns {T} - expected object.
     * @memberof Api
     */
    public success<T> (response: AxiosResponse<T>): T {
        return response.data;
    }

    public error (error: AxiosError<Error>) {
        throw error;
    }
}
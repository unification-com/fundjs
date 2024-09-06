"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LCDQueryClient = void 0;
//@ts-nocheck
const helpers_1 = require("../../../helpers");
class LCDQueryClient {
    req;
    constructor({ requestClient }) {
        this.req = requestClient;
        this.params = this.params.bind(this);
        this.beacon = this.beacon.bind(this);
        this.beaconTimestamp = this.beaconTimestamp.bind(this);
        this.beaconsFiltered = this.beaconsFiltered.bind(this);
        this.beaconStorage = this.beaconStorage.bind(this);
    }
    /* Params queries the parameters of x/beacon module. */
    async params(_params = {}) {
        const endpoint = `mainchain/beacon/v1/params`;
        return await this.req.get(endpoint);
    }
    /* Beacon queries the metadata of a beacon. */
    async beacon(params) {
        const endpoint = `mainchain/beacon/v1/beacon/${params.beaconId}`;
        return await this.req.get(endpoint);
    }
    /* BeaconTimestamp queries a timestamp of a beacon */
    async beaconTimestamp(params) {
        const endpoint = `mainchain/beacon/v1/beacon/${params.beaconId}/timestamp/${params.timestampId}`;
        return await this.req.get(endpoint);
    }
    /* BeaconsFiltered queries all beacon metadata for given search parameters */
    async beaconsFiltered(params) {
        const options = {
            params: {}
        };
        if (typeof params?.moniker !== "undefined") {
            options.params.moniker = params.moniker;
        }
        if (typeof params?.owner !== "undefined") {
            options.params.owner = params.owner;
        }
        if (typeof params?.pagination !== "undefined") {
            (0, helpers_1.setPaginationParams)(options, params.pagination);
        }
        const endpoint = `mainchain/beacon/v1/beacons`;
        return await this.req.get(endpoint, options);
    }
    /* BeaconStorage queries beacon storage for for given beacon ID */
    async beaconStorage(params) {
        const endpoint = `mainchain/beacon/v1/beacon/${params.beaconId}/storage`;
        return await this.req.get(endpoint);
    }
}
exports.LCDQueryClient = LCDQueryClient;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRpcQueryExtension = exports.QueryClientImpl = void 0;
const binary_1 = require("../../../binary");
const stargate_1 = require("@cosmjs/stargate");
const query_1 = require("./query");
class QueryClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
        this.params = this.params.bind(this);
        this.beacon = this.beacon.bind(this);
        this.beaconTimestamp = this.beaconTimestamp.bind(this);
        this.beaconsFiltered = this.beaconsFiltered.bind(this);
        this.beaconStorage = this.beaconStorage.bind(this);
    }
    params(request = {}) {
        const data = query_1.QueryParamsRequest.encode(request).finish();
        const promise = this.rpc.request("mainchain.beacon.v1.Query", "Params", data);
        return promise.then(data => query_1.QueryParamsResponse.decode(new binary_1.BinaryReader(data)));
    }
    beacon(request) {
        const data = query_1.QueryBeaconRequest.encode(request).finish();
        const promise = this.rpc.request("mainchain.beacon.v1.Query", "Beacon", data);
        return promise.then(data => query_1.QueryBeaconResponse.decode(new binary_1.BinaryReader(data)));
    }
    beaconTimestamp(request) {
        const data = query_1.QueryBeaconTimestampRequest.encode(request).finish();
        const promise = this.rpc.request("mainchain.beacon.v1.Query", "BeaconTimestamp", data);
        return promise.then(data => query_1.QueryBeaconTimestampResponse.decode(new binary_1.BinaryReader(data)));
    }
    beaconsFiltered(request) {
        const data = query_1.QueryBeaconsFilteredRequest.encode(request).finish();
        const promise = this.rpc.request("mainchain.beacon.v1.Query", "BeaconsFiltered", data);
        return promise.then(data => query_1.QueryBeaconsFilteredResponse.decode(new binary_1.BinaryReader(data)));
    }
    beaconStorage(request) {
        const data = query_1.QueryBeaconStorageRequest.encode(request).finish();
        const promise = this.rpc.request("mainchain.beacon.v1.Query", "BeaconStorage", data);
        return promise.then(data => query_1.QueryBeaconStorageResponse.decode(new binary_1.BinaryReader(data)));
    }
}
exports.QueryClientImpl = QueryClientImpl;
const createRpcQueryExtension = (base) => {
    const rpc = (0, stargate_1.createProtobufRpcClient)(base);
    const queryService = new QueryClientImpl(rpc);
    return {
        params(request) {
            return queryService.params(request);
        },
        beacon(request) {
            return queryService.beacon(request);
        },
        beaconTimestamp(request) {
            return queryService.beaconTimestamp(request);
        },
        beaconsFiltered(request) {
            return queryService.beaconsFiltered(request);
        },
        beaconStorage(request) {
            return queryService.beaconStorage(request);
        }
    };
};
exports.createRpcQueryExtension = createRpcQueryExtension;

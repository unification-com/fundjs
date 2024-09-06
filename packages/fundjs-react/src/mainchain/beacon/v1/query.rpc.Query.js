"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRpcQueryHooks = exports.createRpcQueryExtension = exports.QueryClientImpl = void 0;
const binary_1 = require("../../../binary");
const stargate_1 = require("@cosmjs/stargate");
const react_query_1 = require("@tanstack/react-query");
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
const _queryClients = new WeakMap();
const getQueryService = (rpc) => {
    if (!rpc)
        return;
    if (_queryClients.has(rpc)) {
        return _queryClients.get(rpc);
    }
    const queryService = new QueryClientImpl(rpc);
    _queryClients.set(rpc, queryService);
    return queryService;
};
const createRpcQueryHooks = (rpc) => {
    const queryService = getQueryService(rpc);
    const useParams = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["paramsQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.params(request);
        }, options);
    };
    const useBeacon = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["beaconQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.beacon(request);
        }, options);
    };
    const useBeaconTimestamp = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["beaconTimestampQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.beaconTimestamp(request);
        }, options);
    };
    const useBeaconsFiltered = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["beaconsFilteredQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.beaconsFiltered(request);
        }, options);
    };
    const useBeaconStorage = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["beaconStorageQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.beaconStorage(request);
        }, options);
    };
    return {
        /** Params queries the parameters of x/beacon module. */ useParams,
        /** Beacon queries the metadata of a beacon. */ useBeacon,
        /** BeaconTimestamp queries a timestamp of a beacon */ useBeaconTimestamp,
        /** BeaconsFiltered queries all beacon metadata for given search parameters */ useBeaconsFiltered,
        /** BeaconStorage queries beacon storage for for given beacon ID */ useBeaconStorage
    };
};
exports.createRpcQueryHooks = createRpcQueryHooks;

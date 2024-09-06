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
        this.signingInfo = this.signingInfo.bind(this);
        this.signingInfos = this.signingInfos.bind(this);
    }
    params(request = {}) {
        const data = query_1.QueryParamsRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.slashing.v1beta1.Query", "Params", data);
        return promise.then(data => query_1.QueryParamsResponse.decode(new binary_1.BinaryReader(data)));
    }
    signingInfo(request) {
        const data = query_1.QuerySigningInfoRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.slashing.v1beta1.Query", "SigningInfo", data);
        return promise.then(data => query_1.QuerySigningInfoResponse.decode(new binary_1.BinaryReader(data)));
    }
    signingInfos(request = {
        pagination: undefined
    }) {
        const data = query_1.QuerySigningInfosRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.slashing.v1beta1.Query", "SigningInfos", data);
        return promise.then(data => query_1.QuerySigningInfosResponse.decode(new binary_1.BinaryReader(data)));
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
        signingInfo(request) {
            return queryService.signingInfo(request);
        },
        signingInfos(request) {
            return queryService.signingInfos(request);
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
    const useSigningInfo = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["signingInfoQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.signingInfo(request);
        }, options);
    };
    const useSigningInfos = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["signingInfosQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.signingInfos(request);
        }, options);
    };
    return {
        /** Params queries the parameters of slashing module */ useParams,
        /** SigningInfo queries the signing info of given cons address */ useSigningInfo,
        /** SigningInfos queries signing info of all validators */ useSigningInfos
    };
};
exports.createRpcQueryHooks = createRpcQueryHooks;

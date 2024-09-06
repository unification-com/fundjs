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
        this.grants = this.grants.bind(this);
        this.granterGrants = this.granterGrants.bind(this);
        this.granteeGrants = this.granteeGrants.bind(this);
    }
    grants(request) {
        const data = query_1.QueryGrantsRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.authz.v1beta1.Query", "Grants", data);
        return promise.then(data => query_1.QueryGrantsResponse.decode(new binary_1.BinaryReader(data)));
    }
    granterGrants(request) {
        const data = query_1.QueryGranterGrantsRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.authz.v1beta1.Query", "GranterGrants", data);
        return promise.then(data => query_1.QueryGranterGrantsResponse.decode(new binary_1.BinaryReader(data)));
    }
    granteeGrants(request) {
        const data = query_1.QueryGranteeGrantsRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.authz.v1beta1.Query", "GranteeGrants", data);
        return promise.then(data => query_1.QueryGranteeGrantsResponse.decode(new binary_1.BinaryReader(data)));
    }
}
exports.QueryClientImpl = QueryClientImpl;
const createRpcQueryExtension = (base) => {
    const rpc = (0, stargate_1.createProtobufRpcClient)(base);
    const queryService = new QueryClientImpl(rpc);
    return {
        grants(request) {
            return queryService.grants(request);
        },
        granterGrants(request) {
            return queryService.granterGrants(request);
        },
        granteeGrants(request) {
            return queryService.granteeGrants(request);
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
    const useGrants = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["grantsQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.grants(request);
        }, options);
    };
    const useGranterGrants = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["granterGrantsQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.granterGrants(request);
        }, options);
    };
    const useGranteeGrants = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["granteeGrantsQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.granteeGrants(request);
        }, options);
    };
    return {
        /** Returns list of `Authorization`, granted to the grantee by the granter. */ useGrants,
        /**
         * GranterGrants returns list of `GrantAuthorization`, granted by granter.
         *
         * Since: cosmos-sdk 0.46
         */
        useGranterGrants,
        /**
         * GranteeGrants returns a list of `GrantAuthorization` by grantee.
         *
         * Since: cosmos-sdk 0.46
         */
        useGranteeGrants
    };
};
exports.createRpcQueryHooks = createRpcQueryHooks;

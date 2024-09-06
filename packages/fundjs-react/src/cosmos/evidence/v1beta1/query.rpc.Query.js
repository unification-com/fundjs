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
        this.evidence = this.evidence.bind(this);
        this.allEvidence = this.allEvidence.bind(this);
    }
    evidence(request) {
        const data = query_1.QueryEvidenceRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.evidence.v1beta1.Query", "Evidence", data);
        return promise.then(data => query_1.QueryEvidenceResponse.decode(new binary_1.BinaryReader(data)));
    }
    allEvidence(request = {
        pagination: undefined
    }) {
        const data = query_1.QueryAllEvidenceRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.evidence.v1beta1.Query", "AllEvidence", data);
        return promise.then(data => query_1.QueryAllEvidenceResponse.decode(new binary_1.BinaryReader(data)));
    }
}
exports.QueryClientImpl = QueryClientImpl;
const createRpcQueryExtension = (base) => {
    const rpc = (0, stargate_1.createProtobufRpcClient)(base);
    const queryService = new QueryClientImpl(rpc);
    return {
        evidence(request) {
            return queryService.evidence(request);
        },
        allEvidence(request) {
            return queryService.allEvidence(request);
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
    const useEvidence = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["evidenceQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.evidence(request);
        }, options);
    };
    const useAllEvidence = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["allEvidenceQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.allEvidence(request);
        }, options);
    };
    return {
        /** Evidence queries evidence based on evidence hash. */ useEvidence,
        /** AllEvidence queries all evidence. */ useAllEvidence
    };
};
exports.createRpcQueryHooks = createRpcQueryHooks;

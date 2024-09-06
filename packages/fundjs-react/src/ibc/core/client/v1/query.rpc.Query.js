"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRpcQueryHooks = exports.createRpcQueryExtension = exports.QueryClientImpl = void 0;
const binary_1 = require("../../../../binary");
const stargate_1 = require("@cosmjs/stargate");
const react_query_1 = require("@tanstack/react-query");
const query_1 = require("./query");
class QueryClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
        this.clientState = this.clientState.bind(this);
        this.clientStates = this.clientStates.bind(this);
        this.consensusState = this.consensusState.bind(this);
        this.consensusStates = this.consensusStates.bind(this);
        this.clientStatus = this.clientStatus.bind(this);
        this.clientParams = this.clientParams.bind(this);
        this.upgradedClientState = this.upgradedClientState.bind(this);
        this.upgradedConsensusState = this.upgradedConsensusState.bind(this);
    }
    clientState(request) {
        const data = query_1.QueryClientStateRequest.encode(request).finish();
        const promise = this.rpc.request("ibc.core.client.v1.Query", "ClientState", data);
        return promise.then(data => query_1.QueryClientStateResponse.decode(new binary_1.BinaryReader(data)));
    }
    clientStates(request = {
        pagination: undefined
    }) {
        const data = query_1.QueryClientStatesRequest.encode(request).finish();
        const promise = this.rpc.request("ibc.core.client.v1.Query", "ClientStates", data);
        return promise.then(data => query_1.QueryClientStatesResponse.decode(new binary_1.BinaryReader(data)));
    }
    consensusState(request) {
        const data = query_1.QueryConsensusStateRequest.encode(request).finish();
        const promise = this.rpc.request("ibc.core.client.v1.Query", "ConsensusState", data);
        return promise.then(data => query_1.QueryConsensusStateResponse.decode(new binary_1.BinaryReader(data)));
    }
    consensusStates(request) {
        const data = query_1.QueryConsensusStatesRequest.encode(request).finish();
        const promise = this.rpc.request("ibc.core.client.v1.Query", "ConsensusStates", data);
        return promise.then(data => query_1.QueryConsensusStatesResponse.decode(new binary_1.BinaryReader(data)));
    }
    clientStatus(request) {
        const data = query_1.QueryClientStatusRequest.encode(request).finish();
        const promise = this.rpc.request("ibc.core.client.v1.Query", "ClientStatus", data);
        return promise.then(data => query_1.QueryClientStatusResponse.decode(new binary_1.BinaryReader(data)));
    }
    clientParams(request = {}) {
        const data = query_1.QueryClientParamsRequest.encode(request).finish();
        const promise = this.rpc.request("ibc.core.client.v1.Query", "ClientParams", data);
        return promise.then(data => query_1.QueryClientParamsResponse.decode(new binary_1.BinaryReader(data)));
    }
    upgradedClientState(request = {}) {
        const data = query_1.QueryUpgradedClientStateRequest.encode(request).finish();
        const promise = this.rpc.request("ibc.core.client.v1.Query", "UpgradedClientState", data);
        return promise.then(data => query_1.QueryUpgradedClientStateResponse.decode(new binary_1.BinaryReader(data)));
    }
    upgradedConsensusState(request = {}) {
        const data = query_1.QueryUpgradedConsensusStateRequest.encode(request).finish();
        const promise = this.rpc.request("ibc.core.client.v1.Query", "UpgradedConsensusState", data);
        return promise.then(data => query_1.QueryUpgradedConsensusStateResponse.decode(new binary_1.BinaryReader(data)));
    }
}
exports.QueryClientImpl = QueryClientImpl;
const createRpcQueryExtension = (base) => {
    const rpc = (0, stargate_1.createProtobufRpcClient)(base);
    const queryService = new QueryClientImpl(rpc);
    return {
        clientState(request) {
            return queryService.clientState(request);
        },
        clientStates(request) {
            return queryService.clientStates(request);
        },
        consensusState(request) {
            return queryService.consensusState(request);
        },
        consensusStates(request) {
            return queryService.consensusStates(request);
        },
        clientStatus(request) {
            return queryService.clientStatus(request);
        },
        clientParams(request) {
            return queryService.clientParams(request);
        },
        upgradedClientState(request) {
            return queryService.upgradedClientState(request);
        },
        upgradedConsensusState(request) {
            return queryService.upgradedConsensusState(request);
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
    const useClientState = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["clientStateQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.clientState(request);
        }, options);
    };
    const useClientStates = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["clientStatesQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.clientStates(request);
        }, options);
    };
    const useConsensusState = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["consensusStateQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.consensusState(request);
        }, options);
    };
    const useConsensusStates = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["consensusStatesQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.consensusStates(request);
        }, options);
    };
    const useClientStatus = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["clientStatusQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.clientStatus(request);
        }, options);
    };
    const useClientParams = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["clientParamsQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.clientParams(request);
        }, options);
    };
    const useUpgradedClientState = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["upgradedClientStateQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.upgradedClientState(request);
        }, options);
    };
    const useUpgradedConsensusState = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["upgradedConsensusStateQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.upgradedConsensusState(request);
        }, options);
    };
    return {
        /** ClientState queries an IBC light client. */ useClientState,
        /** ClientStates queries all the IBC light clients of a chain. */ useClientStates,
        /**
         * ConsensusState queries a consensus state associated with a client state at
         * a given height.
         */
        useConsensusState,
        /**
         * ConsensusStates queries all the consensus state associated with a given
         * client.
         */
        useConsensusStates,
        /** Status queries the status of an IBC client. */ useClientStatus,
        /** ClientParams queries all parameters of the ibc client. */ useClientParams,
        /** UpgradedClientState queries an Upgraded IBC light client. */ useUpgradedClientState,
        /** UpgradedConsensusState queries an Upgraded IBC consensus state. */ useUpgradedConsensusState
    };
};
exports.createRpcQueryHooks = createRpcQueryHooks;

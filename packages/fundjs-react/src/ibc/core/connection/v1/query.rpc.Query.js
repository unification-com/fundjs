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
        this.connection = this.connection.bind(this);
        this.connections = this.connections.bind(this);
        this.clientConnections = this.clientConnections.bind(this);
        this.connectionClientState = this.connectionClientState.bind(this);
        this.connectionConsensusState = this.connectionConsensusState.bind(this);
    }
    connection(request) {
        const data = query_1.QueryConnectionRequest.encode(request).finish();
        const promise = this.rpc.request("ibc.core.connection.v1.Query", "Connection", data);
        return promise.then(data => query_1.QueryConnectionResponse.decode(new binary_1.BinaryReader(data)));
    }
    connections(request = {
        pagination: undefined
    }) {
        const data = query_1.QueryConnectionsRequest.encode(request).finish();
        const promise = this.rpc.request("ibc.core.connection.v1.Query", "Connections", data);
        return promise.then(data => query_1.QueryConnectionsResponse.decode(new binary_1.BinaryReader(data)));
    }
    clientConnections(request) {
        const data = query_1.QueryClientConnectionsRequest.encode(request).finish();
        const promise = this.rpc.request("ibc.core.connection.v1.Query", "ClientConnections", data);
        return promise.then(data => query_1.QueryClientConnectionsResponse.decode(new binary_1.BinaryReader(data)));
    }
    connectionClientState(request) {
        const data = query_1.QueryConnectionClientStateRequest.encode(request).finish();
        const promise = this.rpc.request("ibc.core.connection.v1.Query", "ConnectionClientState", data);
        return promise.then(data => query_1.QueryConnectionClientStateResponse.decode(new binary_1.BinaryReader(data)));
    }
    connectionConsensusState(request) {
        const data = query_1.QueryConnectionConsensusStateRequest.encode(request).finish();
        const promise = this.rpc.request("ibc.core.connection.v1.Query", "ConnectionConsensusState", data);
        return promise.then(data => query_1.QueryConnectionConsensusStateResponse.decode(new binary_1.BinaryReader(data)));
    }
}
exports.QueryClientImpl = QueryClientImpl;
const createRpcQueryExtension = (base) => {
    const rpc = (0, stargate_1.createProtobufRpcClient)(base);
    const queryService = new QueryClientImpl(rpc);
    return {
        connection(request) {
            return queryService.connection(request);
        },
        connections(request) {
            return queryService.connections(request);
        },
        clientConnections(request) {
            return queryService.clientConnections(request);
        },
        connectionClientState(request) {
            return queryService.connectionClientState(request);
        },
        connectionConsensusState(request) {
            return queryService.connectionConsensusState(request);
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
    const useConnection = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["connectionQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.connection(request);
        }, options);
    };
    const useConnections = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["connectionsQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.connections(request);
        }, options);
    };
    const useClientConnections = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["clientConnectionsQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.clientConnections(request);
        }, options);
    };
    const useConnectionClientState = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["connectionClientStateQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.connectionClientState(request);
        }, options);
    };
    const useConnectionConsensusState = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["connectionConsensusStateQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.connectionConsensusState(request);
        }, options);
    };
    return {
        /** Connection queries an IBC connection end. */ useConnection,
        /** Connections queries all the IBC connections of a chain. */ useConnections,
        /**
         * ClientConnections queries the connection paths associated with a client
         * state.
         */
        useClientConnections,
        /**
         * ConnectionClientState queries the client state associated with the
         * connection.
         */
        useConnectionClientState,
        /**
         * ConnectionConsensusState queries the consensus state associated with the
         * connection.
         */
        useConnectionConsensusState
    };
};
exports.createRpcQueryHooks = createRpcQueryHooks;

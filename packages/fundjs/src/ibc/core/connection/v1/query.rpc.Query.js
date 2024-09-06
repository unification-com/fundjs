"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRpcQueryExtension = exports.QueryClientImpl = void 0;
const binary_1 = require("../../../../binary");
const stargate_1 = require("@cosmjs/stargate");
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

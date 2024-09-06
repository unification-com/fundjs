"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LCDQueryClient = void 0;
//@ts-nocheck
const helpers_1 = require("../../../../helpers");
class LCDQueryClient {
    req;
    constructor({ requestClient }) {
        this.req = requestClient;
        this.connection = this.connection.bind(this);
        this.connections = this.connections.bind(this);
        this.clientConnections = this.clientConnections.bind(this);
        this.connectionClientState = this.connectionClientState.bind(this);
        this.connectionConsensusState = this.connectionConsensusState.bind(this);
    }
    /* Connection queries an IBC connection end. */
    async connection(params) {
        const endpoint = `ibc/core/connection/v1/connections/${params.connectionId}`;
        return await this.req.get(endpoint);
    }
    /* Connections queries all the IBC connections of a chain. */
    async connections(params = {
        pagination: undefined
    }) {
        const options = {
            params: {}
        };
        if (typeof params?.pagination !== "undefined") {
            (0, helpers_1.setPaginationParams)(options, params.pagination);
        }
        const endpoint = `ibc/core/connection/v1/connections`;
        return await this.req.get(endpoint, options);
    }
    /* ClientConnections queries the connection paths associated with a client
     state. */
    async clientConnections(params) {
        const endpoint = `ibc/core/connection/v1/client_connections/${params.clientId}`;
        return await this.req.get(endpoint);
    }
    /* ConnectionClientState queries the client state associated with the
     connection. */
    async connectionClientState(params) {
        const endpoint = `ibc/core/connection/v1/connections/${params.connectionId}/client_state`;
        return await this.req.get(endpoint);
    }
    /* ConnectionConsensusState queries the consensus state associated with the
     connection. */
    async connectionConsensusState(params) {
        const endpoint = `ibc/core/connection/v1/connections/${params.connectionId}/consensus_state/revision/${params.revisionNumber}/height/${params.revisionHeight}`;
        return await this.req.get(endpoint);
    }
}
exports.LCDQueryClient = LCDQueryClient;

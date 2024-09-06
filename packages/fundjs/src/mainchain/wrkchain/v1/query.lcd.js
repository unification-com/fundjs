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
        this.wrkChain = this.wrkChain.bind(this);
        this.wrkChainBlock = this.wrkChainBlock.bind(this);
        this.wrkChainsFiltered = this.wrkChainsFiltered.bind(this);
        this.wrkChainStorage = this.wrkChainStorage.bind(this);
    }
    /* Params queries the parameters of x/wrkchain module. */
    async params(_params = {}) {
        const endpoint = `mainchain/wrkchain/v1/params`;
        return await this.req.get(endpoint);
    }
    /* WrkChain queries the metadata of a wrkchain. */
    async wrkChain(params) {
        const endpoint = `mainchain/wrkchain/v1/wrkchain/${params.wrkchainId}`;
        return await this.req.get(endpoint);
    }
    /* WrkChainBlock queries a submitted hash of a wrkchain */
    async wrkChainBlock(params) {
        const endpoint = `mainchain/wrkchain/v1/wrkchain/${params.wrkchainId}/block/${params.height}`;
        return await this.req.get(endpoint);
    }
    /* WrkChainsFiltered queries all wrkchain metadata for given search parameters */
    async wrkChainsFiltered(params) {
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
        const endpoint = `mainchain/wrkchain/v1/wrkchains`;
        return await this.req.get(endpoint, options);
    }
    /* WrkChainStorage queries wrkchain storage for for given wrkchain ID */
    async wrkChainStorage(params) {
        const endpoint = `mainchain/wrkchain/v1/wrkchain/${params.wrkchainId}/storage`;
        return await this.req.get(endpoint);
    }
}
exports.LCDQueryClient = LCDQueryClient;

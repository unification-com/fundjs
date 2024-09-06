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
        this.wrkChain = this.wrkChain.bind(this);
        this.wrkChainBlock = this.wrkChainBlock.bind(this);
        this.wrkChainsFiltered = this.wrkChainsFiltered.bind(this);
        this.wrkChainStorage = this.wrkChainStorage.bind(this);
    }
    params(request = {}) {
        const data = query_1.QueryParamsRequest.encode(request).finish();
        const promise = this.rpc.request("mainchain.wrkchain.v1.Query", "Params", data);
        return promise.then(data => query_1.QueryParamsResponse.decode(new binary_1.BinaryReader(data)));
    }
    wrkChain(request) {
        const data = query_1.QueryWrkChainRequest.encode(request).finish();
        const promise = this.rpc.request("mainchain.wrkchain.v1.Query", "WrkChain", data);
        return promise.then(data => query_1.QueryWrkChainResponse.decode(new binary_1.BinaryReader(data)));
    }
    wrkChainBlock(request) {
        const data = query_1.QueryWrkChainBlockRequest.encode(request).finish();
        const promise = this.rpc.request("mainchain.wrkchain.v1.Query", "WrkChainBlock", data);
        return promise.then(data => query_1.QueryWrkChainBlockResponse.decode(new binary_1.BinaryReader(data)));
    }
    wrkChainsFiltered(request) {
        const data = query_1.QueryWrkChainsFilteredRequest.encode(request).finish();
        const promise = this.rpc.request("mainchain.wrkchain.v1.Query", "WrkChainsFiltered", data);
        return promise.then(data => query_1.QueryWrkChainsFilteredResponse.decode(new binary_1.BinaryReader(data)));
    }
    wrkChainStorage(request) {
        const data = query_1.QueryWrkChainStorageRequest.encode(request).finish();
        const promise = this.rpc.request("mainchain.wrkchain.v1.Query", "WrkChainStorage", data);
        return promise.then(data => query_1.QueryWrkChainStorageResponse.decode(new binary_1.BinaryReader(data)));
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
        wrkChain(request) {
            return queryService.wrkChain(request);
        },
        wrkChainBlock(request) {
            return queryService.wrkChainBlock(request);
        },
        wrkChainsFiltered(request) {
            return queryService.wrkChainsFiltered(request);
        },
        wrkChainStorage(request) {
            return queryService.wrkChainStorage(request);
        }
    };
};
exports.createRpcQueryExtension = createRpcQueryExtension;

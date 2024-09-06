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
        this.balance = this.balance.bind(this);
        this.allBalances = this.allBalances.bind(this);
        this.spendableBalances = this.spendableBalances.bind(this);
        this.totalSupply = this.totalSupply.bind(this);
        this.supplyOf = this.supplyOf.bind(this);
        this.params = this.params.bind(this);
        this.denomMetadata = this.denomMetadata.bind(this);
        this.denomsMetadata = this.denomsMetadata.bind(this);
        this.denomOwners = this.denomOwners.bind(this);
    }
    balance(request) {
        const data = query_1.QueryBalanceRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.bank.v1beta1.Query", "Balance", data);
        return promise.then(data => query_1.QueryBalanceResponse.decode(new binary_1.BinaryReader(data)));
    }
    allBalances(request) {
        const data = query_1.QueryAllBalancesRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.bank.v1beta1.Query", "AllBalances", data);
        return promise.then(data => query_1.QueryAllBalancesResponse.decode(new binary_1.BinaryReader(data)));
    }
    spendableBalances(request) {
        const data = query_1.QuerySpendableBalancesRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.bank.v1beta1.Query", "SpendableBalances", data);
        return promise.then(data => query_1.QuerySpendableBalancesResponse.decode(new binary_1.BinaryReader(data)));
    }
    totalSupply(request = {
        pagination: undefined
    }) {
        const data = query_1.QueryTotalSupplyRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.bank.v1beta1.Query", "TotalSupply", data);
        return promise.then(data => query_1.QueryTotalSupplyResponse.decode(new binary_1.BinaryReader(data)));
    }
    supplyOf(request) {
        const data = query_1.QuerySupplyOfRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.bank.v1beta1.Query", "SupplyOf", data);
        return promise.then(data => query_1.QuerySupplyOfResponse.decode(new binary_1.BinaryReader(data)));
    }
    params(request = {}) {
        const data = query_1.QueryParamsRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.bank.v1beta1.Query", "Params", data);
        return promise.then(data => query_1.QueryParamsResponse.decode(new binary_1.BinaryReader(data)));
    }
    denomMetadata(request) {
        const data = query_1.QueryDenomMetadataRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.bank.v1beta1.Query", "DenomMetadata", data);
        return promise.then(data => query_1.QueryDenomMetadataResponse.decode(new binary_1.BinaryReader(data)));
    }
    denomsMetadata(request = {
        pagination: undefined
    }) {
        const data = query_1.QueryDenomsMetadataRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.bank.v1beta1.Query", "DenomsMetadata", data);
        return promise.then(data => query_1.QueryDenomsMetadataResponse.decode(new binary_1.BinaryReader(data)));
    }
    denomOwners(request) {
        const data = query_1.QueryDenomOwnersRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.bank.v1beta1.Query", "DenomOwners", data);
        return promise.then(data => query_1.QueryDenomOwnersResponse.decode(new binary_1.BinaryReader(data)));
    }
}
exports.QueryClientImpl = QueryClientImpl;
const createRpcQueryExtension = (base) => {
    const rpc = (0, stargate_1.createProtobufRpcClient)(base);
    const queryService = new QueryClientImpl(rpc);
    return {
        balance(request) {
            return queryService.balance(request);
        },
        allBalances(request) {
            return queryService.allBalances(request);
        },
        spendableBalances(request) {
            return queryService.spendableBalances(request);
        },
        totalSupply(request) {
            return queryService.totalSupply(request);
        },
        supplyOf(request) {
            return queryService.supplyOf(request);
        },
        params(request) {
            return queryService.params(request);
        },
        denomMetadata(request) {
            return queryService.denomMetadata(request);
        },
        denomsMetadata(request) {
            return queryService.denomsMetadata(request);
        },
        denomOwners(request) {
            return queryService.denomOwners(request);
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
    const useBalance = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["balanceQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.balance(request);
        }, options);
    };
    const useAllBalances = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["allBalancesQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.allBalances(request);
        }, options);
    };
    const useSpendableBalances = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["spendableBalancesQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.spendableBalances(request);
        }, options);
    };
    const useTotalSupply = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["totalSupplyQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.totalSupply(request);
        }, options);
    };
    const useSupplyOf = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["supplyOfQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.supplyOf(request);
        }, options);
    };
    const useParams = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["paramsQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.params(request);
        }, options);
    };
    const useDenomMetadata = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["denomMetadataQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.denomMetadata(request);
        }, options);
    };
    const useDenomsMetadata = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["denomsMetadataQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.denomsMetadata(request);
        }, options);
    };
    const useDenomOwners = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["denomOwnersQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.denomOwners(request);
        }, options);
    };
    return {
        /** Balance queries the balance of a single coin for a single account. */ useBalance,
        /** AllBalances queries the balance of all coins for a single account. */ useAllBalances,
        /**
         * SpendableBalances queries the spenable balance of all coins for a single
         * account.
         */
        useSpendableBalances,
        /** TotalSupply queries the total supply of all coins. */ useTotalSupply,
        /** SupplyOf queries the supply of a single coin. */ useSupplyOf,
        /** Params queries the parameters of x/bank module. */ useParams,
        /** DenomsMetadata queries the client metadata of a given coin denomination. */ useDenomMetadata,
        /**
         * DenomsMetadata queries the client metadata for all registered coin
         * denominations.
         */
        useDenomsMetadata,
        /**
         * DenomOwners queries for all account addresses that own a particular token
         * denomination.
         */
        useDenomOwners
    };
};
exports.createRpcQueryHooks = createRpcQueryHooks;

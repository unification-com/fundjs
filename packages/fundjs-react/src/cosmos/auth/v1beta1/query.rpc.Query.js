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
        this.accounts = this.accounts.bind(this);
        this.account = this.account.bind(this);
        this.params = this.params.bind(this);
        this.moduleAccounts = this.moduleAccounts.bind(this);
        this.bech32Prefix = this.bech32Prefix.bind(this);
        this.addressBytesToString = this.addressBytesToString.bind(this);
        this.addressStringToBytes = this.addressStringToBytes.bind(this);
    }
    accounts(request = {
        pagination: undefined
    }) {
        const data = query_1.QueryAccountsRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.auth.v1beta1.Query", "Accounts", data);
        return promise.then(data => query_1.QueryAccountsResponse.decode(new binary_1.BinaryReader(data)));
    }
    account(request) {
        const data = query_1.QueryAccountRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.auth.v1beta1.Query", "Account", data);
        return promise.then(data => query_1.QueryAccountResponse.decode(new binary_1.BinaryReader(data)));
    }
    params(request = {}) {
        const data = query_1.QueryParamsRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.auth.v1beta1.Query", "Params", data);
        return promise.then(data => query_1.QueryParamsResponse.decode(new binary_1.BinaryReader(data)));
    }
    moduleAccounts(request = {}) {
        const data = query_1.QueryModuleAccountsRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.auth.v1beta1.Query", "ModuleAccounts", data);
        return promise.then(data => query_1.QueryModuleAccountsResponse.decode(new binary_1.BinaryReader(data)));
    }
    bech32Prefix(request = {}) {
        const data = query_1.Bech32PrefixRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.auth.v1beta1.Query", "Bech32Prefix", data);
        return promise.then(data => query_1.Bech32PrefixResponse.decode(new binary_1.BinaryReader(data)));
    }
    addressBytesToString(request) {
        const data = query_1.AddressBytesToStringRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.auth.v1beta1.Query", "AddressBytesToString", data);
        return promise.then(data => query_1.AddressBytesToStringResponse.decode(new binary_1.BinaryReader(data)));
    }
    addressStringToBytes(request) {
        const data = query_1.AddressStringToBytesRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.auth.v1beta1.Query", "AddressStringToBytes", data);
        return promise.then(data => query_1.AddressStringToBytesResponse.decode(new binary_1.BinaryReader(data)));
    }
}
exports.QueryClientImpl = QueryClientImpl;
const createRpcQueryExtension = (base) => {
    const rpc = (0, stargate_1.createProtobufRpcClient)(base);
    const queryService = new QueryClientImpl(rpc);
    return {
        accounts(request) {
            return queryService.accounts(request);
        },
        account(request) {
            return queryService.account(request);
        },
        params(request) {
            return queryService.params(request);
        },
        moduleAccounts(request) {
            return queryService.moduleAccounts(request);
        },
        bech32Prefix(request) {
            return queryService.bech32Prefix(request);
        },
        addressBytesToString(request) {
            return queryService.addressBytesToString(request);
        },
        addressStringToBytes(request) {
            return queryService.addressStringToBytes(request);
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
    const useAccounts = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["accountsQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.accounts(request);
        }, options);
    };
    const useAccount = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["accountQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.account(request);
        }, options);
    };
    const useParams = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["paramsQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.params(request);
        }, options);
    };
    const useModuleAccounts = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["moduleAccountsQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.moduleAccounts(request);
        }, options);
    };
    const useBech32Prefix = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["bech32PrefixQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.bech32Prefix(request);
        }, options);
    };
    const useAddressBytesToString = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["addressBytesToStringQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.addressBytesToString(request);
        }, options);
    };
    const useAddressStringToBytes = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["addressStringToBytesQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.addressStringToBytes(request);
        }, options);
    };
    return {
        /**
         * Accounts returns all the existing accounts
         *
         * Since: cosmos-sdk 0.43
         */
        useAccounts,
        /** Account returns account details based on address. */ useAccount,
        /** Params queries all parameters. */ useParams,
        /** ModuleAccounts returns all the existing module accounts. */ useModuleAccounts,
        /** Bech32 queries bech32Prefix */ useBech32Prefix,
        /** AddressBytesToString converts Account Address bytes to string */ useAddressBytesToString,
        /** AddressStringToBytes converts Address string to bytes */ useAddressStringToBytes
    };
};
exports.createRpcQueryHooks = createRpcQueryHooks;

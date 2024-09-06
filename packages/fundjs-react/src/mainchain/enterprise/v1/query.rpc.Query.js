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
        this.params = this.params.bind(this);
        this.enterpriseUndPurchaseOrder = this.enterpriseUndPurchaseOrder.bind(this);
        this.enterpriseUndPurchaseOrders = this.enterpriseUndPurchaseOrders.bind(this);
        this.lockedUndByAddress = this.lockedUndByAddress.bind(this);
        this.totalLocked = this.totalLocked.bind(this);
        this.totalUnlocked = this.totalUnlocked.bind(this);
        this.enterpriseSupply = this.enterpriseSupply.bind(this);
        this.totalSupply = this.totalSupply.bind(this);
        this.supplyOf = this.supplyOf.bind(this);
        this.totalSupplyOverwrite = this.totalSupplyOverwrite.bind(this);
        this.supplyOfOverwrite = this.supplyOfOverwrite.bind(this);
        this.whitelist = this.whitelist.bind(this);
        this.whitelisted = this.whitelisted.bind(this);
        this.enterpriseAccount = this.enterpriseAccount.bind(this);
        this.totalSpentEFUND = this.totalSpentEFUND.bind(this);
        this.spentEFUNDByAddress = this.spentEFUNDByAddress.bind(this);
    }
    params(request = {}) {
        const data = query_1.QueryParamsRequest.encode(request).finish();
        const promise = this.rpc.request("mainchain.enterprise.v1.Query", "Params", data);
        return promise.then(data => query_1.QueryParamsResponse.decode(new binary_1.BinaryReader(data)));
    }
    enterpriseUndPurchaseOrder(request) {
        const data = query_1.QueryEnterpriseUndPurchaseOrderRequest.encode(request).finish();
        const promise = this.rpc.request("mainchain.enterprise.v1.Query", "EnterpriseUndPurchaseOrder", data);
        return promise.then(data => query_1.QueryEnterpriseUndPurchaseOrderResponse.decode(new binary_1.BinaryReader(data)));
    }
    enterpriseUndPurchaseOrders(request) {
        const data = query_1.QueryEnterpriseUndPurchaseOrdersRequest.encode(request).finish();
        const promise = this.rpc.request("mainchain.enterprise.v1.Query", "EnterpriseUndPurchaseOrders", data);
        return promise.then(data => query_1.QueryEnterpriseUndPurchaseOrdersResponse.decode(new binary_1.BinaryReader(data)));
    }
    lockedUndByAddress(request) {
        const data = query_1.QueryLockedUndByAddressRequest.encode(request).finish();
        const promise = this.rpc.request("mainchain.enterprise.v1.Query", "LockedUndByAddress", data);
        return promise.then(data => query_1.QueryLockedUndByAddressResponse.decode(new binary_1.BinaryReader(data)));
    }
    totalLocked(request = {}) {
        const data = query_1.QueryTotalLockedRequest.encode(request).finish();
        const promise = this.rpc.request("mainchain.enterprise.v1.Query", "TotalLocked", data);
        return promise.then(data => query_1.QueryTotalLockedResponse.decode(new binary_1.BinaryReader(data)));
    }
    totalUnlocked(request = {}) {
        const data = query_1.QueryTotalUnlockedRequest.encode(request).finish();
        const promise = this.rpc.request("mainchain.enterprise.v1.Query", "TotalUnlocked", data);
        return promise.then(data => query_1.QueryTotalUnlockedResponse.decode(new binary_1.BinaryReader(data)));
    }
    enterpriseSupply(request = {}) {
        const data = query_1.QueryEnterpriseSupplyRequest.encode(request).finish();
        const promise = this.rpc.request("mainchain.enterprise.v1.Query", "EnterpriseSupply", data);
        return promise.then(data => query_1.QueryEnterpriseSupplyResponse.decode(new binary_1.BinaryReader(data)));
    }
    totalSupply(request = {
        pagination: undefined
    }) {
        const data = query_1.QueryTotalSupplyRequest.encode(request).finish();
        const promise = this.rpc.request("mainchain.enterprise.v1.Query", "TotalSupply", data);
        return promise.then(data => query_1.QueryTotalSupplyResponse.decode(new binary_1.BinaryReader(data)));
    }
    supplyOf(request) {
        const data = query_1.QuerySupplyOfRequest.encode(request).finish();
        const promise = this.rpc.request("mainchain.enterprise.v1.Query", "SupplyOf", data);
        return promise.then(data => query_1.QuerySupplyOfResponse.decode(new binary_1.BinaryReader(data)));
    }
    totalSupplyOverwrite(request = {
        pagination: undefined
    }) {
        const data = query_1.QueryTotalSupplyRequest.encode(request).finish();
        const promise = this.rpc.request("mainchain.enterprise.v1.Query", "TotalSupplyOverwrite", data);
        return promise.then(data => query_1.QueryTotalSupplyResponse.decode(new binary_1.BinaryReader(data)));
    }
    supplyOfOverwrite(request) {
        const data = query_1.QuerySupplyOfRequest.encode(request).finish();
        const promise = this.rpc.request("mainchain.enterprise.v1.Query", "SupplyOfOverwrite", data);
        return promise.then(data => query_1.QuerySupplyOfResponse.decode(new binary_1.BinaryReader(data)));
    }
    whitelist(request = {}) {
        const data = query_1.QueryWhitelistRequest.encode(request).finish();
        const promise = this.rpc.request("mainchain.enterprise.v1.Query", "Whitelist", data);
        return promise.then(data => query_1.QueryWhitelistResponse.decode(new binary_1.BinaryReader(data)));
    }
    whitelisted(request) {
        const data = query_1.QueryWhitelistedRequest.encode(request).finish();
        const promise = this.rpc.request("mainchain.enterprise.v1.Query", "Whitelisted", data);
        return promise.then(data => query_1.QueryWhitelistedResponse.decode(new binary_1.BinaryReader(data)));
    }
    enterpriseAccount(request) {
        const data = query_1.QueryEnterpriseAccountRequest.encode(request).finish();
        const promise = this.rpc.request("mainchain.enterprise.v1.Query", "EnterpriseAccount", data);
        return promise.then(data => query_1.QueryEnterpriseAccountResponse.decode(new binary_1.BinaryReader(data)));
    }
    totalSpentEFUND(request = {}) {
        const data = query_1.QueryTotalSpentEFUNDRequest.encode(request).finish();
        const promise = this.rpc.request("mainchain.enterprise.v1.Query", "TotalSpentEFUND", data);
        return promise.then(data => query_1.QueryTotalSpentEFUNDResponse.decode(new binary_1.BinaryReader(data)));
    }
    spentEFUNDByAddress(request) {
        const data = query_1.QuerySpentEFUNDByAddressRequest.encode(request).finish();
        const promise = this.rpc.request("mainchain.enterprise.v1.Query", "SpentEFUNDByAddress", data);
        return promise.then(data => query_1.QuerySpentEFUNDByAddressResponse.decode(new binary_1.BinaryReader(data)));
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
        enterpriseUndPurchaseOrder(request) {
            return queryService.enterpriseUndPurchaseOrder(request);
        },
        enterpriseUndPurchaseOrders(request) {
            return queryService.enterpriseUndPurchaseOrders(request);
        },
        lockedUndByAddress(request) {
            return queryService.lockedUndByAddress(request);
        },
        totalLocked(request) {
            return queryService.totalLocked(request);
        },
        totalUnlocked(request) {
            return queryService.totalUnlocked(request);
        },
        enterpriseSupply(request) {
            return queryService.enterpriseSupply(request);
        },
        totalSupply(request) {
            return queryService.totalSupply(request);
        },
        supplyOf(request) {
            return queryService.supplyOf(request);
        },
        totalSupplyOverwrite(request) {
            return queryService.totalSupplyOverwrite(request);
        },
        supplyOfOverwrite(request) {
            return queryService.supplyOfOverwrite(request);
        },
        whitelist(request) {
            return queryService.whitelist(request);
        },
        whitelisted(request) {
            return queryService.whitelisted(request);
        },
        enterpriseAccount(request) {
            return queryService.enterpriseAccount(request);
        },
        totalSpentEFUND(request) {
            return queryService.totalSpentEFUND(request);
        },
        spentEFUNDByAddress(request) {
            return queryService.spentEFUNDByAddress(request);
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
    const useParams = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["paramsQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.params(request);
        }, options);
    };
    const useEnterpriseUndPurchaseOrder = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["enterpriseUndPurchaseOrderQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.enterpriseUndPurchaseOrder(request);
        }, options);
    };
    const useEnterpriseUndPurchaseOrders = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["enterpriseUndPurchaseOrdersQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.enterpriseUndPurchaseOrders(request);
        }, options);
    };
    const useLockedUndByAddress = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["lockedUndByAddressQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.lockedUndByAddress(request);
        }, options);
    };
    const useTotalLocked = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["totalLockedQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.totalLocked(request);
        }, options);
    };
    const useTotalUnlocked = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["totalUnlockedQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.totalUnlocked(request);
        }, options);
    };
    const useEnterpriseSupply = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["enterpriseSupplyQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.enterpriseSupply(request);
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
    const useTotalSupplyOverwrite = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["totalSupplyOverwriteQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.totalSupplyOverwrite(request);
        }, options);
    };
    const useSupplyOfOverwrite = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["supplyOfOverwriteQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.supplyOfOverwrite(request);
        }, options);
    };
    const useWhitelist = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["whitelistQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.whitelist(request);
        }, options);
    };
    const useWhitelisted = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["whitelistedQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.whitelisted(request);
        }, options);
    };
    const useEnterpriseAccount = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["enterpriseAccountQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.enterpriseAccount(request);
        }, options);
    };
    const useTotalSpentEFUND = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["totalSpentEFUNDQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.totalSpentEFUND(request);
        }, options);
    };
    const useSpentEFUNDByAddress = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["spentEFUNDByAddressQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.spentEFUNDByAddress(request);
        }, options);
    };
    return {
        /** Params queries the parameters of x/enterprise module. */ useParams,
        /** EnterpriseUndPurchaseOrder queries purchase order details based on PurchaseOrderId. */ useEnterpriseUndPurchaseOrder,
        /** EnterpriseUndPurchaseOrders queries all current purchase orders. */ useEnterpriseUndPurchaseOrders,
        /** LockedUndByAddress queries an account address for their locked FUND */ useLockedUndByAddress,
        /** TotalLocked queries the total locked FUND */ useTotalLocked,
        /** TotalUnlocked queries the total Unlocked FUND */ useTotalUnlocked,
        /** EnterpriseSupply queries the chain's supply, including locked Ent. FUND. Only returns nund data */ useEnterpriseSupply,
        /**
         * TotalSupply should be used instead of /cosmos/bank/v1beta1/supply to get true total supply available
         * for general use, i.e. with locked eFUND removed from total for nund
         */
        useTotalSupply,
        /**
         * SupplyOf should be used in place of /cosmos/bank/v1beta1/supply to get true total supply,
         * with locked eFUND removed from total for nund
         */
        useSupplyOf,
        /**
         * TotalSupplyOverwrite should be used instead of /cosmos/bank/v1beta1/supply to get true total supply available
         * for general use, i.e. with locked eFUND removed from total for nund
         */
        useTotalSupplyOverwrite,
        /**
         * SupplyOf should be used in place of /cosmos/bank/v1beta1/supply to get true total supply,
         * with locked eFUND removed from total for nund
         */
        useSupplyOfOverwrite,
        /** Whitelist queries whitelisted addresses authorised to raise new purchase orders */ useWhitelist,
        /** Whitelisted queries whether or not the given address is authorised to raise new purchase orders */ useWhitelisted,
        /** EnterpriseAccount queries an account address for their locked FUND and other data */ useEnterpriseAccount,
        /** TotalSpentEFUND queries the total eFUND usage to date - i.e. the amount used to pay fees */ useTotalSpentEFUND,
        /** SpentEFUNDByAddress queries the total eFUND usage to date for a given address, i.e. the amount used to pay fees */ useSpentEFUNDByAddress
    };
};
exports.createRpcQueryHooks = createRpcQueryHooks;

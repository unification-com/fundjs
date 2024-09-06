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
        this.validators = this.validators.bind(this);
        this.validator = this.validator.bind(this);
        this.validatorDelegations = this.validatorDelegations.bind(this);
        this.validatorUnbondingDelegations = this.validatorUnbondingDelegations.bind(this);
        this.delegation = this.delegation.bind(this);
        this.unbondingDelegation = this.unbondingDelegation.bind(this);
        this.delegatorDelegations = this.delegatorDelegations.bind(this);
        this.delegatorUnbondingDelegations = this.delegatorUnbondingDelegations.bind(this);
        this.redelegations = this.redelegations.bind(this);
        this.delegatorValidators = this.delegatorValidators.bind(this);
        this.delegatorValidator = this.delegatorValidator.bind(this);
        this.historicalInfo = this.historicalInfo.bind(this);
        this.pool = this.pool.bind(this);
        this.params = this.params.bind(this);
    }
    validators(request) {
        const data = query_1.QueryValidatorsRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "Validators", data);
        return promise.then(data => query_1.QueryValidatorsResponse.decode(new binary_1.BinaryReader(data)));
    }
    validator(request) {
        const data = query_1.QueryValidatorRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "Validator", data);
        return promise.then(data => query_1.QueryValidatorResponse.decode(new binary_1.BinaryReader(data)));
    }
    validatorDelegations(request) {
        const data = query_1.QueryValidatorDelegationsRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "ValidatorDelegations", data);
        return promise.then(data => query_1.QueryValidatorDelegationsResponse.decode(new binary_1.BinaryReader(data)));
    }
    validatorUnbondingDelegations(request) {
        const data = query_1.QueryValidatorUnbondingDelegationsRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "ValidatorUnbondingDelegations", data);
        return promise.then(data => query_1.QueryValidatorUnbondingDelegationsResponse.decode(new binary_1.BinaryReader(data)));
    }
    delegation(request) {
        const data = query_1.QueryDelegationRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "Delegation", data);
        return promise.then(data => query_1.QueryDelegationResponse.decode(new binary_1.BinaryReader(data)));
    }
    unbondingDelegation(request) {
        const data = query_1.QueryUnbondingDelegationRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "UnbondingDelegation", data);
        return promise.then(data => query_1.QueryUnbondingDelegationResponse.decode(new binary_1.BinaryReader(data)));
    }
    delegatorDelegations(request) {
        const data = query_1.QueryDelegatorDelegationsRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "DelegatorDelegations", data);
        return promise.then(data => query_1.QueryDelegatorDelegationsResponse.decode(new binary_1.BinaryReader(data)));
    }
    delegatorUnbondingDelegations(request) {
        const data = query_1.QueryDelegatorUnbondingDelegationsRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "DelegatorUnbondingDelegations", data);
        return promise.then(data => query_1.QueryDelegatorUnbondingDelegationsResponse.decode(new binary_1.BinaryReader(data)));
    }
    redelegations(request) {
        const data = query_1.QueryRedelegationsRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "Redelegations", data);
        return promise.then(data => query_1.QueryRedelegationsResponse.decode(new binary_1.BinaryReader(data)));
    }
    delegatorValidators(request) {
        const data = query_1.QueryDelegatorValidatorsRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "DelegatorValidators", data);
        return promise.then(data => query_1.QueryDelegatorValidatorsResponse.decode(new binary_1.BinaryReader(data)));
    }
    delegatorValidator(request) {
        const data = query_1.QueryDelegatorValidatorRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "DelegatorValidator", data);
        return promise.then(data => query_1.QueryDelegatorValidatorResponse.decode(new binary_1.BinaryReader(data)));
    }
    historicalInfo(request) {
        const data = query_1.QueryHistoricalInfoRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "HistoricalInfo", data);
        return promise.then(data => query_1.QueryHistoricalInfoResponse.decode(new binary_1.BinaryReader(data)));
    }
    pool(request = {}) {
        const data = query_1.QueryPoolRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "Pool", data);
        return promise.then(data => query_1.QueryPoolResponse.decode(new binary_1.BinaryReader(data)));
    }
    params(request = {}) {
        const data = query_1.QueryParamsRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "Params", data);
        return promise.then(data => query_1.QueryParamsResponse.decode(new binary_1.BinaryReader(data)));
    }
}
exports.QueryClientImpl = QueryClientImpl;
const createRpcQueryExtension = (base) => {
    const rpc = (0, stargate_1.createProtobufRpcClient)(base);
    const queryService = new QueryClientImpl(rpc);
    return {
        validators(request) {
            return queryService.validators(request);
        },
        validator(request) {
            return queryService.validator(request);
        },
        validatorDelegations(request) {
            return queryService.validatorDelegations(request);
        },
        validatorUnbondingDelegations(request) {
            return queryService.validatorUnbondingDelegations(request);
        },
        delegation(request) {
            return queryService.delegation(request);
        },
        unbondingDelegation(request) {
            return queryService.unbondingDelegation(request);
        },
        delegatorDelegations(request) {
            return queryService.delegatorDelegations(request);
        },
        delegatorUnbondingDelegations(request) {
            return queryService.delegatorUnbondingDelegations(request);
        },
        redelegations(request) {
            return queryService.redelegations(request);
        },
        delegatorValidators(request) {
            return queryService.delegatorValidators(request);
        },
        delegatorValidator(request) {
            return queryService.delegatorValidator(request);
        },
        historicalInfo(request) {
            return queryService.historicalInfo(request);
        },
        pool(request) {
            return queryService.pool(request);
        },
        params(request) {
            return queryService.params(request);
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
    const useValidators = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["validatorsQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.validators(request);
        }, options);
    };
    const useValidator = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["validatorQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.validator(request);
        }, options);
    };
    const useValidatorDelegations = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["validatorDelegationsQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.validatorDelegations(request);
        }, options);
    };
    const useValidatorUnbondingDelegations = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["validatorUnbondingDelegationsQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.validatorUnbondingDelegations(request);
        }, options);
    };
    const useDelegation = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["delegationQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.delegation(request);
        }, options);
    };
    const useUnbondingDelegation = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["unbondingDelegationQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.unbondingDelegation(request);
        }, options);
    };
    const useDelegatorDelegations = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["delegatorDelegationsQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.delegatorDelegations(request);
        }, options);
    };
    const useDelegatorUnbondingDelegations = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["delegatorUnbondingDelegationsQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.delegatorUnbondingDelegations(request);
        }, options);
    };
    const useRedelegations = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["redelegationsQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.redelegations(request);
        }, options);
    };
    const useDelegatorValidators = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["delegatorValidatorsQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.delegatorValidators(request);
        }, options);
    };
    const useDelegatorValidator = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["delegatorValidatorQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.delegatorValidator(request);
        }, options);
    };
    const useHistoricalInfo = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["historicalInfoQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.historicalInfo(request);
        }, options);
    };
    const usePool = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["poolQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.pool(request);
        }, options);
    };
    const useParams = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["paramsQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.params(request);
        }, options);
    };
    return {
        /** Validators queries all validators that match the given status. */ useValidators,
        /** Validator queries validator info for given validator address. */ useValidator,
        /** ValidatorDelegations queries delegate info for given validator. */ useValidatorDelegations,
        /** ValidatorUnbondingDelegations queries unbonding delegations of a validator. */ useValidatorUnbondingDelegations,
        /** Delegation queries delegate info for given validator delegator pair. */ useDelegation,
        /**
         * UnbondingDelegation queries unbonding info for given validator delegator
         * pair.
         */
        useUnbondingDelegation,
        /** DelegatorDelegations queries all delegations of a given delegator address. */ useDelegatorDelegations,
        /**
         * DelegatorUnbondingDelegations queries all unbonding delegations of a given
         * delegator address.
         */
        useDelegatorUnbondingDelegations,
        /** Redelegations queries redelegations of given address. */ useRedelegations,
        /**
         * DelegatorValidators queries all validators info for given delegator
         * address.
         */
        useDelegatorValidators,
        /**
         * DelegatorValidator queries validator info for given delegator validator
         * pair.
         */
        useDelegatorValidator,
        /** HistoricalInfo queries the historical info for given height. */ useHistoricalInfo,
        /** Pool queries the pool info. */ usePool,
        /** Parameters queries the staking parameters. */ useParams
    };
};
exports.createRpcQueryHooks = createRpcQueryHooks;

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
        this.proposal = this.proposal.bind(this);
        this.proposals = this.proposals.bind(this);
        this.vote = this.vote.bind(this);
        this.votes = this.votes.bind(this);
        this.params = this.params.bind(this);
        this.deposit = this.deposit.bind(this);
        this.deposits = this.deposits.bind(this);
        this.tallyResult = this.tallyResult.bind(this);
    }
    proposal(request) {
        const data = query_1.QueryProposalRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.gov.v1beta1.Query", "Proposal", data);
        return promise.then(data => query_1.QueryProposalResponse.decode(new binary_1.BinaryReader(data)));
    }
    proposals(request) {
        const data = query_1.QueryProposalsRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.gov.v1beta1.Query", "Proposals", data);
        return promise.then(data => query_1.QueryProposalsResponse.decode(new binary_1.BinaryReader(data)));
    }
    vote(request) {
        const data = query_1.QueryVoteRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.gov.v1beta1.Query", "Vote", data);
        return promise.then(data => query_1.QueryVoteResponse.decode(new binary_1.BinaryReader(data)));
    }
    votes(request) {
        const data = query_1.QueryVotesRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.gov.v1beta1.Query", "Votes", data);
        return promise.then(data => query_1.QueryVotesResponse.decode(new binary_1.BinaryReader(data)));
    }
    params(request) {
        const data = query_1.QueryParamsRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.gov.v1beta1.Query", "Params", data);
        return promise.then(data => query_1.QueryParamsResponse.decode(new binary_1.BinaryReader(data)));
    }
    deposit(request) {
        const data = query_1.QueryDepositRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.gov.v1beta1.Query", "Deposit", data);
        return promise.then(data => query_1.QueryDepositResponse.decode(new binary_1.BinaryReader(data)));
    }
    deposits(request) {
        const data = query_1.QueryDepositsRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.gov.v1beta1.Query", "Deposits", data);
        return promise.then(data => query_1.QueryDepositsResponse.decode(new binary_1.BinaryReader(data)));
    }
    tallyResult(request) {
        const data = query_1.QueryTallyResultRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.gov.v1beta1.Query", "TallyResult", data);
        return promise.then(data => query_1.QueryTallyResultResponse.decode(new binary_1.BinaryReader(data)));
    }
}
exports.QueryClientImpl = QueryClientImpl;
const createRpcQueryExtension = (base) => {
    const rpc = (0, stargate_1.createProtobufRpcClient)(base);
    const queryService = new QueryClientImpl(rpc);
    return {
        proposal(request) {
            return queryService.proposal(request);
        },
        proposals(request) {
            return queryService.proposals(request);
        },
        vote(request) {
            return queryService.vote(request);
        },
        votes(request) {
            return queryService.votes(request);
        },
        params(request) {
            return queryService.params(request);
        },
        deposit(request) {
            return queryService.deposit(request);
        },
        deposits(request) {
            return queryService.deposits(request);
        },
        tallyResult(request) {
            return queryService.tallyResult(request);
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
    const useProposal = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["proposalQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.proposal(request);
        }, options);
    };
    const useProposals = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["proposalsQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.proposals(request);
        }, options);
    };
    const useVote = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["voteQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.vote(request);
        }, options);
    };
    const useVotes = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["votesQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.votes(request);
        }, options);
    };
    const useParams = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["paramsQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.params(request);
        }, options);
    };
    const useDeposit = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["depositQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.deposit(request);
        }, options);
    };
    const useDeposits = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["depositsQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.deposits(request);
        }, options);
    };
    const useTallyResult = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["tallyResultQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.tallyResult(request);
        }, options);
    };
    return {
        /** Proposal queries proposal details based on ProposalID. */ useProposal,
        /** Proposals queries all proposals based on given status. */ useProposals,
        /** Vote queries voted information based on proposalID, voterAddr. */ useVote,
        /** Votes queries votes of a given proposal. */ useVotes,
        /** Params queries all parameters of the gov module. */ useParams,
        /** Deposit queries single deposit information based proposalID, depositAddr. */ useDeposit,
        /** Deposits queries all deposits of a single proposal. */ useDeposits,
        /** TallyResult queries the tally of a proposal vote. */ useTallyResult
    };
};
exports.createRpcQueryHooks = createRpcQueryHooks;

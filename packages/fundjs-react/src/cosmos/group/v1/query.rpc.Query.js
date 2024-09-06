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
        this.groupInfo = this.groupInfo.bind(this);
        this.groupPolicyInfo = this.groupPolicyInfo.bind(this);
        this.groupMembers = this.groupMembers.bind(this);
        this.groupsByAdmin = this.groupsByAdmin.bind(this);
        this.groupPoliciesByGroup = this.groupPoliciesByGroup.bind(this);
        this.groupPoliciesByAdmin = this.groupPoliciesByAdmin.bind(this);
        this.proposal = this.proposal.bind(this);
        this.proposalsByGroupPolicy = this.proposalsByGroupPolicy.bind(this);
        this.voteByProposalVoter = this.voteByProposalVoter.bind(this);
        this.votesByProposal = this.votesByProposal.bind(this);
        this.votesByVoter = this.votesByVoter.bind(this);
        this.groupsByMember = this.groupsByMember.bind(this);
        this.tallyResult = this.tallyResult.bind(this);
    }
    groupInfo(request) {
        const data = query_1.QueryGroupInfoRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.group.v1.Query", "GroupInfo", data);
        return promise.then(data => query_1.QueryGroupInfoResponse.decode(new binary_1.BinaryReader(data)));
    }
    groupPolicyInfo(request) {
        const data = query_1.QueryGroupPolicyInfoRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.group.v1.Query", "GroupPolicyInfo", data);
        return promise.then(data => query_1.QueryGroupPolicyInfoResponse.decode(new binary_1.BinaryReader(data)));
    }
    groupMembers(request) {
        const data = query_1.QueryGroupMembersRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.group.v1.Query", "GroupMembers", data);
        return promise.then(data => query_1.QueryGroupMembersResponse.decode(new binary_1.BinaryReader(data)));
    }
    groupsByAdmin(request) {
        const data = query_1.QueryGroupsByAdminRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.group.v1.Query", "GroupsByAdmin", data);
        return promise.then(data => query_1.QueryGroupsByAdminResponse.decode(new binary_1.BinaryReader(data)));
    }
    groupPoliciesByGroup(request) {
        const data = query_1.QueryGroupPoliciesByGroupRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.group.v1.Query", "GroupPoliciesByGroup", data);
        return promise.then(data => query_1.QueryGroupPoliciesByGroupResponse.decode(new binary_1.BinaryReader(data)));
    }
    groupPoliciesByAdmin(request) {
        const data = query_1.QueryGroupPoliciesByAdminRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.group.v1.Query", "GroupPoliciesByAdmin", data);
        return promise.then(data => query_1.QueryGroupPoliciesByAdminResponse.decode(new binary_1.BinaryReader(data)));
    }
    proposal(request) {
        const data = query_1.QueryProposalRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.group.v1.Query", "Proposal", data);
        return promise.then(data => query_1.QueryProposalResponse.decode(new binary_1.BinaryReader(data)));
    }
    proposalsByGroupPolicy(request) {
        const data = query_1.QueryProposalsByGroupPolicyRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.group.v1.Query", "ProposalsByGroupPolicy", data);
        return promise.then(data => query_1.QueryProposalsByGroupPolicyResponse.decode(new binary_1.BinaryReader(data)));
    }
    voteByProposalVoter(request) {
        const data = query_1.QueryVoteByProposalVoterRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.group.v1.Query", "VoteByProposalVoter", data);
        return promise.then(data => query_1.QueryVoteByProposalVoterResponse.decode(new binary_1.BinaryReader(data)));
    }
    votesByProposal(request) {
        const data = query_1.QueryVotesByProposalRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.group.v1.Query", "VotesByProposal", data);
        return promise.then(data => query_1.QueryVotesByProposalResponse.decode(new binary_1.BinaryReader(data)));
    }
    votesByVoter(request) {
        const data = query_1.QueryVotesByVoterRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.group.v1.Query", "VotesByVoter", data);
        return promise.then(data => query_1.QueryVotesByVoterResponse.decode(new binary_1.BinaryReader(data)));
    }
    groupsByMember(request) {
        const data = query_1.QueryGroupsByMemberRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.group.v1.Query", "GroupsByMember", data);
        return promise.then(data => query_1.QueryGroupsByMemberResponse.decode(new binary_1.BinaryReader(data)));
    }
    tallyResult(request) {
        const data = query_1.QueryTallyResultRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.group.v1.Query", "TallyResult", data);
        return promise.then(data => query_1.QueryTallyResultResponse.decode(new binary_1.BinaryReader(data)));
    }
}
exports.QueryClientImpl = QueryClientImpl;
const createRpcQueryExtension = (base) => {
    const rpc = (0, stargate_1.createProtobufRpcClient)(base);
    const queryService = new QueryClientImpl(rpc);
    return {
        groupInfo(request) {
            return queryService.groupInfo(request);
        },
        groupPolicyInfo(request) {
            return queryService.groupPolicyInfo(request);
        },
        groupMembers(request) {
            return queryService.groupMembers(request);
        },
        groupsByAdmin(request) {
            return queryService.groupsByAdmin(request);
        },
        groupPoliciesByGroup(request) {
            return queryService.groupPoliciesByGroup(request);
        },
        groupPoliciesByAdmin(request) {
            return queryService.groupPoliciesByAdmin(request);
        },
        proposal(request) {
            return queryService.proposal(request);
        },
        proposalsByGroupPolicy(request) {
            return queryService.proposalsByGroupPolicy(request);
        },
        voteByProposalVoter(request) {
            return queryService.voteByProposalVoter(request);
        },
        votesByProposal(request) {
            return queryService.votesByProposal(request);
        },
        votesByVoter(request) {
            return queryService.votesByVoter(request);
        },
        groupsByMember(request) {
            return queryService.groupsByMember(request);
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
    const useGroupInfo = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["groupInfoQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.groupInfo(request);
        }, options);
    };
    const useGroupPolicyInfo = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["groupPolicyInfoQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.groupPolicyInfo(request);
        }, options);
    };
    const useGroupMembers = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["groupMembersQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.groupMembers(request);
        }, options);
    };
    const useGroupsByAdmin = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["groupsByAdminQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.groupsByAdmin(request);
        }, options);
    };
    const useGroupPoliciesByGroup = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["groupPoliciesByGroupQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.groupPoliciesByGroup(request);
        }, options);
    };
    const useGroupPoliciesByAdmin = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["groupPoliciesByAdminQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.groupPoliciesByAdmin(request);
        }, options);
    };
    const useProposal = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["proposalQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.proposal(request);
        }, options);
    };
    const useProposalsByGroupPolicy = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["proposalsByGroupPolicyQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.proposalsByGroupPolicy(request);
        }, options);
    };
    const useVoteByProposalVoter = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["voteByProposalVoterQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.voteByProposalVoter(request);
        }, options);
    };
    const useVotesByProposal = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["votesByProposalQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.votesByProposal(request);
        }, options);
    };
    const useVotesByVoter = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["votesByVoterQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.votesByVoter(request);
        }, options);
    };
    const useGroupsByMember = ({ request, options }) => {
        return (0, react_query_1.useQuery)(["groupsByMemberQuery", request], () => {
            if (!queryService)
                throw new Error("Query Service not initialized");
            return queryService.groupsByMember(request);
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
        /** GroupInfo queries group info based on group id. */ useGroupInfo,
        /** GroupPolicyInfo queries group policy info based on account address of group policy. */ useGroupPolicyInfo,
        /** GroupMembers queries members of a group */ useGroupMembers,
        /** GroupsByAdmin queries groups by admin address. */ useGroupsByAdmin,
        /** GroupPoliciesByGroup queries group policies by group id. */ useGroupPoliciesByGroup,
        /** GroupsByAdmin queries group policies by admin address. */ useGroupPoliciesByAdmin,
        /** Proposal queries a proposal based on proposal id. */ useProposal,
        /** ProposalsByGroupPolicy queries proposals based on account address of group policy. */ useProposalsByGroupPolicy,
        /** VoteByProposalVoter queries a vote by proposal id and voter. */ useVoteByProposalVoter,
        /** VotesByProposal queries a vote by proposal. */ useVotesByProposal,
        /** VotesByVoter queries a vote by voter. */ useVotesByVoter,
        /** GroupsByMember queries groups by member address. */ useGroupsByMember,
        /** TallyResult queries the tally of a proposal votes. */ useTallyResult
    };
};
exports.createRpcQueryHooks = createRpcQueryHooks;

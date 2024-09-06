"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LCDQueryClient = void 0;
//@ts-nocheck
const helpers_1 = require("../../../helpers");
class LCDQueryClient {
    req;
    constructor({ requestClient }) {
        this.req = requestClient;
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
    /* GroupInfo queries group info based on group id. */
    async groupInfo(params) {
        const endpoint = `cosmos/group/v1/group_info/${params.groupId}`;
        return await this.req.get(endpoint);
    }
    /* GroupPolicyInfo queries group policy info based on account address of group policy. */
    async groupPolicyInfo(params) {
        const endpoint = `cosmos/group/v1/group_policy_info/${params.address}`;
        return await this.req.get(endpoint);
    }
    /* GroupMembers queries members of a group */
    async groupMembers(params) {
        const options = {
            params: {}
        };
        if (typeof params?.pagination !== "undefined") {
            (0, helpers_1.setPaginationParams)(options, params.pagination);
        }
        const endpoint = `cosmos/group/v1/group_members/${params.groupId}`;
        return await this.req.get(endpoint, options);
    }
    /* GroupsByAdmin queries groups by admin address. */
    async groupsByAdmin(params) {
        const options = {
            params: {}
        };
        if (typeof params?.pagination !== "undefined") {
            (0, helpers_1.setPaginationParams)(options, params.pagination);
        }
        const endpoint = `cosmos/group/v1/groups_by_admin/${params.admin}`;
        return await this.req.get(endpoint, options);
    }
    /* GroupPoliciesByGroup queries group policies by group id. */
    async groupPoliciesByGroup(params) {
        const options = {
            params: {}
        };
        if (typeof params?.pagination !== "undefined") {
            (0, helpers_1.setPaginationParams)(options, params.pagination);
        }
        const endpoint = `cosmos/group/v1/group_policies_by_group/${params.groupId}`;
        return await this.req.get(endpoint, options);
    }
    /* GroupsByAdmin queries group policies by admin address. */
    async groupPoliciesByAdmin(params) {
        const options = {
            params: {}
        };
        if (typeof params?.pagination !== "undefined") {
            (0, helpers_1.setPaginationParams)(options, params.pagination);
        }
        const endpoint = `cosmos/group/v1/group_policies_by_admin/${params.admin}`;
        return await this.req.get(endpoint, options);
    }
    /* Proposal queries a proposal based on proposal id. */
    async proposal(params) {
        const endpoint = `cosmos/group/v1/proposal/${params.proposalId}`;
        return await this.req.get(endpoint);
    }
    /* ProposalsByGroupPolicy queries proposals based on account address of group policy. */
    async proposalsByGroupPolicy(params) {
        const options = {
            params: {}
        };
        if (typeof params?.pagination !== "undefined") {
            (0, helpers_1.setPaginationParams)(options, params.pagination);
        }
        const endpoint = `cosmos/group/v1/proposals_by_group_policy/${params.address}`;
        return await this.req.get(endpoint, options);
    }
    /* VoteByProposalVoter queries a vote by proposal id and voter. */
    async voteByProposalVoter(params) {
        const endpoint = `cosmos/group/v1/vote_by_proposal_voter/${params.proposalId}/${params.voter}`;
        return await this.req.get(endpoint);
    }
    /* VotesByProposal queries a vote by proposal. */
    async votesByProposal(params) {
        const options = {
            params: {}
        };
        if (typeof params?.pagination !== "undefined") {
            (0, helpers_1.setPaginationParams)(options, params.pagination);
        }
        const endpoint = `cosmos/group/v1/votes_by_proposal/${params.proposalId}`;
        return await this.req.get(endpoint, options);
    }
    /* VotesByVoter queries a vote by voter. */
    async votesByVoter(params) {
        const options = {
            params: {}
        };
        if (typeof params?.pagination !== "undefined") {
            (0, helpers_1.setPaginationParams)(options, params.pagination);
        }
        const endpoint = `cosmos/group/v1/votes_by_voter/${params.voter}`;
        return await this.req.get(endpoint, options);
    }
    /* GroupsByMember queries groups by member address. */
    async groupsByMember(params) {
        const options = {
            params: {}
        };
        if (typeof params?.pagination !== "undefined") {
            (0, helpers_1.setPaginationParams)(options, params.pagination);
        }
        const endpoint = `cosmos/group/v1/groups_by_member/${params.address}`;
        return await this.req.get(endpoint, options);
    }
    /* TallyResult queries the tally of a proposal votes. */
    async tallyResult(params) {
        const endpoint = `cosmos/group/v1/proposals/${params.proposalId}/tally`;
        return await this.req.get(endpoint);
    }
}
exports.LCDQueryClient = LCDQueryClient;

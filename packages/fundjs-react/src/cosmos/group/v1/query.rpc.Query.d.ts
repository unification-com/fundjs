import { Rpc } from "../../../helpers";
import { QueryClient, ProtobufRpcClient } from "@cosmjs/stargate";
import { ReactQueryParams } from "../../../react-query";
import { QueryGroupInfoRequest, QueryGroupInfoResponse, QueryGroupPolicyInfoRequest, QueryGroupPolicyInfoResponse, QueryGroupMembersRequest, QueryGroupMembersResponse, QueryGroupsByAdminRequest, QueryGroupsByAdminResponse, QueryGroupPoliciesByGroupRequest, QueryGroupPoliciesByGroupResponse, QueryGroupPoliciesByAdminRequest, QueryGroupPoliciesByAdminResponse, QueryProposalRequest, QueryProposalResponse, QueryProposalsByGroupPolicyRequest, QueryProposalsByGroupPolicyResponse, QueryVoteByProposalVoterRequest, QueryVoteByProposalVoterResponse, QueryVotesByProposalRequest, QueryVotesByProposalResponse, QueryVotesByVoterRequest, QueryVotesByVoterResponse, QueryGroupsByMemberRequest, QueryGroupsByMemberResponse, QueryTallyResultRequest, QueryTallyResultResponse } from "./query";
/** Query is the cosmos.group.v1 Query service. */
export interface Query {
    /** GroupInfo queries group info based on group id. */
    groupInfo(request: QueryGroupInfoRequest): Promise<QueryGroupInfoResponse>;
    /** GroupPolicyInfo queries group policy info based on account address of group policy. */
    groupPolicyInfo(request: QueryGroupPolicyInfoRequest): Promise<QueryGroupPolicyInfoResponse>;
    /** GroupMembers queries members of a group */
    groupMembers(request: QueryGroupMembersRequest): Promise<QueryGroupMembersResponse>;
    /** GroupsByAdmin queries groups by admin address. */
    groupsByAdmin(request: QueryGroupsByAdminRequest): Promise<QueryGroupsByAdminResponse>;
    /** GroupPoliciesByGroup queries group policies by group id. */
    groupPoliciesByGroup(request: QueryGroupPoliciesByGroupRequest): Promise<QueryGroupPoliciesByGroupResponse>;
    /** GroupsByAdmin queries group policies by admin address. */
    groupPoliciesByAdmin(request: QueryGroupPoliciesByAdminRequest): Promise<QueryGroupPoliciesByAdminResponse>;
    /** Proposal queries a proposal based on proposal id. */
    proposal(request: QueryProposalRequest): Promise<QueryProposalResponse>;
    /** ProposalsByGroupPolicy queries proposals based on account address of group policy. */
    proposalsByGroupPolicy(request: QueryProposalsByGroupPolicyRequest): Promise<QueryProposalsByGroupPolicyResponse>;
    /** VoteByProposalVoter queries a vote by proposal id and voter. */
    voteByProposalVoter(request: QueryVoteByProposalVoterRequest): Promise<QueryVoteByProposalVoterResponse>;
    /** VotesByProposal queries a vote by proposal. */
    votesByProposal(request: QueryVotesByProposalRequest): Promise<QueryVotesByProposalResponse>;
    /** VotesByVoter queries a vote by voter. */
    votesByVoter(request: QueryVotesByVoterRequest): Promise<QueryVotesByVoterResponse>;
    /** GroupsByMember queries groups by member address. */
    groupsByMember(request: QueryGroupsByMemberRequest): Promise<QueryGroupsByMemberResponse>;
    /** TallyResult queries the tally of a proposal votes. */
    tallyResult(request: QueryTallyResultRequest): Promise<QueryTallyResultResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    groupInfo(request: QueryGroupInfoRequest): Promise<QueryGroupInfoResponse>;
    groupPolicyInfo(request: QueryGroupPolicyInfoRequest): Promise<QueryGroupPolicyInfoResponse>;
    groupMembers(request: QueryGroupMembersRequest): Promise<QueryGroupMembersResponse>;
    groupsByAdmin(request: QueryGroupsByAdminRequest): Promise<QueryGroupsByAdminResponse>;
    groupPoliciesByGroup(request: QueryGroupPoliciesByGroupRequest): Promise<QueryGroupPoliciesByGroupResponse>;
    groupPoliciesByAdmin(request: QueryGroupPoliciesByAdminRequest): Promise<QueryGroupPoliciesByAdminResponse>;
    proposal(request: QueryProposalRequest): Promise<QueryProposalResponse>;
    proposalsByGroupPolicy(request: QueryProposalsByGroupPolicyRequest): Promise<QueryProposalsByGroupPolicyResponse>;
    voteByProposalVoter(request: QueryVoteByProposalVoterRequest): Promise<QueryVoteByProposalVoterResponse>;
    votesByProposal(request: QueryVotesByProposalRequest): Promise<QueryVotesByProposalResponse>;
    votesByVoter(request: QueryVotesByVoterRequest): Promise<QueryVotesByVoterResponse>;
    groupsByMember(request: QueryGroupsByMemberRequest): Promise<QueryGroupsByMemberResponse>;
    tallyResult(request: QueryTallyResultRequest): Promise<QueryTallyResultResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    groupInfo(request: QueryGroupInfoRequest): Promise<QueryGroupInfoResponse>;
    groupPolicyInfo(request: QueryGroupPolicyInfoRequest): Promise<QueryGroupPolicyInfoResponse>;
    groupMembers(request: QueryGroupMembersRequest): Promise<QueryGroupMembersResponse>;
    groupsByAdmin(request: QueryGroupsByAdminRequest): Promise<QueryGroupsByAdminResponse>;
    groupPoliciesByGroup(request: QueryGroupPoliciesByGroupRequest): Promise<QueryGroupPoliciesByGroupResponse>;
    groupPoliciesByAdmin(request: QueryGroupPoliciesByAdminRequest): Promise<QueryGroupPoliciesByAdminResponse>;
    proposal(request: QueryProposalRequest): Promise<QueryProposalResponse>;
    proposalsByGroupPolicy(request: QueryProposalsByGroupPolicyRequest): Promise<QueryProposalsByGroupPolicyResponse>;
    voteByProposalVoter(request: QueryVoteByProposalVoterRequest): Promise<QueryVoteByProposalVoterResponse>;
    votesByProposal(request: QueryVotesByProposalRequest): Promise<QueryVotesByProposalResponse>;
    votesByVoter(request: QueryVotesByVoterRequest): Promise<QueryVotesByVoterResponse>;
    groupsByMember(request: QueryGroupsByMemberRequest): Promise<QueryGroupsByMemberResponse>;
    tallyResult(request: QueryTallyResultRequest): Promise<QueryTallyResultResponse>;
};
export interface UseGroupInfoQuery<TData> extends ReactQueryParams<QueryGroupInfoResponse, TData> {
    request: QueryGroupInfoRequest;
}
export interface UseGroupPolicyInfoQuery<TData> extends ReactQueryParams<QueryGroupPolicyInfoResponse, TData> {
    request: QueryGroupPolicyInfoRequest;
}
export interface UseGroupMembersQuery<TData> extends ReactQueryParams<QueryGroupMembersResponse, TData> {
    request: QueryGroupMembersRequest;
}
export interface UseGroupsByAdminQuery<TData> extends ReactQueryParams<QueryGroupsByAdminResponse, TData> {
    request: QueryGroupsByAdminRequest;
}
export interface UseGroupPoliciesByGroupQuery<TData> extends ReactQueryParams<QueryGroupPoliciesByGroupResponse, TData> {
    request: QueryGroupPoliciesByGroupRequest;
}
export interface UseGroupPoliciesByAdminQuery<TData> extends ReactQueryParams<QueryGroupPoliciesByAdminResponse, TData> {
    request: QueryGroupPoliciesByAdminRequest;
}
export interface UseProposalQuery<TData> extends ReactQueryParams<QueryProposalResponse, TData> {
    request: QueryProposalRequest;
}
export interface UseProposalsByGroupPolicyQuery<TData> extends ReactQueryParams<QueryProposalsByGroupPolicyResponse, TData> {
    request: QueryProposalsByGroupPolicyRequest;
}
export interface UseVoteByProposalVoterQuery<TData> extends ReactQueryParams<QueryVoteByProposalVoterResponse, TData> {
    request: QueryVoteByProposalVoterRequest;
}
export interface UseVotesByProposalQuery<TData> extends ReactQueryParams<QueryVotesByProposalResponse, TData> {
    request: QueryVotesByProposalRequest;
}
export interface UseVotesByVoterQuery<TData> extends ReactQueryParams<QueryVotesByVoterResponse, TData> {
    request: QueryVotesByVoterRequest;
}
export interface UseGroupsByMemberQuery<TData> extends ReactQueryParams<QueryGroupsByMemberResponse, TData> {
    request: QueryGroupsByMemberRequest;
}
export interface UseTallyResultQuery<TData> extends ReactQueryParams<QueryTallyResultResponse, TData> {
    request: QueryTallyResultRequest;
}
export declare const createRpcQueryHooks: (rpc: ProtobufRpcClient | undefined) => {
    /** GroupInfo queries group info based on group id. */ useGroupInfo: <TData = QueryGroupInfoResponse>({ request, options }: UseGroupInfoQuery<TData>) => any;
    /** GroupPolicyInfo queries group policy info based on account address of group policy. */ useGroupPolicyInfo: <TData = QueryGroupPolicyInfoResponse>({ request, options }: UseGroupPolicyInfoQuery<TData>) => any;
    /** GroupMembers queries members of a group */ useGroupMembers: <TData = QueryGroupMembersResponse>({ request, options }: UseGroupMembersQuery<TData>) => any;
    /** GroupsByAdmin queries groups by admin address. */ useGroupsByAdmin: <TData = QueryGroupsByAdminResponse>({ request, options }: UseGroupsByAdminQuery<TData>) => any;
    /** GroupPoliciesByGroup queries group policies by group id. */ useGroupPoliciesByGroup: <TData = QueryGroupPoliciesByGroupResponse>({ request, options }: UseGroupPoliciesByGroupQuery<TData>) => any;
    /** GroupsByAdmin queries group policies by admin address. */ useGroupPoliciesByAdmin: <TData = QueryGroupPoliciesByAdminResponse>({ request, options }: UseGroupPoliciesByAdminQuery<TData>) => any;
    /** Proposal queries a proposal based on proposal id. */ useProposal: <TData = QueryProposalResponse>({ request, options }: UseProposalQuery<TData>) => any;
    /** ProposalsByGroupPolicy queries proposals based on account address of group policy. */ useProposalsByGroupPolicy: <TData = QueryProposalsByGroupPolicyResponse>({ request, options }: UseProposalsByGroupPolicyQuery<TData>) => any;
    /** VoteByProposalVoter queries a vote by proposal id and voter. */ useVoteByProposalVoter: <TData = QueryVoteByProposalVoterResponse>({ request, options }: UseVoteByProposalVoterQuery<TData>) => any;
    /** VotesByProposal queries a vote by proposal. */ useVotesByProposal: <TData = QueryVotesByProposalResponse>({ request, options }: UseVotesByProposalQuery<TData>) => any;
    /** VotesByVoter queries a vote by voter. */ useVotesByVoter: <TData = QueryVotesByVoterResponse>({ request, options }: UseVotesByVoterQuery<TData>) => any;
    /** GroupsByMember queries groups by member address. */ useGroupsByMember: <TData = QueryGroupsByMemberResponse>({ request, options }: UseGroupsByMemberQuery<TData>) => any;
    /** TallyResult queries the tally of a proposal votes. */ useTallyResult: <TData = QueryTallyResultResponse>({ request, options }: UseTallyResultQuery<TData>) => any;
};

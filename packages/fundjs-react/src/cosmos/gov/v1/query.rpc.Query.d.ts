import { Rpc } from "../../../helpers";
import { QueryClient, ProtobufRpcClient } from "@cosmjs/stargate";
import { ReactQueryParams } from "../../../react-query";
import { QueryProposalRequest, QueryProposalResponse, QueryProposalsRequest, QueryProposalsResponse, QueryVoteRequest, QueryVoteResponse, QueryVotesRequest, QueryVotesResponse, QueryParamsRequest, QueryParamsResponse, QueryDepositRequest, QueryDepositResponse, QueryDepositsRequest, QueryDepositsResponse, QueryTallyResultRequest, QueryTallyResultResponse } from "./query";
/** Query defines the gRPC querier service for gov module */
export interface Query {
    /** Proposal queries proposal details based on ProposalID. */
    proposal(request: QueryProposalRequest): Promise<QueryProposalResponse>;
    /** Proposals queries all proposals based on given status. */
    proposals(request: QueryProposalsRequest): Promise<QueryProposalsResponse>;
    /** Vote queries voted information based on proposalID, voterAddr. */
    vote(request: QueryVoteRequest): Promise<QueryVoteResponse>;
    /** Votes queries votes of a given proposal. */
    votes(request: QueryVotesRequest): Promise<QueryVotesResponse>;
    /** Params queries all parameters of the gov module. */
    params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
    /** Deposit queries single deposit information based proposalID, depositAddr. */
    deposit(request: QueryDepositRequest): Promise<QueryDepositResponse>;
    /** Deposits queries all deposits of a single proposal. */
    deposits(request: QueryDepositsRequest): Promise<QueryDepositsResponse>;
    /** TallyResult queries the tally of a proposal vote. */
    tallyResult(request: QueryTallyResultRequest): Promise<QueryTallyResultResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    proposal(request: QueryProposalRequest): Promise<QueryProposalResponse>;
    proposals(request: QueryProposalsRequest): Promise<QueryProposalsResponse>;
    vote(request: QueryVoteRequest): Promise<QueryVoteResponse>;
    votes(request: QueryVotesRequest): Promise<QueryVotesResponse>;
    params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
    deposit(request: QueryDepositRequest): Promise<QueryDepositResponse>;
    deposits(request: QueryDepositsRequest): Promise<QueryDepositsResponse>;
    tallyResult(request: QueryTallyResultRequest): Promise<QueryTallyResultResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    proposal(request: QueryProposalRequest): Promise<QueryProposalResponse>;
    proposals(request: QueryProposalsRequest): Promise<QueryProposalsResponse>;
    vote(request: QueryVoteRequest): Promise<QueryVoteResponse>;
    votes(request: QueryVotesRequest): Promise<QueryVotesResponse>;
    params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
    deposit(request: QueryDepositRequest): Promise<QueryDepositResponse>;
    deposits(request: QueryDepositsRequest): Promise<QueryDepositsResponse>;
    tallyResult(request: QueryTallyResultRequest): Promise<QueryTallyResultResponse>;
};
export interface UseProposalQuery<TData> extends ReactQueryParams<QueryProposalResponse, TData> {
    request: QueryProposalRequest;
}
export interface UseProposalsQuery<TData> extends ReactQueryParams<QueryProposalsResponse, TData> {
    request: QueryProposalsRequest;
}
export interface UseVoteQuery<TData> extends ReactQueryParams<QueryVoteResponse, TData> {
    request: QueryVoteRequest;
}
export interface UseVotesQuery<TData> extends ReactQueryParams<QueryVotesResponse, TData> {
    request: QueryVotesRequest;
}
export interface UseParamsQuery<TData> extends ReactQueryParams<QueryParamsResponse, TData> {
    request: QueryParamsRequest;
}
export interface UseDepositQuery<TData> extends ReactQueryParams<QueryDepositResponse, TData> {
    request: QueryDepositRequest;
}
export interface UseDepositsQuery<TData> extends ReactQueryParams<QueryDepositsResponse, TData> {
    request: QueryDepositsRequest;
}
export interface UseTallyResultQuery<TData> extends ReactQueryParams<QueryTallyResultResponse, TData> {
    request: QueryTallyResultRequest;
}
export declare const createRpcQueryHooks: (rpc: ProtobufRpcClient | undefined) => {
    /** Proposal queries proposal details based on ProposalID. */ useProposal: <TData = QueryProposalResponse>({ request, options }: UseProposalQuery<TData>) => any;
    /** Proposals queries all proposals based on given status. */ useProposals: <TData = QueryProposalsResponse>({ request, options }: UseProposalsQuery<TData>) => any;
    /** Vote queries voted information based on proposalID, voterAddr. */ useVote: <TData = QueryVoteResponse>({ request, options }: UseVoteQuery<TData>) => any;
    /** Votes queries votes of a given proposal. */ useVotes: <TData = QueryVotesResponse>({ request, options }: UseVotesQuery<TData>) => any;
    /** Params queries all parameters of the gov module. */ useParams: <TData = QueryParamsResponse>({ request, options }: UseParamsQuery<TData>) => any;
    /** Deposit queries single deposit information based proposalID, depositAddr. */ useDeposit: <TData = QueryDepositResponse>({ request, options }: UseDepositQuery<TData>) => any;
    /** Deposits queries all deposits of a single proposal. */ useDeposits: <TData = QueryDepositsResponse>({ request, options }: UseDepositsQuery<TData>) => any;
    /** TallyResult queries the tally of a proposal vote. */ useTallyResult: <TData = QueryTallyResultResponse>({ request, options }: UseTallyResultQuery<TData>) => any;
};

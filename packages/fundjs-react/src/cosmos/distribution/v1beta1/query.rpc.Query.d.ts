import { Rpc } from "../../../helpers";
import { QueryClient, ProtobufRpcClient } from "@cosmjs/stargate";
import { ReactQueryParams } from "../../../react-query";
import { QueryParamsRequest, QueryParamsResponse, QueryValidatorOutstandingRewardsRequest, QueryValidatorOutstandingRewardsResponse, QueryValidatorCommissionRequest, QueryValidatorCommissionResponse, QueryValidatorSlashesRequest, QueryValidatorSlashesResponse, QueryDelegationRewardsRequest, QueryDelegationRewardsResponse, QueryDelegationTotalRewardsRequest, QueryDelegationTotalRewardsResponse, QueryDelegatorValidatorsRequest, QueryDelegatorValidatorsResponse, QueryDelegatorWithdrawAddressRequest, QueryDelegatorWithdrawAddressResponse, QueryCommunityPoolRequest, QueryCommunityPoolResponse } from "./query";
/** Query defines the gRPC querier service for distribution module. */
export interface Query {
    /** Params queries params of the distribution module. */
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    /** ValidatorOutstandingRewards queries rewards of a validator address. */
    validatorOutstandingRewards(request: QueryValidatorOutstandingRewardsRequest): Promise<QueryValidatorOutstandingRewardsResponse>;
    /** ValidatorCommission queries accumulated commission for a validator. */
    validatorCommission(request: QueryValidatorCommissionRequest): Promise<QueryValidatorCommissionResponse>;
    /** ValidatorSlashes queries slash events of a validator. */
    validatorSlashes(request: QueryValidatorSlashesRequest): Promise<QueryValidatorSlashesResponse>;
    /** DelegationRewards queries the total rewards accrued by a delegation. */
    delegationRewards(request: QueryDelegationRewardsRequest): Promise<QueryDelegationRewardsResponse>;
    /**
     * DelegationTotalRewards queries the total rewards accrued by a each
     * validator.
     */
    delegationTotalRewards(request: QueryDelegationTotalRewardsRequest): Promise<QueryDelegationTotalRewardsResponse>;
    /** DelegatorValidators queries the validators of a delegator. */
    delegatorValidators(request: QueryDelegatorValidatorsRequest): Promise<QueryDelegatorValidatorsResponse>;
    /** DelegatorWithdrawAddress queries withdraw address of a delegator. */
    delegatorWithdrawAddress(request: QueryDelegatorWithdrawAddressRequest): Promise<QueryDelegatorWithdrawAddressResponse>;
    /** CommunityPool queries the community pool coins. */
    communityPool(request?: QueryCommunityPoolRequest): Promise<QueryCommunityPoolResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    validatorOutstandingRewards(request: QueryValidatorOutstandingRewardsRequest): Promise<QueryValidatorOutstandingRewardsResponse>;
    validatorCommission(request: QueryValidatorCommissionRequest): Promise<QueryValidatorCommissionResponse>;
    validatorSlashes(request: QueryValidatorSlashesRequest): Promise<QueryValidatorSlashesResponse>;
    delegationRewards(request: QueryDelegationRewardsRequest): Promise<QueryDelegationRewardsResponse>;
    delegationTotalRewards(request: QueryDelegationTotalRewardsRequest): Promise<QueryDelegationTotalRewardsResponse>;
    delegatorValidators(request: QueryDelegatorValidatorsRequest): Promise<QueryDelegatorValidatorsResponse>;
    delegatorWithdrawAddress(request: QueryDelegatorWithdrawAddressRequest): Promise<QueryDelegatorWithdrawAddressResponse>;
    communityPool(request?: QueryCommunityPoolRequest): Promise<QueryCommunityPoolResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    validatorOutstandingRewards(request: QueryValidatorOutstandingRewardsRequest): Promise<QueryValidatorOutstandingRewardsResponse>;
    validatorCommission(request: QueryValidatorCommissionRequest): Promise<QueryValidatorCommissionResponse>;
    validatorSlashes(request: QueryValidatorSlashesRequest): Promise<QueryValidatorSlashesResponse>;
    delegationRewards(request: QueryDelegationRewardsRequest): Promise<QueryDelegationRewardsResponse>;
    delegationTotalRewards(request: QueryDelegationTotalRewardsRequest): Promise<QueryDelegationTotalRewardsResponse>;
    delegatorValidators(request: QueryDelegatorValidatorsRequest): Promise<QueryDelegatorValidatorsResponse>;
    delegatorWithdrawAddress(request: QueryDelegatorWithdrawAddressRequest): Promise<QueryDelegatorWithdrawAddressResponse>;
    communityPool(request?: QueryCommunityPoolRequest): Promise<QueryCommunityPoolResponse>;
};
export interface UseParamsQuery<TData> extends ReactQueryParams<QueryParamsResponse, TData> {
    request?: QueryParamsRequest;
}
export interface UseValidatorOutstandingRewardsQuery<TData> extends ReactQueryParams<QueryValidatorOutstandingRewardsResponse, TData> {
    request: QueryValidatorOutstandingRewardsRequest;
}
export interface UseValidatorCommissionQuery<TData> extends ReactQueryParams<QueryValidatorCommissionResponse, TData> {
    request: QueryValidatorCommissionRequest;
}
export interface UseValidatorSlashesQuery<TData> extends ReactQueryParams<QueryValidatorSlashesResponse, TData> {
    request: QueryValidatorSlashesRequest;
}
export interface UseDelegationRewardsQuery<TData> extends ReactQueryParams<QueryDelegationRewardsResponse, TData> {
    request: QueryDelegationRewardsRequest;
}
export interface UseDelegationTotalRewardsQuery<TData> extends ReactQueryParams<QueryDelegationTotalRewardsResponse, TData> {
    request: QueryDelegationTotalRewardsRequest;
}
export interface UseDelegatorValidatorsQuery<TData> extends ReactQueryParams<QueryDelegatorValidatorsResponse, TData> {
    request: QueryDelegatorValidatorsRequest;
}
export interface UseDelegatorWithdrawAddressQuery<TData> extends ReactQueryParams<QueryDelegatorWithdrawAddressResponse, TData> {
    request: QueryDelegatorWithdrawAddressRequest;
}
export interface UseCommunityPoolQuery<TData> extends ReactQueryParams<QueryCommunityPoolResponse, TData> {
    request?: QueryCommunityPoolRequest;
}
export declare const createRpcQueryHooks: (rpc: ProtobufRpcClient | undefined) => {
    /** Params queries params of the distribution module. */ useParams: <TData = QueryParamsResponse>({ request, options }: UseParamsQuery<TData>) => any;
    /** ValidatorOutstandingRewards queries rewards of a validator address. */ useValidatorOutstandingRewards: <TData = QueryValidatorOutstandingRewardsResponse>({ request, options }: UseValidatorOutstandingRewardsQuery<TData>) => any;
    /** ValidatorCommission queries accumulated commission for a validator. */ useValidatorCommission: <TData = QueryValidatorCommissionResponse>({ request, options }: UseValidatorCommissionQuery<TData>) => any;
    /** ValidatorSlashes queries slash events of a validator. */ useValidatorSlashes: <TData = QueryValidatorSlashesResponse>({ request, options }: UseValidatorSlashesQuery<TData>) => any;
    /** DelegationRewards queries the total rewards accrued by a delegation. */ useDelegationRewards: <TData = QueryDelegationRewardsResponse>({ request, options }: UseDelegationRewardsQuery<TData>) => any;
    /**
     * DelegationTotalRewards queries the total rewards accrued by a each
     * validator.
     */
    useDelegationTotalRewards: <TData = QueryDelegationTotalRewardsResponse>({ request, options }: UseDelegationTotalRewardsQuery<TData>) => any;
    /** DelegatorValidators queries the validators of a delegator. */ useDelegatorValidators: <TData = QueryDelegatorValidatorsResponse>({ request, options }: UseDelegatorValidatorsQuery<TData>) => any;
    /** DelegatorWithdrawAddress queries withdraw address of a delegator. */ useDelegatorWithdrawAddress: <TData = QueryDelegatorWithdrawAddressResponse>({ request, options }: UseDelegatorWithdrawAddressQuery<TData>) => any;
    /** CommunityPool queries the community pool coins. */ useCommunityPool: <TData = QueryCommunityPoolResponse>({ request, options }: UseCommunityPoolQuery<TData>) => any;
};

import { Rpc } from "../../../helpers";
import { QueryClient, ProtobufRpcClient } from "@cosmjs/stargate";
import { ReactQueryParams } from "../../../react-query";
import { QueryAccountsRequest, QueryAccountsResponse, QueryAccountRequest, QueryAccountResponse, QueryParamsRequest, QueryParamsResponse, QueryModuleAccountsRequest, QueryModuleAccountsResponse, Bech32PrefixRequest, Bech32PrefixResponse, AddressBytesToStringRequest, AddressBytesToStringResponse, AddressStringToBytesRequest, AddressStringToBytesResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
    /**
     * Accounts returns all the existing accounts
     *
     * Since: cosmos-sdk 0.43
     */
    accounts(request?: QueryAccountsRequest): Promise<QueryAccountsResponse>;
    /** Account returns account details based on address. */
    account(request: QueryAccountRequest): Promise<QueryAccountResponse>;
    /** Params queries all parameters. */
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    /** ModuleAccounts returns all the existing module accounts. */
    moduleAccounts(request?: QueryModuleAccountsRequest): Promise<QueryModuleAccountsResponse>;
    /** Bech32 queries bech32Prefix */
    bech32Prefix(request?: Bech32PrefixRequest): Promise<Bech32PrefixResponse>;
    /** AddressBytesToString converts Account Address bytes to string */
    addressBytesToString(request: AddressBytesToStringRequest): Promise<AddressBytesToStringResponse>;
    /** AddressStringToBytes converts Address string to bytes */
    addressStringToBytes(request: AddressStringToBytesRequest): Promise<AddressStringToBytesResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    accounts(request?: QueryAccountsRequest): Promise<QueryAccountsResponse>;
    account(request: QueryAccountRequest): Promise<QueryAccountResponse>;
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    moduleAccounts(request?: QueryModuleAccountsRequest): Promise<QueryModuleAccountsResponse>;
    bech32Prefix(request?: Bech32PrefixRequest): Promise<Bech32PrefixResponse>;
    addressBytesToString(request: AddressBytesToStringRequest): Promise<AddressBytesToStringResponse>;
    addressStringToBytes(request: AddressStringToBytesRequest): Promise<AddressStringToBytesResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    accounts(request?: QueryAccountsRequest): Promise<QueryAccountsResponse>;
    account(request: QueryAccountRequest): Promise<QueryAccountResponse>;
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    moduleAccounts(request?: QueryModuleAccountsRequest): Promise<QueryModuleAccountsResponse>;
    bech32Prefix(request?: Bech32PrefixRequest): Promise<Bech32PrefixResponse>;
    addressBytesToString(request: AddressBytesToStringRequest): Promise<AddressBytesToStringResponse>;
    addressStringToBytes(request: AddressStringToBytesRequest): Promise<AddressStringToBytesResponse>;
};
export interface UseAccountsQuery<TData> extends ReactQueryParams<QueryAccountsResponse, TData> {
    request?: QueryAccountsRequest;
}
export interface UseAccountQuery<TData> extends ReactQueryParams<QueryAccountResponse, TData> {
    request: QueryAccountRequest;
}
export interface UseParamsQuery<TData> extends ReactQueryParams<QueryParamsResponse, TData> {
    request?: QueryParamsRequest;
}
export interface UseModuleAccountsQuery<TData> extends ReactQueryParams<QueryModuleAccountsResponse, TData> {
    request?: QueryModuleAccountsRequest;
}
export interface UseBech32PrefixQuery<TData> extends ReactQueryParams<Bech32PrefixResponse, TData> {
    request?: Bech32PrefixRequest;
}
export interface UseAddressBytesToStringQuery<TData> extends ReactQueryParams<AddressBytesToStringResponse, TData> {
    request: AddressBytesToStringRequest;
}
export interface UseAddressStringToBytesQuery<TData> extends ReactQueryParams<AddressStringToBytesResponse, TData> {
    request: AddressStringToBytesRequest;
}
export declare const createRpcQueryHooks: (rpc: ProtobufRpcClient | undefined) => {
    /**
     * Accounts returns all the existing accounts
     *
     * Since: cosmos-sdk 0.43
     */
    useAccounts: <TData = QueryAccountsResponse>({ request, options }: UseAccountsQuery<TData>) => any;
    /** Account returns account details based on address. */ useAccount: <TData = QueryAccountResponse>({ request, options }: UseAccountQuery<TData>) => any;
    /** Params queries all parameters. */ useParams: <TData = QueryParamsResponse>({ request, options }: UseParamsQuery<TData>) => any;
    /** ModuleAccounts returns all the existing module accounts. */ useModuleAccounts: <TData = QueryModuleAccountsResponse>({ request, options }: UseModuleAccountsQuery<TData>) => any;
    /** Bech32 queries bech32Prefix */ useBech32Prefix: <TData = Bech32PrefixResponse>({ request, options }: UseBech32PrefixQuery<TData>) => any;
    /** AddressBytesToString converts Account Address bytes to string */ useAddressBytesToString: <TData = AddressBytesToStringResponse>({ request, options }: UseAddressBytesToStringQuery<TData>) => any;
    /** AddressStringToBytes converts Address string to bytes */ useAddressStringToBytes: <TData = AddressStringToBytesResponse>({ request, options }: UseAddressStringToBytesQuery<TData>) => any;
};

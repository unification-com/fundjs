import { ProtobufRpcClient } from "@cosmjs/stargate";
import * as _MainchainBeaconV1Queryrpc from "./mainchain/beacon/v1/query.rpc.Query";
import * as _MainchainEnterpriseV1Queryrpc from "./mainchain/enterprise/v1/query.rpc.Query";
import * as _MainchainStreamV1Queryrpc from "./mainchain/stream/v1/query.rpc.Query";
import * as _MainchainWrkchainV1Queryrpc from "./mainchain/wrkchain/v1/query.rpc.Query";
import * as _CosmosAuthV1beta1Queryrpc from "./cosmos/auth/v1beta1/query.rpc.Query";
import * as _CosmosAuthzV1beta1Queryrpc from "./cosmos/authz/v1beta1/query.rpc.Query";
import * as _CosmosBankV1beta1Queryrpc from "./cosmos/bank/v1beta1/query.rpc.Query";
import * as _CosmosBaseTendermintV1beta1Queryrpc from "./cosmos/base/tendermint/v1beta1/query.rpc.Service";
import * as _CosmosDistributionV1beta1Queryrpc from "./cosmos/distribution/v1beta1/query.rpc.Query";
import * as _CosmosEvidenceV1beta1Queryrpc from "./cosmos/evidence/v1beta1/query.rpc.Query";
import * as _CosmosFeegrantV1beta1Queryrpc from "./cosmos/feegrant/v1beta1/query.rpc.Query";
import * as _CosmosGovV1Queryrpc from "./cosmos/gov/v1/query.rpc.Query";
import * as _CosmosGovV1beta1Queryrpc from "./cosmos/gov/v1beta1/query.rpc.Query";
import * as _CosmosGroupV1Queryrpc from "./cosmos/group/v1/query.rpc.Query";
import * as _CosmosSlashingV1beta1Queryrpc from "./cosmos/slashing/v1beta1/query.rpc.Query";
import * as _CosmosStakingV1beta1Queryrpc from "./cosmos/staking/v1beta1/query.rpc.Query";
import * as _CosmosTxV1beta1Servicerpc from "./cosmos/tx/v1beta1/service.rpc.Service";
import * as _CosmosUpgradeV1beta1Queryrpc from "./cosmos/upgrade/v1beta1/query.rpc.Query";
import * as _IbcApplicationsTransferV1Queryrpc from "./ibc/applications/transfer/v1/query.rpc.Query";
import * as _IbcCoreChannelV1Queryrpc from "./ibc/core/channel/v1/query.rpc.Query";
import * as _IbcCoreClientV1Queryrpc from "./ibc/core/client/v1/query.rpc.Query";
import * as _IbcCoreConnectionV1Queryrpc from "./ibc/core/connection/v1/query.rpc.Query";
export declare const createRpcQueryHooks: ({ rpc }: {
    rpc: ProtobufRpcClient | undefined;
}) => {
    mainchain: {
        beacon: {
            v1: {
                useParams: <TData = import("./mainchain/beacon/v1/query").QueryParamsResponse>({ request, options }: _MainchainBeaconV1Queryrpc.UseParamsQuery<TData>) => any;
                useBeacon: <TData = import("./mainchain/beacon/v1/query").QueryBeaconResponse>({ request, options }: _MainchainBeaconV1Queryrpc.UseBeaconQuery<TData>) => any;
                useBeaconTimestamp: <TData = import("./mainchain/beacon/v1/query").QueryBeaconTimestampResponse>({ request, options }: _MainchainBeaconV1Queryrpc.UseBeaconTimestampQuery<TData>) => any;
                useBeaconsFiltered: <TData = import("./mainchain/beacon/v1/query").QueryBeaconsFilteredResponse>({ request, options }: _MainchainBeaconV1Queryrpc.UseBeaconsFilteredQuery<TData>) => any;
                useBeaconStorage: <TData = import("./mainchain/beacon/v1/query").QueryBeaconStorageResponse>({ request, options }: _MainchainBeaconV1Queryrpc.UseBeaconStorageQuery<TData>) => any;
            };
        };
        enterprise: {
            v1: {
                useParams: <TData = import("./mainchain/enterprise/v1/query").QueryParamsResponse>({ request, options }: _MainchainEnterpriseV1Queryrpc.UseParamsQuery<TData>) => any;
                useEnterpriseUndPurchaseOrder: <TData = import("./mainchain/enterprise/v1/query").QueryEnterpriseUndPurchaseOrderResponse>({ request, options }: _MainchainEnterpriseV1Queryrpc.UseEnterpriseUndPurchaseOrderQuery<TData>) => any;
                useEnterpriseUndPurchaseOrders: <TData = import("./mainchain/enterprise/v1/query").QueryEnterpriseUndPurchaseOrdersResponse>({ request, options }: _MainchainEnterpriseV1Queryrpc.UseEnterpriseUndPurchaseOrdersQuery<TData>) => any;
                useLockedUndByAddress: <TData = import("./mainchain/enterprise/v1/query").QueryLockedUndByAddressResponse>({ request, options }: _MainchainEnterpriseV1Queryrpc.UseLockedUndByAddressQuery<TData>) => any;
                useTotalLocked: <TData = import("./mainchain/enterprise/v1/query").QueryTotalLockedResponse>({ request, options }: _MainchainEnterpriseV1Queryrpc.UseTotalLockedQuery<TData>) => any;
                useTotalUnlocked: <TData = import("./mainchain/enterprise/v1/query").QueryTotalUnlockedResponse>({ request, options }: _MainchainEnterpriseV1Queryrpc.UseTotalUnlockedQuery<TData>) => any;
                useEnterpriseSupply: <TData = import("./mainchain/enterprise/v1/query").QueryEnterpriseSupplyResponse>({ request, options }: _MainchainEnterpriseV1Queryrpc.UseEnterpriseSupplyQuery<TData>) => any;
                useTotalSupply: <TData = import("./mainchain/enterprise/v1/query").QueryTotalSupplyResponse>({ request, options }: _MainchainEnterpriseV1Queryrpc.UseTotalSupplyQuery<TData>) => any;
                useSupplyOf: <TData = import("./mainchain/enterprise/v1/query").QuerySupplyOfResponse>({ request, options }: _MainchainEnterpriseV1Queryrpc.UseSupplyOfQuery<TData>) => any;
                useTotalSupplyOverwrite: <TData = import("./mainchain/enterprise/v1/query").QueryTotalSupplyResponse>({ request, options }: _MainchainEnterpriseV1Queryrpc.UseTotalSupplyOverwriteQuery<TData>) => any;
                useSupplyOfOverwrite: <TData = import("./mainchain/enterprise/v1/query").QuerySupplyOfResponse>({ request, options }: _MainchainEnterpriseV1Queryrpc.UseSupplyOfOverwriteQuery<TData>) => any;
                useWhitelist: <TData = import("./mainchain/enterprise/v1/query").QueryWhitelistResponse>({ request, options }: _MainchainEnterpriseV1Queryrpc.UseWhitelistQuery<TData>) => any;
                useWhitelisted: <TData = import("./mainchain/enterprise/v1/query").QueryWhitelistedResponse>({ request, options }: _MainchainEnterpriseV1Queryrpc.UseWhitelistedQuery<TData>) => any;
                useEnterpriseAccount: <TData = import("./mainchain/enterprise/v1/query").QueryEnterpriseAccountResponse>({ request, options }: _MainchainEnterpriseV1Queryrpc.UseEnterpriseAccountQuery<TData>) => any;
                useTotalSpentEFUND: <TData = import("./mainchain/enterprise/v1/query").QueryTotalSpentEFUNDResponse>({ request, options }: _MainchainEnterpriseV1Queryrpc.UseTotalSpentEFUNDQuery<TData>) => any;
                useSpentEFUNDByAddress: <TData = import("./mainchain/enterprise/v1/query").QuerySpentEFUNDByAddressResponse>({ request, options }: _MainchainEnterpriseV1Queryrpc.UseSpentEFUNDByAddressQuery<TData>) => any;
            };
        };
        stream: {
            v1: {
                useParams: <TData = import("./mainchain/stream/v1/query").QueryParamsResponse>({ request, options }: _MainchainStreamV1Queryrpc.UseParamsQuery<TData>) => any;
                useCalculateFlowRate: <TData = import("./mainchain/stream/v1/query").QueryCalculateFlowRateResponse>({ request, options }: _MainchainStreamV1Queryrpc.UseCalculateFlowRateQuery<TData>) => any;
                useStreams: <TData = import("./mainchain/stream/v1/query").QueryStreamsResponse>({ request, options }: _MainchainStreamV1Queryrpc.UseStreamsQuery<TData>) => any;
                useAllStreamsForReceiver: <TData = import("./mainchain/stream/v1/query").QueryAllStreamsForReceiverResponse>({ request, options }: _MainchainStreamV1Queryrpc.UseAllStreamsForReceiverQuery<TData>) => any;
                useStreamByReceiverSender: <TData = import("./mainchain/stream/v1/query").QueryStreamByReceiverSenderResponse>({ request, options }: _MainchainStreamV1Queryrpc.UseStreamByReceiverSenderQuery<TData>) => any;
                useStreamReceiverSenderCurrentFlow: <TData = import("./mainchain/stream/v1/query").QueryStreamReceiverSenderCurrentFlowResponse>({ request, options }: _MainchainStreamV1Queryrpc.UseStreamReceiverSenderCurrentFlowQuery<TData>) => any;
                useAllStreamsForSender: <TData = import("./mainchain/stream/v1/query").QueryAllStreamsForSenderResponse>({ request, options }: _MainchainStreamV1Queryrpc.UseAllStreamsForSenderQuery<TData>) => any;
            };
        };
        wrkchain: {
            v1: {
                useParams: <TData = import("./mainchain/wrkchain/v1/query").QueryParamsResponse>({ request, options }: _MainchainWrkchainV1Queryrpc.UseParamsQuery<TData>) => any;
                useWrkChain: <TData = import("./mainchain/wrkchain/v1/query").QueryWrkChainResponse>({ request, options }: _MainchainWrkchainV1Queryrpc.UseWrkChainQuery<TData>) => any;
                useWrkChainBlock: <TData = import("./mainchain/wrkchain/v1/query").QueryWrkChainBlockResponse>({ request, options }: _MainchainWrkchainV1Queryrpc.UseWrkChainBlockQuery<TData>) => any;
                useWrkChainsFiltered: <TData = import("./mainchain/wrkchain/v1/query").QueryWrkChainsFilteredResponse>({ request, options }: _MainchainWrkchainV1Queryrpc.UseWrkChainsFilteredQuery<TData>) => any;
                useWrkChainStorage: <TData = import("./mainchain/wrkchain/v1/query").QueryWrkChainStorageResponse>({ request, options }: _MainchainWrkchainV1Queryrpc.UseWrkChainStorageQuery<TData>) => any;
            };
        };
    };
    cosmos: {
        auth: {
            v1beta1: {
                useAccounts: <TData = import("./cosmos/auth/v1beta1/query").QueryAccountsResponse>({ request, options }: _CosmosAuthV1beta1Queryrpc.UseAccountsQuery<TData>) => any;
                useAccount: <TData = import("./cosmos/auth/v1beta1/query").QueryAccountResponse>({ request, options }: _CosmosAuthV1beta1Queryrpc.UseAccountQuery<TData>) => any;
                useParams: <TData = import("./cosmos/auth/v1beta1/query").QueryParamsResponse>({ request, options }: _CosmosAuthV1beta1Queryrpc.UseParamsQuery<TData>) => any;
                useModuleAccounts: <TData = import("./cosmos/auth/v1beta1/query").QueryModuleAccountsResponse>({ request, options }: _CosmosAuthV1beta1Queryrpc.UseModuleAccountsQuery<TData>) => any;
                useBech32Prefix: <TData = import("./cosmos/auth/v1beta1/query").Bech32PrefixResponse>({ request, options }: _CosmosAuthV1beta1Queryrpc.UseBech32PrefixQuery<TData>) => any;
                useAddressBytesToString: <TData = import("./cosmos/auth/v1beta1/query").AddressBytesToStringResponse>({ request, options }: _CosmosAuthV1beta1Queryrpc.UseAddressBytesToStringQuery<TData>) => any;
                useAddressStringToBytes: <TData = import("./cosmos/auth/v1beta1/query").AddressStringToBytesResponse>({ request, options }: _CosmosAuthV1beta1Queryrpc.UseAddressStringToBytesQuery<TData>) => any;
            };
        };
        authz: {
            v1beta1: {
                useGrants: <TData = import("./cosmos/authz/v1beta1/query").QueryGrantsResponse>({ request, options }: _CosmosAuthzV1beta1Queryrpc.UseGrantsQuery<TData>) => any;
                useGranterGrants: <TData = import("./cosmos/authz/v1beta1/query").QueryGranterGrantsResponse>({ request, options }: _CosmosAuthzV1beta1Queryrpc.UseGranterGrantsQuery<TData>) => any;
                useGranteeGrants: <TData = import("./cosmos/authz/v1beta1/query").QueryGranteeGrantsResponse>({ request, options }: _CosmosAuthzV1beta1Queryrpc.UseGranteeGrantsQuery<TData>) => any;
            };
        };
        bank: {
            v1beta1: {
                useBalance: <TData = import("./cosmos/bank/v1beta1/query").QueryBalanceResponse>({ request, options }: _CosmosBankV1beta1Queryrpc.UseBalanceQuery<TData>) => any;
                useAllBalances: <TData = import("./cosmos/bank/v1beta1/query").QueryAllBalancesResponse>({ request, options }: _CosmosBankV1beta1Queryrpc.UseAllBalancesQuery<TData>) => any;
                useSpendableBalances: <TData = import("./cosmos/bank/v1beta1/query").QuerySpendableBalancesResponse>({ request, options }: _CosmosBankV1beta1Queryrpc.UseSpendableBalancesQuery<TData>) => any;
                useTotalSupply: <TData = import("./cosmos/bank/v1beta1/query").QueryTotalSupplyResponse>({ request, options }: _CosmosBankV1beta1Queryrpc.UseTotalSupplyQuery<TData>) => any;
                useSupplyOf: <TData = import("./cosmos/bank/v1beta1/query").QuerySupplyOfResponse>({ request, options }: _CosmosBankV1beta1Queryrpc.UseSupplyOfQuery<TData>) => any;
                useParams: <TData = import("./cosmos/bank/v1beta1/query").QueryParamsResponse>({ request, options }: _CosmosBankV1beta1Queryrpc.UseParamsQuery<TData>) => any;
                useDenomMetadata: <TData = import("./cosmos/bank/v1beta1/query").QueryDenomMetadataResponse>({ request, options }: _CosmosBankV1beta1Queryrpc.UseDenomMetadataQuery<TData>) => any;
                useDenomsMetadata: <TData = import("./cosmos/bank/v1beta1/query").QueryDenomsMetadataResponse>({ request, options }: _CosmosBankV1beta1Queryrpc.UseDenomsMetadataQuery<TData>) => any;
                useDenomOwners: <TData = import("./cosmos/bank/v1beta1/query").QueryDenomOwnersResponse>({ request, options }: _CosmosBankV1beta1Queryrpc.UseDenomOwnersQuery<TData>) => any;
            };
        };
        base: {
            tendermint: {
                v1beta1: {
                    useGetNodeInfo: <TData = import("./cosmos/base/tendermint/v1beta1/query").GetNodeInfoResponse>({ request, options }: _CosmosBaseTendermintV1beta1Queryrpc.UseGetNodeInfoQuery<TData>) => any;
                    useGetSyncing: <TData = import("./cosmos/base/tendermint/v1beta1/query").GetSyncingResponse>({ request, options }: _CosmosBaseTendermintV1beta1Queryrpc.UseGetSyncingQuery<TData>) => any;
                    useGetLatestBlock: <TData = import("./cosmos/base/tendermint/v1beta1/query").GetLatestBlockResponse>({ request, options }: _CosmosBaseTendermintV1beta1Queryrpc.UseGetLatestBlockQuery<TData>) => any;
                    useGetBlockByHeight: <TData = import("./cosmos/base/tendermint/v1beta1/query").GetBlockByHeightResponse>({ request, options }: _CosmosBaseTendermintV1beta1Queryrpc.UseGetBlockByHeightQuery<TData>) => any;
                    useGetLatestValidatorSet: <TData = import("./cosmos/base/tendermint/v1beta1/query").GetLatestValidatorSetResponse>({ request, options }: _CosmosBaseTendermintV1beta1Queryrpc.UseGetLatestValidatorSetQuery<TData>) => any;
                    useGetValidatorSetByHeight: <TData = import("./cosmos/base/tendermint/v1beta1/query").GetValidatorSetByHeightResponse>({ request, options }: _CosmosBaseTendermintV1beta1Queryrpc.UseGetValidatorSetByHeightQuery<TData>) => any;
                };
            };
        };
        distribution: {
            v1beta1: {
                useParams: <TData = import("./cosmos/distribution/v1beta1/query").QueryParamsResponse>({ request, options }: _CosmosDistributionV1beta1Queryrpc.UseParamsQuery<TData>) => any;
                useValidatorOutstandingRewards: <TData = import("./cosmos/distribution/v1beta1/query").QueryValidatorOutstandingRewardsResponse>({ request, options }: _CosmosDistributionV1beta1Queryrpc.UseValidatorOutstandingRewardsQuery<TData>) => any;
                useValidatorCommission: <TData = import("./cosmos/distribution/v1beta1/query").QueryValidatorCommissionResponse>({ request, options }: _CosmosDistributionV1beta1Queryrpc.UseValidatorCommissionQuery<TData>) => any;
                useValidatorSlashes: <TData = import("./cosmos/distribution/v1beta1/query").QueryValidatorSlashesResponse>({ request, options }: _CosmosDistributionV1beta1Queryrpc.UseValidatorSlashesQuery<TData>) => any;
                useDelegationRewards: <TData = import("./cosmos/distribution/v1beta1/query").QueryDelegationRewardsResponse>({ request, options }: _CosmosDistributionV1beta1Queryrpc.UseDelegationRewardsQuery<TData>) => any;
                useDelegationTotalRewards: <TData = import("./cosmos/distribution/v1beta1/query").QueryDelegationTotalRewardsResponse>({ request, options }: _CosmosDistributionV1beta1Queryrpc.UseDelegationTotalRewardsQuery<TData>) => any;
                useDelegatorValidators: <TData = import("./cosmos/distribution/v1beta1/query").QueryDelegatorValidatorsResponse>({ request, options }: _CosmosDistributionV1beta1Queryrpc.UseDelegatorValidatorsQuery<TData>) => any;
                useDelegatorWithdrawAddress: <TData = import("./cosmos/distribution/v1beta1/query").QueryDelegatorWithdrawAddressResponse>({ request, options }: _CosmosDistributionV1beta1Queryrpc.UseDelegatorWithdrawAddressQuery<TData>) => any;
                useCommunityPool: <TData = import("./cosmos/distribution/v1beta1/query").QueryCommunityPoolResponse>({ request, options }: _CosmosDistributionV1beta1Queryrpc.UseCommunityPoolQuery<TData>) => any;
            };
        };
        evidence: {
            v1beta1: {
                useEvidence: <TData = import("./cosmos/evidence/v1beta1/query").QueryEvidenceResponse>({ request, options }: _CosmosEvidenceV1beta1Queryrpc.UseEvidenceQuery<TData>) => any;
                useAllEvidence: <TData = import("./cosmos/evidence/v1beta1/query").QueryAllEvidenceResponse>({ request, options }: _CosmosEvidenceV1beta1Queryrpc.UseAllEvidenceQuery<TData>) => any;
            };
        };
        feegrant: {
            v1beta1: {
                useAllowance: <TData = import("./cosmos/feegrant/v1beta1/query").QueryAllowanceResponse>({ request, options }: _CosmosFeegrantV1beta1Queryrpc.UseAllowanceQuery<TData>) => any;
                useAllowances: <TData = import("./cosmos/feegrant/v1beta1/query").QueryAllowancesResponse>({ request, options }: _CosmosFeegrantV1beta1Queryrpc.UseAllowancesQuery<TData>) => any;
                useAllowancesByGranter: <TData = import("./cosmos/feegrant/v1beta1/query").QueryAllowancesByGranterResponse>({ request, options }: _CosmosFeegrantV1beta1Queryrpc.UseAllowancesByGranterQuery<TData>) => any;
            };
        };
        gov: {
            v1: {
                useProposal: <TData = import("./cosmos/gov/v1/query").QueryProposalResponse>({ request, options }: _CosmosGovV1Queryrpc.UseProposalQuery<TData>) => any;
                useProposals: <TData = import("./cosmos/gov/v1/query").QueryProposalsResponse>({ request, options }: _CosmosGovV1Queryrpc.UseProposalsQuery<TData>) => any;
                useVote: <TData = import("./cosmos/gov/v1/query").QueryVoteResponse>({ request, options }: _CosmosGovV1Queryrpc.UseVoteQuery<TData>) => any;
                useVotes: <TData = import("./cosmos/gov/v1/query").QueryVotesResponse>({ request, options }: _CosmosGovV1Queryrpc.UseVotesQuery<TData>) => any;
                useParams: <TData = import("./cosmos/gov/v1/query").QueryParamsResponse>({ request, options }: _CosmosGovV1Queryrpc.UseParamsQuery<TData>) => any;
                useDeposit: <TData = import("./cosmos/gov/v1/query").QueryDepositResponse>({ request, options }: _CosmosGovV1Queryrpc.UseDepositQuery<TData>) => any;
                useDeposits: <TData = import("./cosmos/gov/v1/query").QueryDepositsResponse>({ request, options }: _CosmosGovV1Queryrpc.UseDepositsQuery<TData>) => any;
                useTallyResult: <TData = import("./cosmos/gov/v1/query").QueryTallyResultResponse>({ request, options }: _CosmosGovV1Queryrpc.UseTallyResultQuery<TData>) => any;
            };
            v1beta1: {
                useProposal: <TData = import("./cosmos/gov/v1beta1/query").QueryProposalResponse>({ request, options }: _CosmosGovV1beta1Queryrpc.UseProposalQuery<TData>) => any;
                useProposals: <TData = import("./cosmos/gov/v1beta1/query").QueryProposalsResponse>({ request, options }: _CosmosGovV1beta1Queryrpc.UseProposalsQuery<TData>) => any;
                useVote: <TData = import("./cosmos/gov/v1beta1/query").QueryVoteResponse>({ request, options }: _CosmosGovV1beta1Queryrpc.UseVoteQuery<TData>) => any;
                useVotes: <TData = import("./cosmos/gov/v1beta1/query").QueryVotesResponse>({ request, options }: _CosmosGovV1beta1Queryrpc.UseVotesQuery<TData>) => any;
                useParams: <TData = import("./cosmos/gov/v1beta1/query").QueryParamsResponse>({ request, options }: _CosmosGovV1beta1Queryrpc.UseParamsQuery<TData>) => any;
                useDeposit: <TData = import("./cosmos/gov/v1beta1/query").QueryDepositResponse>({ request, options }: _CosmosGovV1beta1Queryrpc.UseDepositQuery<TData>) => any;
                useDeposits: <TData = import("./cosmos/gov/v1beta1/query").QueryDepositsResponse>({ request, options }: _CosmosGovV1beta1Queryrpc.UseDepositsQuery<TData>) => any;
                useTallyResult: <TData = import("./cosmos/gov/v1beta1/query").QueryTallyResultResponse>({ request, options }: _CosmosGovV1beta1Queryrpc.UseTallyResultQuery<TData>) => any;
            };
        };
        group: {
            v1: {
                useGroupInfo: <TData = import("./cosmos/group/v1/query").QueryGroupInfoResponse>({ request, options }: _CosmosGroupV1Queryrpc.UseGroupInfoQuery<TData>) => any;
                useGroupPolicyInfo: <TData = import("./cosmos/group/v1/query").QueryGroupPolicyInfoResponse>({ request, options }: _CosmosGroupV1Queryrpc.UseGroupPolicyInfoQuery<TData>) => any;
                useGroupMembers: <TData = import("./cosmos/group/v1/query").QueryGroupMembersResponse>({ request, options }: _CosmosGroupV1Queryrpc.UseGroupMembersQuery<TData>) => any;
                useGroupsByAdmin: <TData = import("./cosmos/group/v1/query").QueryGroupsByAdminResponse>({ request, options }: _CosmosGroupV1Queryrpc.UseGroupsByAdminQuery<TData>) => any;
                useGroupPoliciesByGroup: <TData = import("./cosmos/group/v1/query").QueryGroupPoliciesByGroupResponse>({ request, options }: _CosmosGroupV1Queryrpc.UseGroupPoliciesByGroupQuery<TData>) => any;
                useGroupPoliciesByAdmin: <TData = import("./cosmos/group/v1/query").QueryGroupPoliciesByAdminResponse>({ request, options }: _CosmosGroupV1Queryrpc.UseGroupPoliciesByAdminQuery<TData>) => any;
                useProposal: <TData = import("./cosmos/group/v1/query").QueryProposalResponse>({ request, options }: _CosmosGroupV1Queryrpc.UseProposalQuery<TData>) => any;
                useProposalsByGroupPolicy: <TData = import("./cosmos/group/v1/query").QueryProposalsByGroupPolicyResponse>({ request, options }: _CosmosGroupV1Queryrpc.UseProposalsByGroupPolicyQuery<TData>) => any;
                useVoteByProposalVoter: <TData = import("./cosmos/group/v1/query").QueryVoteByProposalVoterResponse>({ request, options }: _CosmosGroupV1Queryrpc.UseVoteByProposalVoterQuery<TData>) => any;
                useVotesByProposal: <TData = import("./cosmos/group/v1/query").QueryVotesByProposalResponse>({ request, options }: _CosmosGroupV1Queryrpc.UseVotesByProposalQuery<TData>) => any;
                useVotesByVoter: <TData = import("./cosmos/group/v1/query").QueryVotesByVoterResponse>({ request, options }: _CosmosGroupV1Queryrpc.UseVotesByVoterQuery<TData>) => any;
                useGroupsByMember: <TData = import("./cosmos/group/v1/query").QueryGroupsByMemberResponse>({ request, options }: _CosmosGroupV1Queryrpc.UseGroupsByMemberQuery<TData>) => any;
                useTallyResult: <TData = import("./cosmos/group/v1/query").QueryTallyResultResponse>({ request, options }: _CosmosGroupV1Queryrpc.UseTallyResultQuery<TData>) => any;
            };
        };
        slashing: {
            v1beta1: {
                useParams: <TData = import("./cosmos/slashing/v1beta1/query").QueryParamsResponse>({ request, options }: _CosmosSlashingV1beta1Queryrpc.UseParamsQuery<TData>) => any;
                useSigningInfo: <TData = import("./cosmos/slashing/v1beta1/query").QuerySigningInfoResponse>({ request, options }: _CosmosSlashingV1beta1Queryrpc.UseSigningInfoQuery<TData>) => any;
                useSigningInfos: <TData = import("./cosmos/slashing/v1beta1/query").QuerySigningInfosResponse>({ request, options }: _CosmosSlashingV1beta1Queryrpc.UseSigningInfosQuery<TData>) => any;
            };
        };
        staking: {
            v1beta1: {
                useValidators: <TData = import("./cosmos/staking/v1beta1/query").QueryValidatorsResponse>({ request, options }: _CosmosStakingV1beta1Queryrpc.UseValidatorsQuery<TData>) => any;
                useValidator: <TData = import("./cosmos/staking/v1beta1/query").QueryValidatorResponse>({ request, options }: _CosmosStakingV1beta1Queryrpc.UseValidatorQuery<TData>) => any;
                useValidatorDelegations: <TData = import("./cosmos/staking/v1beta1/query").QueryValidatorDelegationsResponse>({ request, options }: _CosmosStakingV1beta1Queryrpc.UseValidatorDelegationsQuery<TData>) => any;
                useValidatorUnbondingDelegations: <TData = import("./cosmos/staking/v1beta1/query").QueryValidatorUnbondingDelegationsResponse>({ request, options }: _CosmosStakingV1beta1Queryrpc.UseValidatorUnbondingDelegationsQuery<TData>) => any;
                useDelegation: <TData = import("./cosmos/staking/v1beta1/query").QueryDelegationResponse>({ request, options }: _CosmosStakingV1beta1Queryrpc.UseDelegationQuery<TData>) => any;
                useUnbondingDelegation: <TData = import("./cosmos/staking/v1beta1/query").QueryUnbondingDelegationResponse>({ request, options }: _CosmosStakingV1beta1Queryrpc.UseUnbondingDelegationQuery<TData>) => any;
                useDelegatorDelegations: <TData = import("./cosmos/staking/v1beta1/query").QueryDelegatorDelegationsResponse>({ request, options }: _CosmosStakingV1beta1Queryrpc.UseDelegatorDelegationsQuery<TData>) => any;
                useDelegatorUnbondingDelegations: <TData = import("./cosmos/staking/v1beta1/query").QueryDelegatorUnbondingDelegationsResponse>({ request, options }: _CosmosStakingV1beta1Queryrpc.UseDelegatorUnbondingDelegationsQuery<TData>) => any;
                useRedelegations: <TData = import("./cosmos/staking/v1beta1/query").QueryRedelegationsResponse>({ request, options }: _CosmosStakingV1beta1Queryrpc.UseRedelegationsQuery<TData>) => any;
                useDelegatorValidators: <TData = import("./cosmos/staking/v1beta1/query").QueryDelegatorValidatorsResponse>({ request, options }: _CosmosStakingV1beta1Queryrpc.UseDelegatorValidatorsQuery<TData>) => any;
                useDelegatorValidator: <TData = import("./cosmos/staking/v1beta1/query").QueryDelegatorValidatorResponse>({ request, options }: _CosmosStakingV1beta1Queryrpc.UseDelegatorValidatorQuery<TData>) => any;
                useHistoricalInfo: <TData = import("./cosmos/staking/v1beta1/query").QueryHistoricalInfoResponse>({ request, options }: _CosmosStakingV1beta1Queryrpc.UseHistoricalInfoQuery<TData>) => any;
                usePool: <TData = import("./cosmos/staking/v1beta1/query").QueryPoolResponse>({ request, options }: _CosmosStakingV1beta1Queryrpc.UsePoolQuery<TData>) => any;
                useParams: <TData = import("./cosmos/staking/v1beta1/query").QueryParamsResponse>({ request, options }: _CosmosStakingV1beta1Queryrpc.UseParamsQuery<TData>) => any;
            };
        };
        tx: {
            v1beta1: {
                useSimulate: <TData = import("./cosmos/tx/v1beta1/service").SimulateResponse>({ request, options }: _CosmosTxV1beta1Servicerpc.UseSimulateQuery<TData>) => any;
                useGetTx: <TData = import("./cosmos/tx/v1beta1/service").GetTxResponse>({ request, options }: _CosmosTxV1beta1Servicerpc.UseGetTxQuery<TData>) => any;
                useBroadcastTx: <TData = import("./cosmos/tx/v1beta1/service").BroadcastTxResponse>({ request, options }: _CosmosTxV1beta1Servicerpc.UseBroadcastTxQuery<TData>) => any;
                useGetTxsEvent: <TData = import("./cosmos/tx/v1beta1/service").GetTxsEventResponse>({ request, options }: _CosmosTxV1beta1Servicerpc.UseGetTxsEventQuery<TData>) => any;
                useGetBlockWithTxs: <TData = import("./cosmos/tx/v1beta1/service").GetBlockWithTxsResponse>({ request, options }: _CosmosTxV1beta1Servicerpc.UseGetBlockWithTxsQuery<TData>) => any;
            };
        };
        upgrade: {
            v1beta1: {
                useCurrentPlan: <TData = import("./cosmos/upgrade/v1beta1/query").QueryCurrentPlanResponse>({ request, options }: _CosmosUpgradeV1beta1Queryrpc.UseCurrentPlanQuery<TData>) => any;
                useAppliedPlan: <TData = import("./cosmos/upgrade/v1beta1/query").QueryAppliedPlanResponse>({ request, options }: _CosmosUpgradeV1beta1Queryrpc.UseAppliedPlanQuery<TData>) => any;
                useUpgradedConsensusState: <TData = import("./cosmos/upgrade/v1beta1/query").QueryUpgradedConsensusStateResponse>({ request, options }: _CosmosUpgradeV1beta1Queryrpc.UseUpgradedConsensusStateQuery<TData>) => any;
                useModuleVersions: <TData = import("./cosmos/upgrade/v1beta1/query").QueryModuleVersionsResponse>({ request, options }: _CosmosUpgradeV1beta1Queryrpc.UseModuleVersionsQuery<TData>) => any;
                useAuthority: <TData = import("./cosmos/upgrade/v1beta1/query").QueryAuthorityResponse>({ request, options }: _CosmosUpgradeV1beta1Queryrpc.UseAuthorityQuery<TData>) => any;
            };
        };
    };
    ibc: {
        applications: {
            transfer: {
                v1: {
                    useDenomTrace: <TData = import("./ibc/applications/transfer/v1/query").QueryDenomTraceResponse>({ request, options }: _IbcApplicationsTransferV1Queryrpc.UseDenomTraceQuery<TData>) => any;
                    useDenomTraces: <TData = import("./ibc/applications/transfer/v1/query").QueryDenomTracesResponse>({ request, options }: _IbcApplicationsTransferV1Queryrpc.UseDenomTracesQuery<TData>) => any;
                    useParams: <TData = import("./ibc/applications/transfer/v1/query").QueryParamsResponse>({ request, options }: _IbcApplicationsTransferV1Queryrpc.UseParamsQuery<TData>) => any;
                };
            };
        };
        core: {
            channel: {
                v1: {
                    useChannel: <TData = import("./ibc/core/channel/v1/query").QueryChannelResponse>({ request, options }: _IbcCoreChannelV1Queryrpc.UseChannelQuery<TData>) => any;
                    useChannels: <TData = import("./ibc/core/channel/v1/query").QueryChannelsResponse>({ request, options }: _IbcCoreChannelV1Queryrpc.UseChannelsQuery<TData>) => any;
                    useConnectionChannels: <TData = import("./ibc/core/channel/v1/query").QueryConnectionChannelsResponse>({ request, options }: _IbcCoreChannelV1Queryrpc.UseConnectionChannelsQuery<TData>) => any;
                    useChannelClientState: <TData = import("./ibc/core/channel/v1/query").QueryChannelClientStateResponse>({ request, options }: _IbcCoreChannelV1Queryrpc.UseChannelClientStateQuery<TData>) => any;
                    useChannelConsensusState: <TData = import("./ibc/core/channel/v1/query").QueryChannelConsensusStateResponse>({ request, options }: _IbcCoreChannelV1Queryrpc.UseChannelConsensusStateQuery<TData>) => any;
                    usePacketCommitment: <TData = import("./ibc/core/channel/v1/query").QueryPacketCommitmentResponse>({ request, options }: _IbcCoreChannelV1Queryrpc.UsePacketCommitmentQuery<TData>) => any;
                    usePacketCommitments: <TData = import("./ibc/core/channel/v1/query").QueryPacketCommitmentsResponse>({ request, options }: _IbcCoreChannelV1Queryrpc.UsePacketCommitmentsQuery<TData>) => any;
                    usePacketReceipt: <TData = import("./ibc/core/channel/v1/query").QueryPacketReceiptResponse>({ request, options }: _IbcCoreChannelV1Queryrpc.UsePacketReceiptQuery<TData>) => any;
                    usePacketAcknowledgement: <TData = import("./ibc/core/channel/v1/query").QueryPacketAcknowledgementResponse>({ request, options }: _IbcCoreChannelV1Queryrpc.UsePacketAcknowledgementQuery<TData>) => any;
                    usePacketAcknowledgements: <TData = import("./ibc/core/channel/v1/query").QueryPacketAcknowledgementsResponse>({ request, options }: _IbcCoreChannelV1Queryrpc.UsePacketAcknowledgementsQuery<TData>) => any;
                    useUnreceivedPackets: <TData = import("./ibc/core/channel/v1/query").QueryUnreceivedPacketsResponse>({ request, options }: _IbcCoreChannelV1Queryrpc.UseUnreceivedPacketsQuery<TData>) => any;
                    useUnreceivedAcks: <TData = import("./ibc/core/channel/v1/query").QueryUnreceivedAcksResponse>({ request, options }: _IbcCoreChannelV1Queryrpc.UseUnreceivedAcksQuery<TData>) => any;
                    useNextSequenceReceive: <TData = import("./ibc/core/channel/v1/query").QueryNextSequenceReceiveResponse>({ request, options }: _IbcCoreChannelV1Queryrpc.UseNextSequenceReceiveQuery<TData>) => any;
                };
            };
            client: {
                v1: {
                    useClientState: <TData = import("./ibc/core/client/v1/query").QueryClientStateResponse>({ request, options }: _IbcCoreClientV1Queryrpc.UseClientStateQuery<TData>) => any;
                    useClientStates: <TData = import("./ibc/core/client/v1/query").QueryClientStatesResponse>({ request, options }: _IbcCoreClientV1Queryrpc.UseClientStatesQuery<TData>) => any;
                    useConsensusState: <TData = import("./ibc/core/client/v1/query").QueryConsensusStateResponse>({ request, options }: _IbcCoreClientV1Queryrpc.UseConsensusStateQuery<TData>) => any;
                    useConsensusStates: <TData = import("./ibc/core/client/v1/query").QueryConsensusStatesResponse>({ request, options }: _IbcCoreClientV1Queryrpc.UseConsensusStatesQuery<TData>) => any;
                    useClientStatus: <TData = import("./ibc/core/client/v1/query").QueryClientStatusResponse>({ request, options }: _IbcCoreClientV1Queryrpc.UseClientStatusQuery<TData>) => any;
                    useClientParams: <TData = import("./ibc/core/client/v1/query").QueryClientParamsResponse>({ request, options }: _IbcCoreClientV1Queryrpc.UseClientParamsQuery<TData>) => any;
                    useUpgradedClientState: <TData = import("./ibc/core/client/v1/query").QueryUpgradedClientStateResponse>({ request, options }: _IbcCoreClientV1Queryrpc.UseUpgradedClientStateQuery<TData>) => any;
                    useUpgradedConsensusState: <TData = import("./ibc/core/client/v1/query").QueryUpgradedConsensusStateResponse>({ request, options }: _IbcCoreClientV1Queryrpc.UseUpgradedConsensusStateQuery<TData>) => any;
                };
            };
            connection: {
                v1: {
                    useConnection: <TData = import("./ibc/core/connection/v1/query").QueryConnectionResponse>({ request, options }: _IbcCoreConnectionV1Queryrpc.UseConnectionQuery<TData>) => any;
                    useConnections: <TData = import("./ibc/core/connection/v1/query").QueryConnectionsResponse>({ request, options }: _IbcCoreConnectionV1Queryrpc.UseConnectionsQuery<TData>) => any;
                    useClientConnections: <TData = import("./ibc/core/connection/v1/query").QueryClientConnectionsResponse>({ request, options }: _IbcCoreConnectionV1Queryrpc.UseClientConnectionsQuery<TData>) => any;
                    useConnectionClientState: <TData = import("./ibc/core/connection/v1/query").QueryConnectionClientStateResponse>({ request, options }: _IbcCoreConnectionV1Queryrpc.UseConnectionClientStateQuery<TData>) => any;
                    useConnectionConsensusState: <TData = import("./ibc/core/connection/v1/query").QueryConnectionConsensusStateResponse>({ request, options }: _IbcCoreConnectionV1Queryrpc.UseConnectionConsensusStateQuery<TData>) => any;
                };
            };
        };
    };
};

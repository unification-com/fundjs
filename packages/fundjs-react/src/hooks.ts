//@ts-nocheck
import { ProtobufRpcClient } from "@cosmjs/stargate";
import * as _CosmosAuthV1beta1Queryrpc from "./cosmos/auth/v1beta1/query.rpc.Query";
import * as _CosmosAuthzV1beta1Queryrpc from "./cosmos/authz/v1beta1/query.rpc.Query";
import * as _CosmosBankV1beta1Queryrpc from "./cosmos/bank/v1beta1/query.rpc.Query";
import * as _CosmosBaseNodeV1beta1Queryrpc from "./cosmos/base/node/v1beta1/query.rpc.Service";
import * as _CosmosBaseTendermintV1beta1Queryrpc from "./cosmos/base/tendermint/v1beta1/query.rpc.Service";
import * as _CosmosCircuitV1Queryrpc from "./cosmos/circuit/v1/query.rpc.Query";
import * as _CosmosConsensusV1Queryrpc from "./cosmos/consensus/v1/query.rpc.Query";
import * as _CosmosCounterV1Queryrpc from "./cosmos/counter/v1/query.rpc.Query";
import * as _CosmosDistributionV1beta1Queryrpc from "./cosmos/distribution/v1beta1/query.rpc.Query";
import * as _CosmosEpochsV1beta1Queryrpc from "./cosmos/epochs/v1beta1/query.rpc.Query";
import * as _CosmosEvidenceV1beta1Queryrpc from "./cosmos/evidence/v1beta1/query.rpc.Query";
import * as _CosmosFeegrantV1beta1Queryrpc from "./cosmos/feegrant/v1beta1/query.rpc.Query";
import * as _CosmosGovV1Queryrpc from "./cosmos/gov/v1/query.rpc.Query";
import * as _CosmosGovV1beta1Queryrpc from "./cosmos/gov/v1beta1/query.rpc.Query";
import * as _CosmosGroupV1Queryrpc from "./cosmos/group/v1/query.rpc.Query";
import * as _CosmosOrmQueryV1alpha1Queryrpc from "./cosmos/orm/query/v1alpha1/query.rpc.Query";
import * as _CosmosProtocolpoolV1Queryrpc from "./cosmos/protocolpool/v1/query.rpc.Query";
import * as _CosmosSlashingV1beta1Queryrpc from "./cosmos/slashing/v1beta1/query.rpc.Query";
import * as _CosmosStakingV1beta1Queryrpc from "./cosmos/staking/v1beta1/query.rpc.Query";
import * as _CosmosTxV1beta1Servicerpc from "./cosmos/tx/v1beta1/service.rpc.Service";
import * as _CosmosUpgradeV1beta1Queryrpc from "./cosmos/upgrade/v1beta1/query.rpc.Query";
import * as _IbcApplicationsFeeV1Queryrpc from "./ibc/applications/fee/v1/query.rpc.Query";
import * as _IbcApplicationsInterchainAccountsControllerV1Queryrpc from "./ibc/applications/interchain_accounts/controller/v1/query.rpc.Query";
import * as _IbcApplicationsInterchainAccountsHostV1Queryrpc from "./ibc/applications/interchain_accounts/host/v1/query.rpc.Query";
import * as _IbcApplicationsTransferV1Queryrpc from "./ibc/applications/transfer/v1/query.rpc.Query";
import * as _IbcCoreChannelV1Queryrpc from "./ibc/core/channel/v1/query.rpc.Query";
import * as _IbcCoreClientV1Queryrpc from "./ibc/core/client/v1/query.rpc.Query";
import * as _IbcCoreConnectionV1Queryrpc from "./ibc/core/connection/v1/query.rpc.Query";
import * as _IbcLightclientsWasmV1Queryrpc from "./ibc/lightclients/wasm/v1/query.rpc.Query";
import * as _MainchainBeaconV1Queryrpc from "./mainchain/beacon/v1/query.rpc.Query";
import * as _MainchainEnterpriseV1Queryrpc from "./mainchain/enterprise/v1/query.rpc.Query";
import * as _MainchainStreamV1Queryrpc from "./mainchain/stream/v1/query.rpc.Query";
import * as _MainchainWrkchainV1Queryrpc from "./mainchain/wrkchain/v1/query.rpc.Query";
export const createRpcQueryHooks = ({
  rpc
}: {
  rpc: ProtobufRpcClient | undefined;
}) => {
  return {
    cosmos: {
      auth: {
        v1beta1: _CosmosAuthV1beta1Queryrpc.createRpcQueryHooks(rpc)
      },
      authz: {
        v1beta1: _CosmosAuthzV1beta1Queryrpc.createRpcQueryHooks(rpc)
      },
      bank: {
        v1beta1: _CosmosBankV1beta1Queryrpc.createRpcQueryHooks(rpc)
      },
      base: {
        node: {
          v1beta1: _CosmosBaseNodeV1beta1Queryrpc.createRpcQueryHooks(rpc)
        },
        tendermint: {
          v1beta1: _CosmosBaseTendermintV1beta1Queryrpc.createRpcQueryHooks(rpc)
        }
      },
      circuit: {
        v1: _CosmosCircuitV1Queryrpc.createRpcQueryHooks(rpc)
      },
      consensus: {
        v1: _CosmosConsensusV1Queryrpc.createRpcQueryHooks(rpc)
      },
      counter: {
        v1: _CosmosCounterV1Queryrpc.createRpcQueryHooks(rpc)
      },
      distribution: {
        v1beta1: _CosmosDistributionV1beta1Queryrpc.createRpcQueryHooks(rpc)
      },
      epochs: {
        v1beta1: _CosmosEpochsV1beta1Queryrpc.createRpcQueryHooks(rpc)
      },
      evidence: {
        v1beta1: _CosmosEvidenceV1beta1Queryrpc.createRpcQueryHooks(rpc)
      },
      feegrant: {
        v1beta1: _CosmosFeegrantV1beta1Queryrpc.createRpcQueryHooks(rpc)
      },
      gov: {
        v1: _CosmosGovV1Queryrpc.createRpcQueryHooks(rpc),
        v1beta1: _CosmosGovV1beta1Queryrpc.createRpcQueryHooks(rpc)
      },
      group: {
        v1: _CosmosGroupV1Queryrpc.createRpcQueryHooks(rpc)
      },
      orm: {
        query: {
          v1alpha1: _CosmosOrmQueryV1alpha1Queryrpc.createRpcQueryHooks(rpc)
        }
      },
      protocolpool: {
        v1: _CosmosProtocolpoolV1Queryrpc.createRpcQueryHooks(rpc)
      },
      slashing: {
        v1beta1: _CosmosSlashingV1beta1Queryrpc.createRpcQueryHooks(rpc)
      },
      staking: {
        v1beta1: _CosmosStakingV1beta1Queryrpc.createRpcQueryHooks(rpc)
      },
      tx: {
        v1beta1: _CosmosTxV1beta1Servicerpc.createRpcQueryHooks(rpc)
      },
      upgrade: {
        v1beta1: _CosmosUpgradeV1beta1Queryrpc.createRpcQueryHooks(rpc)
      }
    },
    ibc: {
      applications: {
        fee: {
          v1: _IbcApplicationsFeeV1Queryrpc.createRpcQueryHooks(rpc)
        },
        interchain_accounts: {
          controller: {
            v1: _IbcApplicationsInterchainAccountsControllerV1Queryrpc.createRpcQueryHooks(rpc)
          },
          host: {
            v1: _IbcApplicationsInterchainAccountsHostV1Queryrpc.createRpcQueryHooks(rpc)
          }
        },
        transfer: {
          v1: _IbcApplicationsTransferV1Queryrpc.createRpcQueryHooks(rpc)
        }
      },
      core: {
        channel: {
          v1: _IbcCoreChannelV1Queryrpc.createRpcQueryHooks(rpc)
        },
        client: {
          v1: _IbcCoreClientV1Queryrpc.createRpcQueryHooks(rpc)
        },
        connection: {
          v1: _IbcCoreConnectionV1Queryrpc.createRpcQueryHooks(rpc)
        }
      },
      lightclients: {
        wasm: {
          v1: _IbcLightclientsWasmV1Queryrpc.createRpcQueryHooks(rpc)
        }
      }
    },
    mainchain: {
      beacon: {
        v1: _MainchainBeaconV1Queryrpc.createRpcQueryHooks(rpc)
      },
      enterprise: {
        v1: _MainchainEnterpriseV1Queryrpc.createRpcQueryHooks(rpc)
      },
      stream: {
        v1: _MainchainStreamV1Queryrpc.createRpcQueryHooks(rpc)
      },
      wrkchain: {
        v1: _MainchainWrkchainV1Queryrpc.createRpcQueryHooks(rpc)
      }
    }
  };
};
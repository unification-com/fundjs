"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRpcQueryHooks = void 0;
const _MainchainBeaconV1Queryrpc = __importStar(require("./mainchain/beacon/v1/query.rpc.Query"));
const _MainchainEnterpriseV1Queryrpc = __importStar(require("./mainchain/enterprise/v1/query.rpc.Query"));
const _MainchainStreamV1Queryrpc = __importStar(require("./mainchain/stream/v1/query.rpc.Query"));
const _MainchainWrkchainV1Queryrpc = __importStar(require("./mainchain/wrkchain/v1/query.rpc.Query"));
const _CosmosAuthV1beta1Queryrpc = __importStar(require("./cosmos/auth/v1beta1/query.rpc.Query"));
const _CosmosAuthzV1beta1Queryrpc = __importStar(require("./cosmos/authz/v1beta1/query.rpc.Query"));
const _CosmosBankV1beta1Queryrpc = __importStar(require("./cosmos/bank/v1beta1/query.rpc.Query"));
const _CosmosBaseTendermintV1beta1Queryrpc = __importStar(require("./cosmos/base/tendermint/v1beta1/query.rpc.Service"));
const _CosmosDistributionV1beta1Queryrpc = __importStar(require("./cosmos/distribution/v1beta1/query.rpc.Query"));
const _CosmosEvidenceV1beta1Queryrpc = __importStar(require("./cosmos/evidence/v1beta1/query.rpc.Query"));
const _CosmosFeegrantV1beta1Queryrpc = __importStar(require("./cosmos/feegrant/v1beta1/query.rpc.Query"));
const _CosmosGovV1Queryrpc = __importStar(require("./cosmos/gov/v1/query.rpc.Query"));
const _CosmosGovV1beta1Queryrpc = __importStar(require("./cosmos/gov/v1beta1/query.rpc.Query"));
const _CosmosGroupV1Queryrpc = __importStar(require("./cosmos/group/v1/query.rpc.Query"));
const _CosmosSlashingV1beta1Queryrpc = __importStar(require("./cosmos/slashing/v1beta1/query.rpc.Query"));
const _CosmosStakingV1beta1Queryrpc = __importStar(require("./cosmos/staking/v1beta1/query.rpc.Query"));
const _CosmosTxV1beta1Servicerpc = __importStar(require("./cosmos/tx/v1beta1/service.rpc.Service"));
const _CosmosUpgradeV1beta1Queryrpc = __importStar(require("./cosmos/upgrade/v1beta1/query.rpc.Query"));
const _IbcApplicationsTransferV1Queryrpc = __importStar(require("./ibc/applications/transfer/v1/query.rpc.Query"));
const _IbcCoreChannelV1Queryrpc = __importStar(require("./ibc/core/channel/v1/query.rpc.Query"));
const _IbcCoreClientV1Queryrpc = __importStar(require("./ibc/core/client/v1/query.rpc.Query"));
const _IbcCoreConnectionV1Queryrpc = __importStar(require("./ibc/core/connection/v1/query.rpc.Query"));
const createRpcQueryHooks = ({ rpc }) => {
    return {
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
        },
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
                tendermint: {
                    v1beta1: _CosmosBaseTendermintV1beta1Queryrpc.createRpcQueryHooks(rpc)
                }
            },
            distribution: {
                v1beta1: _CosmosDistributionV1beta1Queryrpc.createRpcQueryHooks(rpc)
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
            }
        }
    };
};
exports.createRpcQueryHooks = createRpcQueryHooks;

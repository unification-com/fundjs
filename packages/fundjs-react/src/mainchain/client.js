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
exports.getSigningMainchainClient = exports.getSigningMainchainClientOptions = exports.mainchainProtoRegistry = exports.mainchainAminoConverters = void 0;
//@ts-nocheck
const proto_signing_1 = require("@cosmjs/proto-signing");
const stargate_1 = require("@cosmjs/stargate");
const mainchainBeaconV1TxRegistry = __importStar(require("./beacon/v1/tx.registry"));
const mainchainEnterpriseV1TxRegistry = __importStar(require("./enterprise/v1/tx.registry"));
const mainchainStreamV1TxRegistry = __importStar(require("./stream/v1/tx.registry"));
const mainchainWrkchainV1TxRegistry = __importStar(require("./wrkchain/v1/tx.registry"));
const mainchainBeaconV1TxAmino = __importStar(require("./beacon/v1/tx.amino"));
const mainchainEnterpriseV1TxAmino = __importStar(require("./enterprise/v1/tx.amino"));
const mainchainStreamV1TxAmino = __importStar(require("./stream/v1/tx.amino"));
const mainchainWrkchainV1TxAmino = __importStar(require("./wrkchain/v1/tx.amino"));
exports.mainchainAminoConverters = {
    ...mainchainBeaconV1TxAmino.AminoConverter,
    ...mainchainEnterpriseV1TxAmino.AminoConverter,
    ...mainchainStreamV1TxAmino.AminoConverter,
    ...mainchainWrkchainV1TxAmino.AminoConverter
};
exports.mainchainProtoRegistry = [...mainchainBeaconV1TxRegistry.registry, ...mainchainEnterpriseV1TxRegistry.registry, ...mainchainStreamV1TxRegistry.registry, ...mainchainWrkchainV1TxRegistry.registry];
const getSigningMainchainClientOptions = ({ defaultTypes = stargate_1.defaultRegistryTypes } = {}) => {
    const registry = new proto_signing_1.Registry([...defaultTypes, ...exports.mainchainProtoRegistry]);
    const aminoTypes = new stargate_1.AminoTypes({
        ...exports.mainchainAminoConverters
    });
    return {
        registry,
        aminoTypes
    };
};
exports.getSigningMainchainClientOptions = getSigningMainchainClientOptions;
const getSigningMainchainClient = async ({ rpcEndpoint, signer, defaultTypes = stargate_1.defaultRegistryTypes }) => {
    const { registry, aminoTypes } = (0, exports.getSigningMainchainClientOptions)({
        defaultTypes
    });
    const client = await stargate_1.SigningStargateClient.connectWithSigner(rpcEndpoint, signer, {
        registry: registry,
        aminoTypes
    });
    return client;
};
exports.getSigningMainchainClient = getSigningMainchainClient;

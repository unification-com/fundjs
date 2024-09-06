import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
export declare const mainchainAminoConverters: {
    "/mainchain.wrkchain.v1.MsgRegisterWrkChain": {
        aminoType: string;
        toAmino: (message: import("./wrkchain/v1/tx").MsgRegisterWrkChain) => import("./wrkchain/v1/tx").MsgRegisterWrkChainAmino;
        fromAmino: (object: import("./wrkchain/v1/tx").MsgRegisterWrkChainAmino) => import("./wrkchain/v1/tx").MsgRegisterWrkChain;
    };
    "/mainchain.wrkchain.v1.MsgRecordWrkChainBlock": {
        aminoType: string;
        toAmino: (message: import("./wrkchain/v1/tx").MsgRecordWrkChainBlock) => import("./wrkchain/v1/tx").MsgRecordWrkChainBlockAmino;
        fromAmino: (object: import("./wrkchain/v1/tx").MsgRecordWrkChainBlockAmino) => import("./wrkchain/v1/tx").MsgRecordWrkChainBlock;
    };
    "/mainchain.wrkchain.v1.MsgPurchaseWrkChainStateStorage": {
        aminoType: string;
        toAmino: (message: import("./wrkchain/v1/tx").MsgPurchaseWrkChainStateStorage) => import("./wrkchain/v1/tx").MsgPurchaseWrkChainStateStorageAmino;
        fromAmino: (object: import("./wrkchain/v1/tx").MsgPurchaseWrkChainStateStorageAmino) => import("./wrkchain/v1/tx").MsgPurchaseWrkChainStateStorage;
    };
    "/mainchain.wrkchain.v1.MsgUpdateParams": {
        aminoType: string;
        toAmino: (message: import("./wrkchain/v1/tx").MsgUpdateParams) => import("./wrkchain/v1/tx").MsgUpdateParamsAmino;
        fromAmino: (object: import("./wrkchain/v1/tx").MsgUpdateParamsAmino) => import("./wrkchain/v1/tx").MsgUpdateParams;
    };
    "/mainchain.stream.v1.MsgCreateStream": {
        aminoType: string;
        toAmino: (message: import("./stream/v1/tx").MsgCreateStream) => import("./stream/v1/tx").MsgCreateStreamAmino;
        fromAmino: (object: import("./stream/v1/tx").MsgCreateStreamAmino) => import("./stream/v1/tx").MsgCreateStream;
    };
    "/mainchain.stream.v1.MsgClaimStream": {
        aminoType: string;
        toAmino: (message: import("./stream/v1/tx").MsgClaimStream) => import("./stream/v1/tx").MsgClaimStreamAmino;
        fromAmino: (object: import("./stream/v1/tx").MsgClaimStreamAmino) => import("./stream/v1/tx").MsgClaimStream;
    };
    "/mainchain.stream.v1.MsgTopUpDeposit": {
        aminoType: string;
        toAmino: (message: import("./stream/v1/tx").MsgTopUpDeposit) => import("./stream/v1/tx").MsgTopUpDepositAmino;
        fromAmino: (object: import("./stream/v1/tx").MsgTopUpDepositAmino) => import("./stream/v1/tx").MsgTopUpDeposit;
    };
    "/mainchain.stream.v1.MsgUpdateFlowRate": {
        aminoType: string;
        toAmino: (message: import("./stream/v1/tx").MsgUpdateFlowRate) => import("./stream/v1/tx").MsgUpdateFlowRateAmino;
        fromAmino: (object: import("./stream/v1/tx").MsgUpdateFlowRateAmino) => import("./stream/v1/tx").MsgUpdateFlowRate;
    };
    "/mainchain.stream.v1.MsgCancelStream": {
        aminoType: string;
        toAmino: (message: import("./stream/v1/tx").MsgCancelStream) => import("./stream/v1/tx").MsgCancelStreamAmino;
        fromAmino: (object: import("./stream/v1/tx").MsgCancelStreamAmino) => import("./stream/v1/tx").MsgCancelStream;
    };
    "/mainchain.stream.v1.MsgUpdateParams": {
        aminoType: string;
        toAmino: (message: import("./stream/v1/tx").MsgUpdateParams) => import("./stream/v1/tx").MsgUpdateParamsAmino;
        fromAmino: (object: import("./stream/v1/tx").MsgUpdateParamsAmino) => import("./stream/v1/tx").MsgUpdateParams;
    };
    "/mainchain.enterprise.v1.MsgUndPurchaseOrder": {
        aminoType: string;
        toAmino: (message: import("./enterprise/v1/tx").MsgUndPurchaseOrder) => import("./enterprise/v1/tx").MsgUndPurchaseOrderAmino;
        fromAmino: (object: import("./enterprise/v1/tx").MsgUndPurchaseOrderAmino) => import("./enterprise/v1/tx").MsgUndPurchaseOrder;
    };
    "/mainchain.enterprise.v1.MsgProcessUndPurchaseOrder": {
        aminoType: string;
        toAmino: (message: import("./enterprise/v1/tx").MsgProcessUndPurchaseOrder) => import("./enterprise/v1/tx").MsgProcessUndPurchaseOrderAmino;
        fromAmino: (object: import("./enterprise/v1/tx").MsgProcessUndPurchaseOrderAmino) => import("./enterprise/v1/tx").MsgProcessUndPurchaseOrder;
    };
    "/mainchain.enterprise.v1.MsgWhitelistAddress": {
        aminoType: string;
        toAmino: (message: import("./enterprise/v1/tx").MsgWhitelistAddress) => import("./enterprise/v1/tx").MsgWhitelistAddressAmino;
        fromAmino: (object: import("./enterprise/v1/tx").MsgWhitelistAddressAmino) => import("./enterprise/v1/tx").MsgWhitelistAddress;
    };
    "/mainchain.enterprise.v1.MsgUpdateParams": {
        aminoType: string;
        toAmino: (message: import("./enterprise/v1/tx").MsgUpdateParams) => import("./enterprise/v1/tx").MsgUpdateParamsAmino;
        fromAmino: (object: import("./enterprise/v1/tx").MsgUpdateParamsAmino) => import("./enterprise/v1/tx").MsgUpdateParams;
    };
    "/mainchain.beacon.v1.MsgRegisterBeacon": {
        aminoType: string;
        toAmino: (message: import("./beacon/v1/tx").MsgRegisterBeacon) => import("./beacon/v1/tx").MsgRegisterBeaconAmino;
        fromAmino: (object: import("./beacon/v1/tx").MsgRegisterBeaconAmino) => import("./beacon/v1/tx").MsgRegisterBeacon;
    };
    "/mainchain.beacon.v1.MsgRecordBeaconTimestamp": {
        aminoType: string;
        toAmino: (message: import("./beacon/v1/tx").MsgRecordBeaconTimestamp) => import("./beacon/v1/tx").MsgRecordBeaconTimestampAmino;
        fromAmino: (object: import("./beacon/v1/tx").MsgRecordBeaconTimestampAmino) => import("./beacon/v1/tx").MsgRecordBeaconTimestamp;
    };
    "/mainchain.beacon.v1.MsgPurchaseBeaconStateStorage": {
        aminoType: string;
        toAmino: (message: import("./beacon/v1/tx").MsgPurchaseBeaconStateStorage) => import("./beacon/v1/tx").MsgPurchaseBeaconStateStorageAmino;
        fromAmino: (object: import("./beacon/v1/tx").MsgPurchaseBeaconStateStorageAmino) => import("./beacon/v1/tx").MsgPurchaseBeaconStateStorage;
    };
    "/mainchain.beacon.v1.MsgUpdateParams": {
        aminoType: string;
        toAmino: (message: import("./beacon/v1/tx").MsgUpdateParams) => import("./beacon/v1/tx").MsgUpdateParamsAmino;
        fromAmino: (object: import("./beacon/v1/tx").MsgUpdateParamsAmino) => import("./beacon/v1/tx").MsgUpdateParams;
    };
};
export declare const mainchainProtoRegistry: ReadonlyArray<[string, GeneratedType]>;
export declare const getSigningMainchainClientOptions: ({ defaultTypes }?: {
    defaultTypes?: readonly [string, GeneratedType][];
}) => {
    registry: Registry;
    aminoTypes: AminoTypes;
};
export declare const getSigningMainchainClient: ({ rpcEndpoint, signer, defaultTypes }: {
    rpcEndpoint: string | HttpEndpoint;
    signer: OfflineSigner;
    defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => Promise<SigningStargateClient>;

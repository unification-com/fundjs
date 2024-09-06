"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgUpdateParamsResponse = exports.MsgUpdateParams = exports.MsgCancelStreamResponse = exports.MsgCancelStream = exports.MsgUpdateFlowRateResponse = exports.MsgUpdateFlowRate = exports.MsgTopUpDepositResponse = exports.MsgTopUpDeposit = exports.MsgClaimStreamResponse = exports.MsgClaimStream = exports.MsgCreateStreamResponse = exports.MsgCreateStream = void 0;
//@ts-nocheck
const coin_1 = require("../../../cosmos/base/v1beta1/coin");
const params_1 = require("./params");
const timestamp_1 = require("../../../google/protobuf/timestamp");
const binary_1 = require("../../../binary");
const registry_1 = require("../../../registry");
const helpers_1 = require("../../../helpers");
function createBaseMsgCreateStream() {
    return {
        receiver: "",
        sender: "",
        deposit: coin_1.Coin.fromPartial({}),
        flowRate: BigInt(0)
    };
}
exports.MsgCreateStream = {
    typeUrl: "/mainchain.stream.v1.MsgCreateStream",
    is(o) {
        return o && (o.$typeUrl === exports.MsgCreateStream.typeUrl || typeof o.receiver === "string" && typeof o.sender === "string" && coin_1.Coin.is(o.deposit) && typeof o.flowRate === "bigint");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.MsgCreateStream.typeUrl || typeof o.receiver === "string" && typeof o.sender === "string" && coin_1.Coin.isSDK(o.deposit) && typeof o.flow_rate === "bigint");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.MsgCreateStream.typeUrl || typeof o.receiver === "string" && typeof o.sender === "string" && coin_1.Coin.isAmino(o.deposit) && typeof o.flow_rate === "bigint");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.receiver !== "") {
            writer.uint32(10).string(message.receiver);
        }
        if (message.sender !== "") {
            writer.uint32(18).string(message.sender);
        }
        if (message.deposit !== undefined) {
            coin_1.Coin.encode(message.deposit, writer.uint32(26).fork()).ldelim();
        }
        if (message.flowRate !== BigInt(0)) {
            writer.uint32(32).int64(message.flowRate);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateStream();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.receiver = reader.string();
                    break;
                case 2:
                    message.sender = reader.string();
                    break;
                case 3:
                    message.deposit = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.flowRate = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgCreateStream();
        message.receiver = object.receiver ?? "";
        message.sender = object.sender ?? "";
        message.deposit = object.deposit !== undefined && object.deposit !== null ? coin_1.Coin.fromPartial(object.deposit) : undefined;
        message.flowRate = object.flowRate !== undefined && object.flowRate !== null ? BigInt(object.flowRate.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgCreateStream();
        if (object.receiver !== undefined && object.receiver !== null) {
            message.receiver = object.receiver;
        }
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        if (object.deposit !== undefined && object.deposit !== null) {
            message.deposit = coin_1.Coin.fromAmino(object.deposit);
        }
        if (object.flow_rate !== undefined && object.flow_rate !== null) {
            message.flowRate = BigInt(object.flow_rate);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.receiver = message.receiver === "" ? undefined : message.receiver;
        obj.sender = message.sender === "" ? undefined : message.sender;
        obj.deposit = message.deposit ? coin_1.Coin.toAmino(message.deposit) : undefined;
        obj.flow_rate = message.flowRate !== BigInt(0) ? message.flowRate.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgCreateStream.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgCreateStream.decode(message.value);
    },
    toProto(message) {
        return exports.MsgCreateStream.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/mainchain.stream.v1.MsgCreateStream",
            value: exports.MsgCreateStream.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgCreateStream.typeUrl, exports.MsgCreateStream);
function createBaseMsgCreateStreamResponse() {
    return {
        receiver: "",
        sender: "",
        deposit: coin_1.Coin.fromPartial({}),
        flowRate: BigInt(0)
    };
}
exports.MsgCreateStreamResponse = {
    typeUrl: "/mainchain.stream.v1.MsgCreateStreamResponse",
    is(o) {
        return o && (o.$typeUrl === exports.MsgCreateStreamResponse.typeUrl || typeof o.receiver === "string" && typeof o.sender === "string" && coin_1.Coin.is(o.deposit) && typeof o.flowRate === "bigint");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.MsgCreateStreamResponse.typeUrl || typeof o.receiver === "string" && typeof o.sender === "string" && coin_1.Coin.isSDK(o.deposit) && typeof o.flow_rate === "bigint");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.MsgCreateStreamResponse.typeUrl || typeof o.receiver === "string" && typeof o.sender === "string" && coin_1.Coin.isAmino(o.deposit) && typeof o.flow_rate === "bigint");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.receiver !== "") {
            writer.uint32(10).string(message.receiver);
        }
        if (message.sender !== "") {
            writer.uint32(18).string(message.sender);
        }
        if (message.deposit !== undefined) {
            coin_1.Coin.encode(message.deposit, writer.uint32(26).fork()).ldelim();
        }
        if (message.flowRate !== BigInt(0)) {
            writer.uint32(32).int64(message.flowRate);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateStreamResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.receiver = reader.string();
                    break;
                case 2:
                    message.sender = reader.string();
                    break;
                case 3:
                    message.deposit = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.flowRate = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgCreateStreamResponse();
        message.receiver = object.receiver ?? "";
        message.sender = object.sender ?? "";
        message.deposit = object.deposit !== undefined && object.deposit !== null ? coin_1.Coin.fromPartial(object.deposit) : undefined;
        message.flowRate = object.flowRate !== undefined && object.flowRate !== null ? BigInt(object.flowRate.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgCreateStreamResponse();
        if (object.receiver !== undefined && object.receiver !== null) {
            message.receiver = object.receiver;
        }
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        if (object.deposit !== undefined && object.deposit !== null) {
            message.deposit = coin_1.Coin.fromAmino(object.deposit);
        }
        if (object.flow_rate !== undefined && object.flow_rate !== null) {
            message.flowRate = BigInt(object.flow_rate);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.receiver = message.receiver === "" ? undefined : message.receiver;
        obj.sender = message.sender === "" ? undefined : message.sender;
        obj.deposit = message.deposit ? coin_1.Coin.toAmino(message.deposit) : undefined;
        obj.flow_rate = message.flowRate !== BigInt(0) ? message.flowRate.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgCreateStreamResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgCreateStreamResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgCreateStreamResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/mainchain.stream.v1.MsgCreateStreamResponse",
            value: exports.MsgCreateStreamResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgCreateStreamResponse.typeUrl, exports.MsgCreateStreamResponse);
function createBaseMsgClaimStream() {
    return {
        sender: "",
        receiver: ""
    };
}
exports.MsgClaimStream = {
    typeUrl: "/mainchain.stream.v1.MsgClaimStream",
    is(o) {
        return o && (o.$typeUrl === exports.MsgClaimStream.typeUrl || typeof o.sender === "string" && typeof o.receiver === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.MsgClaimStream.typeUrl || typeof o.sender === "string" && typeof o.receiver === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.MsgClaimStream.typeUrl || typeof o.sender === "string" && typeof o.receiver === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.receiver !== "") {
            writer.uint32(18).string(message.receiver);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgClaimStream();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.receiver = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgClaimStream();
        message.sender = object.sender ?? "";
        message.receiver = object.receiver ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgClaimStream();
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        if (object.receiver !== undefined && object.receiver !== null) {
            message.receiver = object.receiver;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender === "" ? undefined : message.sender;
        obj.receiver = message.receiver === "" ? undefined : message.receiver;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgClaimStream.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgClaimStream.decode(message.value);
    },
    toProto(message) {
        return exports.MsgClaimStream.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/mainchain.stream.v1.MsgClaimStream",
            value: exports.MsgClaimStream.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgClaimStream.typeUrl, exports.MsgClaimStream);
function createBaseMsgClaimStreamResponse() {
    return {
        totalClaimed: coin_1.Coin.fromPartial({}),
        streamPayment: coin_1.Coin.fromPartial({}),
        validatorFee: coin_1.Coin.fromPartial({}),
        remainingDeposit: coin_1.Coin.fromPartial({})
    };
}
exports.MsgClaimStreamResponse = {
    typeUrl: "/mainchain.stream.v1.MsgClaimStreamResponse",
    is(o) {
        return o && (o.$typeUrl === exports.MsgClaimStreamResponse.typeUrl || coin_1.Coin.is(o.totalClaimed) && coin_1.Coin.is(o.streamPayment) && coin_1.Coin.is(o.validatorFee) && coin_1.Coin.is(o.remainingDeposit));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.MsgClaimStreamResponse.typeUrl || coin_1.Coin.isSDK(o.total_claimed) && coin_1.Coin.isSDK(o.stream_payment) && coin_1.Coin.isSDK(o.validator_fee) && coin_1.Coin.isSDK(o.remaining_deposit));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.MsgClaimStreamResponse.typeUrl || coin_1.Coin.isAmino(o.total_claimed) && coin_1.Coin.isAmino(o.stream_payment) && coin_1.Coin.isAmino(o.validator_fee) && coin_1.Coin.isAmino(o.remaining_deposit));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.totalClaimed !== undefined) {
            coin_1.Coin.encode(message.totalClaimed, writer.uint32(18).fork()).ldelim();
        }
        if (message.streamPayment !== undefined) {
            coin_1.Coin.encode(message.streamPayment, writer.uint32(26).fork()).ldelim();
        }
        if (message.validatorFee !== undefined) {
            coin_1.Coin.encode(message.validatorFee, writer.uint32(34).fork()).ldelim();
        }
        if (message.remainingDeposit !== undefined) {
            coin_1.Coin.encode(message.remainingDeposit, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgClaimStreamResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    message.totalClaimed = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.streamPayment = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.validatorFee = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.remainingDeposit = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgClaimStreamResponse();
        message.totalClaimed = object.totalClaimed !== undefined && object.totalClaimed !== null ? coin_1.Coin.fromPartial(object.totalClaimed) : undefined;
        message.streamPayment = object.streamPayment !== undefined && object.streamPayment !== null ? coin_1.Coin.fromPartial(object.streamPayment) : undefined;
        message.validatorFee = object.validatorFee !== undefined && object.validatorFee !== null ? coin_1.Coin.fromPartial(object.validatorFee) : undefined;
        message.remainingDeposit = object.remainingDeposit !== undefined && object.remainingDeposit !== null ? coin_1.Coin.fromPartial(object.remainingDeposit) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgClaimStreamResponse();
        if (object.total_claimed !== undefined && object.total_claimed !== null) {
            message.totalClaimed = coin_1.Coin.fromAmino(object.total_claimed);
        }
        if (object.stream_payment !== undefined && object.stream_payment !== null) {
            message.streamPayment = coin_1.Coin.fromAmino(object.stream_payment);
        }
        if (object.validator_fee !== undefined && object.validator_fee !== null) {
            message.validatorFee = coin_1.Coin.fromAmino(object.validator_fee);
        }
        if (object.remaining_deposit !== undefined && object.remaining_deposit !== null) {
            message.remainingDeposit = coin_1.Coin.fromAmino(object.remaining_deposit);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.total_claimed = message.totalClaimed ? coin_1.Coin.toAmino(message.totalClaimed) : undefined;
        obj.stream_payment = message.streamPayment ? coin_1.Coin.toAmino(message.streamPayment) : undefined;
        obj.validator_fee = message.validatorFee ? coin_1.Coin.toAmino(message.validatorFee) : undefined;
        obj.remaining_deposit = message.remainingDeposit ? coin_1.Coin.toAmino(message.remainingDeposit) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgClaimStreamResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgClaimStreamResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgClaimStreamResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/mainchain.stream.v1.MsgClaimStreamResponse",
            value: exports.MsgClaimStreamResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgClaimStreamResponse.typeUrl, exports.MsgClaimStreamResponse);
function createBaseMsgTopUpDeposit() {
    return {
        receiver: "",
        sender: "",
        deposit: coin_1.Coin.fromPartial({})
    };
}
exports.MsgTopUpDeposit = {
    typeUrl: "/mainchain.stream.v1.MsgTopUpDeposit",
    is(o) {
        return o && (o.$typeUrl === exports.MsgTopUpDeposit.typeUrl || typeof o.receiver === "string" && typeof o.sender === "string" && coin_1.Coin.is(o.deposit));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.MsgTopUpDeposit.typeUrl || typeof o.receiver === "string" && typeof o.sender === "string" && coin_1.Coin.isSDK(o.deposit));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.MsgTopUpDeposit.typeUrl || typeof o.receiver === "string" && typeof o.sender === "string" && coin_1.Coin.isAmino(o.deposit));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.receiver !== "") {
            writer.uint32(10).string(message.receiver);
        }
        if (message.sender !== "") {
            writer.uint32(18).string(message.sender);
        }
        if (message.deposit !== undefined) {
            coin_1.Coin.encode(message.deposit, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgTopUpDeposit();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.receiver = reader.string();
                    break;
                case 2:
                    message.sender = reader.string();
                    break;
                case 3:
                    message.deposit = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgTopUpDeposit();
        message.receiver = object.receiver ?? "";
        message.sender = object.sender ?? "";
        message.deposit = object.deposit !== undefined && object.deposit !== null ? coin_1.Coin.fromPartial(object.deposit) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgTopUpDeposit();
        if (object.receiver !== undefined && object.receiver !== null) {
            message.receiver = object.receiver;
        }
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        if (object.deposit !== undefined && object.deposit !== null) {
            message.deposit = coin_1.Coin.fromAmino(object.deposit);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.receiver = message.receiver === "" ? undefined : message.receiver;
        obj.sender = message.sender === "" ? undefined : message.sender;
        obj.deposit = message.deposit ? coin_1.Coin.toAmino(message.deposit) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgTopUpDeposit.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgTopUpDeposit.decode(message.value);
    },
    toProto(message) {
        return exports.MsgTopUpDeposit.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/mainchain.stream.v1.MsgTopUpDeposit",
            value: exports.MsgTopUpDeposit.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgTopUpDeposit.typeUrl, exports.MsgTopUpDeposit);
function createBaseMsgTopUpDepositResponse() {
    return {
        depositAmount: coin_1.Coin.fromPartial({}),
        currentDeposit: coin_1.Coin.fromPartial({}),
        depositZeroTime: new Date()
    };
}
exports.MsgTopUpDepositResponse = {
    typeUrl: "/mainchain.stream.v1.MsgTopUpDepositResponse",
    is(o) {
        return o && (o.$typeUrl === exports.MsgTopUpDepositResponse.typeUrl || coin_1.Coin.is(o.depositAmount) && coin_1.Coin.is(o.currentDeposit) && timestamp_1.Timestamp.is(o.depositZeroTime));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.MsgTopUpDepositResponse.typeUrl || coin_1.Coin.isSDK(o.deposit_amount) && coin_1.Coin.isSDK(o.current_deposit) && timestamp_1.Timestamp.isSDK(o.deposit_zero_time));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.MsgTopUpDepositResponse.typeUrl || coin_1.Coin.isAmino(o.deposit_amount) && coin_1.Coin.isAmino(o.current_deposit) && timestamp_1.Timestamp.isAmino(o.deposit_zero_time));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.depositAmount !== undefined) {
            coin_1.Coin.encode(message.depositAmount, writer.uint32(18).fork()).ldelim();
        }
        if (message.currentDeposit !== undefined) {
            coin_1.Coin.encode(message.currentDeposit, writer.uint32(26).fork()).ldelim();
        }
        if (message.depositZeroTime !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.depositZeroTime), writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgTopUpDepositResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    message.depositAmount = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.currentDeposit = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.depositZeroTime = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgTopUpDepositResponse();
        message.depositAmount = object.depositAmount !== undefined && object.depositAmount !== null ? coin_1.Coin.fromPartial(object.depositAmount) : undefined;
        message.currentDeposit = object.currentDeposit !== undefined && object.currentDeposit !== null ? coin_1.Coin.fromPartial(object.currentDeposit) : undefined;
        message.depositZeroTime = object.depositZeroTime ?? undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgTopUpDepositResponse();
        if (object.deposit_amount !== undefined && object.deposit_amount !== null) {
            message.depositAmount = coin_1.Coin.fromAmino(object.deposit_amount);
        }
        if (object.current_deposit !== undefined && object.current_deposit !== null) {
            message.currentDeposit = coin_1.Coin.fromAmino(object.current_deposit);
        }
        if (object.deposit_zero_time !== undefined && object.deposit_zero_time !== null) {
            message.depositZeroTime = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.fromAmino(object.deposit_zero_time));
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.deposit_amount = message.depositAmount ? coin_1.Coin.toAmino(message.depositAmount) : undefined;
        obj.current_deposit = message.currentDeposit ? coin_1.Coin.toAmino(message.currentDeposit) : undefined;
        obj.deposit_zero_time = message.depositZeroTime ? timestamp_1.Timestamp.toAmino((0, helpers_1.toTimestamp)(message.depositZeroTime)) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgTopUpDepositResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgTopUpDepositResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgTopUpDepositResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/mainchain.stream.v1.MsgTopUpDepositResponse",
            value: exports.MsgTopUpDepositResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgTopUpDepositResponse.typeUrl, exports.MsgTopUpDepositResponse);
function createBaseMsgUpdateFlowRate() {
    return {
        receiver: "",
        sender: "",
        flowRate: BigInt(0)
    };
}
exports.MsgUpdateFlowRate = {
    typeUrl: "/mainchain.stream.v1.MsgUpdateFlowRate",
    is(o) {
        return o && (o.$typeUrl === exports.MsgUpdateFlowRate.typeUrl || typeof o.receiver === "string" && typeof o.sender === "string" && typeof o.flowRate === "bigint");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.MsgUpdateFlowRate.typeUrl || typeof o.receiver === "string" && typeof o.sender === "string" && typeof o.flow_rate === "bigint");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.MsgUpdateFlowRate.typeUrl || typeof o.receiver === "string" && typeof o.sender === "string" && typeof o.flow_rate === "bigint");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.receiver !== "") {
            writer.uint32(10).string(message.receiver);
        }
        if (message.sender !== "") {
            writer.uint32(18).string(message.sender);
        }
        if (message.flowRate !== BigInt(0)) {
            writer.uint32(24).int64(message.flowRate);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateFlowRate();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.receiver = reader.string();
                    break;
                case 2:
                    message.sender = reader.string();
                    break;
                case 3:
                    message.flowRate = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgUpdateFlowRate();
        message.receiver = object.receiver ?? "";
        message.sender = object.sender ?? "";
        message.flowRate = object.flowRate !== undefined && object.flowRate !== null ? BigInt(object.flowRate.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgUpdateFlowRate();
        if (object.receiver !== undefined && object.receiver !== null) {
            message.receiver = object.receiver;
        }
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        if (object.flow_rate !== undefined && object.flow_rate !== null) {
            message.flowRate = BigInt(object.flow_rate);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.receiver = message.receiver === "" ? undefined : message.receiver;
        obj.sender = message.sender === "" ? undefined : message.sender;
        obj.flow_rate = message.flowRate !== BigInt(0) ? message.flowRate.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgUpdateFlowRate.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgUpdateFlowRate.decode(message.value);
    },
    toProto(message) {
        return exports.MsgUpdateFlowRate.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/mainchain.stream.v1.MsgUpdateFlowRate",
            value: exports.MsgUpdateFlowRate.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgUpdateFlowRate.typeUrl, exports.MsgUpdateFlowRate);
function createBaseMsgUpdateFlowRateResponse() {
    return {
        flowRate: BigInt(0)
    };
}
exports.MsgUpdateFlowRateResponse = {
    typeUrl: "/mainchain.stream.v1.MsgUpdateFlowRateResponse",
    is(o) {
        return o && (o.$typeUrl === exports.MsgUpdateFlowRateResponse.typeUrl || typeof o.flowRate === "bigint");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.MsgUpdateFlowRateResponse.typeUrl || typeof o.flow_rate === "bigint");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.MsgUpdateFlowRateResponse.typeUrl || typeof o.flow_rate === "bigint");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.flowRate !== BigInt(0)) {
            writer.uint32(16).int64(message.flowRate);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateFlowRateResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    message.flowRate = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgUpdateFlowRateResponse();
        message.flowRate = object.flowRate !== undefined && object.flowRate !== null ? BigInt(object.flowRate.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgUpdateFlowRateResponse();
        if (object.flow_rate !== undefined && object.flow_rate !== null) {
            message.flowRate = BigInt(object.flow_rate);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.flow_rate = message.flowRate !== BigInt(0) ? message.flowRate.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgUpdateFlowRateResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgUpdateFlowRateResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgUpdateFlowRateResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/mainchain.stream.v1.MsgUpdateFlowRateResponse",
            value: exports.MsgUpdateFlowRateResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgUpdateFlowRateResponse.typeUrl, exports.MsgUpdateFlowRateResponse);
function createBaseMsgCancelStream() {
    return {
        receiver: "",
        sender: ""
    };
}
exports.MsgCancelStream = {
    typeUrl: "/mainchain.stream.v1.MsgCancelStream",
    is(o) {
        return o && (o.$typeUrl === exports.MsgCancelStream.typeUrl || typeof o.receiver === "string" && typeof o.sender === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.MsgCancelStream.typeUrl || typeof o.receiver === "string" && typeof o.sender === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.MsgCancelStream.typeUrl || typeof o.receiver === "string" && typeof o.sender === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.receiver !== "") {
            writer.uint32(10).string(message.receiver);
        }
        if (message.sender !== "") {
            writer.uint32(18).string(message.sender);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCancelStream();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.receiver = reader.string();
                    break;
                case 2:
                    message.sender = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgCancelStream();
        message.receiver = object.receiver ?? "";
        message.sender = object.sender ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgCancelStream();
        if (object.receiver !== undefined && object.receiver !== null) {
            message.receiver = object.receiver;
        }
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.receiver = message.receiver === "" ? undefined : message.receiver;
        obj.sender = message.sender === "" ? undefined : message.sender;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgCancelStream.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgCancelStream.decode(message.value);
    },
    toProto(message) {
        return exports.MsgCancelStream.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/mainchain.stream.v1.MsgCancelStream",
            value: exports.MsgCancelStream.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgCancelStream.typeUrl, exports.MsgCancelStream);
function createBaseMsgCancelStreamResponse() {
    return {};
}
exports.MsgCancelStreamResponse = {
    typeUrl: "/mainchain.stream.v1.MsgCancelStreamResponse",
    is(o) {
        return o && o.$typeUrl === exports.MsgCancelStreamResponse.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === exports.MsgCancelStreamResponse.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.MsgCancelStreamResponse.typeUrl;
    },
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCancelStreamResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(_) {
        const message = createBaseMsgCancelStreamResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgCancelStreamResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgCancelStreamResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgCancelStreamResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgCancelStreamResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/mainchain.stream.v1.MsgCancelStreamResponse",
            value: exports.MsgCancelStreamResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgCancelStreamResponse.typeUrl, exports.MsgCancelStreamResponse);
function createBaseMsgUpdateParams() {
    return {
        authority: "",
        params: params_1.Params.fromPartial({})
    };
}
exports.MsgUpdateParams = {
    typeUrl: "/mainchain.stream.v1.MsgUpdateParams",
    aminoType: "mainchain/x/stream/MsgUpdateParams",
    is(o) {
        return o && (o.$typeUrl === exports.MsgUpdateParams.typeUrl || typeof o.authority === "string" && params_1.Params.is(o.params));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.MsgUpdateParams.typeUrl || typeof o.authority === "string" && params_1.Params.isSDK(o.params));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.MsgUpdateParams.typeUrl || typeof o.authority === "string" && params_1.Params.isAmino(o.params));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.authority !== "") {
            writer.uint32(10).string(message.authority);
        }
        if (message.params !== undefined) {
            params_1.Params.encode(message.params, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.authority = reader.string();
                    break;
                case 2:
                    message.params = params_1.Params.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgUpdateParams();
        message.authority = object.authority ?? "";
        message.params = object.params !== undefined && object.params !== null ? params_1.Params.fromPartial(object.params) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgUpdateParams();
        if (object.authority !== undefined && object.authority !== null) {
            message.authority = object.authority;
        }
        if (object.params !== undefined && object.params !== null) {
            message.params = params_1.Params.fromAmino(object.params);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.authority = message.authority === "" ? undefined : message.authority;
        obj.params = message.params ? params_1.Params.toAmino(message.params) : params_1.Params.toAmino(params_1.Params.fromPartial({}));
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgUpdateParams.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "mainchain/x/stream/MsgUpdateParams",
            value: exports.MsgUpdateParams.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgUpdateParams.decode(message.value);
    },
    toProto(message) {
        return exports.MsgUpdateParams.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/mainchain.stream.v1.MsgUpdateParams",
            value: exports.MsgUpdateParams.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgUpdateParams.typeUrl, exports.MsgUpdateParams);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgUpdateParams.aminoType, exports.MsgUpdateParams.typeUrl);
function createBaseMsgUpdateParamsResponse() {
    return {};
}
exports.MsgUpdateParamsResponse = {
    typeUrl: "/mainchain.stream.v1.MsgUpdateParamsResponse",
    is(o) {
        return o && o.$typeUrl === exports.MsgUpdateParamsResponse.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === exports.MsgUpdateParamsResponse.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.MsgUpdateParamsResponse.typeUrl;
    },
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateParamsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(_) {
        const message = createBaseMsgUpdateParamsResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgUpdateParamsResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgUpdateParamsResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgUpdateParamsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgUpdateParamsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/mainchain.stream.v1.MsgUpdateParamsResponse",
            value: exports.MsgUpdateParamsResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgUpdateParamsResponse.typeUrl, exports.MsgUpdateParamsResponse);

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stream = exports.StreamPeriodAmino = exports.StreamPeriodSDKType = exports.StreamPeriod = void 0;
exports.streamPeriodFromJSON = streamPeriodFromJSON;
exports.streamPeriodToJSON = streamPeriodToJSON;
//@ts-nocheck
const coin_1 = require("../../../cosmos/base/v1beta1/coin");
const timestamp_1 = require("../../../google/protobuf/timestamp");
const binary_1 = require("../../../binary");
const helpers_1 = require("../../../helpers");
const registry_1 = require("../../../registry");
/** StreamPeriod enumerates the valid periods for calculating flow rates */
var StreamPeriod;
(function (StreamPeriod) {
    /** STREAM_PERIOD_UNSPECIFIED - STREAM_PERIOD_UNSPECIFIED defines unspecified */
    StreamPeriod[StreamPeriod["STREAM_PERIOD_UNSPECIFIED"] = 0] = "STREAM_PERIOD_UNSPECIFIED";
    /** STREAM_PERIOD_SECOND - STREAM_PERIOD_SECOND defines second */
    StreamPeriod[StreamPeriod["STREAM_PERIOD_SECOND"] = 1] = "STREAM_PERIOD_SECOND";
    /** STREAM_PERIOD_MINUTE - STREAM_PERIOD_MINUTE defines minute */
    StreamPeriod[StreamPeriod["STREAM_PERIOD_MINUTE"] = 2] = "STREAM_PERIOD_MINUTE";
    /** STREAM_PERIOD_HOUR - STREAM_PERIOD_HOUR defines hour */
    StreamPeriod[StreamPeriod["STREAM_PERIOD_HOUR"] = 3] = "STREAM_PERIOD_HOUR";
    /** STREAM_PERIOD_DAY - STREAM_PERIOD_DAY defines day */
    StreamPeriod[StreamPeriod["STREAM_PERIOD_DAY"] = 4] = "STREAM_PERIOD_DAY";
    /** STREAM_PERIOD_WEEK - STREAM_PERIOD_WEEK defines week */
    StreamPeriod[StreamPeriod["STREAM_PERIOD_WEEK"] = 5] = "STREAM_PERIOD_WEEK";
    /** STREAM_PERIOD_MONTH - STREAM_PERIOD_MONTH defines month */
    StreamPeriod[StreamPeriod["STREAM_PERIOD_MONTH"] = 6] = "STREAM_PERIOD_MONTH";
    /** STREAM_PERIOD_YEAR - STREAM_PERIOD_YEAR defines year */
    StreamPeriod[StreamPeriod["STREAM_PERIOD_YEAR"] = 7] = "STREAM_PERIOD_YEAR";
    StreamPeriod[StreamPeriod["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(StreamPeriod || (exports.StreamPeriod = StreamPeriod = {}));
exports.StreamPeriodSDKType = StreamPeriod;
exports.StreamPeriodAmino = StreamPeriod;
function streamPeriodFromJSON(object) {
    switch (object) {
        case 0:
        case "STREAM_PERIOD_UNSPECIFIED":
            return StreamPeriod.STREAM_PERIOD_UNSPECIFIED;
        case 1:
        case "STREAM_PERIOD_SECOND":
            return StreamPeriod.STREAM_PERIOD_SECOND;
        case 2:
        case "STREAM_PERIOD_MINUTE":
            return StreamPeriod.STREAM_PERIOD_MINUTE;
        case 3:
        case "STREAM_PERIOD_HOUR":
            return StreamPeriod.STREAM_PERIOD_HOUR;
        case 4:
        case "STREAM_PERIOD_DAY":
            return StreamPeriod.STREAM_PERIOD_DAY;
        case 5:
        case "STREAM_PERIOD_WEEK":
            return StreamPeriod.STREAM_PERIOD_WEEK;
        case 6:
        case "STREAM_PERIOD_MONTH":
            return StreamPeriod.STREAM_PERIOD_MONTH;
        case 7:
        case "STREAM_PERIOD_YEAR":
            return StreamPeriod.STREAM_PERIOD_YEAR;
        case -1:
        case "UNRECOGNIZED":
        default:
            return StreamPeriod.UNRECOGNIZED;
    }
}
function streamPeriodToJSON(object) {
    switch (object) {
        case StreamPeriod.STREAM_PERIOD_UNSPECIFIED:
            return "STREAM_PERIOD_UNSPECIFIED";
        case StreamPeriod.STREAM_PERIOD_SECOND:
            return "STREAM_PERIOD_SECOND";
        case StreamPeriod.STREAM_PERIOD_MINUTE:
            return "STREAM_PERIOD_MINUTE";
        case StreamPeriod.STREAM_PERIOD_HOUR:
            return "STREAM_PERIOD_HOUR";
        case StreamPeriod.STREAM_PERIOD_DAY:
            return "STREAM_PERIOD_DAY";
        case StreamPeriod.STREAM_PERIOD_WEEK:
            return "STREAM_PERIOD_WEEK";
        case StreamPeriod.STREAM_PERIOD_MONTH:
            return "STREAM_PERIOD_MONTH";
        case StreamPeriod.STREAM_PERIOD_YEAR:
            return "STREAM_PERIOD_YEAR";
        case StreamPeriod.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
function createBaseStream() {
    return {
        deposit: coin_1.Coin.fromPartial({}),
        flowRate: BigInt(0),
        lastOutflowTime: new Date(),
        depositZeroTime: new Date(),
        cancellable: false
    };
}
exports.Stream = {
    typeUrl: "/mainchain.stream.v1.Stream",
    is(o) {
        return o && (o.$typeUrl === exports.Stream.typeUrl || coin_1.Coin.is(o.deposit) && typeof o.flowRate === "bigint" && timestamp_1.Timestamp.is(o.lastOutflowTime) && timestamp_1.Timestamp.is(o.depositZeroTime) && typeof o.cancellable === "boolean");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.Stream.typeUrl || coin_1.Coin.isSDK(o.deposit) && typeof o.flow_rate === "bigint" && timestamp_1.Timestamp.isSDK(o.last_outflow_time) && timestamp_1.Timestamp.isSDK(o.deposit_zero_time) && typeof o.cancellable === "boolean");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.Stream.typeUrl || coin_1.Coin.isAmino(o.deposit) && typeof o.flow_rate === "bigint" && timestamp_1.Timestamp.isAmino(o.last_outflow_time) && timestamp_1.Timestamp.isAmino(o.deposit_zero_time) && typeof o.cancellable === "boolean");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.deposit !== undefined) {
            coin_1.Coin.encode(message.deposit, writer.uint32(10).fork()).ldelim();
        }
        if (message.flowRate !== BigInt(0)) {
            writer.uint32(16).int64(message.flowRate);
        }
        if (message.lastOutflowTime !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.lastOutflowTime), writer.uint32(26).fork()).ldelim();
        }
        if (message.depositZeroTime !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.depositZeroTime), writer.uint32(34).fork()).ldelim();
        }
        if (message.cancellable === true) {
            writer.uint32(40).bool(message.cancellable);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseStream();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.deposit = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.flowRate = reader.int64();
                    break;
                case 3:
                    message.lastOutflowTime = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.depositZeroTime = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.cancellable = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseStream();
        message.deposit = object.deposit !== undefined && object.deposit !== null ? coin_1.Coin.fromPartial(object.deposit) : undefined;
        message.flowRate = object.flowRate !== undefined && object.flowRate !== null ? BigInt(object.flowRate.toString()) : BigInt(0);
        message.lastOutflowTime = object.lastOutflowTime ?? undefined;
        message.depositZeroTime = object.depositZeroTime ?? undefined;
        message.cancellable = object.cancellable ?? false;
        return message;
    },
    fromAmino(object) {
        const message = createBaseStream();
        if (object.deposit !== undefined && object.deposit !== null) {
            message.deposit = coin_1.Coin.fromAmino(object.deposit);
        }
        if (object.flow_rate !== undefined && object.flow_rate !== null) {
            message.flowRate = BigInt(object.flow_rate);
        }
        if (object.last_outflow_time !== undefined && object.last_outflow_time !== null) {
            message.lastOutflowTime = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.fromAmino(object.last_outflow_time));
        }
        if (object.deposit_zero_time !== undefined && object.deposit_zero_time !== null) {
            message.depositZeroTime = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.fromAmino(object.deposit_zero_time));
        }
        if (object.cancellable !== undefined && object.cancellable !== null) {
            message.cancellable = object.cancellable;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.deposit = message.deposit ? coin_1.Coin.toAmino(message.deposit) : undefined;
        obj.flow_rate = message.flowRate !== BigInt(0) ? message.flowRate.toString() : undefined;
        obj.last_outflow_time = message.lastOutflowTime ? timestamp_1.Timestamp.toAmino((0, helpers_1.toTimestamp)(message.lastOutflowTime)) : undefined;
        obj.deposit_zero_time = message.depositZeroTime ? timestamp_1.Timestamp.toAmino((0, helpers_1.toTimestamp)(message.depositZeroTime)) : undefined;
        obj.cancellable = message.cancellable === false ? undefined : message.cancellable;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Stream.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.Stream.decode(message.value);
    },
    toProto(message) {
        return exports.Stream.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/mainchain.stream.v1.Stream",
            value: exports.Stream.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.Stream.typeUrl, exports.Stream);

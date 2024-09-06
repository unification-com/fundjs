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
exports.mainchain = void 0;
//@ts-nocheck
const _0 = __importStar(require("./beacon/v1/beacon"));
const _1 = __importStar(require("./beacon/v1/genesis"));
const _2 = __importStar(require("./beacon/v1/query"));
const _3 = __importStar(require("./beacon/v1/tx"));
const _4 = __importStar(require("./enterprise/v1/enterprise"));
const _5 = __importStar(require("./enterprise/v1/genesis"));
const _6 = __importStar(require("./enterprise/v1/query"));
const _7 = __importStar(require("./enterprise/v1/tx"));
const _8 = __importStar(require("./stream/v1/genesis"));
const _9 = __importStar(require("./stream/v1/params"));
const _10 = __importStar(require("./stream/v1/query"));
const _11 = __importStar(require("./stream/v1/stream"));
const _12 = __importStar(require("./stream/v1/tx"));
const _13 = __importStar(require("./wrkchain/v1/genesis"));
const _14 = __importStar(require("./wrkchain/v1/query"));
const _15 = __importStar(require("./wrkchain/v1/tx"));
const _16 = __importStar(require("./wrkchain/v1/wrkchain"));
const _125 = __importStar(require("./beacon/v1/tx.amino"));
const _126 = __importStar(require("./enterprise/v1/tx.amino"));
const _127 = __importStar(require("./stream/v1/tx.amino"));
const _128 = __importStar(require("./wrkchain/v1/tx.amino"));
const _129 = __importStar(require("./beacon/v1/tx.registry"));
const _130 = __importStar(require("./enterprise/v1/tx.registry"));
const _131 = __importStar(require("./stream/v1/tx.registry"));
const _132 = __importStar(require("./wrkchain/v1/tx.registry"));
const _133 = __importStar(require("./beacon/v1/query.lcd"));
const _134 = __importStar(require("./enterprise/v1/query.lcd"));
const _135 = __importStar(require("./stream/v1/query.lcd"));
const _136 = __importStar(require("./wrkchain/v1/query.lcd"));
const _137 = __importStar(require("./beacon/v1/query.rpc.Query"));
const _138 = __importStar(require("./enterprise/v1/query.rpc.Query"));
const _139 = __importStar(require("./stream/v1/query.rpc.Query"));
const _140 = __importStar(require("./wrkchain/v1/query.rpc.Query"));
const _141 = __importStar(require("./beacon/v1/tx.rpc.msg"));
const _142 = __importStar(require("./enterprise/v1/tx.rpc.msg"));
const _143 = __importStar(require("./stream/v1/tx.rpc.msg"));
const _144 = __importStar(require("./wrkchain/v1/tx.rpc.msg"));
const _229 = __importStar(require("./lcd"));
const _230 = __importStar(require("./rpc.query"));
const _231 = __importStar(require("./rpc.tx"));
var mainchain;
(function (mainchain) {
    let beacon;
    (function (beacon) {
        beacon.v1 = {
            ..._0,
            ..._1,
            ..._2,
            ..._3,
            ..._125,
            ..._129,
            ..._133,
            ..._137,
            ..._141
        };
    })(beacon = mainchain.beacon || (mainchain.beacon = {}));
    let enterprise;
    (function (enterprise) {
        enterprise.v1 = {
            ..._4,
            ..._5,
            ..._6,
            ..._7,
            ..._126,
            ..._130,
            ..._134,
            ..._138,
            ..._142
        };
    })(enterprise = mainchain.enterprise || (mainchain.enterprise = {}));
    let stream;
    (function (stream) {
        stream.v1 = {
            ..._8,
            ..._9,
            ..._10,
            ..._11,
            ..._12,
            ..._127,
            ..._131,
            ..._135,
            ..._139,
            ..._143
        };
    })(stream = mainchain.stream || (mainchain.stream = {}));
    let wrkchain;
    (function (wrkchain) {
        wrkchain.v1 = {
            ..._13,
            ..._14,
            ..._15,
            ..._16,
            ..._128,
            ..._132,
            ..._136,
            ..._140,
            ..._144
        };
    })(wrkchain = mainchain.wrkchain || (mainchain.wrkchain = {}));
    mainchain.ClientFactory = {
        ..._229,
        ..._230,
        ..._231
    };
})(mainchain || (exports.mainchain = mainchain = {}));

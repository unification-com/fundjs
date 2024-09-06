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
exports.ibc = void 0;
//@ts-nocheck
const _92 = __importStar(require("./applications/transfer/v1/genesis"));
const _93 = __importStar(require("./applications/transfer/v1/query"));
const _94 = __importStar(require("./applications/transfer/v1/transfer"));
const _95 = __importStar(require("./applications/transfer/v1/tx"));
const _96 = __importStar(require("./applications/transfer/v2/packet"));
const _97 = __importStar(require("./core/channel/v1/channel"));
const _98 = __importStar(require("./core/channel/v1/genesis"));
const _99 = __importStar(require("./core/channel/v1/query"));
const _100 = __importStar(require("./core/channel/v1/tx"));
const _101 = __importStar(require("./core/client/v1/client"));
const _102 = __importStar(require("./core/client/v1/genesis"));
const _103 = __importStar(require("./core/client/v1/query"));
const _104 = __importStar(require("./core/client/v1/tx"));
const _105 = __importStar(require("./core/commitment/v1/commitment"));
const _106 = __importStar(require("./core/connection/v1/connection"));
const _107 = __importStar(require("./core/connection/v1/genesis"));
const _108 = __importStar(require("./core/connection/v1/query"));
const _109 = __importStar(require("./core/connection/v1/tx"));
const _110 = __importStar(require("./lightclients/localhost/v1/localhost"));
const _111 = __importStar(require("./lightclients/solomachine/v1/solomachine"));
const _112 = __importStar(require("./lightclients/solomachine/v2/solomachine"));
const _113 = __importStar(require("./lightclients/tendermint/v1/tendermint"));
const _209 = __importStar(require("./applications/transfer/v1/tx.amino"));
const _210 = __importStar(require("./core/channel/v1/tx.amino"));
const _211 = __importStar(require("./core/client/v1/tx.amino"));
const _212 = __importStar(require("./core/connection/v1/tx.amino"));
const _213 = __importStar(require("./applications/transfer/v1/tx.registry"));
const _214 = __importStar(require("./core/channel/v1/tx.registry"));
const _215 = __importStar(require("./core/client/v1/tx.registry"));
const _216 = __importStar(require("./core/connection/v1/tx.registry"));
const _217 = __importStar(require("./applications/transfer/v1/query.lcd"));
const _218 = __importStar(require("./core/channel/v1/query.lcd"));
const _219 = __importStar(require("./core/client/v1/query.lcd"));
const _220 = __importStar(require("./core/connection/v1/query.lcd"));
const _221 = __importStar(require("./applications/transfer/v1/query.rpc.Query"));
const _222 = __importStar(require("./core/channel/v1/query.rpc.Query"));
const _223 = __importStar(require("./core/client/v1/query.rpc.Query"));
const _224 = __importStar(require("./core/connection/v1/query.rpc.Query"));
const _225 = __importStar(require("./applications/transfer/v1/tx.rpc.msg"));
const _226 = __importStar(require("./core/channel/v1/tx.rpc.msg"));
const _227 = __importStar(require("./core/client/v1/tx.rpc.msg"));
const _228 = __importStar(require("./core/connection/v1/tx.rpc.msg"));
const _235 = __importStar(require("./lcd"));
const _236 = __importStar(require("./rpc.query"));
const _237 = __importStar(require("./rpc.tx"));
var ibc;
(function (ibc) {
    let applications;
    (function (applications) {
        let transfer;
        (function (transfer) {
            transfer.v1 = {
                ..._92,
                ..._93,
                ..._94,
                ..._95,
                ..._209,
                ..._213,
                ..._217,
                ..._221,
                ..._225
            };
            transfer.v2 = {
                ..._96
            };
        })(transfer = applications.transfer || (applications.transfer = {}));
    })(applications = ibc.applications || (ibc.applications = {}));
    let core;
    (function (core) {
        let channel;
        (function (channel) {
            channel.v1 = {
                ..._97,
                ..._98,
                ..._99,
                ..._100,
                ..._210,
                ..._214,
                ..._218,
                ..._222,
                ..._226
            };
        })(channel = core.channel || (core.channel = {}));
        let client;
        (function (client) {
            client.v1 = {
                ..._101,
                ..._102,
                ..._103,
                ..._104,
                ..._211,
                ..._215,
                ..._219,
                ..._223,
                ..._227
            };
        })(client = core.client || (core.client = {}));
        let commitment;
        (function (commitment) {
            commitment.v1 = {
                ..._105
            };
        })(commitment = core.commitment || (core.commitment = {}));
        let connection;
        (function (connection) {
            connection.v1 = {
                ..._106,
                ..._107,
                ..._108,
                ..._109,
                ..._212,
                ..._216,
                ..._220,
                ..._224,
                ..._228
            };
        })(connection = core.connection || (core.connection = {}));
    })(core = ibc.core || (ibc.core = {}));
    let lightclients;
    (function (lightclients) {
        let localhost;
        (function (localhost) {
            localhost.v1 = {
                ..._110
            };
        })(localhost = lightclients.localhost || (lightclients.localhost = {}));
        let solomachine;
        (function (solomachine) {
            solomachine.v1 = {
                ..._111
            };
            solomachine.v2 = {
                ..._112
            };
        })(solomachine = lightclients.solomachine || (lightclients.solomachine = {}));
        let tendermint;
        (function (tendermint) {
            tendermint.v1 = {
                ..._113
            };
        })(tendermint = lightclients.tendermint || (lightclients.tendermint = {}));
    })(lightclients = ibc.lightclients || (ibc.lightclients = {}));
    ibc.ClientFactory = {
        ..._235,
        ..._236,
        ..._237
    };
})(ibc || (exports.ibc = ibc = {}));

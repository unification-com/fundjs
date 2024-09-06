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
exports.cosmos = void 0;
//@ts-nocheck
const _20 = __importStar(require("./auth/v1beta1/auth"));
const _21 = __importStar(require("./auth/v1beta1/genesis"));
const _22 = __importStar(require("./auth/v1beta1/query"));
const _23 = __importStar(require("./authz/v1beta1/authz"));
const _24 = __importStar(require("./authz/v1beta1/event"));
const _25 = __importStar(require("./authz/v1beta1/genesis"));
const _26 = __importStar(require("./authz/v1beta1/query"));
const _27 = __importStar(require("./authz/v1beta1/tx"));
const _28 = __importStar(require("./bank/v1beta1/authz"));
const _29 = __importStar(require("./bank/v1beta1/bank"));
const _30 = __importStar(require("./bank/v1beta1/genesis"));
const _31 = __importStar(require("./bank/v1beta1/query"));
const _32 = __importStar(require("./bank/v1beta1/tx"));
const _33 = __importStar(require("./base/abci/v1beta1/abci"));
const _34 = __importStar(require("./base/query/v1beta1/pagination"));
const _35 = __importStar(require("./base/reflection/v2alpha1/reflection"));
const _36 = __importStar(require("./base/tendermint/v1beta1/query"));
const _37 = __importStar(require("./base/v1beta1/coin"));
const _38 = __importStar(require("./crisis/v1beta1/genesis"));
const _39 = __importStar(require("./crisis/v1beta1/tx"));
const _40 = __importStar(require("./crypto/ed25519/keys"));
const _41 = __importStar(require("./crypto/hd/v1/hd"));
const _42 = __importStar(require("./crypto/keyring/v1/record"));
const _43 = __importStar(require("./crypto/multisig/keys"));
const _44 = __importStar(require("./crypto/secp256k1/keys"));
const _45 = __importStar(require("./crypto/secp256r1/keys"));
const _46 = __importStar(require("./distribution/v1beta1/distribution"));
const _47 = __importStar(require("./distribution/v1beta1/genesis"));
const _48 = __importStar(require("./distribution/v1beta1/query"));
const _49 = __importStar(require("./distribution/v1beta1/tx"));
const _50 = __importStar(require("./evidence/v1beta1/evidence"));
const _51 = __importStar(require("./evidence/v1beta1/genesis"));
const _52 = __importStar(require("./evidence/v1beta1/query"));
const _53 = __importStar(require("./evidence/v1beta1/tx"));
const _54 = __importStar(require("./feegrant/v1beta1/feegrant"));
const _55 = __importStar(require("./feegrant/v1beta1/genesis"));
const _56 = __importStar(require("./feegrant/v1beta1/query"));
const _57 = __importStar(require("./feegrant/v1beta1/tx"));
const _58 = __importStar(require("./gov/v1/genesis"));
const _59 = __importStar(require("./gov/v1/gov"));
const _60 = __importStar(require("./gov/v1/query"));
const _61 = __importStar(require("./gov/v1/tx"));
const _62 = __importStar(require("./gov/v1beta1/genesis"));
const _63 = __importStar(require("./gov/v1beta1/gov"));
const _64 = __importStar(require("./gov/v1beta1/query"));
const _65 = __importStar(require("./gov/v1beta1/tx"));
const _66 = __importStar(require("./group/v1/events"));
const _67 = __importStar(require("./group/v1/genesis"));
const _68 = __importStar(require("./group/v1/query"));
const _69 = __importStar(require("./group/v1/tx"));
const _70 = __importStar(require("./group/v1/types"));
const _71 = __importStar(require("./slashing/v1beta1/genesis"));
const _72 = __importStar(require("./slashing/v1beta1/query"));
const _73 = __importStar(require("./slashing/v1beta1/slashing"));
const _74 = __importStar(require("./slashing/v1beta1/tx"));
const _75 = __importStar(require("./staking/v1beta1/authz"));
const _76 = __importStar(require("./staking/v1beta1/genesis"));
const _77 = __importStar(require("./staking/v1beta1/query"));
const _78 = __importStar(require("./staking/v1beta1/staking"));
const _79 = __importStar(require("./staking/v1beta1/tx"));
const _80 = __importStar(require("./tx/signing/v1beta1/signing"));
const _81 = __importStar(require("./tx/v1beta1/service"));
const _82 = __importStar(require("./tx/v1beta1/tx"));
const _83 = __importStar(require("./upgrade/v1beta1/query"));
const _84 = __importStar(require("./upgrade/v1beta1/tx"));
const _85 = __importStar(require("./upgrade/v1beta1/upgrade"));
const _145 = __importStar(require("./authz/v1beta1/tx.amino"));
const _146 = __importStar(require("./bank/v1beta1/tx.amino"));
const _147 = __importStar(require("./crisis/v1beta1/tx.amino"));
const _148 = __importStar(require("./distribution/v1beta1/tx.amino"));
const _149 = __importStar(require("./evidence/v1beta1/tx.amino"));
const _150 = __importStar(require("./feegrant/v1beta1/tx.amino"));
const _151 = __importStar(require("./gov/v1/tx.amino"));
const _152 = __importStar(require("./gov/v1beta1/tx.amino"));
const _153 = __importStar(require("./group/v1/tx.amino"));
const _154 = __importStar(require("./slashing/v1beta1/tx.amino"));
const _155 = __importStar(require("./staking/v1beta1/tx.amino"));
const _156 = __importStar(require("./upgrade/v1beta1/tx.amino"));
const _157 = __importStar(require("./authz/v1beta1/tx.registry"));
const _158 = __importStar(require("./bank/v1beta1/tx.registry"));
const _159 = __importStar(require("./crisis/v1beta1/tx.registry"));
const _160 = __importStar(require("./distribution/v1beta1/tx.registry"));
const _161 = __importStar(require("./evidence/v1beta1/tx.registry"));
const _162 = __importStar(require("./feegrant/v1beta1/tx.registry"));
const _163 = __importStar(require("./gov/v1/tx.registry"));
const _164 = __importStar(require("./gov/v1beta1/tx.registry"));
const _165 = __importStar(require("./group/v1/tx.registry"));
const _166 = __importStar(require("./slashing/v1beta1/tx.registry"));
const _167 = __importStar(require("./staking/v1beta1/tx.registry"));
const _168 = __importStar(require("./upgrade/v1beta1/tx.registry"));
const _169 = __importStar(require("./auth/v1beta1/query.lcd"));
const _170 = __importStar(require("./authz/v1beta1/query.lcd"));
const _171 = __importStar(require("./bank/v1beta1/query.lcd"));
const _172 = __importStar(require("./base/tendermint/v1beta1/query.lcd"));
const _173 = __importStar(require("./distribution/v1beta1/query.lcd"));
const _174 = __importStar(require("./evidence/v1beta1/query.lcd"));
const _175 = __importStar(require("./feegrant/v1beta1/query.lcd"));
const _176 = __importStar(require("./gov/v1/query.lcd"));
const _177 = __importStar(require("./gov/v1beta1/query.lcd"));
const _178 = __importStar(require("./group/v1/query.lcd"));
const _179 = __importStar(require("./slashing/v1beta1/query.lcd"));
const _180 = __importStar(require("./staking/v1beta1/query.lcd"));
const _181 = __importStar(require("./tx/v1beta1/service.lcd"));
const _182 = __importStar(require("./upgrade/v1beta1/query.lcd"));
const _183 = __importStar(require("./auth/v1beta1/query.rpc.Query"));
const _184 = __importStar(require("./authz/v1beta1/query.rpc.Query"));
const _185 = __importStar(require("./bank/v1beta1/query.rpc.Query"));
const _186 = __importStar(require("./base/tendermint/v1beta1/query.rpc.Service"));
const _187 = __importStar(require("./distribution/v1beta1/query.rpc.Query"));
const _188 = __importStar(require("./evidence/v1beta1/query.rpc.Query"));
const _189 = __importStar(require("./feegrant/v1beta1/query.rpc.Query"));
const _190 = __importStar(require("./gov/v1/query.rpc.Query"));
const _191 = __importStar(require("./gov/v1beta1/query.rpc.Query"));
const _192 = __importStar(require("./group/v1/query.rpc.Query"));
const _193 = __importStar(require("./slashing/v1beta1/query.rpc.Query"));
const _194 = __importStar(require("./staking/v1beta1/query.rpc.Query"));
const _195 = __importStar(require("./tx/v1beta1/service.rpc.Service"));
const _196 = __importStar(require("./upgrade/v1beta1/query.rpc.Query"));
const _197 = __importStar(require("./authz/v1beta1/tx.rpc.msg"));
const _198 = __importStar(require("./bank/v1beta1/tx.rpc.msg"));
const _199 = __importStar(require("./crisis/v1beta1/tx.rpc.msg"));
const _200 = __importStar(require("./distribution/v1beta1/tx.rpc.msg"));
const _201 = __importStar(require("./evidence/v1beta1/tx.rpc.msg"));
const _202 = __importStar(require("./feegrant/v1beta1/tx.rpc.msg"));
const _203 = __importStar(require("./gov/v1/tx.rpc.msg"));
const _204 = __importStar(require("./gov/v1beta1/tx.rpc.msg"));
const _205 = __importStar(require("./group/v1/tx.rpc.msg"));
const _206 = __importStar(require("./slashing/v1beta1/tx.rpc.msg"));
const _207 = __importStar(require("./staking/v1beta1/tx.rpc.msg"));
const _208 = __importStar(require("./upgrade/v1beta1/tx.rpc.msg"));
const _232 = __importStar(require("./lcd"));
const _233 = __importStar(require("./rpc.query"));
const _234 = __importStar(require("./rpc.tx"));
var cosmos;
(function (cosmos) {
    let auth;
    (function (auth) {
        auth.v1beta1 = {
            ..._20,
            ..._21,
            ..._22,
            ..._169,
            ..._183
        };
    })(auth = cosmos.auth || (cosmos.auth = {}));
    let authz;
    (function (authz) {
        authz.v1beta1 = {
            ..._23,
            ..._24,
            ..._25,
            ..._26,
            ..._27,
            ..._145,
            ..._157,
            ..._170,
            ..._184,
            ..._197
        };
    })(authz = cosmos.authz || (cosmos.authz = {}));
    let bank;
    (function (bank) {
        bank.v1beta1 = {
            ..._28,
            ..._29,
            ..._30,
            ..._31,
            ..._32,
            ..._146,
            ..._158,
            ..._171,
            ..._185,
            ..._198
        };
    })(bank = cosmos.bank || (cosmos.bank = {}));
    let base;
    (function (base) {
        let abci;
        (function (abci) {
            abci.v1beta1 = {
                ..._33
            };
        })(abci = base.abci || (base.abci = {}));
        let query;
        (function (query) {
            query.v1beta1 = {
                ..._34
            };
        })(query = base.query || (base.query = {}));
        let reflection;
        (function (reflection) {
            reflection.v2alpha1 = {
                ..._35
            };
        })(reflection = base.reflection || (base.reflection = {}));
        let tendermint;
        (function (tendermint) {
            tendermint.v1beta1 = {
                ..._36,
                ..._172,
                ..._186
            };
        })(tendermint = base.tendermint || (base.tendermint = {}));
        base.v1beta1 = {
            ..._37
        };
    })(base = cosmos.base || (cosmos.base = {}));
    let crisis;
    (function (crisis) {
        crisis.v1beta1 = {
            ..._38,
            ..._39,
            ..._147,
            ..._159,
            ..._199
        };
    })(crisis = cosmos.crisis || (cosmos.crisis = {}));
    let crypto;
    (function (crypto) {
        crypto.ed25519 = {
            ..._40
        };
        let hd;
        (function (hd) {
            hd.v1 = {
                ..._41
            };
        })(hd = crypto.hd || (crypto.hd = {}));
        let keyring;
        (function (keyring) {
            keyring.v1 = {
                ..._42
            };
        })(keyring = crypto.keyring || (crypto.keyring = {}));
        crypto.multisig = {
            ..._43
        };
        crypto.secp256k1 = {
            ..._44
        };
        crypto.secp256r1 = {
            ..._45
        };
    })(crypto = cosmos.crypto || (cosmos.crypto = {}));
    let distribution;
    (function (distribution) {
        distribution.v1beta1 = {
            ..._46,
            ..._47,
            ..._48,
            ..._49,
            ..._148,
            ..._160,
            ..._173,
            ..._187,
            ..._200
        };
    })(distribution = cosmos.distribution || (cosmos.distribution = {}));
    let evidence;
    (function (evidence) {
        evidence.v1beta1 = {
            ..._50,
            ..._51,
            ..._52,
            ..._53,
            ..._149,
            ..._161,
            ..._174,
            ..._188,
            ..._201
        };
    })(evidence = cosmos.evidence || (cosmos.evidence = {}));
    let feegrant;
    (function (feegrant) {
        feegrant.v1beta1 = {
            ..._54,
            ..._55,
            ..._56,
            ..._57,
            ..._150,
            ..._162,
            ..._175,
            ..._189,
            ..._202
        };
    })(feegrant = cosmos.feegrant || (cosmos.feegrant = {}));
    let gov;
    (function (gov) {
        gov.v1 = {
            ..._58,
            ..._59,
            ..._60,
            ..._61,
            ..._151,
            ..._163,
            ..._176,
            ..._190,
            ..._203
        };
        gov.v1beta1 = {
            ..._62,
            ..._63,
            ..._64,
            ..._65,
            ..._152,
            ..._164,
            ..._177,
            ..._191,
            ..._204
        };
    })(gov = cosmos.gov || (cosmos.gov = {}));
    let group;
    (function (group) {
        group.v1 = {
            ..._66,
            ..._67,
            ..._68,
            ..._69,
            ..._70,
            ..._153,
            ..._165,
            ..._178,
            ..._192,
            ..._205
        };
    })(group = cosmos.group || (cosmos.group = {}));
    let slashing;
    (function (slashing) {
        slashing.v1beta1 = {
            ..._71,
            ..._72,
            ..._73,
            ..._74,
            ..._154,
            ..._166,
            ..._179,
            ..._193,
            ..._206
        };
    })(slashing = cosmos.slashing || (cosmos.slashing = {}));
    let staking;
    (function (staking) {
        staking.v1beta1 = {
            ..._75,
            ..._76,
            ..._77,
            ..._78,
            ..._79,
            ..._155,
            ..._167,
            ..._180,
            ..._194,
            ..._207
        };
    })(staking = cosmos.staking || (cosmos.staking = {}));
    let tx;
    (function (tx) {
        let signing;
        (function (signing) {
            signing.v1beta1 = {
                ..._80
            };
        })(signing = tx.signing || (tx.signing = {}));
        tx.v1beta1 = {
            ..._81,
            ..._82,
            ..._181,
            ..._195
        };
    })(tx = cosmos.tx || (cosmos.tx = {}));
    let upgrade;
    (function (upgrade) {
        upgrade.v1beta1 = {
            ..._83,
            ..._84,
            ..._85,
            ..._156,
            ..._168,
            ..._182,
            ..._196,
            ..._208
        };
    })(upgrade = cosmos.upgrade || (cosmos.upgrade = {}));
    cosmos.ClientFactory = {
        ..._232,
        ..._233,
        ..._234
    };
})(cosmos || (exports.cosmos = cosmos = {}));

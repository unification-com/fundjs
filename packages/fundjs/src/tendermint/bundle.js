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
exports.tendermint = void 0;
//@ts-nocheck
const _114 = __importStar(require("./abci/types"));
const _115 = __importStar(require("./crypto/keys"));
const _116 = __importStar(require("./crypto/proof"));
const _117 = __importStar(require("./libs/bits/types"));
const _118 = __importStar(require("./p2p/types"));
const _119 = __importStar(require("./types/block"));
const _120 = __importStar(require("./types/evidence"));
const _121 = __importStar(require("./types/params"));
const _122 = __importStar(require("./types/types"));
const _123 = __importStar(require("./types/validator"));
const _124 = __importStar(require("./version/types"));
var tendermint;
(function (tendermint) {
    tendermint.abci = {
        ..._114
    };
    tendermint.crypto = {
        ..._115,
        ..._116
    };
    let libs;
    (function (libs) {
        libs.bits = {
            ..._117
        };
    })(libs = tendermint.libs || (tendermint.libs = {}));
    tendermint.p2p = {
        ..._118
    };
    tendermint.types = {
        ..._119,
        ..._120,
        ..._121,
        ..._122,
        ..._123
    };
    tendermint.version = {
        ..._124
    };
})(tendermint || (exports.tendermint = tendermint = {}));

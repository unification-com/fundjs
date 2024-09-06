"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GeneratedCodeInfo_Annotation = exports.GeneratedCodeInfo = exports.SourceCodeInfo_Location = exports.SourceCodeInfo = exports.UninterpretedOption_NamePart = exports.UninterpretedOption = exports.MethodOptions = exports.ServiceOptions = exports.EnumValueOptions = exports.EnumOptions = exports.OneofOptions = exports.FieldOptions = exports.MessageOptions = exports.FileOptions = exports.MethodDescriptorProto = exports.ServiceDescriptorProto = exports.EnumValueDescriptorProto = exports.EnumDescriptorProto_EnumReservedRange = exports.EnumDescriptorProto = exports.OneofDescriptorProto = exports.FieldDescriptorProto = exports.ExtensionRangeOptions = exports.DescriptorProto_ReservedRange = exports.DescriptorProto_ExtensionRange = exports.DescriptorProto = exports.FileDescriptorProto = exports.FileDescriptorSet = exports.MethodOptions_IdempotencyLevelAmino = exports.MethodOptions_IdempotencyLevelSDKType = exports.MethodOptions_IdempotencyLevel = exports.FieldOptions_JSTypeAmino = exports.FieldOptions_JSTypeSDKType = exports.FieldOptions_JSType = exports.FieldOptions_CTypeAmino = exports.FieldOptions_CTypeSDKType = exports.FieldOptions_CType = exports.FileOptions_OptimizeModeAmino = exports.FileOptions_OptimizeModeSDKType = exports.FileOptions_OptimizeMode = exports.FieldDescriptorProto_LabelAmino = exports.FieldDescriptorProto_LabelSDKType = exports.FieldDescriptorProto_Label = exports.FieldDescriptorProto_TypeAmino = exports.FieldDescriptorProto_TypeSDKType = exports.FieldDescriptorProto_Type = void 0;
exports.fieldDescriptorProto_TypeFromJSON = fieldDescriptorProto_TypeFromJSON;
exports.fieldDescriptorProto_TypeToJSON = fieldDescriptorProto_TypeToJSON;
exports.fieldDescriptorProto_LabelFromJSON = fieldDescriptorProto_LabelFromJSON;
exports.fieldDescriptorProto_LabelToJSON = fieldDescriptorProto_LabelToJSON;
exports.fileOptions_OptimizeModeFromJSON = fileOptions_OptimizeModeFromJSON;
exports.fileOptions_OptimizeModeToJSON = fileOptions_OptimizeModeToJSON;
exports.fieldOptions_CTypeFromJSON = fieldOptions_CTypeFromJSON;
exports.fieldOptions_CTypeToJSON = fieldOptions_CTypeToJSON;
exports.fieldOptions_JSTypeFromJSON = fieldOptions_JSTypeFromJSON;
exports.fieldOptions_JSTypeToJSON = fieldOptions_JSTypeToJSON;
exports.methodOptions_IdempotencyLevelFromJSON = methodOptions_IdempotencyLevelFromJSON;
exports.methodOptions_IdempotencyLevelToJSON = methodOptions_IdempotencyLevelToJSON;
//@ts-nocheck
const binary_1 = require("../../binary");
const registry_1 = require("../../registry");
const helpers_1 = require("../../helpers");
var FieldDescriptorProto_Type;
(function (FieldDescriptorProto_Type) {
    /**
     * TYPE_DOUBLE - 0 is reserved for errors.
     * Order is weird for historical reasons.
     */
    FieldDescriptorProto_Type[FieldDescriptorProto_Type["TYPE_DOUBLE"] = 1] = "TYPE_DOUBLE";
    FieldDescriptorProto_Type[FieldDescriptorProto_Type["TYPE_FLOAT"] = 2] = "TYPE_FLOAT";
    /**
     * TYPE_INT64 - Not ZigZag encoded.  Negative numbers take 10 bytes.  Use TYPE_SINT64 if
     * negative values are likely.
     */
    FieldDescriptorProto_Type[FieldDescriptorProto_Type["TYPE_INT64"] = 3] = "TYPE_INT64";
    FieldDescriptorProto_Type[FieldDescriptorProto_Type["TYPE_UINT64"] = 4] = "TYPE_UINT64";
    /**
     * TYPE_INT32 - Not ZigZag encoded.  Negative numbers take 10 bytes.  Use TYPE_SINT32 if
     * negative values are likely.
     */
    FieldDescriptorProto_Type[FieldDescriptorProto_Type["TYPE_INT32"] = 5] = "TYPE_INT32";
    FieldDescriptorProto_Type[FieldDescriptorProto_Type["TYPE_FIXED64"] = 6] = "TYPE_FIXED64";
    FieldDescriptorProto_Type[FieldDescriptorProto_Type["TYPE_FIXED32"] = 7] = "TYPE_FIXED32";
    FieldDescriptorProto_Type[FieldDescriptorProto_Type["TYPE_BOOL"] = 8] = "TYPE_BOOL";
    FieldDescriptorProto_Type[FieldDescriptorProto_Type["TYPE_STRING"] = 9] = "TYPE_STRING";
    /**
     * TYPE_GROUP - Tag-delimited aggregate.
     * Group type is deprecated and not supported in proto3. However, Proto3
     * implementations should still be able to parse the group wire format and
     * treat group fields as unknown fields.
     */
    FieldDescriptorProto_Type[FieldDescriptorProto_Type["TYPE_GROUP"] = 10] = "TYPE_GROUP";
    /** TYPE_MESSAGE - Length-delimited aggregate. */
    FieldDescriptorProto_Type[FieldDescriptorProto_Type["TYPE_MESSAGE"] = 11] = "TYPE_MESSAGE";
    /** TYPE_BYTES - New in version 2. */
    FieldDescriptorProto_Type[FieldDescriptorProto_Type["TYPE_BYTES"] = 12] = "TYPE_BYTES";
    FieldDescriptorProto_Type[FieldDescriptorProto_Type["TYPE_UINT32"] = 13] = "TYPE_UINT32";
    FieldDescriptorProto_Type[FieldDescriptorProto_Type["TYPE_ENUM"] = 14] = "TYPE_ENUM";
    FieldDescriptorProto_Type[FieldDescriptorProto_Type["TYPE_SFIXED32"] = 15] = "TYPE_SFIXED32";
    FieldDescriptorProto_Type[FieldDescriptorProto_Type["TYPE_SFIXED64"] = 16] = "TYPE_SFIXED64";
    /** TYPE_SINT32 - Uses ZigZag encoding. */
    FieldDescriptorProto_Type[FieldDescriptorProto_Type["TYPE_SINT32"] = 17] = "TYPE_SINT32";
    /** TYPE_SINT64 - Uses ZigZag encoding. */
    FieldDescriptorProto_Type[FieldDescriptorProto_Type["TYPE_SINT64"] = 18] = "TYPE_SINT64";
    FieldDescriptorProto_Type[FieldDescriptorProto_Type["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(FieldDescriptorProto_Type || (exports.FieldDescriptorProto_Type = FieldDescriptorProto_Type = {}));
exports.FieldDescriptorProto_TypeSDKType = FieldDescriptorProto_Type;
exports.FieldDescriptorProto_TypeAmino = FieldDescriptorProto_Type;
function fieldDescriptorProto_TypeFromJSON(object) {
    switch (object) {
        case 1:
        case "TYPE_DOUBLE":
            return FieldDescriptorProto_Type.TYPE_DOUBLE;
        case 2:
        case "TYPE_FLOAT":
            return FieldDescriptorProto_Type.TYPE_FLOAT;
        case 3:
        case "TYPE_INT64":
            return FieldDescriptorProto_Type.TYPE_INT64;
        case 4:
        case "TYPE_UINT64":
            return FieldDescriptorProto_Type.TYPE_UINT64;
        case 5:
        case "TYPE_INT32":
            return FieldDescriptorProto_Type.TYPE_INT32;
        case 6:
        case "TYPE_FIXED64":
            return FieldDescriptorProto_Type.TYPE_FIXED64;
        case 7:
        case "TYPE_FIXED32":
            return FieldDescriptorProto_Type.TYPE_FIXED32;
        case 8:
        case "TYPE_BOOL":
            return FieldDescriptorProto_Type.TYPE_BOOL;
        case 9:
        case "TYPE_STRING":
            return FieldDescriptorProto_Type.TYPE_STRING;
        case 10:
        case "TYPE_GROUP":
            return FieldDescriptorProto_Type.TYPE_GROUP;
        case 11:
        case "TYPE_MESSAGE":
            return FieldDescriptorProto_Type.TYPE_MESSAGE;
        case 12:
        case "TYPE_BYTES":
            return FieldDescriptorProto_Type.TYPE_BYTES;
        case 13:
        case "TYPE_UINT32":
            return FieldDescriptorProto_Type.TYPE_UINT32;
        case 14:
        case "TYPE_ENUM":
            return FieldDescriptorProto_Type.TYPE_ENUM;
        case 15:
        case "TYPE_SFIXED32":
            return FieldDescriptorProto_Type.TYPE_SFIXED32;
        case 16:
        case "TYPE_SFIXED64":
            return FieldDescriptorProto_Type.TYPE_SFIXED64;
        case 17:
        case "TYPE_SINT32":
            return FieldDescriptorProto_Type.TYPE_SINT32;
        case 18:
        case "TYPE_SINT64":
            return FieldDescriptorProto_Type.TYPE_SINT64;
        case -1:
        case "UNRECOGNIZED":
        default:
            return FieldDescriptorProto_Type.UNRECOGNIZED;
    }
}
function fieldDescriptorProto_TypeToJSON(object) {
    switch (object) {
        case FieldDescriptorProto_Type.TYPE_DOUBLE:
            return "TYPE_DOUBLE";
        case FieldDescriptorProto_Type.TYPE_FLOAT:
            return "TYPE_FLOAT";
        case FieldDescriptorProto_Type.TYPE_INT64:
            return "TYPE_INT64";
        case FieldDescriptorProto_Type.TYPE_UINT64:
            return "TYPE_UINT64";
        case FieldDescriptorProto_Type.TYPE_INT32:
            return "TYPE_INT32";
        case FieldDescriptorProto_Type.TYPE_FIXED64:
            return "TYPE_FIXED64";
        case FieldDescriptorProto_Type.TYPE_FIXED32:
            return "TYPE_FIXED32";
        case FieldDescriptorProto_Type.TYPE_BOOL:
            return "TYPE_BOOL";
        case FieldDescriptorProto_Type.TYPE_STRING:
            return "TYPE_STRING";
        case FieldDescriptorProto_Type.TYPE_GROUP:
            return "TYPE_GROUP";
        case FieldDescriptorProto_Type.TYPE_MESSAGE:
            return "TYPE_MESSAGE";
        case FieldDescriptorProto_Type.TYPE_BYTES:
            return "TYPE_BYTES";
        case FieldDescriptorProto_Type.TYPE_UINT32:
            return "TYPE_UINT32";
        case FieldDescriptorProto_Type.TYPE_ENUM:
            return "TYPE_ENUM";
        case FieldDescriptorProto_Type.TYPE_SFIXED32:
            return "TYPE_SFIXED32";
        case FieldDescriptorProto_Type.TYPE_SFIXED64:
            return "TYPE_SFIXED64";
        case FieldDescriptorProto_Type.TYPE_SINT32:
            return "TYPE_SINT32";
        case FieldDescriptorProto_Type.TYPE_SINT64:
            return "TYPE_SINT64";
        case FieldDescriptorProto_Type.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
var FieldDescriptorProto_Label;
(function (FieldDescriptorProto_Label) {
    /** LABEL_OPTIONAL - 0 is reserved for errors */
    FieldDescriptorProto_Label[FieldDescriptorProto_Label["LABEL_OPTIONAL"] = 1] = "LABEL_OPTIONAL";
    FieldDescriptorProto_Label[FieldDescriptorProto_Label["LABEL_REQUIRED"] = 2] = "LABEL_REQUIRED";
    FieldDescriptorProto_Label[FieldDescriptorProto_Label["LABEL_REPEATED"] = 3] = "LABEL_REPEATED";
    FieldDescriptorProto_Label[FieldDescriptorProto_Label["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(FieldDescriptorProto_Label || (exports.FieldDescriptorProto_Label = FieldDescriptorProto_Label = {}));
exports.FieldDescriptorProto_LabelSDKType = FieldDescriptorProto_Label;
exports.FieldDescriptorProto_LabelAmino = FieldDescriptorProto_Label;
function fieldDescriptorProto_LabelFromJSON(object) {
    switch (object) {
        case 1:
        case "LABEL_OPTIONAL":
            return FieldDescriptorProto_Label.LABEL_OPTIONAL;
        case 2:
        case "LABEL_REQUIRED":
            return FieldDescriptorProto_Label.LABEL_REQUIRED;
        case 3:
        case "LABEL_REPEATED":
            return FieldDescriptorProto_Label.LABEL_REPEATED;
        case -1:
        case "UNRECOGNIZED":
        default:
            return FieldDescriptorProto_Label.UNRECOGNIZED;
    }
}
function fieldDescriptorProto_LabelToJSON(object) {
    switch (object) {
        case FieldDescriptorProto_Label.LABEL_OPTIONAL:
            return "LABEL_OPTIONAL";
        case FieldDescriptorProto_Label.LABEL_REQUIRED:
            return "LABEL_REQUIRED";
        case FieldDescriptorProto_Label.LABEL_REPEATED:
            return "LABEL_REPEATED";
        case FieldDescriptorProto_Label.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
/** Generated classes can be optimized for speed or code size. */
var FileOptions_OptimizeMode;
(function (FileOptions_OptimizeMode) {
    /** SPEED - Generate complete code for parsing, serialization, */
    FileOptions_OptimizeMode[FileOptions_OptimizeMode["SPEED"] = 1] = "SPEED";
    /** CODE_SIZE - etc. */
    FileOptions_OptimizeMode[FileOptions_OptimizeMode["CODE_SIZE"] = 2] = "CODE_SIZE";
    /** LITE_RUNTIME - Generate code using MessageLite and the lite runtime. */
    FileOptions_OptimizeMode[FileOptions_OptimizeMode["LITE_RUNTIME"] = 3] = "LITE_RUNTIME";
    FileOptions_OptimizeMode[FileOptions_OptimizeMode["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(FileOptions_OptimizeMode || (exports.FileOptions_OptimizeMode = FileOptions_OptimizeMode = {}));
exports.FileOptions_OptimizeModeSDKType = FileOptions_OptimizeMode;
exports.FileOptions_OptimizeModeAmino = FileOptions_OptimizeMode;
function fileOptions_OptimizeModeFromJSON(object) {
    switch (object) {
        case 1:
        case "SPEED":
            return FileOptions_OptimizeMode.SPEED;
        case 2:
        case "CODE_SIZE":
            return FileOptions_OptimizeMode.CODE_SIZE;
        case 3:
        case "LITE_RUNTIME":
            return FileOptions_OptimizeMode.LITE_RUNTIME;
        case -1:
        case "UNRECOGNIZED":
        default:
            return FileOptions_OptimizeMode.UNRECOGNIZED;
    }
}
function fileOptions_OptimizeModeToJSON(object) {
    switch (object) {
        case FileOptions_OptimizeMode.SPEED:
            return "SPEED";
        case FileOptions_OptimizeMode.CODE_SIZE:
            return "CODE_SIZE";
        case FileOptions_OptimizeMode.LITE_RUNTIME:
            return "LITE_RUNTIME";
        case FileOptions_OptimizeMode.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
var FieldOptions_CType;
(function (FieldOptions_CType) {
    /** STRING - Default mode. */
    FieldOptions_CType[FieldOptions_CType["STRING"] = 0] = "STRING";
    FieldOptions_CType[FieldOptions_CType["CORD"] = 1] = "CORD";
    FieldOptions_CType[FieldOptions_CType["STRING_PIECE"] = 2] = "STRING_PIECE";
    FieldOptions_CType[FieldOptions_CType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(FieldOptions_CType || (exports.FieldOptions_CType = FieldOptions_CType = {}));
exports.FieldOptions_CTypeSDKType = FieldOptions_CType;
exports.FieldOptions_CTypeAmino = FieldOptions_CType;
function fieldOptions_CTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "STRING":
            return FieldOptions_CType.STRING;
        case 1:
        case "CORD":
            return FieldOptions_CType.CORD;
        case 2:
        case "STRING_PIECE":
            return FieldOptions_CType.STRING_PIECE;
        case -1:
        case "UNRECOGNIZED":
        default:
            return FieldOptions_CType.UNRECOGNIZED;
    }
}
function fieldOptions_CTypeToJSON(object) {
    switch (object) {
        case FieldOptions_CType.STRING:
            return "STRING";
        case FieldOptions_CType.CORD:
            return "CORD";
        case FieldOptions_CType.STRING_PIECE:
            return "STRING_PIECE";
        case FieldOptions_CType.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
var FieldOptions_JSType;
(function (FieldOptions_JSType) {
    /** JS_NORMAL - Use the default type. */
    FieldOptions_JSType[FieldOptions_JSType["JS_NORMAL"] = 0] = "JS_NORMAL";
    /** JS_STRING - Use JavaScript strings. */
    FieldOptions_JSType[FieldOptions_JSType["JS_STRING"] = 1] = "JS_STRING";
    /** JS_NUMBER - Use JavaScript numbers. */
    FieldOptions_JSType[FieldOptions_JSType["JS_NUMBER"] = 2] = "JS_NUMBER";
    FieldOptions_JSType[FieldOptions_JSType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(FieldOptions_JSType || (exports.FieldOptions_JSType = FieldOptions_JSType = {}));
exports.FieldOptions_JSTypeSDKType = FieldOptions_JSType;
exports.FieldOptions_JSTypeAmino = FieldOptions_JSType;
function fieldOptions_JSTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "JS_NORMAL":
            return FieldOptions_JSType.JS_NORMAL;
        case 1:
        case "JS_STRING":
            return FieldOptions_JSType.JS_STRING;
        case 2:
        case "JS_NUMBER":
            return FieldOptions_JSType.JS_NUMBER;
        case -1:
        case "UNRECOGNIZED":
        default:
            return FieldOptions_JSType.UNRECOGNIZED;
    }
}
function fieldOptions_JSTypeToJSON(object) {
    switch (object) {
        case FieldOptions_JSType.JS_NORMAL:
            return "JS_NORMAL";
        case FieldOptions_JSType.JS_STRING:
            return "JS_STRING";
        case FieldOptions_JSType.JS_NUMBER:
            return "JS_NUMBER";
        case FieldOptions_JSType.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
/**
 * Is this method side-effect-free (or safe in HTTP parlance), or idempotent,
 * or neither? HTTP based RPC implementation may choose GET verb for safe
 * methods, and PUT verb for idempotent methods instead of the default POST.
 */
var MethodOptions_IdempotencyLevel;
(function (MethodOptions_IdempotencyLevel) {
    MethodOptions_IdempotencyLevel[MethodOptions_IdempotencyLevel["IDEMPOTENCY_UNKNOWN"] = 0] = "IDEMPOTENCY_UNKNOWN";
    /** NO_SIDE_EFFECTS - implies idempotent */
    MethodOptions_IdempotencyLevel[MethodOptions_IdempotencyLevel["NO_SIDE_EFFECTS"] = 1] = "NO_SIDE_EFFECTS";
    /** IDEMPOTENT - idempotent, but may have side effects */
    MethodOptions_IdempotencyLevel[MethodOptions_IdempotencyLevel["IDEMPOTENT"] = 2] = "IDEMPOTENT";
    MethodOptions_IdempotencyLevel[MethodOptions_IdempotencyLevel["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(MethodOptions_IdempotencyLevel || (exports.MethodOptions_IdempotencyLevel = MethodOptions_IdempotencyLevel = {}));
exports.MethodOptions_IdempotencyLevelSDKType = MethodOptions_IdempotencyLevel;
exports.MethodOptions_IdempotencyLevelAmino = MethodOptions_IdempotencyLevel;
function methodOptions_IdempotencyLevelFromJSON(object) {
    switch (object) {
        case 0:
        case "IDEMPOTENCY_UNKNOWN":
            return MethodOptions_IdempotencyLevel.IDEMPOTENCY_UNKNOWN;
        case 1:
        case "NO_SIDE_EFFECTS":
            return MethodOptions_IdempotencyLevel.NO_SIDE_EFFECTS;
        case 2:
        case "IDEMPOTENT":
            return MethodOptions_IdempotencyLevel.IDEMPOTENT;
        case -1:
        case "UNRECOGNIZED":
        default:
            return MethodOptions_IdempotencyLevel.UNRECOGNIZED;
    }
}
function methodOptions_IdempotencyLevelToJSON(object) {
    switch (object) {
        case MethodOptions_IdempotencyLevel.IDEMPOTENCY_UNKNOWN:
            return "IDEMPOTENCY_UNKNOWN";
        case MethodOptions_IdempotencyLevel.NO_SIDE_EFFECTS:
            return "NO_SIDE_EFFECTS";
        case MethodOptions_IdempotencyLevel.IDEMPOTENT:
            return "IDEMPOTENT";
        case MethodOptions_IdempotencyLevel.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
function createBaseFileDescriptorSet() {
    return {
        file: []
    };
}
exports.FileDescriptorSet = {
    typeUrl: "/google.protobuf.FileDescriptorSet",
    is(o) {
        return o && (o.$typeUrl === exports.FileDescriptorSet.typeUrl || Array.isArray(o.file) && (!o.file.length || exports.FileDescriptorProto.is(o.file[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.FileDescriptorSet.typeUrl || Array.isArray(o.file) && (!o.file.length || exports.FileDescriptorProto.isSDK(o.file[0])));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.FileDescriptorSet.typeUrl || Array.isArray(o.file) && (!o.file.length || exports.FileDescriptorProto.isAmino(o.file[0])));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.file) {
            exports.FileDescriptorProto.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseFileDescriptorSet();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.file.push(exports.FileDescriptorProto.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseFileDescriptorSet();
        message.file = object.file?.map(e => exports.FileDescriptorProto.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseFileDescriptorSet();
        message.file = object.file?.map(e => exports.FileDescriptorProto.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.file) {
            obj.file = message.file.map(e => e ? exports.FileDescriptorProto.toAmino(e) : undefined);
        }
        else {
            obj.file = message.file;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.FileDescriptorSet.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.FileDescriptorSet.decode(message.value);
    },
    toProto(message) {
        return exports.FileDescriptorSet.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/google.protobuf.FileDescriptorSet",
            value: exports.FileDescriptorSet.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.FileDescriptorSet.typeUrl, exports.FileDescriptorSet);
function createBaseFileDescriptorProto() {
    return {
        name: "",
        package: "",
        dependency: [],
        publicDependency: [],
        weakDependency: [],
        messageType: [],
        enumType: [],
        service: [],
        extension: [],
        options: undefined,
        sourceCodeInfo: undefined,
        syntax: ""
    };
}
exports.FileDescriptorProto = {
    typeUrl: "/google.protobuf.FileDescriptorProto",
    is(o) {
        return o && (o.$typeUrl === exports.FileDescriptorProto.typeUrl || typeof o.name === "string" && typeof o.package === "string" && Array.isArray(o.dependency) && (!o.dependency.length || typeof o.dependency[0] === "string") && Array.isArray(o.publicDependency) && (!o.publicDependency.length || typeof o.publicDependency[0] === "number") && Array.isArray(o.weakDependency) && (!o.weakDependency.length || typeof o.weakDependency[0] === "number") && Array.isArray(o.messageType) && (!o.messageType.length || exports.DescriptorProto.is(o.messageType[0])) && Array.isArray(o.enumType) && (!o.enumType.length || exports.EnumDescriptorProto.is(o.enumType[0])) && Array.isArray(o.service) && (!o.service.length || exports.ServiceDescriptorProto.is(o.service[0])) && Array.isArray(o.extension) && (!o.extension.length || exports.FieldDescriptorProto.is(o.extension[0])) && typeof o.syntax === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.FileDescriptorProto.typeUrl || typeof o.name === "string" && typeof o.package === "string" && Array.isArray(o.dependency) && (!o.dependency.length || typeof o.dependency[0] === "string") && Array.isArray(o.public_dependency) && (!o.public_dependency.length || typeof o.public_dependency[0] === "number") && Array.isArray(o.weak_dependency) && (!o.weak_dependency.length || typeof o.weak_dependency[0] === "number") && Array.isArray(o.message_type) && (!o.message_type.length || exports.DescriptorProto.isSDK(o.message_type[0])) && Array.isArray(o.enum_type) && (!o.enum_type.length || exports.EnumDescriptorProto.isSDK(o.enum_type[0])) && Array.isArray(o.service) && (!o.service.length || exports.ServiceDescriptorProto.isSDK(o.service[0])) && Array.isArray(o.extension) && (!o.extension.length || exports.FieldDescriptorProto.isSDK(o.extension[0])) && typeof o.syntax === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.FileDescriptorProto.typeUrl || typeof o.name === "string" && typeof o.package === "string" && Array.isArray(o.dependency) && (!o.dependency.length || typeof o.dependency[0] === "string") && Array.isArray(o.public_dependency) && (!o.public_dependency.length || typeof o.public_dependency[0] === "number") && Array.isArray(o.weak_dependency) && (!o.weak_dependency.length || typeof o.weak_dependency[0] === "number") && Array.isArray(o.message_type) && (!o.message_type.length || exports.DescriptorProto.isAmino(o.message_type[0])) && Array.isArray(o.enum_type) && (!o.enum_type.length || exports.EnumDescriptorProto.isAmino(o.enum_type[0])) && Array.isArray(o.service) && (!o.service.length || exports.ServiceDescriptorProto.isAmino(o.service[0])) && Array.isArray(o.extension) && (!o.extension.length || exports.FieldDescriptorProto.isAmino(o.extension[0])) && typeof o.syntax === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.package !== "") {
            writer.uint32(18).string(message.package);
        }
        for (const v of message.dependency) {
            writer.uint32(26).string(v);
        }
        writer.uint32(82).fork();
        for (const v of message.publicDependency) {
            writer.int32(v);
        }
        writer.ldelim();
        writer.uint32(90).fork();
        for (const v of message.weakDependency) {
            writer.int32(v);
        }
        writer.ldelim();
        for (const v of message.messageType) {
            exports.DescriptorProto.encode(v, writer.uint32(34).fork()).ldelim();
        }
        for (const v of message.enumType) {
            exports.EnumDescriptorProto.encode(v, writer.uint32(42).fork()).ldelim();
        }
        for (const v of message.service) {
            exports.ServiceDescriptorProto.encode(v, writer.uint32(50).fork()).ldelim();
        }
        for (const v of message.extension) {
            exports.FieldDescriptorProto.encode(v, writer.uint32(58).fork()).ldelim();
        }
        if (message.options !== undefined) {
            exports.FileOptions.encode(message.options, writer.uint32(66).fork()).ldelim();
        }
        if (message.sourceCodeInfo !== undefined) {
            exports.SourceCodeInfo.encode(message.sourceCodeInfo, writer.uint32(74).fork()).ldelim();
        }
        if (message.syntax !== "") {
            writer.uint32(98).string(message.syntax);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseFileDescriptorProto();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.package = reader.string();
                    break;
                case 3:
                    message.dependency.push(reader.string());
                    break;
                case 10:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.publicDependency.push(reader.int32());
                        }
                    }
                    else {
                        message.publicDependency.push(reader.int32());
                    }
                    break;
                case 11:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.weakDependency.push(reader.int32());
                        }
                    }
                    else {
                        message.weakDependency.push(reader.int32());
                    }
                    break;
                case 4:
                    message.messageType.push(exports.DescriptorProto.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.enumType.push(exports.EnumDescriptorProto.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.service.push(exports.ServiceDescriptorProto.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.extension.push(exports.FieldDescriptorProto.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.options = exports.FileOptions.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.sourceCodeInfo = exports.SourceCodeInfo.decode(reader, reader.uint32());
                    break;
                case 12:
                    message.syntax = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseFileDescriptorProto();
        message.name = object.name ?? "";
        message.package = object.package ?? "";
        message.dependency = object.dependency?.map(e => e) || [];
        message.publicDependency = object.publicDependency?.map(e => e) || [];
        message.weakDependency = object.weakDependency?.map(e => e) || [];
        message.messageType = object.messageType?.map(e => exports.DescriptorProto.fromPartial(e)) || [];
        message.enumType = object.enumType?.map(e => exports.EnumDescriptorProto.fromPartial(e)) || [];
        message.service = object.service?.map(e => exports.ServiceDescriptorProto.fromPartial(e)) || [];
        message.extension = object.extension?.map(e => exports.FieldDescriptorProto.fromPartial(e)) || [];
        message.options = object.options !== undefined && object.options !== null ? exports.FileOptions.fromPartial(object.options) : undefined;
        message.sourceCodeInfo = object.sourceCodeInfo !== undefined && object.sourceCodeInfo !== null ? exports.SourceCodeInfo.fromPartial(object.sourceCodeInfo) : undefined;
        message.syntax = object.syntax ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseFileDescriptorProto();
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        if (object.package !== undefined && object.package !== null) {
            message.package = object.package;
        }
        message.dependency = object.dependency?.map(e => e) || [];
        message.publicDependency = object.public_dependency?.map(e => e) || [];
        message.weakDependency = object.weak_dependency?.map(e => e) || [];
        message.messageType = object.message_type?.map(e => exports.DescriptorProto.fromAmino(e)) || [];
        message.enumType = object.enum_type?.map(e => exports.EnumDescriptorProto.fromAmino(e)) || [];
        message.service = object.service?.map(e => exports.ServiceDescriptorProto.fromAmino(e)) || [];
        message.extension = object.extension?.map(e => exports.FieldDescriptorProto.fromAmino(e)) || [];
        if (object.options !== undefined && object.options !== null) {
            message.options = exports.FileOptions.fromAmino(object.options);
        }
        if (object.source_code_info !== undefined && object.source_code_info !== null) {
            message.sourceCodeInfo = exports.SourceCodeInfo.fromAmino(object.source_code_info);
        }
        if (object.syntax !== undefined && object.syntax !== null) {
            message.syntax = object.syntax;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.name = message.name === "" ? undefined : message.name;
        obj.package = message.package === "" ? undefined : message.package;
        if (message.dependency) {
            obj.dependency = message.dependency.map(e => e);
        }
        else {
            obj.dependency = message.dependency;
        }
        if (message.publicDependency) {
            obj.public_dependency = message.publicDependency.map(e => e);
        }
        else {
            obj.public_dependency = message.publicDependency;
        }
        if (message.weakDependency) {
            obj.weak_dependency = message.weakDependency.map(e => e);
        }
        else {
            obj.weak_dependency = message.weakDependency;
        }
        if (message.messageType) {
            obj.message_type = message.messageType.map(e => e ? exports.DescriptorProto.toAmino(e) : undefined);
        }
        else {
            obj.message_type = message.messageType;
        }
        if (message.enumType) {
            obj.enum_type = message.enumType.map(e => e ? exports.EnumDescriptorProto.toAmino(e) : undefined);
        }
        else {
            obj.enum_type = message.enumType;
        }
        if (message.service) {
            obj.service = message.service.map(e => e ? exports.ServiceDescriptorProto.toAmino(e) : undefined);
        }
        else {
            obj.service = message.service;
        }
        if (message.extension) {
            obj.extension = message.extension.map(e => e ? exports.FieldDescriptorProto.toAmino(e) : undefined);
        }
        else {
            obj.extension = message.extension;
        }
        obj.options = message.options ? exports.FileOptions.toAmino(message.options) : undefined;
        obj.source_code_info = message.sourceCodeInfo ? exports.SourceCodeInfo.toAmino(message.sourceCodeInfo) : undefined;
        obj.syntax = message.syntax === "" ? undefined : message.syntax;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.FileDescriptorProto.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.FileDescriptorProto.decode(message.value);
    },
    toProto(message) {
        return exports.FileDescriptorProto.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/google.protobuf.FileDescriptorProto",
            value: exports.FileDescriptorProto.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.FileDescriptorProto.typeUrl, exports.FileDescriptorProto);
function createBaseDescriptorProto() {
    return {
        name: "",
        field: [],
        extension: [],
        nestedType: [],
        enumType: [],
        extensionRange: [],
        oneofDecl: [],
        options: undefined,
        reservedRange: [],
        reservedName: []
    };
}
exports.DescriptorProto = {
    typeUrl: "/google.protobuf.DescriptorProto",
    is(o) {
        return o && (o.$typeUrl === exports.DescriptorProto.typeUrl || typeof o.name === "string" && Array.isArray(o.field) && (!o.field.length || exports.FieldDescriptorProto.is(o.field[0])) && Array.isArray(o.extension) && (!o.extension.length || exports.FieldDescriptorProto.is(o.extension[0])) && Array.isArray(o.nestedType) && (!o.nestedType.length || exports.DescriptorProto.is(o.nestedType[0])) && Array.isArray(o.enumType) && (!o.enumType.length || exports.EnumDescriptorProto.is(o.enumType[0])) && Array.isArray(o.extensionRange) && (!o.extensionRange.length || exports.DescriptorProto_ExtensionRange.is(o.extensionRange[0])) && Array.isArray(o.oneofDecl) && (!o.oneofDecl.length || exports.OneofDescriptorProto.is(o.oneofDecl[0])) && Array.isArray(o.reservedRange) && (!o.reservedRange.length || exports.DescriptorProto_ReservedRange.is(o.reservedRange[0])) && Array.isArray(o.reservedName) && (!o.reservedName.length || typeof o.reservedName[0] === "string"));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.DescriptorProto.typeUrl || typeof o.name === "string" && Array.isArray(o.field) && (!o.field.length || exports.FieldDescriptorProto.isSDK(o.field[0])) && Array.isArray(o.extension) && (!o.extension.length || exports.FieldDescriptorProto.isSDK(o.extension[0])) && Array.isArray(o.nested_type) && (!o.nested_type.length || exports.DescriptorProto.isSDK(o.nested_type[0])) && Array.isArray(o.enum_type) && (!o.enum_type.length || exports.EnumDescriptorProto.isSDK(o.enum_type[0])) && Array.isArray(o.extension_range) && (!o.extension_range.length || exports.DescriptorProto_ExtensionRange.isSDK(o.extension_range[0])) && Array.isArray(o.oneof_decl) && (!o.oneof_decl.length || exports.OneofDescriptorProto.isSDK(o.oneof_decl[0])) && Array.isArray(o.reserved_range) && (!o.reserved_range.length || exports.DescriptorProto_ReservedRange.isSDK(o.reserved_range[0])) && Array.isArray(o.reserved_name) && (!o.reserved_name.length || typeof o.reserved_name[0] === "string"));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.DescriptorProto.typeUrl || typeof o.name === "string" && Array.isArray(o.field) && (!o.field.length || exports.FieldDescriptorProto.isAmino(o.field[0])) && Array.isArray(o.extension) && (!o.extension.length || exports.FieldDescriptorProto.isAmino(o.extension[0])) && Array.isArray(o.nested_type) && (!o.nested_type.length || exports.DescriptorProto.isAmino(o.nested_type[0])) && Array.isArray(o.enum_type) && (!o.enum_type.length || exports.EnumDescriptorProto.isAmino(o.enum_type[0])) && Array.isArray(o.extension_range) && (!o.extension_range.length || exports.DescriptorProto_ExtensionRange.isAmino(o.extension_range[0])) && Array.isArray(o.oneof_decl) && (!o.oneof_decl.length || exports.OneofDescriptorProto.isAmino(o.oneof_decl[0])) && Array.isArray(o.reserved_range) && (!o.reserved_range.length || exports.DescriptorProto_ReservedRange.isAmino(o.reserved_range[0])) && Array.isArray(o.reserved_name) && (!o.reserved_name.length || typeof o.reserved_name[0] === "string"));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        for (const v of message.field) {
            exports.FieldDescriptorProto.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.extension) {
            exports.FieldDescriptorProto.encode(v, writer.uint32(50).fork()).ldelim();
        }
        for (const v of message.nestedType) {
            exports.DescriptorProto.encode(v, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.enumType) {
            exports.EnumDescriptorProto.encode(v, writer.uint32(34).fork()).ldelim();
        }
        for (const v of message.extensionRange) {
            exports.DescriptorProto_ExtensionRange.encode(v, writer.uint32(42).fork()).ldelim();
        }
        for (const v of message.oneofDecl) {
            exports.OneofDescriptorProto.encode(v, writer.uint32(66).fork()).ldelim();
        }
        if (message.options !== undefined) {
            exports.MessageOptions.encode(message.options, writer.uint32(58).fork()).ldelim();
        }
        for (const v of message.reservedRange) {
            exports.DescriptorProto_ReservedRange.encode(v, writer.uint32(74).fork()).ldelim();
        }
        for (const v of message.reservedName) {
            writer.uint32(82).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDescriptorProto();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.field.push(exports.FieldDescriptorProto.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.extension.push(exports.FieldDescriptorProto.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.nestedType.push(exports.DescriptorProto.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.enumType.push(exports.EnumDescriptorProto.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.extensionRange.push(exports.DescriptorProto_ExtensionRange.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.oneofDecl.push(exports.OneofDescriptorProto.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.options = exports.MessageOptions.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.reservedRange.push(exports.DescriptorProto_ReservedRange.decode(reader, reader.uint32()));
                    break;
                case 10:
                    message.reservedName.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseDescriptorProto();
        message.name = object.name ?? "";
        message.field = object.field?.map(e => exports.FieldDescriptorProto.fromPartial(e)) || [];
        message.extension = object.extension?.map(e => exports.FieldDescriptorProto.fromPartial(e)) || [];
        message.nestedType = object.nestedType?.map(e => exports.DescriptorProto.fromPartial(e)) || [];
        message.enumType = object.enumType?.map(e => exports.EnumDescriptorProto.fromPartial(e)) || [];
        message.extensionRange = object.extensionRange?.map(e => exports.DescriptorProto_ExtensionRange.fromPartial(e)) || [];
        message.oneofDecl = object.oneofDecl?.map(e => exports.OneofDescriptorProto.fromPartial(e)) || [];
        message.options = object.options !== undefined && object.options !== null ? exports.MessageOptions.fromPartial(object.options) : undefined;
        message.reservedRange = object.reservedRange?.map(e => exports.DescriptorProto_ReservedRange.fromPartial(e)) || [];
        message.reservedName = object.reservedName?.map(e => e) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseDescriptorProto();
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        message.field = object.field?.map(e => exports.FieldDescriptorProto.fromAmino(e)) || [];
        message.extension = object.extension?.map(e => exports.FieldDescriptorProto.fromAmino(e)) || [];
        message.nestedType = object.nested_type?.map(e => exports.DescriptorProto.fromAmino(e)) || [];
        message.enumType = object.enum_type?.map(e => exports.EnumDescriptorProto.fromAmino(e)) || [];
        message.extensionRange = object.extension_range?.map(e => exports.DescriptorProto_ExtensionRange.fromAmino(e)) || [];
        message.oneofDecl = object.oneof_decl?.map(e => exports.OneofDescriptorProto.fromAmino(e)) || [];
        if (object.options !== undefined && object.options !== null) {
            message.options = exports.MessageOptions.fromAmino(object.options);
        }
        message.reservedRange = object.reserved_range?.map(e => exports.DescriptorProto_ReservedRange.fromAmino(e)) || [];
        message.reservedName = object.reserved_name?.map(e => e) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.name = message.name === "" ? undefined : message.name;
        if (message.field) {
            obj.field = message.field.map(e => e ? exports.FieldDescriptorProto.toAmino(e) : undefined);
        }
        else {
            obj.field = message.field;
        }
        if (message.extension) {
            obj.extension = message.extension.map(e => e ? exports.FieldDescriptorProto.toAmino(e) : undefined);
        }
        else {
            obj.extension = message.extension;
        }
        if (message.nestedType) {
            obj.nested_type = message.nestedType.map(e => e ? exports.DescriptorProto.toAmino(e) : undefined);
        }
        else {
            obj.nested_type = message.nestedType;
        }
        if (message.enumType) {
            obj.enum_type = message.enumType.map(e => e ? exports.EnumDescriptorProto.toAmino(e) : undefined);
        }
        else {
            obj.enum_type = message.enumType;
        }
        if (message.extensionRange) {
            obj.extension_range = message.extensionRange.map(e => e ? exports.DescriptorProto_ExtensionRange.toAmino(e) : undefined);
        }
        else {
            obj.extension_range = message.extensionRange;
        }
        if (message.oneofDecl) {
            obj.oneof_decl = message.oneofDecl.map(e => e ? exports.OneofDescriptorProto.toAmino(e) : undefined);
        }
        else {
            obj.oneof_decl = message.oneofDecl;
        }
        obj.options = message.options ? exports.MessageOptions.toAmino(message.options) : undefined;
        if (message.reservedRange) {
            obj.reserved_range = message.reservedRange.map(e => e ? exports.DescriptorProto_ReservedRange.toAmino(e) : undefined);
        }
        else {
            obj.reserved_range = message.reservedRange;
        }
        if (message.reservedName) {
            obj.reserved_name = message.reservedName.map(e => e);
        }
        else {
            obj.reserved_name = message.reservedName;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.DescriptorProto.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.DescriptorProto.decode(message.value);
    },
    toProto(message) {
        return exports.DescriptorProto.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/google.protobuf.DescriptorProto",
            value: exports.DescriptorProto.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.DescriptorProto.typeUrl, exports.DescriptorProto);
function createBaseDescriptorProto_ExtensionRange() {
    return {
        start: 0,
        end: 0,
        options: undefined
    };
}
exports.DescriptorProto_ExtensionRange = {
    typeUrl: "/google.protobuf.ExtensionRange",
    is(o) {
        return o && (o.$typeUrl === exports.DescriptorProto_ExtensionRange.typeUrl || typeof o.start === "number" && typeof o.end === "number");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.DescriptorProto_ExtensionRange.typeUrl || typeof o.start === "number" && typeof o.end === "number");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.DescriptorProto_ExtensionRange.typeUrl || typeof o.start === "number" && typeof o.end === "number");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.start !== 0) {
            writer.uint32(8).int32(message.start);
        }
        if (message.end !== 0) {
            writer.uint32(16).int32(message.end);
        }
        if (message.options !== undefined) {
            exports.ExtensionRangeOptions.encode(message.options, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDescriptorProto_ExtensionRange();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.start = reader.int32();
                    break;
                case 2:
                    message.end = reader.int32();
                    break;
                case 3:
                    message.options = exports.ExtensionRangeOptions.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseDescriptorProto_ExtensionRange();
        message.start = object.start ?? 0;
        message.end = object.end ?? 0;
        message.options = object.options !== undefined && object.options !== null ? exports.ExtensionRangeOptions.fromPartial(object.options) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseDescriptorProto_ExtensionRange();
        if (object.start !== undefined && object.start !== null) {
            message.start = object.start;
        }
        if (object.end !== undefined && object.end !== null) {
            message.end = object.end;
        }
        if (object.options !== undefined && object.options !== null) {
            message.options = exports.ExtensionRangeOptions.fromAmino(object.options);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.start = message.start === 0 ? undefined : message.start;
        obj.end = message.end === 0 ? undefined : message.end;
        obj.options = message.options ? exports.ExtensionRangeOptions.toAmino(message.options) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.DescriptorProto_ExtensionRange.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.DescriptorProto_ExtensionRange.decode(message.value);
    },
    toProto(message) {
        return exports.DescriptorProto_ExtensionRange.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/google.protobuf.ExtensionRange",
            value: exports.DescriptorProto_ExtensionRange.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.DescriptorProto_ExtensionRange.typeUrl, exports.DescriptorProto_ExtensionRange);
function createBaseDescriptorProto_ReservedRange() {
    return {
        start: 0,
        end: 0
    };
}
exports.DescriptorProto_ReservedRange = {
    typeUrl: "/google.protobuf.ReservedRange",
    is(o) {
        return o && (o.$typeUrl === exports.DescriptorProto_ReservedRange.typeUrl || typeof o.start === "number" && typeof o.end === "number");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.DescriptorProto_ReservedRange.typeUrl || typeof o.start === "number" && typeof o.end === "number");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.DescriptorProto_ReservedRange.typeUrl || typeof o.start === "number" && typeof o.end === "number");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.start !== 0) {
            writer.uint32(8).int32(message.start);
        }
        if (message.end !== 0) {
            writer.uint32(16).int32(message.end);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDescriptorProto_ReservedRange();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.start = reader.int32();
                    break;
                case 2:
                    message.end = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseDescriptorProto_ReservedRange();
        message.start = object.start ?? 0;
        message.end = object.end ?? 0;
        return message;
    },
    fromAmino(object) {
        const message = createBaseDescriptorProto_ReservedRange();
        if (object.start !== undefined && object.start !== null) {
            message.start = object.start;
        }
        if (object.end !== undefined && object.end !== null) {
            message.end = object.end;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.start = message.start === 0 ? undefined : message.start;
        obj.end = message.end === 0 ? undefined : message.end;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.DescriptorProto_ReservedRange.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.DescriptorProto_ReservedRange.decode(message.value);
    },
    toProto(message) {
        return exports.DescriptorProto_ReservedRange.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/google.protobuf.ReservedRange",
            value: exports.DescriptorProto_ReservedRange.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.DescriptorProto_ReservedRange.typeUrl, exports.DescriptorProto_ReservedRange);
function createBaseExtensionRangeOptions() {
    return {
        uninterpretedOption: []
    };
}
exports.ExtensionRangeOptions = {
    typeUrl: "/google.protobuf.ExtensionRangeOptions",
    is(o) {
        return o && (o.$typeUrl === exports.ExtensionRangeOptions.typeUrl || Array.isArray(o.uninterpretedOption) && (!o.uninterpretedOption.length || exports.UninterpretedOption.is(o.uninterpretedOption[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.ExtensionRangeOptions.typeUrl || Array.isArray(o.uninterpreted_option) && (!o.uninterpreted_option.length || exports.UninterpretedOption.isSDK(o.uninterpreted_option[0])));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.ExtensionRangeOptions.typeUrl || Array.isArray(o.uninterpreted_option) && (!o.uninterpreted_option.length || exports.UninterpretedOption.isAmino(o.uninterpreted_option[0])));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.uninterpretedOption) {
            exports.UninterpretedOption.encode(v, writer.uint32(7994).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseExtensionRangeOptions();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 999:
                    message.uninterpretedOption.push(exports.UninterpretedOption.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseExtensionRangeOptions();
        message.uninterpretedOption = object.uninterpretedOption?.map(e => exports.UninterpretedOption.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseExtensionRangeOptions();
        message.uninterpretedOption = object.uninterpreted_option?.map(e => exports.UninterpretedOption.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.uninterpretedOption) {
            obj.uninterpreted_option = message.uninterpretedOption.map(e => e ? exports.UninterpretedOption.toAmino(e) : undefined);
        }
        else {
            obj.uninterpreted_option = message.uninterpretedOption;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ExtensionRangeOptions.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.ExtensionRangeOptions.decode(message.value);
    },
    toProto(message) {
        return exports.ExtensionRangeOptions.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/google.protobuf.ExtensionRangeOptions",
            value: exports.ExtensionRangeOptions.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.ExtensionRangeOptions.typeUrl, exports.ExtensionRangeOptions);
function createBaseFieldDescriptorProto() {
    return {
        name: "",
        number: 0,
        label: 1,
        type: 1,
        typeName: "",
        extendee: "",
        defaultValue: "",
        oneofIndex: 0,
        jsonName: "",
        options: undefined
    };
}
exports.FieldDescriptorProto = {
    typeUrl: "/google.protobuf.FieldDescriptorProto",
    is(o) {
        return o && (o.$typeUrl === exports.FieldDescriptorProto.typeUrl || typeof o.name === "string" && typeof o.number === "number" && (0, helpers_1.isSet)(o.label) && (0, helpers_1.isSet)(o.type) && typeof o.typeName === "string" && typeof o.extendee === "string" && typeof o.defaultValue === "string" && typeof o.oneofIndex === "number" && typeof o.jsonName === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.FieldDescriptorProto.typeUrl || typeof o.name === "string" && typeof o.number === "number" && (0, helpers_1.isSet)(o.label) && (0, helpers_1.isSet)(o.type) && typeof o.type_name === "string" && typeof o.extendee === "string" && typeof o.default_value === "string" && typeof o.oneof_index === "number" && typeof o.json_name === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.FieldDescriptorProto.typeUrl || typeof o.name === "string" && typeof o.number === "number" && (0, helpers_1.isSet)(o.label) && (0, helpers_1.isSet)(o.type) && typeof o.type_name === "string" && typeof o.extendee === "string" && typeof o.default_value === "string" && typeof o.oneof_index === "number" && typeof o.json_name === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.number !== 0) {
            writer.uint32(24).int32(message.number);
        }
        if (message.label !== 1) {
            writer.uint32(32).int32(message.label);
        }
        if (message.type !== 1) {
            writer.uint32(40).int32(message.type);
        }
        if (message.typeName !== "") {
            writer.uint32(50).string(message.typeName);
        }
        if (message.extendee !== "") {
            writer.uint32(18).string(message.extendee);
        }
        if (message.defaultValue !== "") {
            writer.uint32(58).string(message.defaultValue);
        }
        if (message.oneofIndex !== 0) {
            writer.uint32(72).int32(message.oneofIndex);
        }
        if (message.jsonName !== "") {
            writer.uint32(82).string(message.jsonName);
        }
        if (message.options !== undefined) {
            exports.FieldOptions.encode(message.options, writer.uint32(66).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseFieldDescriptorProto();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 3:
                    message.number = reader.int32();
                    break;
                case 4:
                    message.label = reader.int32();
                    break;
                case 5:
                    message.type = reader.int32();
                    break;
                case 6:
                    message.typeName = reader.string();
                    break;
                case 2:
                    message.extendee = reader.string();
                    break;
                case 7:
                    message.defaultValue = reader.string();
                    break;
                case 9:
                    message.oneofIndex = reader.int32();
                    break;
                case 10:
                    message.jsonName = reader.string();
                    break;
                case 8:
                    message.options = exports.FieldOptions.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseFieldDescriptorProto();
        message.name = object.name ?? "";
        message.number = object.number ?? 0;
        message.label = object.label ?? 1;
        message.type = object.type ?? 1;
        message.typeName = object.typeName ?? "";
        message.extendee = object.extendee ?? "";
        message.defaultValue = object.defaultValue ?? "";
        message.oneofIndex = object.oneofIndex ?? 0;
        message.jsonName = object.jsonName ?? "";
        message.options = object.options !== undefined && object.options !== null ? exports.FieldOptions.fromPartial(object.options) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseFieldDescriptorProto();
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        if (object.number !== undefined && object.number !== null) {
            message.number = object.number;
        }
        if (object.label !== undefined && object.label !== null) {
            message.label = object.label;
        }
        if (object.type !== undefined && object.type !== null) {
            message.type = object.type;
        }
        if (object.type_name !== undefined && object.type_name !== null) {
            message.typeName = object.type_name;
        }
        if (object.extendee !== undefined && object.extendee !== null) {
            message.extendee = object.extendee;
        }
        if (object.default_value !== undefined && object.default_value !== null) {
            message.defaultValue = object.default_value;
        }
        if (object.oneof_index !== undefined && object.oneof_index !== null) {
            message.oneofIndex = object.oneof_index;
        }
        if (object.json_name !== undefined && object.json_name !== null) {
            message.jsonName = object.json_name;
        }
        if (object.options !== undefined && object.options !== null) {
            message.options = exports.FieldOptions.fromAmino(object.options);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.name = message.name === "" ? undefined : message.name;
        obj.number = message.number === 0 ? undefined : message.number;
        obj.label = message.label === 1 ? undefined : message.label;
        obj.type = message.type === 1 ? undefined : message.type;
        obj.type_name = message.typeName === "" ? undefined : message.typeName;
        obj.extendee = message.extendee === "" ? undefined : message.extendee;
        obj.default_value = message.defaultValue === "" ? undefined : message.defaultValue;
        obj.oneof_index = message.oneofIndex === 0 ? undefined : message.oneofIndex;
        obj.json_name = message.jsonName === "" ? undefined : message.jsonName;
        obj.options = message.options ? exports.FieldOptions.toAmino(message.options) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.FieldDescriptorProto.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.FieldDescriptorProto.decode(message.value);
    },
    toProto(message) {
        return exports.FieldDescriptorProto.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/google.protobuf.FieldDescriptorProto",
            value: exports.FieldDescriptorProto.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.FieldDescriptorProto.typeUrl, exports.FieldDescriptorProto);
function createBaseOneofDescriptorProto() {
    return {
        name: "",
        options: undefined
    };
}
exports.OneofDescriptorProto = {
    typeUrl: "/google.protobuf.OneofDescriptorProto",
    is(o) {
        return o && (o.$typeUrl === exports.OneofDescriptorProto.typeUrl || typeof o.name === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.OneofDescriptorProto.typeUrl || typeof o.name === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.OneofDescriptorProto.typeUrl || typeof o.name === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.options !== undefined) {
            exports.OneofOptions.encode(message.options, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseOneofDescriptorProto();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.options = exports.OneofOptions.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseOneofDescriptorProto();
        message.name = object.name ?? "";
        message.options = object.options !== undefined && object.options !== null ? exports.OneofOptions.fromPartial(object.options) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseOneofDescriptorProto();
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        if (object.options !== undefined && object.options !== null) {
            message.options = exports.OneofOptions.fromAmino(object.options);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.name = message.name === "" ? undefined : message.name;
        obj.options = message.options ? exports.OneofOptions.toAmino(message.options) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.OneofDescriptorProto.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.OneofDescriptorProto.decode(message.value);
    },
    toProto(message) {
        return exports.OneofDescriptorProto.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/google.protobuf.OneofDescriptorProto",
            value: exports.OneofDescriptorProto.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.OneofDescriptorProto.typeUrl, exports.OneofDescriptorProto);
function createBaseEnumDescriptorProto() {
    return {
        name: "",
        value: [],
        options: undefined,
        reservedRange: [],
        reservedName: []
    };
}
exports.EnumDescriptorProto = {
    typeUrl: "/google.protobuf.EnumDescriptorProto",
    is(o) {
        return o && (o.$typeUrl === exports.EnumDescriptorProto.typeUrl || typeof o.name === "string" && Array.isArray(o.value) && (!o.value.length || exports.EnumValueDescriptorProto.is(o.value[0])) && Array.isArray(o.reservedRange) && (!o.reservedRange.length || exports.EnumDescriptorProto_EnumReservedRange.is(o.reservedRange[0])) && Array.isArray(o.reservedName) && (!o.reservedName.length || typeof o.reservedName[0] === "string"));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.EnumDescriptorProto.typeUrl || typeof o.name === "string" && Array.isArray(o.value) && (!o.value.length || exports.EnumValueDescriptorProto.isSDK(o.value[0])) && Array.isArray(o.reserved_range) && (!o.reserved_range.length || exports.EnumDescriptorProto_EnumReservedRange.isSDK(o.reserved_range[0])) && Array.isArray(o.reserved_name) && (!o.reserved_name.length || typeof o.reserved_name[0] === "string"));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.EnumDescriptorProto.typeUrl || typeof o.name === "string" && Array.isArray(o.value) && (!o.value.length || exports.EnumValueDescriptorProto.isAmino(o.value[0])) && Array.isArray(o.reserved_range) && (!o.reserved_range.length || exports.EnumDescriptorProto_EnumReservedRange.isAmino(o.reserved_range[0])) && Array.isArray(o.reserved_name) && (!o.reserved_name.length || typeof o.reserved_name[0] === "string"));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        for (const v of message.value) {
            exports.EnumValueDescriptorProto.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.options !== undefined) {
            exports.EnumOptions.encode(message.options, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.reservedRange) {
            exports.EnumDescriptorProto_EnumReservedRange.encode(v, writer.uint32(34).fork()).ldelim();
        }
        for (const v of message.reservedName) {
            writer.uint32(42).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEnumDescriptorProto();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.value.push(exports.EnumValueDescriptorProto.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.options = exports.EnumOptions.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.reservedRange.push(exports.EnumDescriptorProto_EnumReservedRange.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.reservedName.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseEnumDescriptorProto();
        message.name = object.name ?? "";
        message.value = object.value?.map(e => exports.EnumValueDescriptorProto.fromPartial(e)) || [];
        message.options = object.options !== undefined && object.options !== null ? exports.EnumOptions.fromPartial(object.options) : undefined;
        message.reservedRange = object.reservedRange?.map(e => exports.EnumDescriptorProto_EnumReservedRange.fromPartial(e)) || [];
        message.reservedName = object.reservedName?.map(e => e) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseEnumDescriptorProto();
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        message.value = object.value?.map(e => exports.EnumValueDescriptorProto.fromAmino(e)) || [];
        if (object.options !== undefined && object.options !== null) {
            message.options = exports.EnumOptions.fromAmino(object.options);
        }
        message.reservedRange = object.reserved_range?.map(e => exports.EnumDescriptorProto_EnumReservedRange.fromAmino(e)) || [];
        message.reservedName = object.reserved_name?.map(e => e) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.name = message.name === "" ? undefined : message.name;
        if (message.value) {
            obj.value = message.value.map(e => e ? exports.EnumValueDescriptorProto.toAmino(e) : undefined);
        }
        else {
            obj.value = message.value;
        }
        obj.options = message.options ? exports.EnumOptions.toAmino(message.options) : undefined;
        if (message.reservedRange) {
            obj.reserved_range = message.reservedRange.map(e => e ? exports.EnumDescriptorProto_EnumReservedRange.toAmino(e) : undefined);
        }
        else {
            obj.reserved_range = message.reservedRange;
        }
        if (message.reservedName) {
            obj.reserved_name = message.reservedName.map(e => e);
        }
        else {
            obj.reserved_name = message.reservedName;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.EnumDescriptorProto.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.EnumDescriptorProto.decode(message.value);
    },
    toProto(message) {
        return exports.EnumDescriptorProto.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/google.protobuf.EnumDescriptorProto",
            value: exports.EnumDescriptorProto.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.EnumDescriptorProto.typeUrl, exports.EnumDescriptorProto);
function createBaseEnumDescriptorProto_EnumReservedRange() {
    return {
        start: 0,
        end: 0
    };
}
exports.EnumDescriptorProto_EnumReservedRange = {
    typeUrl: "/google.protobuf.EnumReservedRange",
    is(o) {
        return o && (o.$typeUrl === exports.EnumDescriptorProto_EnumReservedRange.typeUrl || typeof o.start === "number" && typeof o.end === "number");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.EnumDescriptorProto_EnumReservedRange.typeUrl || typeof o.start === "number" && typeof o.end === "number");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.EnumDescriptorProto_EnumReservedRange.typeUrl || typeof o.start === "number" && typeof o.end === "number");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.start !== 0) {
            writer.uint32(8).int32(message.start);
        }
        if (message.end !== 0) {
            writer.uint32(16).int32(message.end);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEnumDescriptorProto_EnumReservedRange();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.start = reader.int32();
                    break;
                case 2:
                    message.end = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseEnumDescriptorProto_EnumReservedRange();
        message.start = object.start ?? 0;
        message.end = object.end ?? 0;
        return message;
    },
    fromAmino(object) {
        const message = createBaseEnumDescriptorProto_EnumReservedRange();
        if (object.start !== undefined && object.start !== null) {
            message.start = object.start;
        }
        if (object.end !== undefined && object.end !== null) {
            message.end = object.end;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.start = message.start === 0 ? undefined : message.start;
        obj.end = message.end === 0 ? undefined : message.end;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.EnumDescriptorProto_EnumReservedRange.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.EnumDescriptorProto_EnumReservedRange.decode(message.value);
    },
    toProto(message) {
        return exports.EnumDescriptorProto_EnumReservedRange.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/google.protobuf.EnumReservedRange",
            value: exports.EnumDescriptorProto_EnumReservedRange.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.EnumDescriptorProto_EnumReservedRange.typeUrl, exports.EnumDescriptorProto_EnumReservedRange);
function createBaseEnumValueDescriptorProto() {
    return {
        name: "",
        number: 0,
        options: undefined
    };
}
exports.EnumValueDescriptorProto = {
    typeUrl: "/google.protobuf.EnumValueDescriptorProto",
    is(o) {
        return o && (o.$typeUrl === exports.EnumValueDescriptorProto.typeUrl || typeof o.name === "string" && typeof o.number === "number");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.EnumValueDescriptorProto.typeUrl || typeof o.name === "string" && typeof o.number === "number");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.EnumValueDescriptorProto.typeUrl || typeof o.name === "string" && typeof o.number === "number");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.number !== 0) {
            writer.uint32(16).int32(message.number);
        }
        if (message.options !== undefined) {
            exports.EnumValueOptions.encode(message.options, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEnumValueDescriptorProto();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.number = reader.int32();
                    break;
                case 3:
                    message.options = exports.EnumValueOptions.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseEnumValueDescriptorProto();
        message.name = object.name ?? "";
        message.number = object.number ?? 0;
        message.options = object.options !== undefined && object.options !== null ? exports.EnumValueOptions.fromPartial(object.options) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseEnumValueDescriptorProto();
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        if (object.number !== undefined && object.number !== null) {
            message.number = object.number;
        }
        if (object.options !== undefined && object.options !== null) {
            message.options = exports.EnumValueOptions.fromAmino(object.options);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.name = message.name === "" ? undefined : message.name;
        obj.number = message.number === 0 ? undefined : message.number;
        obj.options = message.options ? exports.EnumValueOptions.toAmino(message.options) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.EnumValueDescriptorProto.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.EnumValueDescriptorProto.decode(message.value);
    },
    toProto(message) {
        return exports.EnumValueDescriptorProto.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/google.protobuf.EnumValueDescriptorProto",
            value: exports.EnumValueDescriptorProto.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.EnumValueDescriptorProto.typeUrl, exports.EnumValueDescriptorProto);
function createBaseServiceDescriptorProto() {
    return {
        name: "",
        method: [],
        options: undefined
    };
}
exports.ServiceDescriptorProto = {
    typeUrl: "/google.protobuf.ServiceDescriptorProto",
    is(o) {
        return o && (o.$typeUrl === exports.ServiceDescriptorProto.typeUrl || typeof o.name === "string" && Array.isArray(o.method) && (!o.method.length || exports.MethodDescriptorProto.is(o.method[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.ServiceDescriptorProto.typeUrl || typeof o.name === "string" && Array.isArray(o.method) && (!o.method.length || exports.MethodDescriptorProto.isSDK(o.method[0])));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.ServiceDescriptorProto.typeUrl || typeof o.name === "string" && Array.isArray(o.method) && (!o.method.length || exports.MethodDescriptorProto.isAmino(o.method[0])));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        for (const v of message.method) {
            exports.MethodDescriptorProto.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.options !== undefined) {
            exports.ServiceOptions.encode(message.options, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseServiceDescriptorProto();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.method.push(exports.MethodDescriptorProto.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.options = exports.ServiceOptions.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseServiceDescriptorProto();
        message.name = object.name ?? "";
        message.method = object.method?.map(e => exports.MethodDescriptorProto.fromPartial(e)) || [];
        message.options = object.options !== undefined && object.options !== null ? exports.ServiceOptions.fromPartial(object.options) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseServiceDescriptorProto();
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        message.method = object.method?.map(e => exports.MethodDescriptorProto.fromAmino(e)) || [];
        if (object.options !== undefined && object.options !== null) {
            message.options = exports.ServiceOptions.fromAmino(object.options);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.name = message.name === "" ? undefined : message.name;
        if (message.method) {
            obj.method = message.method.map(e => e ? exports.MethodDescriptorProto.toAmino(e) : undefined);
        }
        else {
            obj.method = message.method;
        }
        obj.options = message.options ? exports.ServiceOptions.toAmino(message.options) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ServiceDescriptorProto.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.ServiceDescriptorProto.decode(message.value);
    },
    toProto(message) {
        return exports.ServiceDescriptorProto.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/google.protobuf.ServiceDescriptorProto",
            value: exports.ServiceDescriptorProto.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.ServiceDescriptorProto.typeUrl, exports.ServiceDescriptorProto);
function createBaseMethodDescriptorProto() {
    return {
        name: "",
        inputType: "",
        outputType: "",
        options: undefined,
        clientStreaming: false,
        serverStreaming: false
    };
}
exports.MethodDescriptorProto = {
    typeUrl: "/google.protobuf.MethodDescriptorProto",
    is(o) {
        return o && (o.$typeUrl === exports.MethodDescriptorProto.typeUrl || typeof o.name === "string" && typeof o.inputType === "string" && typeof o.outputType === "string" && typeof o.clientStreaming === "boolean" && typeof o.serverStreaming === "boolean");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.MethodDescriptorProto.typeUrl || typeof o.name === "string" && typeof o.input_type === "string" && typeof o.output_type === "string" && typeof o.client_streaming === "boolean" && typeof o.server_streaming === "boolean");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.MethodDescriptorProto.typeUrl || typeof o.name === "string" && typeof o.input_type === "string" && typeof o.output_type === "string" && typeof o.client_streaming === "boolean" && typeof o.server_streaming === "boolean");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.inputType !== "") {
            writer.uint32(18).string(message.inputType);
        }
        if (message.outputType !== "") {
            writer.uint32(26).string(message.outputType);
        }
        if (message.options !== undefined) {
            exports.MethodOptions.encode(message.options, writer.uint32(34).fork()).ldelim();
        }
        if (message.clientStreaming === true) {
            writer.uint32(40).bool(message.clientStreaming);
        }
        if (message.serverStreaming === true) {
            writer.uint32(48).bool(message.serverStreaming);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMethodDescriptorProto();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.inputType = reader.string();
                    break;
                case 3:
                    message.outputType = reader.string();
                    break;
                case 4:
                    message.options = exports.MethodOptions.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.clientStreaming = reader.bool();
                    break;
                case 6:
                    message.serverStreaming = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMethodDescriptorProto();
        message.name = object.name ?? "";
        message.inputType = object.inputType ?? "";
        message.outputType = object.outputType ?? "";
        message.options = object.options !== undefined && object.options !== null ? exports.MethodOptions.fromPartial(object.options) : undefined;
        message.clientStreaming = object.clientStreaming ?? false;
        message.serverStreaming = object.serverStreaming ?? false;
        return message;
    },
    fromAmino(object) {
        const message = createBaseMethodDescriptorProto();
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        if (object.input_type !== undefined && object.input_type !== null) {
            message.inputType = object.input_type;
        }
        if (object.output_type !== undefined && object.output_type !== null) {
            message.outputType = object.output_type;
        }
        if (object.options !== undefined && object.options !== null) {
            message.options = exports.MethodOptions.fromAmino(object.options);
        }
        if (object.client_streaming !== undefined && object.client_streaming !== null) {
            message.clientStreaming = object.client_streaming;
        }
        if (object.server_streaming !== undefined && object.server_streaming !== null) {
            message.serverStreaming = object.server_streaming;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.name = message.name === "" ? undefined : message.name;
        obj.input_type = message.inputType === "" ? undefined : message.inputType;
        obj.output_type = message.outputType === "" ? undefined : message.outputType;
        obj.options = message.options ? exports.MethodOptions.toAmino(message.options) : undefined;
        obj.client_streaming = message.clientStreaming === false ? undefined : message.clientStreaming;
        obj.server_streaming = message.serverStreaming === false ? undefined : message.serverStreaming;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MethodDescriptorProto.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MethodDescriptorProto.decode(message.value);
    },
    toProto(message) {
        return exports.MethodDescriptorProto.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/google.protobuf.MethodDescriptorProto",
            value: exports.MethodDescriptorProto.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MethodDescriptorProto.typeUrl, exports.MethodDescriptorProto);
function createBaseFileOptions() {
    return {
        javaPackage: "",
        javaOuterClassname: "",
        javaMultipleFiles: false,
        javaGenerateEqualsAndHash: false,
        javaStringCheckUtf8: false,
        optimizeFor: 1,
        goPackage: "",
        ccGenericServices: false,
        javaGenericServices: false,
        pyGenericServices: false,
        phpGenericServices: false,
        deprecated: false,
        ccEnableArenas: false,
        objcClassPrefix: "",
        csharpNamespace: "",
        swiftPrefix: "",
        phpClassPrefix: "",
        phpNamespace: "",
        phpMetadataNamespace: "",
        rubyPackage: "",
        uninterpretedOption: []
    };
}
exports.FileOptions = {
    typeUrl: "/google.protobuf.FileOptions",
    is(o) {
        return o && (o.$typeUrl === exports.FileOptions.typeUrl || typeof o.javaPackage === "string" && typeof o.javaOuterClassname === "string" && typeof o.javaMultipleFiles === "boolean" && typeof o.javaGenerateEqualsAndHash === "boolean" && typeof o.javaStringCheckUtf8 === "boolean" && (0, helpers_1.isSet)(o.optimizeFor) && typeof o.goPackage === "string" && typeof o.ccGenericServices === "boolean" && typeof o.javaGenericServices === "boolean" && typeof o.pyGenericServices === "boolean" && typeof o.phpGenericServices === "boolean" && typeof o.deprecated === "boolean" && typeof o.ccEnableArenas === "boolean" && typeof o.objcClassPrefix === "string" && typeof o.csharpNamespace === "string" && typeof o.swiftPrefix === "string" && typeof o.phpClassPrefix === "string" && typeof o.phpNamespace === "string" && typeof o.phpMetadataNamespace === "string" && typeof o.rubyPackage === "string" && Array.isArray(o.uninterpretedOption) && (!o.uninterpretedOption.length || exports.UninterpretedOption.is(o.uninterpretedOption[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.FileOptions.typeUrl || typeof o.java_package === "string" && typeof o.java_outer_classname === "string" && typeof o.java_multiple_files === "boolean" && typeof o.java_generate_equals_and_hash === "boolean" && typeof o.java_string_check_utf8 === "boolean" && (0, helpers_1.isSet)(o.optimize_for) && typeof o.go_package === "string" && typeof o.cc_generic_services === "boolean" && typeof o.java_generic_services === "boolean" && typeof o.py_generic_services === "boolean" && typeof o.php_generic_services === "boolean" && typeof o.deprecated === "boolean" && typeof o.cc_enable_arenas === "boolean" && typeof o.objc_class_prefix === "string" && typeof o.csharp_namespace === "string" && typeof o.swift_prefix === "string" && typeof o.php_class_prefix === "string" && typeof o.php_namespace === "string" && typeof o.php_metadata_namespace === "string" && typeof o.ruby_package === "string" && Array.isArray(o.uninterpreted_option) && (!o.uninterpreted_option.length || exports.UninterpretedOption.isSDK(o.uninterpreted_option[0])));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.FileOptions.typeUrl || typeof o.java_package === "string" && typeof o.java_outer_classname === "string" && typeof o.java_multiple_files === "boolean" && typeof o.java_generate_equals_and_hash === "boolean" && typeof o.java_string_check_utf8 === "boolean" && (0, helpers_1.isSet)(o.optimize_for) && typeof o.go_package === "string" && typeof o.cc_generic_services === "boolean" && typeof o.java_generic_services === "boolean" && typeof o.py_generic_services === "boolean" && typeof o.php_generic_services === "boolean" && typeof o.deprecated === "boolean" && typeof o.cc_enable_arenas === "boolean" && typeof o.objc_class_prefix === "string" && typeof o.csharp_namespace === "string" && typeof o.swift_prefix === "string" && typeof o.php_class_prefix === "string" && typeof o.php_namespace === "string" && typeof o.php_metadata_namespace === "string" && typeof o.ruby_package === "string" && Array.isArray(o.uninterpreted_option) && (!o.uninterpreted_option.length || exports.UninterpretedOption.isAmino(o.uninterpreted_option[0])));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.javaPackage !== "") {
            writer.uint32(10).string(message.javaPackage);
        }
        if (message.javaOuterClassname !== "") {
            writer.uint32(66).string(message.javaOuterClassname);
        }
        if (message.javaMultipleFiles === true) {
            writer.uint32(80).bool(message.javaMultipleFiles);
        }
        if (message.javaGenerateEqualsAndHash === true) {
            writer.uint32(160).bool(message.javaGenerateEqualsAndHash);
        }
        if (message.javaStringCheckUtf8 === true) {
            writer.uint32(216).bool(message.javaStringCheckUtf8);
        }
        if (message.optimizeFor !== 1) {
            writer.uint32(72).int32(message.optimizeFor);
        }
        if (message.goPackage !== "") {
            writer.uint32(90).string(message.goPackage);
        }
        if (message.ccGenericServices === true) {
            writer.uint32(128).bool(message.ccGenericServices);
        }
        if (message.javaGenericServices === true) {
            writer.uint32(136).bool(message.javaGenericServices);
        }
        if (message.pyGenericServices === true) {
            writer.uint32(144).bool(message.pyGenericServices);
        }
        if (message.phpGenericServices === true) {
            writer.uint32(336).bool(message.phpGenericServices);
        }
        if (message.deprecated === true) {
            writer.uint32(184).bool(message.deprecated);
        }
        if (message.ccEnableArenas === true) {
            writer.uint32(248).bool(message.ccEnableArenas);
        }
        if (message.objcClassPrefix !== "") {
            writer.uint32(290).string(message.objcClassPrefix);
        }
        if (message.csharpNamespace !== "") {
            writer.uint32(298).string(message.csharpNamespace);
        }
        if (message.swiftPrefix !== "") {
            writer.uint32(314).string(message.swiftPrefix);
        }
        if (message.phpClassPrefix !== "") {
            writer.uint32(322).string(message.phpClassPrefix);
        }
        if (message.phpNamespace !== "") {
            writer.uint32(330).string(message.phpNamespace);
        }
        if (message.phpMetadataNamespace !== "") {
            writer.uint32(354).string(message.phpMetadataNamespace);
        }
        if (message.rubyPackage !== "") {
            writer.uint32(362).string(message.rubyPackage);
        }
        for (const v of message.uninterpretedOption) {
            exports.UninterpretedOption.encode(v, writer.uint32(7994).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseFileOptions();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.javaPackage = reader.string();
                    break;
                case 8:
                    message.javaOuterClassname = reader.string();
                    break;
                case 10:
                    message.javaMultipleFiles = reader.bool();
                    break;
                case 20:
                    message.javaGenerateEqualsAndHash = reader.bool();
                    break;
                case 27:
                    message.javaStringCheckUtf8 = reader.bool();
                    break;
                case 9:
                    message.optimizeFor = reader.int32();
                    break;
                case 11:
                    message.goPackage = reader.string();
                    break;
                case 16:
                    message.ccGenericServices = reader.bool();
                    break;
                case 17:
                    message.javaGenericServices = reader.bool();
                    break;
                case 18:
                    message.pyGenericServices = reader.bool();
                    break;
                case 42:
                    message.phpGenericServices = reader.bool();
                    break;
                case 23:
                    message.deprecated = reader.bool();
                    break;
                case 31:
                    message.ccEnableArenas = reader.bool();
                    break;
                case 36:
                    message.objcClassPrefix = reader.string();
                    break;
                case 37:
                    message.csharpNamespace = reader.string();
                    break;
                case 39:
                    message.swiftPrefix = reader.string();
                    break;
                case 40:
                    message.phpClassPrefix = reader.string();
                    break;
                case 41:
                    message.phpNamespace = reader.string();
                    break;
                case 44:
                    message.phpMetadataNamespace = reader.string();
                    break;
                case 45:
                    message.rubyPackage = reader.string();
                    break;
                case 999:
                    message.uninterpretedOption.push(exports.UninterpretedOption.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseFileOptions();
        message.javaPackage = object.javaPackage ?? "";
        message.javaOuterClassname = object.javaOuterClassname ?? "";
        message.javaMultipleFiles = object.javaMultipleFiles ?? false;
        message.javaGenerateEqualsAndHash = object.javaGenerateEqualsAndHash ?? false;
        message.javaStringCheckUtf8 = object.javaStringCheckUtf8 ?? false;
        message.optimizeFor = object.optimizeFor ?? 1;
        message.goPackage = object.goPackage ?? "";
        message.ccGenericServices = object.ccGenericServices ?? false;
        message.javaGenericServices = object.javaGenericServices ?? false;
        message.pyGenericServices = object.pyGenericServices ?? false;
        message.phpGenericServices = object.phpGenericServices ?? false;
        message.deprecated = object.deprecated ?? false;
        message.ccEnableArenas = object.ccEnableArenas ?? false;
        message.objcClassPrefix = object.objcClassPrefix ?? "";
        message.csharpNamespace = object.csharpNamespace ?? "";
        message.swiftPrefix = object.swiftPrefix ?? "";
        message.phpClassPrefix = object.phpClassPrefix ?? "";
        message.phpNamespace = object.phpNamespace ?? "";
        message.phpMetadataNamespace = object.phpMetadataNamespace ?? "";
        message.rubyPackage = object.rubyPackage ?? "";
        message.uninterpretedOption = object.uninterpretedOption?.map(e => exports.UninterpretedOption.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseFileOptions();
        if (object.java_package !== undefined && object.java_package !== null) {
            message.javaPackage = object.java_package;
        }
        if (object.java_outer_classname !== undefined && object.java_outer_classname !== null) {
            message.javaOuterClassname = object.java_outer_classname;
        }
        if (object.java_multiple_files !== undefined && object.java_multiple_files !== null) {
            message.javaMultipleFiles = object.java_multiple_files;
        }
        if (object.java_generate_equals_and_hash !== undefined && object.java_generate_equals_and_hash !== null) {
            message.javaGenerateEqualsAndHash = object.java_generate_equals_and_hash;
        }
        if (object.java_string_check_utf8 !== undefined && object.java_string_check_utf8 !== null) {
            message.javaStringCheckUtf8 = object.java_string_check_utf8;
        }
        if (object.optimize_for !== undefined && object.optimize_for !== null) {
            message.optimizeFor = object.optimize_for;
        }
        if (object.go_package !== undefined && object.go_package !== null) {
            message.goPackage = object.go_package;
        }
        if (object.cc_generic_services !== undefined && object.cc_generic_services !== null) {
            message.ccGenericServices = object.cc_generic_services;
        }
        if (object.java_generic_services !== undefined && object.java_generic_services !== null) {
            message.javaGenericServices = object.java_generic_services;
        }
        if (object.py_generic_services !== undefined && object.py_generic_services !== null) {
            message.pyGenericServices = object.py_generic_services;
        }
        if (object.php_generic_services !== undefined && object.php_generic_services !== null) {
            message.phpGenericServices = object.php_generic_services;
        }
        if (object.deprecated !== undefined && object.deprecated !== null) {
            message.deprecated = object.deprecated;
        }
        if (object.cc_enable_arenas !== undefined && object.cc_enable_arenas !== null) {
            message.ccEnableArenas = object.cc_enable_arenas;
        }
        if (object.objc_class_prefix !== undefined && object.objc_class_prefix !== null) {
            message.objcClassPrefix = object.objc_class_prefix;
        }
        if (object.csharp_namespace !== undefined && object.csharp_namespace !== null) {
            message.csharpNamespace = object.csharp_namespace;
        }
        if (object.swift_prefix !== undefined && object.swift_prefix !== null) {
            message.swiftPrefix = object.swift_prefix;
        }
        if (object.php_class_prefix !== undefined && object.php_class_prefix !== null) {
            message.phpClassPrefix = object.php_class_prefix;
        }
        if (object.php_namespace !== undefined && object.php_namespace !== null) {
            message.phpNamespace = object.php_namespace;
        }
        if (object.php_metadata_namespace !== undefined && object.php_metadata_namespace !== null) {
            message.phpMetadataNamespace = object.php_metadata_namespace;
        }
        if (object.ruby_package !== undefined && object.ruby_package !== null) {
            message.rubyPackage = object.ruby_package;
        }
        message.uninterpretedOption = object.uninterpreted_option?.map(e => exports.UninterpretedOption.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.java_package = message.javaPackage === "" ? undefined : message.javaPackage;
        obj.java_outer_classname = message.javaOuterClassname === "" ? undefined : message.javaOuterClassname;
        obj.java_multiple_files = message.javaMultipleFiles === false ? undefined : message.javaMultipleFiles;
        obj.java_generate_equals_and_hash = message.javaGenerateEqualsAndHash === false ? undefined : message.javaGenerateEqualsAndHash;
        obj.java_string_check_utf8 = message.javaStringCheckUtf8 === false ? undefined : message.javaStringCheckUtf8;
        obj.optimize_for = message.optimizeFor === 1 ? undefined : message.optimizeFor;
        obj.go_package = message.goPackage === "" ? undefined : message.goPackage;
        obj.cc_generic_services = message.ccGenericServices === false ? undefined : message.ccGenericServices;
        obj.java_generic_services = message.javaGenericServices === false ? undefined : message.javaGenericServices;
        obj.py_generic_services = message.pyGenericServices === false ? undefined : message.pyGenericServices;
        obj.php_generic_services = message.phpGenericServices === false ? undefined : message.phpGenericServices;
        obj.deprecated = message.deprecated === false ? undefined : message.deprecated;
        obj.cc_enable_arenas = message.ccEnableArenas === false ? undefined : message.ccEnableArenas;
        obj.objc_class_prefix = message.objcClassPrefix === "" ? undefined : message.objcClassPrefix;
        obj.csharp_namespace = message.csharpNamespace === "" ? undefined : message.csharpNamespace;
        obj.swift_prefix = message.swiftPrefix === "" ? undefined : message.swiftPrefix;
        obj.php_class_prefix = message.phpClassPrefix === "" ? undefined : message.phpClassPrefix;
        obj.php_namespace = message.phpNamespace === "" ? undefined : message.phpNamespace;
        obj.php_metadata_namespace = message.phpMetadataNamespace === "" ? undefined : message.phpMetadataNamespace;
        obj.ruby_package = message.rubyPackage === "" ? undefined : message.rubyPackage;
        if (message.uninterpretedOption) {
            obj.uninterpreted_option = message.uninterpretedOption.map(e => e ? exports.UninterpretedOption.toAmino(e) : undefined);
        }
        else {
            obj.uninterpreted_option = message.uninterpretedOption;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.FileOptions.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.FileOptions.decode(message.value);
    },
    toProto(message) {
        return exports.FileOptions.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/google.protobuf.FileOptions",
            value: exports.FileOptions.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.FileOptions.typeUrl, exports.FileOptions);
function createBaseMessageOptions() {
    return {
        messageSetWireFormat: false,
        noStandardDescriptorAccessor: false,
        deprecated: false,
        mapEntry: false,
        uninterpretedOption: []
    };
}
exports.MessageOptions = {
    typeUrl: "/google.protobuf.MessageOptions",
    is(o) {
        return o && (o.$typeUrl === exports.MessageOptions.typeUrl || typeof o.messageSetWireFormat === "boolean" && typeof o.noStandardDescriptorAccessor === "boolean" && typeof o.deprecated === "boolean" && typeof o.mapEntry === "boolean" && Array.isArray(o.uninterpretedOption) && (!o.uninterpretedOption.length || exports.UninterpretedOption.is(o.uninterpretedOption[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.MessageOptions.typeUrl || typeof o.message_set_wire_format === "boolean" && typeof o.no_standard_descriptor_accessor === "boolean" && typeof o.deprecated === "boolean" && typeof o.map_entry === "boolean" && Array.isArray(o.uninterpreted_option) && (!o.uninterpreted_option.length || exports.UninterpretedOption.isSDK(o.uninterpreted_option[0])));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.MessageOptions.typeUrl || typeof o.message_set_wire_format === "boolean" && typeof o.no_standard_descriptor_accessor === "boolean" && typeof o.deprecated === "boolean" && typeof o.map_entry === "boolean" && Array.isArray(o.uninterpreted_option) && (!o.uninterpreted_option.length || exports.UninterpretedOption.isAmino(o.uninterpreted_option[0])));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.messageSetWireFormat === true) {
            writer.uint32(8).bool(message.messageSetWireFormat);
        }
        if (message.noStandardDescriptorAccessor === true) {
            writer.uint32(16).bool(message.noStandardDescriptorAccessor);
        }
        if (message.deprecated === true) {
            writer.uint32(24).bool(message.deprecated);
        }
        if (message.mapEntry === true) {
            writer.uint32(56).bool(message.mapEntry);
        }
        for (const v of message.uninterpretedOption) {
            exports.UninterpretedOption.encode(v, writer.uint32(7994).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMessageOptions();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.messageSetWireFormat = reader.bool();
                    break;
                case 2:
                    message.noStandardDescriptorAccessor = reader.bool();
                    break;
                case 3:
                    message.deprecated = reader.bool();
                    break;
                case 7:
                    message.mapEntry = reader.bool();
                    break;
                case 999:
                    message.uninterpretedOption.push(exports.UninterpretedOption.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMessageOptions();
        message.messageSetWireFormat = object.messageSetWireFormat ?? false;
        message.noStandardDescriptorAccessor = object.noStandardDescriptorAccessor ?? false;
        message.deprecated = object.deprecated ?? false;
        message.mapEntry = object.mapEntry ?? false;
        message.uninterpretedOption = object.uninterpretedOption?.map(e => exports.UninterpretedOption.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseMessageOptions();
        if (object.message_set_wire_format !== undefined && object.message_set_wire_format !== null) {
            message.messageSetWireFormat = object.message_set_wire_format;
        }
        if (object.no_standard_descriptor_accessor !== undefined && object.no_standard_descriptor_accessor !== null) {
            message.noStandardDescriptorAccessor = object.no_standard_descriptor_accessor;
        }
        if (object.deprecated !== undefined && object.deprecated !== null) {
            message.deprecated = object.deprecated;
        }
        if (object.map_entry !== undefined && object.map_entry !== null) {
            message.mapEntry = object.map_entry;
        }
        message.uninterpretedOption = object.uninterpreted_option?.map(e => exports.UninterpretedOption.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.message_set_wire_format = message.messageSetWireFormat === false ? undefined : message.messageSetWireFormat;
        obj.no_standard_descriptor_accessor = message.noStandardDescriptorAccessor === false ? undefined : message.noStandardDescriptorAccessor;
        obj.deprecated = message.deprecated === false ? undefined : message.deprecated;
        obj.map_entry = message.mapEntry === false ? undefined : message.mapEntry;
        if (message.uninterpretedOption) {
            obj.uninterpreted_option = message.uninterpretedOption.map(e => e ? exports.UninterpretedOption.toAmino(e) : undefined);
        }
        else {
            obj.uninterpreted_option = message.uninterpretedOption;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MessageOptions.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MessageOptions.decode(message.value);
    },
    toProto(message) {
        return exports.MessageOptions.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/google.protobuf.MessageOptions",
            value: exports.MessageOptions.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MessageOptions.typeUrl, exports.MessageOptions);
function createBaseFieldOptions() {
    return {
        ctype: 1,
        packed: false,
        jstype: 1,
        lazy: false,
        deprecated: false,
        weak: false,
        uninterpretedOption: []
    };
}
exports.FieldOptions = {
    typeUrl: "/google.protobuf.FieldOptions",
    is(o) {
        return o && (o.$typeUrl === exports.FieldOptions.typeUrl || (0, helpers_1.isSet)(o.ctype) && typeof o.packed === "boolean" && (0, helpers_1.isSet)(o.jstype) && typeof o.lazy === "boolean" && typeof o.deprecated === "boolean" && typeof o.weak === "boolean" && Array.isArray(o.uninterpretedOption) && (!o.uninterpretedOption.length || exports.UninterpretedOption.is(o.uninterpretedOption[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.FieldOptions.typeUrl || (0, helpers_1.isSet)(o.ctype) && typeof o.packed === "boolean" && (0, helpers_1.isSet)(o.jstype) && typeof o.lazy === "boolean" && typeof o.deprecated === "boolean" && typeof o.weak === "boolean" && Array.isArray(o.uninterpreted_option) && (!o.uninterpreted_option.length || exports.UninterpretedOption.isSDK(o.uninterpreted_option[0])));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.FieldOptions.typeUrl || (0, helpers_1.isSet)(o.ctype) && typeof o.packed === "boolean" && (0, helpers_1.isSet)(o.jstype) && typeof o.lazy === "boolean" && typeof o.deprecated === "boolean" && typeof o.weak === "boolean" && Array.isArray(o.uninterpreted_option) && (!o.uninterpreted_option.length || exports.UninterpretedOption.isAmino(o.uninterpreted_option[0])));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.ctype !== 1) {
            writer.uint32(8).int32(message.ctype);
        }
        if (message.packed === true) {
            writer.uint32(16).bool(message.packed);
        }
        if (message.jstype !== 1) {
            writer.uint32(48).int32(message.jstype);
        }
        if (message.lazy === true) {
            writer.uint32(40).bool(message.lazy);
        }
        if (message.deprecated === true) {
            writer.uint32(24).bool(message.deprecated);
        }
        if (message.weak === true) {
            writer.uint32(80).bool(message.weak);
        }
        for (const v of message.uninterpretedOption) {
            exports.UninterpretedOption.encode(v, writer.uint32(7994).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseFieldOptions();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.ctype = reader.int32();
                    break;
                case 2:
                    message.packed = reader.bool();
                    break;
                case 6:
                    message.jstype = reader.int32();
                    break;
                case 5:
                    message.lazy = reader.bool();
                    break;
                case 3:
                    message.deprecated = reader.bool();
                    break;
                case 10:
                    message.weak = reader.bool();
                    break;
                case 999:
                    message.uninterpretedOption.push(exports.UninterpretedOption.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseFieldOptions();
        message.ctype = object.ctype ?? 1;
        message.packed = object.packed ?? false;
        message.jstype = object.jstype ?? 1;
        message.lazy = object.lazy ?? false;
        message.deprecated = object.deprecated ?? false;
        message.weak = object.weak ?? false;
        message.uninterpretedOption = object.uninterpretedOption?.map(e => exports.UninterpretedOption.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseFieldOptions();
        if (object.ctype !== undefined && object.ctype !== null) {
            message.ctype = object.ctype;
        }
        if (object.packed !== undefined && object.packed !== null) {
            message.packed = object.packed;
        }
        if (object.jstype !== undefined && object.jstype !== null) {
            message.jstype = object.jstype;
        }
        if (object.lazy !== undefined && object.lazy !== null) {
            message.lazy = object.lazy;
        }
        if (object.deprecated !== undefined && object.deprecated !== null) {
            message.deprecated = object.deprecated;
        }
        if (object.weak !== undefined && object.weak !== null) {
            message.weak = object.weak;
        }
        message.uninterpretedOption = object.uninterpreted_option?.map(e => exports.UninterpretedOption.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.ctype = message.ctype === 1 ? undefined : message.ctype;
        obj.packed = message.packed === false ? undefined : message.packed;
        obj.jstype = message.jstype === 1 ? undefined : message.jstype;
        obj.lazy = message.lazy === false ? undefined : message.lazy;
        obj.deprecated = message.deprecated === false ? undefined : message.deprecated;
        obj.weak = message.weak === false ? undefined : message.weak;
        if (message.uninterpretedOption) {
            obj.uninterpreted_option = message.uninterpretedOption.map(e => e ? exports.UninterpretedOption.toAmino(e) : undefined);
        }
        else {
            obj.uninterpreted_option = message.uninterpretedOption;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.FieldOptions.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.FieldOptions.decode(message.value);
    },
    toProto(message) {
        return exports.FieldOptions.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/google.protobuf.FieldOptions",
            value: exports.FieldOptions.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.FieldOptions.typeUrl, exports.FieldOptions);
function createBaseOneofOptions() {
    return {
        uninterpretedOption: []
    };
}
exports.OneofOptions = {
    typeUrl: "/google.protobuf.OneofOptions",
    is(o) {
        return o && (o.$typeUrl === exports.OneofOptions.typeUrl || Array.isArray(o.uninterpretedOption) && (!o.uninterpretedOption.length || exports.UninterpretedOption.is(o.uninterpretedOption[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.OneofOptions.typeUrl || Array.isArray(o.uninterpreted_option) && (!o.uninterpreted_option.length || exports.UninterpretedOption.isSDK(o.uninterpreted_option[0])));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.OneofOptions.typeUrl || Array.isArray(o.uninterpreted_option) && (!o.uninterpreted_option.length || exports.UninterpretedOption.isAmino(o.uninterpreted_option[0])));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.uninterpretedOption) {
            exports.UninterpretedOption.encode(v, writer.uint32(7994).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseOneofOptions();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 999:
                    message.uninterpretedOption.push(exports.UninterpretedOption.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseOneofOptions();
        message.uninterpretedOption = object.uninterpretedOption?.map(e => exports.UninterpretedOption.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseOneofOptions();
        message.uninterpretedOption = object.uninterpreted_option?.map(e => exports.UninterpretedOption.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.uninterpretedOption) {
            obj.uninterpreted_option = message.uninterpretedOption.map(e => e ? exports.UninterpretedOption.toAmino(e) : undefined);
        }
        else {
            obj.uninterpreted_option = message.uninterpretedOption;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.OneofOptions.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.OneofOptions.decode(message.value);
    },
    toProto(message) {
        return exports.OneofOptions.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/google.protobuf.OneofOptions",
            value: exports.OneofOptions.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.OneofOptions.typeUrl, exports.OneofOptions);
function createBaseEnumOptions() {
    return {
        allowAlias: false,
        deprecated: false,
        uninterpretedOption: []
    };
}
exports.EnumOptions = {
    typeUrl: "/google.protobuf.EnumOptions",
    is(o) {
        return o && (o.$typeUrl === exports.EnumOptions.typeUrl || typeof o.allowAlias === "boolean" && typeof o.deprecated === "boolean" && Array.isArray(o.uninterpretedOption) && (!o.uninterpretedOption.length || exports.UninterpretedOption.is(o.uninterpretedOption[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.EnumOptions.typeUrl || typeof o.allow_alias === "boolean" && typeof o.deprecated === "boolean" && Array.isArray(o.uninterpreted_option) && (!o.uninterpreted_option.length || exports.UninterpretedOption.isSDK(o.uninterpreted_option[0])));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.EnumOptions.typeUrl || typeof o.allow_alias === "boolean" && typeof o.deprecated === "boolean" && Array.isArray(o.uninterpreted_option) && (!o.uninterpreted_option.length || exports.UninterpretedOption.isAmino(o.uninterpreted_option[0])));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.allowAlias === true) {
            writer.uint32(16).bool(message.allowAlias);
        }
        if (message.deprecated === true) {
            writer.uint32(24).bool(message.deprecated);
        }
        for (const v of message.uninterpretedOption) {
            exports.UninterpretedOption.encode(v, writer.uint32(7994).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEnumOptions();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    message.allowAlias = reader.bool();
                    break;
                case 3:
                    message.deprecated = reader.bool();
                    break;
                case 999:
                    message.uninterpretedOption.push(exports.UninterpretedOption.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseEnumOptions();
        message.allowAlias = object.allowAlias ?? false;
        message.deprecated = object.deprecated ?? false;
        message.uninterpretedOption = object.uninterpretedOption?.map(e => exports.UninterpretedOption.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseEnumOptions();
        if (object.allow_alias !== undefined && object.allow_alias !== null) {
            message.allowAlias = object.allow_alias;
        }
        if (object.deprecated !== undefined && object.deprecated !== null) {
            message.deprecated = object.deprecated;
        }
        message.uninterpretedOption = object.uninterpreted_option?.map(e => exports.UninterpretedOption.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.allow_alias = message.allowAlias === false ? undefined : message.allowAlias;
        obj.deprecated = message.deprecated === false ? undefined : message.deprecated;
        if (message.uninterpretedOption) {
            obj.uninterpreted_option = message.uninterpretedOption.map(e => e ? exports.UninterpretedOption.toAmino(e) : undefined);
        }
        else {
            obj.uninterpreted_option = message.uninterpretedOption;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.EnumOptions.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.EnumOptions.decode(message.value);
    },
    toProto(message) {
        return exports.EnumOptions.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/google.protobuf.EnumOptions",
            value: exports.EnumOptions.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.EnumOptions.typeUrl, exports.EnumOptions);
function createBaseEnumValueOptions() {
    return {
        deprecated: false,
        uninterpretedOption: []
    };
}
exports.EnumValueOptions = {
    typeUrl: "/google.protobuf.EnumValueOptions",
    is(o) {
        return o && (o.$typeUrl === exports.EnumValueOptions.typeUrl || typeof o.deprecated === "boolean" && Array.isArray(o.uninterpretedOption) && (!o.uninterpretedOption.length || exports.UninterpretedOption.is(o.uninterpretedOption[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.EnumValueOptions.typeUrl || typeof o.deprecated === "boolean" && Array.isArray(o.uninterpreted_option) && (!o.uninterpreted_option.length || exports.UninterpretedOption.isSDK(o.uninterpreted_option[0])));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.EnumValueOptions.typeUrl || typeof o.deprecated === "boolean" && Array.isArray(o.uninterpreted_option) && (!o.uninterpreted_option.length || exports.UninterpretedOption.isAmino(o.uninterpreted_option[0])));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.deprecated === true) {
            writer.uint32(8).bool(message.deprecated);
        }
        for (const v of message.uninterpretedOption) {
            exports.UninterpretedOption.encode(v, writer.uint32(7994).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEnumValueOptions();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.deprecated = reader.bool();
                    break;
                case 999:
                    message.uninterpretedOption.push(exports.UninterpretedOption.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseEnumValueOptions();
        message.deprecated = object.deprecated ?? false;
        message.uninterpretedOption = object.uninterpretedOption?.map(e => exports.UninterpretedOption.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseEnumValueOptions();
        if (object.deprecated !== undefined && object.deprecated !== null) {
            message.deprecated = object.deprecated;
        }
        message.uninterpretedOption = object.uninterpreted_option?.map(e => exports.UninterpretedOption.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.deprecated = message.deprecated === false ? undefined : message.deprecated;
        if (message.uninterpretedOption) {
            obj.uninterpreted_option = message.uninterpretedOption.map(e => e ? exports.UninterpretedOption.toAmino(e) : undefined);
        }
        else {
            obj.uninterpreted_option = message.uninterpretedOption;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.EnumValueOptions.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.EnumValueOptions.decode(message.value);
    },
    toProto(message) {
        return exports.EnumValueOptions.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/google.protobuf.EnumValueOptions",
            value: exports.EnumValueOptions.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.EnumValueOptions.typeUrl, exports.EnumValueOptions);
function createBaseServiceOptions() {
    return {
        deprecated: false,
        uninterpretedOption: []
    };
}
exports.ServiceOptions = {
    typeUrl: "/google.protobuf.ServiceOptions",
    is(o) {
        return o && (o.$typeUrl === exports.ServiceOptions.typeUrl || typeof o.deprecated === "boolean" && Array.isArray(o.uninterpretedOption) && (!o.uninterpretedOption.length || exports.UninterpretedOption.is(o.uninterpretedOption[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.ServiceOptions.typeUrl || typeof o.deprecated === "boolean" && Array.isArray(o.uninterpreted_option) && (!o.uninterpreted_option.length || exports.UninterpretedOption.isSDK(o.uninterpreted_option[0])));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.ServiceOptions.typeUrl || typeof o.deprecated === "boolean" && Array.isArray(o.uninterpreted_option) && (!o.uninterpreted_option.length || exports.UninterpretedOption.isAmino(o.uninterpreted_option[0])));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.deprecated === true) {
            writer.uint32(264).bool(message.deprecated);
        }
        for (const v of message.uninterpretedOption) {
            exports.UninterpretedOption.encode(v, writer.uint32(7994).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseServiceOptions();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 33:
                    message.deprecated = reader.bool();
                    break;
                case 999:
                    message.uninterpretedOption.push(exports.UninterpretedOption.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseServiceOptions();
        message.deprecated = object.deprecated ?? false;
        message.uninterpretedOption = object.uninterpretedOption?.map(e => exports.UninterpretedOption.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseServiceOptions();
        if (object.deprecated !== undefined && object.deprecated !== null) {
            message.deprecated = object.deprecated;
        }
        message.uninterpretedOption = object.uninterpreted_option?.map(e => exports.UninterpretedOption.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.deprecated = message.deprecated === false ? undefined : message.deprecated;
        if (message.uninterpretedOption) {
            obj.uninterpreted_option = message.uninterpretedOption.map(e => e ? exports.UninterpretedOption.toAmino(e) : undefined);
        }
        else {
            obj.uninterpreted_option = message.uninterpretedOption;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ServiceOptions.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.ServiceOptions.decode(message.value);
    },
    toProto(message) {
        return exports.ServiceOptions.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/google.protobuf.ServiceOptions",
            value: exports.ServiceOptions.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.ServiceOptions.typeUrl, exports.ServiceOptions);
function createBaseMethodOptions() {
    return {
        deprecated: false,
        idempotencyLevel: 1,
        uninterpretedOption: []
    };
}
exports.MethodOptions = {
    typeUrl: "/google.protobuf.MethodOptions",
    is(o) {
        return o && (o.$typeUrl === exports.MethodOptions.typeUrl || typeof o.deprecated === "boolean" && (0, helpers_1.isSet)(o.idempotencyLevel) && Array.isArray(o.uninterpretedOption) && (!o.uninterpretedOption.length || exports.UninterpretedOption.is(o.uninterpretedOption[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.MethodOptions.typeUrl || typeof o.deprecated === "boolean" && (0, helpers_1.isSet)(o.idempotency_level) && Array.isArray(o.uninterpreted_option) && (!o.uninterpreted_option.length || exports.UninterpretedOption.isSDK(o.uninterpreted_option[0])));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.MethodOptions.typeUrl || typeof o.deprecated === "boolean" && (0, helpers_1.isSet)(o.idempotency_level) && Array.isArray(o.uninterpreted_option) && (!o.uninterpreted_option.length || exports.UninterpretedOption.isAmino(o.uninterpreted_option[0])));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.deprecated === true) {
            writer.uint32(264).bool(message.deprecated);
        }
        if (message.idempotencyLevel !== 1) {
            writer.uint32(272).int32(message.idempotencyLevel);
        }
        for (const v of message.uninterpretedOption) {
            exports.UninterpretedOption.encode(v, writer.uint32(7994).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMethodOptions();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 33:
                    message.deprecated = reader.bool();
                    break;
                case 34:
                    message.idempotencyLevel = reader.int32();
                    break;
                case 999:
                    message.uninterpretedOption.push(exports.UninterpretedOption.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMethodOptions();
        message.deprecated = object.deprecated ?? false;
        message.idempotencyLevel = object.idempotencyLevel ?? 1;
        message.uninterpretedOption = object.uninterpretedOption?.map(e => exports.UninterpretedOption.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseMethodOptions();
        if (object.deprecated !== undefined && object.deprecated !== null) {
            message.deprecated = object.deprecated;
        }
        if (object.idempotency_level !== undefined && object.idempotency_level !== null) {
            message.idempotencyLevel = object.idempotency_level;
        }
        message.uninterpretedOption = object.uninterpreted_option?.map(e => exports.UninterpretedOption.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.deprecated = message.deprecated === false ? undefined : message.deprecated;
        obj.idempotency_level = message.idempotencyLevel === 1 ? undefined : message.idempotencyLevel;
        if (message.uninterpretedOption) {
            obj.uninterpreted_option = message.uninterpretedOption.map(e => e ? exports.UninterpretedOption.toAmino(e) : undefined);
        }
        else {
            obj.uninterpreted_option = message.uninterpretedOption;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MethodOptions.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MethodOptions.decode(message.value);
    },
    toProto(message) {
        return exports.MethodOptions.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/google.protobuf.MethodOptions",
            value: exports.MethodOptions.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MethodOptions.typeUrl, exports.MethodOptions);
function createBaseUninterpretedOption() {
    return {
        name: [],
        identifierValue: "",
        positiveIntValue: BigInt(0),
        negativeIntValue: BigInt(0),
        doubleValue: 0,
        stringValue: new Uint8Array(),
        aggregateValue: ""
    };
}
exports.UninterpretedOption = {
    typeUrl: "/google.protobuf.UninterpretedOption",
    is(o) {
        return o && (o.$typeUrl === exports.UninterpretedOption.typeUrl || Array.isArray(o.name) && (!o.name.length || exports.UninterpretedOption_NamePart.is(o.name[0])) && typeof o.identifierValue === "string" && typeof o.positiveIntValue === "bigint" && typeof o.negativeIntValue === "bigint" && typeof o.doubleValue === "number" && (o.stringValue instanceof Uint8Array || typeof o.stringValue === "string") && typeof o.aggregateValue === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.UninterpretedOption.typeUrl || Array.isArray(o.name) && (!o.name.length || exports.UninterpretedOption_NamePart.isSDK(o.name[0])) && typeof o.identifier_value === "string" && typeof o.positive_int_value === "bigint" && typeof o.negative_int_value === "bigint" && typeof o.double_value === "number" && (o.string_value instanceof Uint8Array || typeof o.string_value === "string") && typeof o.aggregate_value === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.UninterpretedOption.typeUrl || Array.isArray(o.name) && (!o.name.length || exports.UninterpretedOption_NamePart.isAmino(o.name[0])) && typeof o.identifier_value === "string" && typeof o.positive_int_value === "bigint" && typeof o.negative_int_value === "bigint" && typeof o.double_value === "number" && (o.string_value instanceof Uint8Array || typeof o.string_value === "string") && typeof o.aggregate_value === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.name) {
            exports.UninterpretedOption_NamePart.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.identifierValue !== "") {
            writer.uint32(26).string(message.identifierValue);
        }
        if (message.positiveIntValue !== BigInt(0)) {
            writer.uint32(32).uint64(message.positiveIntValue);
        }
        if (message.negativeIntValue !== BigInt(0)) {
            writer.uint32(40).int64(message.negativeIntValue);
        }
        if (message.doubleValue !== 0) {
            writer.uint32(49).double(message.doubleValue);
        }
        if (message.stringValue.length !== 0) {
            writer.uint32(58).bytes(message.stringValue);
        }
        if (message.aggregateValue !== "") {
            writer.uint32(66).string(message.aggregateValue);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUninterpretedOption();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    message.name.push(exports.UninterpretedOption_NamePart.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.identifierValue = reader.string();
                    break;
                case 4:
                    message.positiveIntValue = reader.uint64();
                    break;
                case 5:
                    message.negativeIntValue = reader.int64();
                    break;
                case 6:
                    message.doubleValue = reader.double();
                    break;
                case 7:
                    message.stringValue = reader.bytes();
                    break;
                case 8:
                    message.aggregateValue = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseUninterpretedOption();
        message.name = object.name?.map(e => exports.UninterpretedOption_NamePart.fromPartial(e)) || [];
        message.identifierValue = object.identifierValue ?? "";
        message.positiveIntValue = object.positiveIntValue !== undefined && object.positiveIntValue !== null ? BigInt(object.positiveIntValue.toString()) : BigInt(0);
        message.negativeIntValue = object.negativeIntValue !== undefined && object.negativeIntValue !== null ? BigInt(object.negativeIntValue.toString()) : BigInt(0);
        message.doubleValue = object.doubleValue ?? 0;
        message.stringValue = object.stringValue ?? new Uint8Array();
        message.aggregateValue = object.aggregateValue ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseUninterpretedOption();
        message.name = object.name?.map(e => exports.UninterpretedOption_NamePart.fromAmino(e)) || [];
        if (object.identifier_value !== undefined && object.identifier_value !== null) {
            message.identifierValue = object.identifier_value;
        }
        if (object.positive_int_value !== undefined && object.positive_int_value !== null) {
            message.positiveIntValue = BigInt(object.positive_int_value);
        }
        if (object.negative_int_value !== undefined && object.negative_int_value !== null) {
            message.negativeIntValue = BigInt(object.negative_int_value);
        }
        if (object.double_value !== undefined && object.double_value !== null) {
            message.doubleValue = object.double_value;
        }
        if (object.string_value !== undefined && object.string_value !== null) {
            message.stringValue = (0, helpers_1.bytesFromBase64)(object.string_value);
        }
        if (object.aggregate_value !== undefined && object.aggregate_value !== null) {
            message.aggregateValue = object.aggregate_value;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.name) {
            obj.name = message.name.map(e => e ? exports.UninterpretedOption_NamePart.toAmino(e) : undefined);
        }
        else {
            obj.name = message.name;
        }
        obj.identifier_value = message.identifierValue === "" ? undefined : message.identifierValue;
        obj.positive_int_value = message.positiveIntValue !== BigInt(0) ? message.positiveIntValue.toString() : undefined;
        obj.negative_int_value = message.negativeIntValue !== BigInt(0) ? message.negativeIntValue.toString() : undefined;
        obj.double_value = message.doubleValue === 0 ? undefined : message.doubleValue;
        obj.string_value = message.stringValue ? (0, helpers_1.base64FromBytes)(message.stringValue) : undefined;
        obj.aggregate_value = message.aggregateValue === "" ? undefined : message.aggregateValue;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.UninterpretedOption.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.UninterpretedOption.decode(message.value);
    },
    toProto(message) {
        return exports.UninterpretedOption.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/google.protobuf.UninterpretedOption",
            value: exports.UninterpretedOption.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.UninterpretedOption.typeUrl, exports.UninterpretedOption);
function createBaseUninterpretedOption_NamePart() {
    return {
        namePart: "",
        isExtension: false
    };
}
exports.UninterpretedOption_NamePart = {
    typeUrl: "/google.protobuf.NamePart",
    is(o) {
        return o && (o.$typeUrl === exports.UninterpretedOption_NamePart.typeUrl || typeof o.namePart === "string" && typeof o.isExtension === "boolean");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.UninterpretedOption_NamePart.typeUrl || typeof o.name_part === "string" && typeof o.is_extension === "boolean");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.UninterpretedOption_NamePart.typeUrl || typeof o.name_part === "string" && typeof o.is_extension === "boolean");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.namePart !== "") {
            writer.uint32(10).string(message.namePart);
        }
        if (message.isExtension === true) {
            writer.uint32(16).bool(message.isExtension);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUninterpretedOption_NamePart();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.namePart = reader.string();
                    break;
                case 2:
                    message.isExtension = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseUninterpretedOption_NamePart();
        message.namePart = object.namePart ?? "";
        message.isExtension = object.isExtension ?? false;
        return message;
    },
    fromAmino(object) {
        const message = createBaseUninterpretedOption_NamePart();
        if (object.name_part !== undefined && object.name_part !== null) {
            message.namePart = object.name_part;
        }
        if (object.is_extension !== undefined && object.is_extension !== null) {
            message.isExtension = object.is_extension;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.name_part = message.namePart === "" ? undefined : message.namePart;
        obj.is_extension = message.isExtension === false ? undefined : message.isExtension;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.UninterpretedOption_NamePart.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.UninterpretedOption_NamePart.decode(message.value);
    },
    toProto(message) {
        return exports.UninterpretedOption_NamePart.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/google.protobuf.NamePart",
            value: exports.UninterpretedOption_NamePart.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.UninterpretedOption_NamePart.typeUrl, exports.UninterpretedOption_NamePart);
function createBaseSourceCodeInfo() {
    return {
        location: []
    };
}
exports.SourceCodeInfo = {
    typeUrl: "/google.protobuf.SourceCodeInfo",
    is(o) {
        return o && (o.$typeUrl === exports.SourceCodeInfo.typeUrl || Array.isArray(o.location) && (!o.location.length || exports.SourceCodeInfo_Location.is(o.location[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.SourceCodeInfo.typeUrl || Array.isArray(o.location) && (!o.location.length || exports.SourceCodeInfo_Location.isSDK(o.location[0])));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.SourceCodeInfo.typeUrl || Array.isArray(o.location) && (!o.location.length || exports.SourceCodeInfo_Location.isAmino(o.location[0])));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.location) {
            exports.SourceCodeInfo_Location.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSourceCodeInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.location.push(exports.SourceCodeInfo_Location.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseSourceCodeInfo();
        message.location = object.location?.map(e => exports.SourceCodeInfo_Location.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseSourceCodeInfo();
        message.location = object.location?.map(e => exports.SourceCodeInfo_Location.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.location) {
            obj.location = message.location.map(e => e ? exports.SourceCodeInfo_Location.toAmino(e) : undefined);
        }
        else {
            obj.location = message.location;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.SourceCodeInfo.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.SourceCodeInfo.decode(message.value);
    },
    toProto(message) {
        return exports.SourceCodeInfo.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/google.protobuf.SourceCodeInfo",
            value: exports.SourceCodeInfo.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.SourceCodeInfo.typeUrl, exports.SourceCodeInfo);
function createBaseSourceCodeInfo_Location() {
    return {
        path: [],
        span: [],
        leadingComments: "",
        trailingComments: "",
        leadingDetachedComments: []
    };
}
exports.SourceCodeInfo_Location = {
    typeUrl: "/google.protobuf.Location",
    is(o) {
        return o && (o.$typeUrl === exports.SourceCodeInfo_Location.typeUrl || Array.isArray(o.path) && (!o.path.length || typeof o.path[0] === "number") && Array.isArray(o.span) && (!o.span.length || typeof o.span[0] === "number") && typeof o.leadingComments === "string" && typeof o.trailingComments === "string" && Array.isArray(o.leadingDetachedComments) && (!o.leadingDetachedComments.length || typeof o.leadingDetachedComments[0] === "string"));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.SourceCodeInfo_Location.typeUrl || Array.isArray(o.path) && (!o.path.length || typeof o.path[0] === "number") && Array.isArray(o.span) && (!o.span.length || typeof o.span[0] === "number") && typeof o.leading_comments === "string" && typeof o.trailing_comments === "string" && Array.isArray(o.leading_detached_comments) && (!o.leading_detached_comments.length || typeof o.leading_detached_comments[0] === "string"));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.SourceCodeInfo_Location.typeUrl || Array.isArray(o.path) && (!o.path.length || typeof o.path[0] === "number") && Array.isArray(o.span) && (!o.span.length || typeof o.span[0] === "number") && typeof o.leading_comments === "string" && typeof o.trailing_comments === "string" && Array.isArray(o.leading_detached_comments) && (!o.leading_detached_comments.length || typeof o.leading_detached_comments[0] === "string"));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        writer.uint32(10).fork();
        for (const v of message.path) {
            writer.int32(v);
        }
        writer.ldelim();
        writer.uint32(18).fork();
        for (const v of message.span) {
            writer.int32(v);
        }
        writer.ldelim();
        if (message.leadingComments !== "") {
            writer.uint32(26).string(message.leadingComments);
        }
        if (message.trailingComments !== "") {
            writer.uint32(34).string(message.trailingComments);
        }
        for (const v of message.leadingDetachedComments) {
            writer.uint32(50).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSourceCodeInfo_Location();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.path.push(reader.int32());
                        }
                    }
                    else {
                        message.path.push(reader.int32());
                    }
                    break;
                case 2:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.span.push(reader.int32());
                        }
                    }
                    else {
                        message.span.push(reader.int32());
                    }
                    break;
                case 3:
                    message.leadingComments = reader.string();
                    break;
                case 4:
                    message.trailingComments = reader.string();
                    break;
                case 6:
                    message.leadingDetachedComments.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseSourceCodeInfo_Location();
        message.path = object.path?.map(e => e) || [];
        message.span = object.span?.map(e => e) || [];
        message.leadingComments = object.leadingComments ?? "";
        message.trailingComments = object.trailingComments ?? "";
        message.leadingDetachedComments = object.leadingDetachedComments?.map(e => e) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseSourceCodeInfo_Location();
        message.path = object.path?.map(e => e) || [];
        message.span = object.span?.map(e => e) || [];
        if (object.leading_comments !== undefined && object.leading_comments !== null) {
            message.leadingComments = object.leading_comments;
        }
        if (object.trailing_comments !== undefined && object.trailing_comments !== null) {
            message.trailingComments = object.trailing_comments;
        }
        message.leadingDetachedComments = object.leading_detached_comments?.map(e => e) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.path) {
            obj.path = message.path.map(e => e);
        }
        else {
            obj.path = message.path;
        }
        if (message.span) {
            obj.span = message.span.map(e => e);
        }
        else {
            obj.span = message.span;
        }
        obj.leading_comments = message.leadingComments === "" ? undefined : message.leadingComments;
        obj.trailing_comments = message.trailingComments === "" ? undefined : message.trailingComments;
        if (message.leadingDetachedComments) {
            obj.leading_detached_comments = message.leadingDetachedComments.map(e => e);
        }
        else {
            obj.leading_detached_comments = message.leadingDetachedComments;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.SourceCodeInfo_Location.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.SourceCodeInfo_Location.decode(message.value);
    },
    toProto(message) {
        return exports.SourceCodeInfo_Location.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/google.protobuf.Location",
            value: exports.SourceCodeInfo_Location.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.SourceCodeInfo_Location.typeUrl, exports.SourceCodeInfo_Location);
function createBaseGeneratedCodeInfo() {
    return {
        annotation: []
    };
}
exports.GeneratedCodeInfo = {
    typeUrl: "/google.protobuf.GeneratedCodeInfo",
    is(o) {
        return o && (o.$typeUrl === exports.GeneratedCodeInfo.typeUrl || Array.isArray(o.annotation) && (!o.annotation.length || exports.GeneratedCodeInfo_Annotation.is(o.annotation[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.GeneratedCodeInfo.typeUrl || Array.isArray(o.annotation) && (!o.annotation.length || exports.GeneratedCodeInfo_Annotation.isSDK(o.annotation[0])));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.GeneratedCodeInfo.typeUrl || Array.isArray(o.annotation) && (!o.annotation.length || exports.GeneratedCodeInfo_Annotation.isAmino(o.annotation[0])));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.annotation) {
            exports.GeneratedCodeInfo_Annotation.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGeneratedCodeInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.annotation.push(exports.GeneratedCodeInfo_Annotation.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseGeneratedCodeInfo();
        message.annotation = object.annotation?.map(e => exports.GeneratedCodeInfo_Annotation.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseGeneratedCodeInfo();
        message.annotation = object.annotation?.map(e => exports.GeneratedCodeInfo_Annotation.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.annotation) {
            obj.annotation = message.annotation.map(e => e ? exports.GeneratedCodeInfo_Annotation.toAmino(e) : undefined);
        }
        else {
            obj.annotation = message.annotation;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.GeneratedCodeInfo.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.GeneratedCodeInfo.decode(message.value);
    },
    toProto(message) {
        return exports.GeneratedCodeInfo.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/google.protobuf.GeneratedCodeInfo",
            value: exports.GeneratedCodeInfo.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.GeneratedCodeInfo.typeUrl, exports.GeneratedCodeInfo);
function createBaseGeneratedCodeInfo_Annotation() {
    return {
        path: [],
        sourceFile: "",
        begin: 0,
        end: 0
    };
}
exports.GeneratedCodeInfo_Annotation = {
    typeUrl: "/google.protobuf.Annotation",
    is(o) {
        return o && (o.$typeUrl === exports.GeneratedCodeInfo_Annotation.typeUrl || Array.isArray(o.path) && (!o.path.length || typeof o.path[0] === "number") && typeof o.sourceFile === "string" && typeof o.begin === "number" && typeof o.end === "number");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.GeneratedCodeInfo_Annotation.typeUrl || Array.isArray(o.path) && (!o.path.length || typeof o.path[0] === "number") && typeof o.source_file === "string" && typeof o.begin === "number" && typeof o.end === "number");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.GeneratedCodeInfo_Annotation.typeUrl || Array.isArray(o.path) && (!o.path.length || typeof o.path[0] === "number") && typeof o.source_file === "string" && typeof o.begin === "number" && typeof o.end === "number");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        writer.uint32(10).fork();
        for (const v of message.path) {
            writer.int32(v);
        }
        writer.ldelim();
        if (message.sourceFile !== "") {
            writer.uint32(18).string(message.sourceFile);
        }
        if (message.begin !== 0) {
            writer.uint32(24).int32(message.begin);
        }
        if (message.end !== 0) {
            writer.uint32(32).int32(message.end);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGeneratedCodeInfo_Annotation();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.path.push(reader.int32());
                        }
                    }
                    else {
                        message.path.push(reader.int32());
                    }
                    break;
                case 2:
                    message.sourceFile = reader.string();
                    break;
                case 3:
                    message.begin = reader.int32();
                    break;
                case 4:
                    message.end = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseGeneratedCodeInfo_Annotation();
        message.path = object.path?.map(e => e) || [];
        message.sourceFile = object.sourceFile ?? "";
        message.begin = object.begin ?? 0;
        message.end = object.end ?? 0;
        return message;
    },
    fromAmino(object) {
        const message = createBaseGeneratedCodeInfo_Annotation();
        message.path = object.path?.map(e => e) || [];
        if (object.source_file !== undefined && object.source_file !== null) {
            message.sourceFile = object.source_file;
        }
        if (object.begin !== undefined && object.begin !== null) {
            message.begin = object.begin;
        }
        if (object.end !== undefined && object.end !== null) {
            message.end = object.end;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.path) {
            obj.path = message.path.map(e => e);
        }
        else {
            obj.path = message.path;
        }
        obj.source_file = message.sourceFile === "" ? undefined : message.sourceFile;
        obj.begin = message.begin === 0 ? undefined : message.begin;
        obj.end = message.end === 0 ? undefined : message.end;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.GeneratedCodeInfo_Annotation.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.GeneratedCodeInfo_Annotation.decode(message.value);
    },
    toProto(message) {
        return exports.GeneratedCodeInfo_Annotation.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/google.protobuf.Annotation",
            value: exports.GeneratedCodeInfo_Annotation.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.GeneratedCodeInfo_Annotation.typeUrl, exports.GeneratedCodeInfo_Annotation);

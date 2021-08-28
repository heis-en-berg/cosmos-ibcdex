/* eslint-disable */
import { Reader, util, configure, Writer } from 'protobufjs/minimal';
import * as Long from 'long';
export const protobufPackage = 'heisenberg.interchange.ibcdex';
const baseMsgSendCreatePair = { sender: '', port: '', channelID: '', timeoutTimestamp: 0, sourceDenom: '', targetDenom: '' };
export const MsgSendCreatePair = {
    encode(message, writer = Writer.create()) {
        if (message.sender !== '') {
            writer.uint32(10).string(message.sender);
        }
        if (message.port !== '') {
            writer.uint32(18).string(message.port);
        }
        if (message.channelID !== '') {
            writer.uint32(26).string(message.channelID);
        }
        if (message.timeoutTimestamp !== 0) {
            writer.uint32(32).uint64(message.timeoutTimestamp);
        }
        if (message.sourceDenom !== '') {
            writer.uint32(42).string(message.sourceDenom);
        }
        if (message.targetDenom !== '') {
            writer.uint32(50).string(message.targetDenom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgSendCreatePair };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.port = reader.string();
                    break;
                case 3:
                    message.channelID = reader.string();
                    break;
                case 4:
                    message.timeoutTimestamp = longToNumber(reader.uint64());
                    break;
                case 5:
                    message.sourceDenom = reader.string();
                    break;
                case 6:
                    message.targetDenom = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgSendCreatePair };
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = String(object.sender);
        }
        else {
            message.sender = '';
        }
        if (object.port !== undefined && object.port !== null) {
            message.port = String(object.port);
        }
        else {
            message.port = '';
        }
        if (object.channelID !== undefined && object.channelID !== null) {
            message.channelID = String(object.channelID);
        }
        else {
            message.channelID = '';
        }
        if (object.timeoutTimestamp !== undefined && object.timeoutTimestamp !== null) {
            message.timeoutTimestamp = Number(object.timeoutTimestamp);
        }
        else {
            message.timeoutTimestamp = 0;
        }
        if (object.sourceDenom !== undefined && object.sourceDenom !== null) {
            message.sourceDenom = String(object.sourceDenom);
        }
        else {
            message.sourceDenom = '';
        }
        if (object.targetDenom !== undefined && object.targetDenom !== null) {
            message.targetDenom = String(object.targetDenom);
        }
        else {
            message.targetDenom = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        message.port !== undefined && (obj.port = message.port);
        message.channelID !== undefined && (obj.channelID = message.channelID);
        message.timeoutTimestamp !== undefined && (obj.timeoutTimestamp = message.timeoutTimestamp);
        message.sourceDenom !== undefined && (obj.sourceDenom = message.sourceDenom);
        message.targetDenom !== undefined && (obj.targetDenom = message.targetDenom);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgSendCreatePair };
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        else {
            message.sender = '';
        }
        if (object.port !== undefined && object.port !== null) {
            message.port = object.port;
        }
        else {
            message.port = '';
        }
        if (object.channelID !== undefined && object.channelID !== null) {
            message.channelID = object.channelID;
        }
        else {
            message.channelID = '';
        }
        if (object.timeoutTimestamp !== undefined && object.timeoutTimestamp !== null) {
            message.timeoutTimestamp = object.timeoutTimestamp;
        }
        else {
            message.timeoutTimestamp = 0;
        }
        if (object.sourceDenom !== undefined && object.sourceDenom !== null) {
            message.sourceDenom = object.sourceDenom;
        }
        else {
            message.sourceDenom = '';
        }
        if (object.targetDenom !== undefined && object.targetDenom !== null) {
            message.targetDenom = object.targetDenom;
        }
        else {
            message.targetDenom = '';
        }
        return message;
    }
};
const baseMsgSendCreatePairResponse = {};
export const MsgSendCreatePairResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgSendCreatePairResponse };
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
    fromJSON(_) {
        const message = { ...baseMsgSendCreatePairResponse };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseMsgSendCreatePairResponse };
        return message;
    }
};
export class MsgClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
    }
    SendCreatePair(request) {
        const data = MsgSendCreatePair.encode(request).finish();
        const promise = this.rpc.request('heisenberg.interchange.ibcdex.Msg', 'SendCreatePair', data);
        return promise.then((data) => MsgSendCreatePairResponse.decode(new Reader(data)));
    }
}
var globalThis = (() => {
    if (typeof globalThis !== 'undefined')
        return globalThis;
    if (typeof self !== 'undefined')
        return self;
    if (typeof window !== 'undefined')
        return window;
    if (typeof global !== 'undefined')
        return global;
    throw 'Unable to locate global object';
})();
function longToNumber(long) {
    if (long.gt(Number.MAX_SAFE_INTEGER)) {
        throw new globalThis.Error('Value is larger than Number.MAX_SAFE_INTEGER');
    }
    return long.toNumber();
}
if (util.Long !== Long) {
    util.Long = Long;
    configure();
}
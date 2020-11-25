// source: ibc/applications/transfer/v1/transfer.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var gogoproto_gogo_pb = require('../../../../gogoproto/gogo_pb.js');
goog.object.extend(proto, gogoproto_gogo_pb);
var cosmos_base_v1beta1_coin_pb = require('../../../../cosmos/base/v1beta1/coin_pb.js');
goog.object.extend(proto, cosmos_base_v1beta1_coin_pb);
var ibc_core_client_v1_client_pb = require('../../../../ibc/core/client/v1/client_pb.js');
goog.object.extend(proto, ibc_core_client_v1_client_pb);
goog.exportSymbol('proto.ibc.applications.transfer.v1.DenomTrace', null, global);
goog.exportSymbol('proto.ibc.applications.transfer.v1.FungibleTokenPacketData', null, global);
goog.exportSymbol('proto.ibc.applications.transfer.v1.MsgTransfer', null, global);
goog.exportSymbol('proto.ibc.applications.transfer.v1.Params', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ibc.applications.transfer.v1.MsgTransfer = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ibc.applications.transfer.v1.MsgTransfer, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ibc.applications.transfer.v1.MsgTransfer.displayName = 'proto.ibc.applications.transfer.v1.MsgTransfer';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ibc.applications.transfer.v1.FungibleTokenPacketData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ibc.applications.transfer.v1.FungibleTokenPacketData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ibc.applications.transfer.v1.FungibleTokenPacketData.displayName = 'proto.ibc.applications.transfer.v1.FungibleTokenPacketData';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ibc.applications.transfer.v1.DenomTrace = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ibc.applications.transfer.v1.DenomTrace, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ibc.applications.transfer.v1.DenomTrace.displayName = 'proto.ibc.applications.transfer.v1.DenomTrace';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ibc.applications.transfer.v1.Params = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ibc.applications.transfer.v1.Params, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ibc.applications.transfer.v1.Params.displayName = 'proto.ibc.applications.transfer.v1.Params';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ibc.applications.transfer.v1.MsgTransfer.prototype.toObject = function(opt_includeInstance) {
  return proto.ibc.applications.transfer.v1.MsgTransfer.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ibc.applications.transfer.v1.MsgTransfer} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ibc.applications.transfer.v1.MsgTransfer.toObject = function(includeInstance, msg) {
  var f, obj = {
    sourcePort: jspb.Message.getFieldWithDefault(msg, 1, ""),
    sourceChannel: jspb.Message.getFieldWithDefault(msg, 2, ""),
    token: (f = msg.getToken()) && cosmos_base_v1beta1_coin_pb.Coin.toObject(includeInstance, f),
    sender: jspb.Message.getFieldWithDefault(msg, 4, ""),
    receiver: jspb.Message.getFieldWithDefault(msg, 5, ""),
    timeoutHeight: (f = msg.getTimeoutHeight()) && ibc_core_client_v1_client_pb.Height.toObject(includeInstance, f),
    timeoutTimestamp: jspb.Message.getFieldWithDefault(msg, 7, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ibc.applications.transfer.v1.MsgTransfer}
 */
proto.ibc.applications.transfer.v1.MsgTransfer.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ibc.applications.transfer.v1.MsgTransfer;
  return proto.ibc.applications.transfer.v1.MsgTransfer.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ibc.applications.transfer.v1.MsgTransfer} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ibc.applications.transfer.v1.MsgTransfer}
 */
proto.ibc.applications.transfer.v1.MsgTransfer.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSourcePort(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setSourceChannel(value);
      break;
    case 3:
      var value = new cosmos_base_v1beta1_coin_pb.Coin;
      reader.readMessage(value,cosmos_base_v1beta1_coin_pb.Coin.deserializeBinaryFromReader);
      msg.setToken(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setSender(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setReceiver(value);
      break;
    case 6:
      var value = new ibc_core_client_v1_client_pb.Height;
      reader.readMessage(value,ibc_core_client_v1_client_pb.Height.deserializeBinaryFromReader);
      msg.setTimeoutHeight(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setTimeoutTimestamp(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ibc.applications.transfer.v1.MsgTransfer.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ibc.applications.transfer.v1.MsgTransfer.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ibc.applications.transfer.v1.MsgTransfer} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ibc.applications.transfer.v1.MsgTransfer.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSourcePort();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSourceChannel();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getToken();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      cosmos_base_v1beta1_coin_pb.Coin.serializeBinaryToWriter
    );
  }
  f = message.getSender();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getReceiver();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getTimeoutHeight();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      ibc_core_client_v1_client_pb.Height.serializeBinaryToWriter
    );
  }
  f = message.getTimeoutTimestamp();
  if (f !== 0) {
    writer.writeUint64(
      7,
      f
    );
  }
};


/**
 * optional string source_port = 1;
 * @return {string}
 */
proto.ibc.applications.transfer.v1.MsgTransfer.prototype.getSourcePort = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ibc.applications.transfer.v1.MsgTransfer} returns this
 */
proto.ibc.applications.transfer.v1.MsgTransfer.prototype.setSourcePort = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string source_channel = 2;
 * @return {string}
 */
proto.ibc.applications.transfer.v1.MsgTransfer.prototype.getSourceChannel = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ibc.applications.transfer.v1.MsgTransfer} returns this
 */
proto.ibc.applications.transfer.v1.MsgTransfer.prototype.setSourceChannel = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional cosmos.base.v1beta1.Coin token = 3;
 * @return {?proto.cosmos.base.v1beta1.Coin}
 */
proto.ibc.applications.transfer.v1.MsgTransfer.prototype.getToken = function() {
  return /** @type{?proto.cosmos.base.v1beta1.Coin} */ (
    jspb.Message.getWrapperField(this, cosmos_base_v1beta1_coin_pb.Coin, 3));
};


/**
 * @param {?proto.cosmos.base.v1beta1.Coin|undefined} value
 * @return {!proto.ibc.applications.transfer.v1.MsgTransfer} returns this
*/
proto.ibc.applications.transfer.v1.MsgTransfer.prototype.setToken = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ibc.applications.transfer.v1.MsgTransfer} returns this
 */
proto.ibc.applications.transfer.v1.MsgTransfer.prototype.clearToken = function() {
  return this.setToken(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ibc.applications.transfer.v1.MsgTransfer.prototype.hasToken = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string sender = 4;
 * @return {string}
 */
proto.ibc.applications.transfer.v1.MsgTransfer.prototype.getSender = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.ibc.applications.transfer.v1.MsgTransfer} returns this
 */
proto.ibc.applications.transfer.v1.MsgTransfer.prototype.setSender = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string receiver = 5;
 * @return {string}
 */
proto.ibc.applications.transfer.v1.MsgTransfer.prototype.getReceiver = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.ibc.applications.transfer.v1.MsgTransfer} returns this
 */
proto.ibc.applications.transfer.v1.MsgTransfer.prototype.setReceiver = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional ibc.core.client.v1.Height timeout_height = 6;
 * @return {?proto.ibc.core.client.v1.Height}
 */
proto.ibc.applications.transfer.v1.MsgTransfer.prototype.getTimeoutHeight = function() {
  return /** @type{?proto.ibc.core.client.v1.Height} */ (
    jspb.Message.getWrapperField(this, ibc_core_client_v1_client_pb.Height, 6));
};


/**
 * @param {?proto.ibc.core.client.v1.Height|undefined} value
 * @return {!proto.ibc.applications.transfer.v1.MsgTransfer} returns this
*/
proto.ibc.applications.transfer.v1.MsgTransfer.prototype.setTimeoutHeight = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ibc.applications.transfer.v1.MsgTransfer} returns this
 */
proto.ibc.applications.transfer.v1.MsgTransfer.prototype.clearTimeoutHeight = function() {
  return this.setTimeoutHeight(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ibc.applications.transfer.v1.MsgTransfer.prototype.hasTimeoutHeight = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional uint64 timeout_timestamp = 7;
 * @return {number}
 */
proto.ibc.applications.transfer.v1.MsgTransfer.prototype.getTimeoutTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.ibc.applications.transfer.v1.MsgTransfer} returns this
 */
proto.ibc.applications.transfer.v1.MsgTransfer.prototype.setTimeoutTimestamp = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ibc.applications.transfer.v1.FungibleTokenPacketData.prototype.toObject = function(opt_includeInstance) {
  return proto.ibc.applications.transfer.v1.FungibleTokenPacketData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ibc.applications.transfer.v1.FungibleTokenPacketData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ibc.applications.transfer.v1.FungibleTokenPacketData.toObject = function(includeInstance, msg) {
  var f, obj = {
    denom: jspb.Message.getFieldWithDefault(msg, 1, ""),
    amount: jspb.Message.getFieldWithDefault(msg, 2, 0),
    sender: jspb.Message.getFieldWithDefault(msg, 3, ""),
    receiver: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ibc.applications.transfer.v1.FungibleTokenPacketData}
 */
proto.ibc.applications.transfer.v1.FungibleTokenPacketData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ibc.applications.transfer.v1.FungibleTokenPacketData;
  return proto.ibc.applications.transfer.v1.FungibleTokenPacketData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ibc.applications.transfer.v1.FungibleTokenPacketData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ibc.applications.transfer.v1.FungibleTokenPacketData}
 */
proto.ibc.applications.transfer.v1.FungibleTokenPacketData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setDenom(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setAmount(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setSender(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setReceiver(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ibc.applications.transfer.v1.FungibleTokenPacketData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ibc.applications.transfer.v1.FungibleTokenPacketData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ibc.applications.transfer.v1.FungibleTokenPacketData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ibc.applications.transfer.v1.FungibleTokenPacketData.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDenom();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getAmount();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getSender();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getReceiver();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional string denom = 1;
 * @return {string}
 */
proto.ibc.applications.transfer.v1.FungibleTokenPacketData.prototype.getDenom = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ibc.applications.transfer.v1.FungibleTokenPacketData} returns this
 */
proto.ibc.applications.transfer.v1.FungibleTokenPacketData.prototype.setDenom = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional uint64 amount = 2;
 * @return {number}
 */
proto.ibc.applications.transfer.v1.FungibleTokenPacketData.prototype.getAmount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.ibc.applications.transfer.v1.FungibleTokenPacketData} returns this
 */
proto.ibc.applications.transfer.v1.FungibleTokenPacketData.prototype.setAmount = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string sender = 3;
 * @return {string}
 */
proto.ibc.applications.transfer.v1.FungibleTokenPacketData.prototype.getSender = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.ibc.applications.transfer.v1.FungibleTokenPacketData} returns this
 */
proto.ibc.applications.transfer.v1.FungibleTokenPacketData.prototype.setSender = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string receiver = 4;
 * @return {string}
 */
proto.ibc.applications.transfer.v1.FungibleTokenPacketData.prototype.getReceiver = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.ibc.applications.transfer.v1.FungibleTokenPacketData} returns this
 */
proto.ibc.applications.transfer.v1.FungibleTokenPacketData.prototype.setReceiver = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ibc.applications.transfer.v1.DenomTrace.prototype.toObject = function(opt_includeInstance) {
  return proto.ibc.applications.transfer.v1.DenomTrace.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ibc.applications.transfer.v1.DenomTrace} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ibc.applications.transfer.v1.DenomTrace.toObject = function(includeInstance, msg) {
  var f, obj = {
    path: jspb.Message.getFieldWithDefault(msg, 1, ""),
    baseDenom: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ibc.applications.transfer.v1.DenomTrace}
 */
proto.ibc.applications.transfer.v1.DenomTrace.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ibc.applications.transfer.v1.DenomTrace;
  return proto.ibc.applications.transfer.v1.DenomTrace.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ibc.applications.transfer.v1.DenomTrace} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ibc.applications.transfer.v1.DenomTrace}
 */
proto.ibc.applications.transfer.v1.DenomTrace.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPath(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setBaseDenom(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ibc.applications.transfer.v1.DenomTrace.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ibc.applications.transfer.v1.DenomTrace.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ibc.applications.transfer.v1.DenomTrace} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ibc.applications.transfer.v1.DenomTrace.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPath();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getBaseDenom();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string path = 1;
 * @return {string}
 */
proto.ibc.applications.transfer.v1.DenomTrace.prototype.getPath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ibc.applications.transfer.v1.DenomTrace} returns this
 */
proto.ibc.applications.transfer.v1.DenomTrace.prototype.setPath = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string base_denom = 2;
 * @return {string}
 */
proto.ibc.applications.transfer.v1.DenomTrace.prototype.getBaseDenom = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ibc.applications.transfer.v1.DenomTrace} returns this
 */
proto.ibc.applications.transfer.v1.DenomTrace.prototype.setBaseDenom = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ibc.applications.transfer.v1.Params.prototype.toObject = function(opt_includeInstance) {
  return proto.ibc.applications.transfer.v1.Params.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ibc.applications.transfer.v1.Params} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ibc.applications.transfer.v1.Params.toObject = function(includeInstance, msg) {
  var f, obj = {
    sendEnabled: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
    receiveEnabled: jspb.Message.getBooleanFieldWithDefault(msg, 2, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ibc.applications.transfer.v1.Params}
 */
proto.ibc.applications.transfer.v1.Params.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ibc.applications.transfer.v1.Params;
  return proto.ibc.applications.transfer.v1.Params.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ibc.applications.transfer.v1.Params} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ibc.applications.transfer.v1.Params}
 */
proto.ibc.applications.transfer.v1.Params.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSendEnabled(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setReceiveEnabled(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ibc.applications.transfer.v1.Params.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ibc.applications.transfer.v1.Params.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ibc.applications.transfer.v1.Params} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ibc.applications.transfer.v1.Params.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSendEnabled();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getReceiveEnabled();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * optional bool send_enabled = 1;
 * @return {boolean}
 */
proto.ibc.applications.transfer.v1.Params.prototype.getSendEnabled = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.ibc.applications.transfer.v1.Params} returns this
 */
proto.ibc.applications.transfer.v1.Params.prototype.setSendEnabled = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional bool receive_enabled = 2;
 * @return {boolean}
 */
proto.ibc.applications.transfer.v1.Params.prototype.getReceiveEnabled = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.ibc.applications.transfer.v1.Params} returns this
 */
proto.ibc.applications.transfer.v1.Params.prototype.setReceiveEnabled = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


goog.object.extend(exports, proto.ibc.applications.transfer.v1);

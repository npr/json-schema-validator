const { Core, Schema } = require("@hyperjump/json-schema-core");

require("./draft-04");
require("./draft-06");
require("./draft-07");
require("./draft-2019-09");
require("./draft-2020-XX");


module.exports = {
  add: Schema.add,
  get: Schema.get,
  validate: Core.validate,
  setMetaOutputFormat: Core.setMetaOutputFormat,
  setShouldMetaValidate: Core.setShouldMetaValidate,
  FLAG: Core.FLAG,
  BASIC: Core.BASIC,
  DETAILED: Core.DETAILED,
  VERBOSE: Core.VERBOSE
};


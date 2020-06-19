const { Core, Schema } = require("@hyperjump/json-schema-core");
const keywords = require("./keywords");
const metaSchema = require("../meta/draft/2020-XX/schema");
const coreMetaSchema = require("../meta/draft/2020-XX/meta/core");
const applicatorMetaSchema = require("../meta/draft/2020-XX/meta/applicator");
const validationMetaSchema = require("../meta/draft/2020-XX/meta/validation");
const metaDataMetaSchema = require("../meta/draft/2020-XX/meta/meta-data");
const formatMetaSchema = require("../meta/draft/2020-XX/meta/format");
const contentMetaSchema = require("../meta/draft/2020-XX/meta/content");


const schemaVersion = "https://json-schema.org/draft/2020-XX/schema";

Schema.setConfig(schemaVersion, "baseToken", "$id");
Schema.setConfig(schemaVersion, "embeddedToken", "$id");
Schema.setConfig(schemaVersion, "anchorToken", "$anchor");
Schema.setConfig(schemaVersion, "jsrefToken", "$ref");
Schema.setConfig(schemaVersion, "dynamicJsrefToken", "$dynamicRef");
Schema.setConfig(schemaVersion, "dynamicAnchorToken", "$dynamicAnchor");
Schema.setConfig(schemaVersion, "commentToken", "$comment");
Schema.setConfig(schemaVersion, "vocabularyToken", "$vocabulary");
Schema.setConfig(schemaVersion, "mandatoryVocabularies", ["https://json-schema.org/draft/2020-XX/vocab/core"]);

Schema.add(JSON.parse(metaSchema));

Schema.add(JSON.parse(coreMetaSchema));
Core.defineVocabulary("https://json-schema.org/draft/2020-XX/vocab/core", {
  "validate": keywords.validate,
  "$defs": keywords.definitions,
  "$dynamicRef": keywords.dynamicRef,
  "$ref": keywords.ref
});

Schema.add(JSON.parse(applicatorMetaSchema));
Core.defineVocabulary("https://json-schema.org/draft/2020-XX/vocab/applicator", {
  "additionalItems": keywords.additionalItems6,
  "additionalProperties": keywords.additionalProperties6,
  "allOf": keywords.allOf,
  "anyOf": keywords.anyOf,
  "contains": keywords.containsMinContainsMaxContains,
  "dependentSchemas": keywords.dependentSchemas,
  "if": keywords.ifThenElse,
  "items": keywords.items,
  "not": keywords.not,
  "oneOf": keywords.oneOf,
  "patternProperties": keywords.patternProperties,
  "properties": keywords.properties,
  "propertyNames": keywords.propertyNames,
  "unevaluatedItems": keywords.unevaluatedItems,
  "unevaluatedProperties": keywords.unevaluatedProperties
});

Schema.add(JSON.parse(validationMetaSchema));
Core.defineVocabulary("https://json-schema.org/draft/2020-XX/vocab/validation", {
  "const": keywords.const,
  "dependentRequired": keywords.dependentRequired,
  "enum": keywords.enum,
  "exclusiveMaximum": keywords.exclusiveMaximum,
  "exclusiveMinimum": keywords.exclusiveMinimum,
  "maxItems": keywords.maxItems,
  "maxLength": keywords.maxLength6,
  "maxProperties": keywords.maxProperties,
  "maximum": keywords.maximum,
  "minItems": keywords.minItems,
  "minLength": keywords.minLength6,
  "minProperties": keywords.minProperties,
  "minimum": keywords.minimum,
  "multipleOf": keywords.multipleOf,
  "pattern": keywords.pattern,
  "required": keywords.required,
  "type": keywords.type,
  "uniqueItems": keywords.uniqueItems
});

Schema.add(JSON.parse(metaDataMetaSchema));
Core.defineVocabulary("https://json-schema.org/draft/2020-XX/vocab/meta-data", {
  "default": keywords.metaData,
  "deprecated": keywords.metaData,
  "description": keywords.metaData,
  "examples": keywords.metaData,
  "readOnly": keywords.metaData,
  "title": keywords.metaData,
  "writeOnly": keywords.metaData
});

Schema.add(JSON.parse(formatMetaSchema));

Schema.add(JSON.parse(contentMetaSchema));
Core.defineVocabulary("https://json-schema.org/draft/2020-XX/vocab/content", {
  "contentEncoding": keywords.metaData,
  "contentMediaType": keywords.metaData,
  "contentSchema": keywords.metaData
});

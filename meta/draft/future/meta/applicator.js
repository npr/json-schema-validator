module.exports = `{
    "$id": "https://json-schema.org/draft/future/meta/applicator",
    "$schema": "https://json-schema.org/draft/future/schema",
    "$vocabulary": {
      "https://json-schema.org/draft/future/vocab/applicator": true
    },
    "$dynamicAnchor": "",

    "title": "Applicator vocabulary meta-schema",
    "properties": {
        "items": { "$dynamicRef": "#" },
        "unevaluatedItems": { "$dynamicRef": "#" },
        "prefixItems": { "$ref": "#/$defs/schemaArray" },
        "contains": { "$dynamicRef": "#" },
        "additionalProperties": { "$dynamicRef": "#" },
        "unevaluatedProperties": { "$dynamicRef": "#" },
        "properties": {
            "type": "object",
            "additionalProperties": { "$dynamicRef": "#" },
            "default": {}
        },
        "patternProperties": {
            "type": "object",
            "additionalProperties": { "$dynamicRef": "#" },
            "propertyNames": { "format": "regex" },
            "default": {}
        },
        "dependentSchemas": {
            "type": "object",
            "additionalProperties": {
                "$dynamicRef": "#"
            }
        },
        "propertyNames": { "$dynamicRef": "#" },
        "if": { "$dynamicRef": "#" },
        "then": { "$dynamicRef": "#" },
        "else": { "$dynamicRef": "#" },
        "allOf": { "$ref": "#/$defs/schemaArray" },
        "anyOf": { "$ref": "#/$defs/schemaArray" },
        "oneOf": { "$ref": "#/$defs/schemaArray" },
        "not": { "$dynamicRef": "#" }
    },
    "$defs": {
        "schemaArray": {
            "type": "array",
            "minItems": 1,
            "items": { "$dynamicRef": "#" }
        }
    }
}`;

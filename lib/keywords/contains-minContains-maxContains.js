const { Core, Schema, Instance } = require("@hyperjump/json-schema-core");


const compile = async (schema, ast, parentSchema) => {
  const contains = await Core.compileSchema(schema, ast);

  const minContainsSchema = await Schema.step("minContains", parentSchema);
  const minContains = Schema.typeOf(minContainsSchema, "number") ? Schema.value(minContainsSchema) : 1;

  const maxContainsSchema = await Schema.step("maxContains", parentSchema);
  const maxContains = Schema.typeOf(maxContainsSchema, "number") ? Schema.value(maxContainsSchema) : Number.MAX_SAFE_INTEGER;

  return { contains, minContains, maxContains };
};

const interpret = ({ contains, minContains, maxContains }, instance, ast) => {
  if (!Instance.typeOf(instance, "array")) {
    return true;
  }

  const matches = Instance.reduce((matches, item) => {
    return Core.interpretSchema(contains, item, ast) ? matches + 1 : matches;
  }, 0, instance);
  return matches >= minContains && matches <= maxContains;
};

module.exports = { compile, interpret };

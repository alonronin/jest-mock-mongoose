import m from 'mongoose';

const Schema = m.Schema;
const model = function(name, schema) { return m.model(name, schema) };

const mongoose = {
  Schema,
  model,
  connect() {}
};

export default mongoose;

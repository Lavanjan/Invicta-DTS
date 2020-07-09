const mongoose = require('mongoose');
autoIncrement = require('mongoose-auto-increment');
var connection = mongoose.createConnection("mongodb+srv://lavanjan:lavan1998@invicta-dts.euh5l.mongodb.net/<dbname>?retryWrites=true&w=majority");
autoIncrement.initialize(connection);
const Schema = mongoose.Schema;

const defectsSchema = new Schema({
    defectsId: { type: Number},
    defectsName: { type: String, required: true },
    stepToRecreate: { type: String, required: true },
    type: { type: String, required: true },
    status: { type: String, required: true },
    severity: { type: String, required: true },
    priority: { type: String, required:true },
    enteredBy: { type: String, required:true },
    assignTo: { type: String, required: true },
    foundIn: { type: String, required: true },
    availableIn: { type: String, required:true },
    module: { type: String, required: true },
    subModule: { type: String, required: true }
},{
    timestamps:true,
});
defectsSchema.plugin(autoIncrement.plugin, {
    model: 'defects',
    field: 'defectsId',
    incrementBy: 1,
    startAt: 1
});

const defects = mongoose.model('defects', defectsSchema);

module.exports = defects;
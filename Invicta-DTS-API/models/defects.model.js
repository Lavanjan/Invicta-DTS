const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const defectsSchema = new Schema({
    defectsId: { type: String, required: true },
    defectsName: { type: String, required: true },
    stepToRecreate: { type: String, required: true },
    type: { type: String, required: true },
    status: { type: String, required: true },
    severity: { type: String, required: true },
    priority: { type: String, required:true },
    enteredBy: { type: String, required:true },
    assignTo: { type: String, required: true },
    foundIn: { type: String, required: true },
    availableIn: { type: String, required:true }
},{
    timestamps:true,
});

const defects = mongoose.model('defects', defectsSchema);

module.exports = defects;
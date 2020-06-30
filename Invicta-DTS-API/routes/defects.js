const router = require('express').Router();
let defects = require("./../models/defects.model");

router.route('/').get((req, res) => {
  defects.find()
    .then(defects => res.json(defects))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const defectsId = req.body.defectsId;
  const defectsName = req.body.defectsName;
  const stepToRecreate = req.body.stepToRecreate;
  const type = req.body.type;
  const status = req.body.status;
  const severity = req.body.severity;
  const priority = req.body.priority;
  const enteredBy = req.body.enteredBy;
  const assignTo = req.body.assignTo;
  const foundIn = req.body.foundIn;
  const availableIn = req.body.availableIn;

  const newDefects = new defects({
    defectsId,
    defectsName,
    stepToRecreate,
    type,
    status,
    severity,
    priority,
    enteredBy,
    assignTo,
    foundIn,
    availableIn,
  });
  newDefects
    .save()
    .then(() => res.json("Added Suucessfully"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route('/:id').get((req, res) => {
    defects.findById(req.params.id)
    .then(defects => res.json(defects))
    .catch(err => res.status(400).json('Error' +err));
});

router.route('/:id').delete((req, res)=>{
    defects.findByIdAndDelete(req.params.id)
    .then(()=> res.json('Defects Deleted'))
    .catch(err => res.status(400).json('Error: '+err))
});

router.route('/update/:id').put((req, res) => {
    defects.findById(req.params.id)
    .then(defects => {
        defects.defectsId = req.body.defectsId;
        defects.defectsName = req.body.defectsName;
        defects.stepToRecreate = req.body.stepToRecreate;
        defects.type = req.body.type;
        defects.status = req.body.status;
        defects.severity = req.body.severity;
        defects.priority = req.body.priority;
        defects.enteredBy = req.body.enteredBy;
        defects.assignTo = req.body.assignTo;
        defects.foundIn = req.body.foundIn;
        defects.availableIn = req.body.availableIn;

        defects.save()
        .then(()=> res.json('Defects Updated'))
        .catch(err => res.status(400).json('Error: ' +err));
    })
    .catch(err => res.status(400).json('Error: ' +err));
})

module.exports = router;
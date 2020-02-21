const Skills = require('../models/skill');

module.exports ={
    index,
    show,
    new: newSkills,
    create,
    delete: deleteSkills,
    edit,
    update
};
function index(req, res) {
    res.render('skills/index', {
        skills: Skills.getAll()
    });
};
function show(req, res) {
    res.render('skills/show', {
        skills: Skills.getOne(req.params.id),
        skillsNum: parseInt(req.params.id) + 1
    });
};
function newSkills(req, res) {
    res.render('skills/new')
};
function create(req, res) {
    req.body.aquired = false;
    Skills.create(req.body);
    res.redirect('/skills')
};
function deleteSkills(req, res) {
    Skills.deleteOne(req.params.id);
    res.redirect('/skills')
};
function update(req, res) {
    req.body.aquired = req.body.aquired === 'on';
    Skills.update(req.params.id, req.body);
    res.redirect('/skills');
};
function edit(req, res) {
    res.render('skills/edit', {
        skills: Skills.getOne(req.params.id),
        idx: req.params.id,
    });
}
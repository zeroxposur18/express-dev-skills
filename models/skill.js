const Skills = [
    {skill: 'HTML', aquired: true},
    {skill: 'CSS', aquired: true},
    {skill: 'JavaScript', aquired: true},
    {skill: 'Node', aquired: false},
    {skill: 'Express', aquired: false},
    {skill: 'React', aquired: false},
    {skill: 'GraphQL', aquired: false},
    {skill: 'Python', aquired: true},
    {skill: 'Microsoft C++', aquired: true}
];
module.exports ={
    getAll,
    getOne,
    create,
    deleteOne,
    update
};
function getAll(){
    return Skills;
};
function getOne(id){
    return Skills[id];
};
function create(skill) {
    Skills.push(skill);
};
function deleteOne(id){
    Skills.splice(id, 1);
};
function update(id, skill) {
    Skills.splice(id, 1, skill);
};
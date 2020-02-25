
exports.seed = function(knex) {
  
  return knex('users').insert([

    { username: "qwerty", password: "qwerty"},
    { username: "asdf", password: "asdf"},
    { username: "zxcv", password: "zxcv"},

  ]);
};

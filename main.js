require.config({
  paths: {
    'text': 'text',
    'handlebars' : 'handlebars-v2.0.0'
  }

});

require([
  "mods/mod_ui",
  "users/mod_users", 
  "node_modules/jquery/dist/jquery.min"
  ], 
  function(mod_ui, mod_users, jquery){
    mod_users.initUsers();
    // temporary workaround for add_process and edit_process
    // ideally we could have a json process descriptor and a global process registry

    window.mod_add_process = mod_ui.add_process;
    window.mod_edit_process = mod_ui.edit_process;
  }
);

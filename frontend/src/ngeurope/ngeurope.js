// Create all modules and define dependencies to make sure they exist
// and are loaded in the correct order to satisfy dependency injection
// before all nested files are concatenated by Grunt

// Config
angular.module('ngeurope.config', [])
    .value('ngeurope.config', {
        debug: true
    });

// Modules
angular.module('ngeurope',
    [
        'ngeurope.config'
    ]);

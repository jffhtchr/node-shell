const commands = require('./commands';)


// Output a prompt
process.stdout.write('prompt > ');

// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', function (data) {
   // var pwd = process.argv[1];
    var date = new Date().toString();
    if(data.toString().trim()==='pwd'){
        commands.pwd;
    }
    if(data.toString().trim()==='date'){
        process.stdout.write(date);
    }
  process.stdout.write('\nprompt > ');

});


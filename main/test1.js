var rlsync=require('readline-sync');
var prompt=require('prompt');
var game= new Object();
        game={
            A:'', B:'', C:'', D:'',
            E:'', F:'', G:'', H:'',
            I:''
        }
function tic(pposition)
{
    console.log('\n' +
                ' ' + game.A + ' | ' + game.B + ' | ' + game.C + '\n' +
                ' ---------\n' +
                ' ' + game.D + ' | ' + game.E + ' | ' + game.F + '\n' +
                ' ---------\n' +
                ' ' + game.G + ' | ' + game.H + ' | ' + game.I + '\n');
        if(player=='X')
        {
            var player= rlsync.question(`Your turn player ${player}`,{
                game:true
            });
        }
               
}
    
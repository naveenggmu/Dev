var name1 = prompt('Enter name of first player, you will be red');
var name2 = prompt("Enter name of second player ,you will be black");
var p=1;

var mat =[];
for(var i=0;i<6;i++)
{   
    mat[i]=[];
    for(var j=0;j<7;j++)
    {
        mat[i][j]=0;
    }
}
if (p == 1) {
    $('#chance').text(name1 + 's chance to select');
}
else {
    $('#chance').text(name2 + 's chance to select');
}
$('td').click(function () {
    
    var colIndex = $(this).parent().children().index($(this));
    var rowIndex = $(this).parent().parent().children().index($(this).parent());
    
        // mat[rowIndex][colIndex]=1;
        for(var j=5;j>=0;j--)
        {
            if(mat[j][colIndex]==0)
            {
                
                if(p==1)
                {
                    mat[j][colIndex]=1;
                    var n = "" + j + colIndex;
                    // alert('Painting in '+ n);
                    $("#"+n).css('background-color', 'red');
                    p=0;
                    $('#chance').text(name2 + 's chance to select');

                
                    break;
                }
                else
                {
                    mat[j][colIndex] = 2;
                    var n = "" + j + colIndex;
                    // alert('Painting in ' + n);
                    $("#"+n).css('background-color', 'black');
                    p=1; 
                    $('#chance').text(name1 + 's chance to select');
                    break;
                }
            }
        }
});
for(var i=0;i<6;i++)
{
    for(var j=0;j<4;j++)
    {
        var t=1;
        var q=2;
        var r=3;
        var y=4;
        // alert('Going to loop');
        if ((mat[i][j] == 1)&&(mat[i][j+t] == 1)&&(mat[i][j + q] == 1)&& (mat[i][j + r] == 1)&&(mat[i][j + s] == 1))
        {
            console.log("getting in");
            alert('Player 1 won');
        }
        if ((mat[i][j] == 2) && (mat[i][j + 1] == 2) && (mat[i][j + 2] == 2) && (mat[i][j + 3] == 2) && (mat[i][j + 4] == 2))
        {
            alert('Player 2 won');
            console.log('Getting in 2');
        }

    }
}
$('#chck').click(function(){
    for (var i = 0; i < 6; i++) {
        for (var j = 0; j < 4; j++) {
            var t = 1;
            var q = 2;
            var r = 3;
            var y = 4;
            // alert('Going to loop');
            if ((mat[i][j] == mat[i][j + t] ==mat[i][j + q] ==mat[i][j + r] ==mat[i][j + y] == 1)) {
                console.log("getting in");
                alert('Player 1 won');
            }
            if ((mat[i][j] ==mat[i][j + 1] == mat[i][j + 2] == mat[i][j + 3] == mat[i][j + 4] == 2)) {
                alert('Player 2 won');
                console.log('Getting in 2');
            }

        }
    }
})
  

document.write("Snake Water Gun Game winner  ")

var opt=['SNAKE ','Water ','GUN ']

var selected=opt[Math.floor(Math.random()*opt.length)]

var optselected=selected.toUpperCase()

document.write(optselected)

let user=prompt("Enter the OPTIONS  1:SNAKE  2:WATER 3:GUN ").toUpperCase()
document.write(user)


if (user==='SNAKE'&&optselected==='SNAKE')
{
   
    confirm("Tie")
}
else if (user==='WATER'&&optselected==='WATER')
{
    
    confirm("Tie")
}
else if (user=='GUN'&&optselected=='GUN')
{
    confirm("Tie")
}

else if(user=='SNAKE'&&optselected=='WATER'){
    alert('Won')
}
else if(user=='WATER'&&optselected=='SNAKE')
{
    confirm('COMPUTER  won '+optselected)
}

else if(user='GUN'&&optselected=='SNAKE')
{
    alert('Won')
}


else if (user=='SNAKE'&&optselected=='GUN')
{
    confirm('COMPUTER  won '+optselected)
}


else if(user=='WATER'&&optselected==='GUN')
{
    alert('Won')
}

else if(user=='GUN'&&optselected=='WATER')
{
    confirm('COMPUTER  won '+optselected)
}

else{
    confirm(" user won")
}

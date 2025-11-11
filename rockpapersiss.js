function rps(user,computer){
    if(user===computer){
        console.log('draw'); 
    }

   else  if((user==='rock' && computer==='scissors')||(user==='scissor' && computer==='paper') ||(user==='paper' && computer==='rock'))
    {
        console.log('userwins'); 
    }
        else 
        {
            console.log('computerwins'); 
        }
}
rps('rock','scissors');
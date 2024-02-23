function bat(){
    const userChoiceMessage = 'You Have Chosen Bat';
    let randomNumber  = Math.random() * 3;
    let computer = '';
    if(randomNumber > 0 && randomNumber <= 1){
        computer = 'Bat';
        
    }
    else if(randomNumber > 1 && randomNumber <= 2){
        computer = 'Ball'
    }
    else{
        computer = 'Stump'
    }
    const computerChoiceMessage = `Your computer Chosen ${computer }`;

    let resultMessage;
    if(computer === 'Bat'){
        resultMessage = 'Draw';
    }
    else if(computer === 'Ball'){
        resultMessage = 'User won';
    }
    else{
        resultMessage = 'Computer won';
    }
    alert(`You have chosen Bat. Computer choice is ${computerChoiceMessage} and result is ${resultMessage}`);
}
function ball(){
    const userChoiceMessage = 'You Have Chosen Ball';
    let randomNumber  = Math.random() * 3;
    let computer = '';
    if(randomNumber > 0 && randomNumber <= 1){
        computer = 'Bat';
        
    }
    else if(randomNumber > 1 && randomNumber <= 2){
        computer = 'Ball'

    }
    else{
        computer = 'Stump'      
    }
    const computerChoiceMessage = `Your computer Chosen ${computer }`;

    let resultMessage;
    if(computer === 'Bat'){
        resultMessage = 'computer won';
    }
    else if(computer === 'Ball'){
        resultMessage = 'Draw';
    }
    else{
        resultMessage = 'User won';
    }

    alert(`You have chosen Ball. Computer choice is ${computerChoiceMessage} and result is ${resultMessage}`);
}
function stump(){
    const userChoiceMessage = 'You Have Chosen Stump';
    let randomNumber  = Math.random() * 3;
    let computer = '';
    if(randomNumber > 0 && randomNumber <= 1){
        computer = 'Bat';
        
    }
    else if(randomNumber > 1 && randomNumber <= 2){
        computer = 'Ball'
    }
    else{
        computer = 'Stump'
    }
    const computerChoiceMessage = `Your computer Chosen ${computer }`;

    let resultMessage;
    if(computer === 'Bat'){
        resultMessage = 'User won';
    }
    else if(computer === 'Ball'){
        resultMessage = 'computer won';
    }
    else{
        resultMessage = 'Draw';
    }
    alert(`You have chosen Stump. Computer choice is ${computerChoiceMessage} and result is ${resultMessage}`);
}
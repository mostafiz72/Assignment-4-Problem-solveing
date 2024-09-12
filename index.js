function calculateTax(income, expenses) {
    const profit = income - expenses;
     
    
    if( income < 0 || expenses < 0 || income < expenses || typeof income !== "number" || typeof expenses !== "number"){
        return "Invalid Input"
        
    }
    
    let tax = 0;
    
    tax = profit * .20;
    return tax;
    
}

function sendNotification(email) {

    if (!email.includes("@")) {
        return "Invalid Email";
    }
    
    const [userName, domainName] = email.split("@");

    const notificationMessage = `${userName} sent you an email from ${domainName}`;
    return notificationMessage
    

}

function checkDigitsInName(name) {
    
    if(typeof name !== "string"){
        return "Invalid Input";
    }
    
    const digitPattern = /\d/;
    
    return digitPattern.test(name);
    
}

function calculateFinalScore(obj) {

    if (typeof obj !== "object") {
        return "Invalid Input";
    }


    let totalScore = obj.testScore + obj.schoolGrade;

    if(obj.isFFamily === true){
        totalScore = totalScore + 20;
    }
    
    if(totalScore >=80){
        return true;
    }else{
        return false;
    }
    
}

function  waitingTime(waitingTimes, serialNumber) {

    if(!Array.isArray(waitingTimes) || typeof serialNumber !== "number"){
        return "Invalid Input";
    } 

    let totalNumber = 0;

    for(let i = 0; i < waitingTimes.length; i++){
         totalNumber += waitingTimes[i];
        }

        let totalSerialNumber = serialNumber - waitingTimes.length - 1;
       
        let totalTime = totalNumber / waitingTimes.length;
        
        let totalLength = Math.round(totalTime);

        const totalTimes = totalLength * totalSerialNumber;
        return totalTimes;
      
}

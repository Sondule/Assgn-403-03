function calculate() {
    let discount= document.getElementById("discount");
    console.log(discount);
    let optionClass=document.getElementsByClassName("optionClass");
    //  console.log(optionClass.value,'value');
    let discountindex=discount.selectedIndex;
    console.log(discountindex,'index'); 
    let optionIndex=discount.options[discountindex];
    // console.log(optionIndex,'index');
    let pepole= document.getElementById('pepole').value;
    let billamount=document.getElementById('amount').value;
    let output=document.getElementById('outputdiv');
    // console.log(pepole,'pepole');
    // console.log(billamount,'amount');
    if(pepole!="" && billamount!="" && discountindex!=0){
        output.innerHTML=" ";
        let calculateTip=(billamount*optionIndex.value/100)/pepole;
        console.log(calculateTip.toFixed(2));
        output.innerHTML=`<p>Tip amount</p>
                            <p><span>$</span>${calculateTip.toFixed(2)}</p>
                            <p>each</p>`;
    }
    else{
        output.innerHTML=" ";
        output.innerHTML=`<h1>Plaese enter specific value </h1>`;
    }
}

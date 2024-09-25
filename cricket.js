//page1.1
let Team_A='';
let Team_B='';
let play1='';
let play2='';


let players_A=[{name:'reddy',telephone:'7013001680'}];
console.log(players_A[0].name);
function addPlayers() {
     play1 =document.querySelector('.playerAN').value;
     play2 =document.querySelector('.PlayerAM').value;
    players_A.push({name:play1,telephone:play2});
    console.log(players_A);
    
}
function display() {
    let statement1=''
    let j=1;
    for(let i=0;i<players_A.length;i++){
   statement1+=`<p>${j}.${players_A[i].name} ${players_A[i].telephone}</p>`;
    j++;
    } 
    document.querySelector('.display').innerHTML=statement1;
}


////////////////////////////////////////////////////////////////////////////////////
let selectedOvers =0;
let Overs_decided =0;
function f(){
if (selectedOvers==1){
    Match_type='Limited-Overs';
  
    
let overs=document.querySelector('.overs1');

overs.classList.add('selected');
document.querySelector('.overs3').classList.remove('selected');
document.querySelector('.overs2').classList.remove('selected');
document.querySelector('.overs4').classList.remove('selected');
document.querySelector('.overs5').classList.remove('selected');
}
if (selectedOvers==2){
    Match_type='Box/Turf Cricket';
   
document.querySelector('.overs2').classList.add('selected');
document.querySelector('.overs3').classList.remove('selected');
document.querySelector('.overs1').classList.remove('selected');
document.querySelector('.overs4').classList.remove('selected');
document.querySelector('.overs5').classList.remove('selected');

}
if (selectedOvers===3){
    Match_type='Pair-Cricket';
    
let overs=document.querySelector('.overs3');
overs.classList.add('selected');
document.querySelector('.overs2').classList.remove('selected');
document.querySelector('.overs1').classList.remove('selected');
document.querySelector('.overs4').classList.remove('selected');
document.querySelector('.overs5').classList.remove('selected');
}
if (selectedOvers===4){
    Match_type='Test-Match';
let overs=document.querySelector('.overs4');
overs.classList.add('selected');
document.querySelector('.overs3').classList.remove('selected');
document.querySelector('.overs1').classList.remove('selected');
document.querySelector('.overs2').classList.remove('selected');
document.querySelector('.overs5').classList.remove('selected');
}
if (selectedOvers===5){
    Match_type='The Hundred';
    console.log(Match_type);
    
let overs=document.querySelector('.overs5');
overs.classList.add('selected');
document.querySelector('.overs3').classList.remove('selected');
document.querySelector('.overs1').classList.remove('selected');
document.querySelector('.overs4').classList.remove('selected');
document.querySelector('.overs2').classList.remove('selected');
}


else{
    let overs=document.querySelector('.selected');
    overs.classList.add('overs');  
}
localStorage.setItem('mt',Match_type);
}
let ball_selected='';
let selectedColor=0;
function ballSelection() {
if (selectedColor==1){
document.querySelector('.ball1').classList.add('selected1');
document.querySelector('.ball2').classList.remove('selected1');
document.querySelector('.ball3').classList.remove('selected1');
ball_selected='Tennis-Ball';
console.log(ball_selected);

}
if(selectedColor==2){
document.querySelector('.ball2').classList.add('selected1');
document.querySelector('.ball1').classList.remove('selected1');
document.querySelector('.ball3').classList.remove('selected1');
ball_selected='Leather Ball';

}if(selectedColor==3){
document.querySelector('.ball3').classList.add('selected1');
document.querySelector('.ball2').classList.remove('selected1');
document.querySelector('.ball1').classList.remove('selected1');
ball_selected='Other Ball';
}
localStorage.setItem('ball',ball_selected);
}

let SelectedOvers1=0;
let oversPerBowler=0;
function pickOvers(){
SelectedOvers1=document.querySelector('.totalOvers1').value;
console.log(SelectedOvers1);
localStorage.setItem('totalovers',SelectedOvers1);


}
function Overs_Per_Ballers() {
    oversPerBowler=document.querySelector('.oversPerBaller').value;
    console.log(oversPerBowler)
    localStorage.setItem('opb',oversPerBowler);
}
let date='';
function date_fnc() {
    date = document.querySelector('.date').value;  
    localStorage.setItem('date',date);
}
let umpire_name='';
function umpirename() {
    umpire_name= document.querySelector('.Ump_name').value;
    localStorage.setItem('umpire',umpire_name);
    
}
let Match_type='null';
let powerplay=0;
function power_play() {
    powerplay=document.querySelector('.pwplay').value;
    console.log(powerplay);
    localStorage.setItem('pp',powerplay);
    
}




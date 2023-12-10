

let monitor = document.querySelector('.monitor');

function enter(value){
    monitor.value += value;
}

function remove(){
    monitor.value = '';
}

function sum(){
    try{
        monitor.value = eval(monitor.value);
    }catch (error){
        monitor.value = 'Error';
    }
}
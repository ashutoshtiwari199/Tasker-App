add.click(function () {
    modal.fadeIn();
})

modalCross.click(function () {
    modal.fadeOut();
})

taskdelete.click(function(){
    localStorage.setItem('tasks', JSON.stringify([]));    
    loadData();
})

if (localStorage.getItem('tasks') === null) {
    localStorage.setItem('tasks', JSON.stringify([]));
}

taskDoneButton.click(function () {
    let previousData = JSON.parse(localStorage.getItem('tasks'));
    let newTask = {
        taskName: taskName.val(),
        taskDetails: taskDetails.val()
    }
    previousData.push(newTask);
    localStorage.setItem('tasks', JSON.stringify(previousData));
    modal.fadeOut();
    loadData();
});

function loadData() {
    let data = localStorage.getItem('tasks');
    data = JSON.parse(data);
    console.log(data);
    if (typeof data !== 'undefined' && data.length > 0){
        console.log('chala');        
        let template = ``;
        data.forEach(function (single, id) {
            template += `<div class="task">
            <span class="cross">
                <i onclick=dclick(${id}) class="fa fa-times"></i>
            </span>
            <h5>${single.taskName}</h5>
            <hr>
            <p>${single.taskDetails}</p>
        </div>`;
        })
        $('.tasksContainer').html(template);
    }
    else{
        $('.tasksContainer').html('<small>No Tasks Added Till Now<small>');
    }
}

function dclick(idClicked){
    let previousData = JSON.parse(localStorage.getItem('tasks'));
    let newTaskList = [];
    previousData.forEach(function(task, id){
        if(idClicked !== id) newTaskList.push(task);
    })
    localStorage.setItem('tasks', JSON.stringify(newTaskList));
    loadData();
}

loadData();
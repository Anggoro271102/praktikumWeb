const activityInput = document.getElementById('activityInput');
const addButton = document.getElementById('addButton');
const listActivity = document.getElementById('listActivity');
let activities = [];

addButton.addEventListener('click', (e) => {
    e.preventDefault(); 
    const newActivity = activityInput.value;
    if (newActivity) {
        activities.push(newActivity);
        activityInput.value = '';
        renderActivities();
    }
});

function renderActivities() {
    listActivity.innerHTML = '';

    activities.forEach((activity, index) => {
        const activityItem = document.createElement('div');
        activityItem.className = 'activityItem';

        const activityText = document.createElement('span');
        activityText.innerText = activity;

        const actionButtons = document.createElement('div');
        actionButtons.className = 'actionButtons';

        const editButton = document.createElement('button');
        editButton.className = 'editButton';
        editButton.innerText = 'Edit';
        editButton.addEventListener('click', () => {
            const updatedActivity = prompt('Edit activity:', activity);
            if (updatedActivity !== null) {
                activities[index] = updatedActivity;
                renderActivities();
            }
        });

        const deleteButton = document.createElement('button');
        deleteButton.className = 'deleteButton';
        deleteButton.innerText = 'Delete';
        deleteButton.addEventListener('click', () => {
            activities.splice(index, 1);
            renderActivities();
        });

        actionButtons.appendChild(editButton); 
        actionButtons.appendChild(deleteButton); 

        activityItem.appendChild(activityText);
        activityItem.appendChild(actionButtons);

        listActivity.appendChild(activityItem);
    });
}

renderActivities();

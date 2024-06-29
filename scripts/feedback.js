const options = [
    { value: '', text: 'Select', disabled: true, selected: true },
    { value: 'Always', text: 'Always' },
    { value: 'Mostly', text: 'Mostly' },
    { value: 'Sometime', text: 'Sometime' },
    { value: 'Few time', text: 'Few time' },
    { value: 'Never', text: 'Never' },
    { value: 'NA', text: 'NA' }
];
const opinions = [
    { id: 1, question: 'Library staff treat me fairly and without discrimination.' },
    { id: 2, question: 'Library staff are professional in their dealings with me.' },
    { id: 3, question: 'Library staff are friendly.' },
    { id: 4, question: 'Library staff take an interest in me and my needs.' },
    { id: 5, question: 'Library staff give my enquiries appropriate time and attention.' },
    { id: 6, question: 'Library staff provide accurate answers.' },
    { id: 7, question: 'Library staff respond clearly and accurately to enquiries.' },
    { id: 8, question: 'Library staff respond in a timely manner.' },
    { id: 9, question: 'Library staff are difficult to approach.' },
    { id: 10, question: 'How often do you use the Reading Room.' },
    { id: 11, question: 'Do you find the environment of the reading room convenient for study.' },
    { id: 12, question: 'How long do you usually stay in the reading room.' }
];

const formContainer = document.querySelector('.opinions_container');



opinions.forEach((opinion)=>{
        const div = document.createElement('li');
        div.className = 'mb-6 ';

        const label = document.createElement('label');
        label.className = 'block text-gray-700';
        label.textContent = `    ${opinion.question}`;
        div.appendChild(label);


        const select = document.createElement('select');
        select.className = 'block h-9 w-full mt-4 border-gray-300 rounded-md shadow-sm bg-blue-50';
        select.id = `question-${opinion.id}`;
        select.required = true;

        options.forEach(option => {
            const optionElement = document.createElement('option');
            optionElement.value = option.value;
            optionElement.textContent = option.text;
            if (option.disabled) optionElement.disabled = true;
            if (option.selected) optionElement.selected = true;
            select.appendChild(optionElement);
        });

        div.appendChild(select);
        formContainer.appendChild(div);
})
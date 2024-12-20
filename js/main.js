fetch('./person/list.json')
    .then(response => response.json())
    .then(data => {
        const personList = document.getElementById('app');
        data.forEach(person => {
            const personDiv = document.createElement('div');
            personDiv.className = 'person';

            const personImage = document.createElement('img');
            personImage.src = 'src/img/person.png'; // 设置统一的图像

            const personName = document.createElement('div');
            personName.className = 'person-name';
            personName.textContent = person.name;

            const personLink = document.createElement('a');
            personLink.href = person.file;
            personLink.className = 'person-link';

            const linkImage = document.createElement('img');
            linkImage.src = 'src/img/go.png'; // 设置跳转的图标

            personLink.appendChild(linkImage);
            personDiv.appendChild(personImage);
            personDiv.appendChild(personName);
            personDiv.appendChild(personLink);

            personList.appendChild(personDiv);
        });
    })
    .catch(error => console.error('Error loading JSON:', error));